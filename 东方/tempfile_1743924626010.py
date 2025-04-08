import numpy as np
import pandas as pd
import talib as ta
import yfinance as yf
from alpha_vantage.timeseries import TimeSeries
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
from sklearn.preprocessing import MinMaxScaler
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense
from scipy import stats
import plotly.graph_objs as go
from plotly.subplots import make_subplots
import warnings
warnings.filterwarnings('ignore')

class AdvancedTechnicalAnalysis:
    def __init__(self, symbol, start_date, end_date):
        self.symbol = symbol
        self.start = start_date
        self.end = end_date
        self.df = self._fetch_multisource_data()
        self._clean_data()
        
    def _fetch_multisource_data(self):
        """混合数据源获取"""
        # Yahoo Finance
        yf_data = yf.download(self.symbol, self.start, self.end)
        
        # Alpha Vantage
        ts = TimeSeries(key='YOUR_API_KEY', output_format='pandas')
        av_data, _ = ts.get_daily_adjusted(self.symbol, outputsize='full')
        av_data = av_data.loc[self.start:self.end]
        
        # 数据融合
        combined = pd.concat([yf_data, av_data], axis=1)
        combined = combined.loc[:,~combined.columns.duplicated()]
        return combined[['Open', 'High', 'Low', 'Close', 'Volume']]

    def _clean_data(self):
        """高级数据清洗"""
        # 处理缺失值
        self.df = self.df.interpolate(method='time').ffill().bfill()
        
        # 异常值检测 (使用Z-score)
        z_scores = stats.zscore(self.df)
        self.df = self.df[(z_scores < 3).all(axis=1)]
        
        # 数据平滑 (Savitzky-Golay滤波器)
        for col in self.df.columns:
            self.df[col] = savgol_filter(self.df[col], window_length=21, polyorder=2)

    def calculate_indicators(self):
        """复合技术指标计算"""
        # TA-Lib标准指标
        self.df['MA_20'] = ta.SMA(self.df['Close'], timeperiod=20)
        self.df['RSI_14'] = ta.RSI(self.df['Close'], timeperiod=14)
        self.df['MACD'], self.df['MACD_signal'], _ = ta.MACD(self.df['Close'])
        self.df['BB_upper'], self.df['BB_middle'], self.df['BB_lower'] = ta.BBANDS(self.df['Close'])
        self.df['OBV'] = ta.OBV(self.df['Close'], self.df['Volume'])
        
        # 自定义混合指标
        self.df['MA_RSI_Composite'] = self.df['MA_20'] * (self.df['RSI_14']/50)
        self.df['MACD_Histogram'] = self.df['MACD'] - self.df['MACD_signal']
        
        # 波动率指标
        self.df['ATR'] = ta.ATR(self.df['High'], self.df['Low'], self.df['Close'], timeperiod=14)
        self.df['Chaikin_Vol'] = (self.df['High'] - self.df['Low']) / self.df['OBV']
        
        # 机器学习特征
        self._add_ml_features()

    def _add_ml_features(self):
        """生成LSTM预测特征"""
        scaler = MinMaxScaler(feature_range=(0,1))
        scaled_data = scaler.fit_transform(self.df['Close'].values.reshape(-1,1))
        
        X, y = [], []
        for i in range(60, len(scaled_data)):
            X.append(scaled_data[i-60:i, 0])
            y.append(scaled_data[i, 0])
            
        X, y = np.array(X), np.array(y)
        X = np.reshape(X, (X.shape[0], X.shape[1], 1))
        
        # LSTM模型
        model = Sequential()
        model.add(LSTM(units=50, return_sequences=True, input_shape=(X.shape[1], 1)))
        model.add(LSTM(units=50))
        model.add(Dense(1))
        model.compile(optimizer='adam', loss='mean_squared_error')
        model.fit(X, y, epochs=10, batch_size=32, verbose=0)
        
        predictions = model.predict(X)
        self.df['LSTM_Pred'] = np.nan
        self.df.iloc[60:, self.df.columns.get_loc('LSTM_Pred')] = scaler.inverse_transform(predictions)

    def visualize_3d(self):
        """3D可视化"""
        fig = plt.figure(figsize=(20,15))
        ax = fig.add_subplot(111, projection='3d')
        
        x = self.df['MA_20']
        y = self.df['RSI_14']
        z = self.df['Close']
        
        ax.plot(x, y, z, label='Price Trajectory')
        ax.scatter(x[-1], y[-1], z[-1], c='red', s=100, label='Current Position')
        ax.set_xlabel('20D MA')
        ax.set_ylabel('RSI')
        ax.set_zlabel('Price')
        ax.legend()
        plt.title('3D Market Analysis')
        plt.show()

    def interactive_plot(self):
        """交互式可视化"""
        fig = make_subplots(rows=4, cols=1, shared_xaxes=True,
                          vertical_spacing=0.02,
                          subplot_titles=('Price with MA & Bollinger Bands',
                                         'MACD & RSI',
                                         'OBV & Volume',
                                         'LSTM Predictions'))
        
        # 价格图表
        fig.add_trace(go.Candlestick(x=self.df.index,
                                    open=self.df['Open'],
                                    high=self.df['High'],
                                    low=self.df['Low'],
                                    close=self.df['Close'],
                                    name='Price'), row=1, col=1)
        
        fig.add_trace(go.Scatter(x=self.df.index, y=self.df['MA_20'],
                               line=dict(color='blue', width=1),
                               name='20D MA'), row=1, col=1)
        
        # MACD
        fig.add_trace(go.Bar(x=self.df.index, y=self.df['MACD_Histogram'],
                           name='MACD Histogram'), row=2, col=1)
        
        # RSI
        fig.add_trace(go.Scatter(x=self.df.index, y=self.df['RSI_14'],
                               line=dict(color='purple', width=2),
                               name='RSI 14'), row=2, col=1)
        
        # OBV
        fig.add_trace(go.Scatter(x=self.df.index, y=self.df['OBV'],
                               line=dict(color='green', width=2),
                               name='OBV'), row=3, col=1)
        
        # LSTM预测
        fig.add_trace(go.Scatter(x=self.df.index, y=self.df['LSTM_Pred'],
                               line=dict(color='red', width=2),
                               name='LSTM Predictions'), row=4, col=1)
        
        fig.update_layout(height=1200, showlegend=False)
        fig.show()

    def optimize_parameters(self):
        """参数优化"""
        # RSI参数优化
        best_sharpe = -np.inf
        best_period = 14
        
        for period in range(10, 30):
            returns = self.df['Close'].pct_change().dropna()
            rsi = ta.RSI(self.df['Close'], timeperiod=period)
            
            # 生成交易信号
            signals = pd.Series(0, index=rsi.index)
            signals[rsi < 30] = 1  # 超卖
            signals[rsi > 70] = -1 # 超买
            
            strategy_returns = returns * signals.shift(1)
            sharpe_ratio = np.sqrt(252) * strategy_returns.mean() / strategy_returns.std()
            
            if sharpe_ratio > best_sharpe:
                best_sharpe = sharpe_ratio
                best_period = period
                
        print(f"Optimized RSI Period: {best_period} days (Sharpe Ratio: {best_sharpe:.2f})")

if __name__ == "__main__":
    analyzer = AdvancedTechnicalAnalysis('AAPL', '2010-01-01', '2023-12-31')
    analyzer.calculate_indicators()
    analyzer.optimize_parameters()
    analyzer.visualize_3d()
    analyzer.interactive_plot()
