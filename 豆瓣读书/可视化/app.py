from flask import Flask, render_template
import pandas as pd
import json
import plotly
import plotly.graph_objs as go
from wordcloud import WordCloud
import numpy as np
from io import BytesIO
import base64
from pyecharts.charts import Radar, Funnel
from pyecharts import options as opts
from pyecharts.globals import ThemeType

app = Flask(__name__)

# 读取 Excel 数据
df = pd.read_excel('douban_data.xlsx')

@app.route('/')
def index():
    # 柱状图
    bar_fig = go.Figure(data=[go.Bar(x=df['title'], y=df['fixedPrice'])])
    bar_graph_json = json.dumps(bar_fig, cls=plotly.utils.PlotlyJSONEncoder)

    # 饼状图
    pie_fig = go.Figure(data=[go.Pie(labels=df['shortName'], values=df['wordCount'])])
    pie_graph_json = json.dumps(pie_fig, cls=plotly.utils.PlotlyJSONEncoder)

    # 折线图
    line_fig = go.Figure(data=[go.Scatter(x=df['title'], y=df['wordCount'], mode='lines+markers')])
    line_graph_json = json.dumps(line_fig, cls=plotly.utils.PlotlyJSONEncoder)

    # 漏斗图
    funnel = (
        Funnel()
        .add("固定价格", [list(z) for z in zip(df['title'], df['fixedPrice'])])
        .set_global_opts(title_opts=opts.TitleOpts(title="漏斗图"))
    )
    funnel_html = funnel.render_embed()

    # 词云
    text = ' '.join(df['abstract'])
    wordcloud = WordCloud(width=800, height=400).generate(text)
    img = BytesIO()
    wordcloud.to_image().save(img, 'PNG')
    img.seek(0)
    wordcloud_url = base64.b64encode(img.getvalue()).decode()

    # 雷达图
    radar = (
        Radar(init_opts=opts.InitOpts(theme=ThemeType.LIGHT))
        .add_schema(
            schema=[
                opts.RadarIndicatorItem(name="标题", max_=100),
                opts.RadarIndicatorItem(name="作者", max_=100),
                opts.RadarIndicatorItem(name="类型", max_=100),
                opts.RadarIndicatorItem(name="价格", max_=100),
                opts.RadarIndicatorItem(name="字数", max_=100),
            ]
        )
        .add(
            series_name="",
            data=[[
                df['title'].count(),
                df['author'].count(),
                df['shortName'].count(),
                df['fixedPrice'].mean(),
                df['wordCount'].mean()
            ]],
            color=["blue"],
        )
        .set_series_opts(label_opts=opts.LabelOpts(is_show=False))
        .set_global_opts(title_opts=opts.TitleOpts(title="雷达图"))
    )
    radar_html = radar.render_embed()

    return render_template('index.html',
                           bar_graph_json=bar_graph_json,
                           pie_graph_json=pie_graph_json,
                           line_graph_json=line_graph_json,
                           funnel_html=funnel_html,
                           wordcloud_url=wordcloud_url,
                           radar_html=radar_html)

if __name__ == '__main__':
    app.run(debug=True)
