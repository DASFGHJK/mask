import asyncio
import websockets

async def echo(websocket, path):
    try:
        async for message in websocket:
            print(f"messages is {message}")  # 添加空格，使输出更清晰
            jscode = "console.log('xuxubaobao')"
            await websocket.send(jscode)
    except websockets.ConnectionClosed:
        print("客户端连接已关闭")

async def main():
    # 绑定到 0.0.0.0 以支持远程连接
    start_server = await websockets.serve(echo, '127.0.0.1', 8888)
    print("WebSocket 服务器已启动: ws://127.0.0.1:8888")
    await start_server.wait_closed()

# 使用 asyncio.run() 启动事件循环
asyncio.run(main())