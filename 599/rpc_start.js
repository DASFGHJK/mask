ws = new WebSocket('ws://127.0.0.1:8888');

ws.addEventListener('open', function (event) {
    console.log('WebSocket connection established');
    ws.send('1111');
});

ws.addEventListener('error', function (event) {
    console.error('WebSocket error observed:', event);
});

ws.addEventListener('close', function (event) {
    console.log('WebSocket connection closed:', event);
});
