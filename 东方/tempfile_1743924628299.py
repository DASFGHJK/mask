import pandas as pd
import yfinance as yf
import talib as ta
import matplotlib.pyplot as plt


# 1. 数据获取
def get_stock_data(symbol, start, end):
    """获取股票历史数据"""
    data = yf.download(symbol, start, end)
    return data[['Open', 'High', 'Low', 'Close', 'Volume']]


# 2. 技术指标计算
def calculate_technical_indicators(df):
    """计算常见技术指标"""
    # 移动平均线
    df['MA_20'] = ta.SMA(df['Close'], timeperiod=20)
    df['MA_50'] = ta.SMA(df['Close'], timeperiod=50)

    # 相对强弱指标
    df['RSI_14'] = ta.RSI(df['Close'], timeperiod=14)

    # MACD指标
    df['MACD'], df['MACD_signal'], _ = ta.MACD(df['Close'])

    # 布林带
    df['BB_upper'], df['BB_middle'], df['BB_lower'] = ta.BBANDS(df['Close'])

    return df.dropna()


# 3. 可视化展示
def visualize_indicators(df, symbol):
    """可视化技术指标"""
    plt.figure(figsize=(16, 12))

    # 价格和移动平均线
    plt.subplot(3, 1, 1)
    plt.plot(df['Close'], label='Close Price')
    plt.plot(df['MA_20'], label='20D MA')
    plt.plot(df['MA_50'], label='50D MA')
    plt.title(f'{symbol} Price & Moving Averages')
    plt.legend()

    # RSI
    plt.subplot(3, 1, 2)
    plt.plot(df['RSI_14'], label='RSI 14', color='purple')
    plt.axhline(30, linestyle='--', color='red')
    plt.axhline(70, linestyle='--', color='green')
    plt.title('Relative Strength Index')
    plt.legend()

    # MACD
    plt.subplot(3, 1, 3)
    plt.plot(df['MACD'], label='MACD', color='blue')
    plt.plot(df['MACD_signal'], label='Signal Line', color='orange')
    plt.title('MACD Indicator')
    plt.legend()

    plt.tight_layout()
    plt.show()


# 主程序
if __name__ == "__main__":
    # 参数设置
    symbol = 'AAPL'  # 股票代码
    start_date = '2023-01-01'
    end_date = '2024-01-01'

    # 执行流程
    stock_data = get_stock_data(symbol, start_date, end_date)
    df_with_indicators = calculate_technical_indicators(stock_data)
    visualize_indicators(df_with_indicators, symbol)
