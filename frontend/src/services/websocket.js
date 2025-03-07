let socket;

export function connectWebSocket(onMessage) {
    socket = new WebSocket('ws://localhost:8080/ws');

    socket.onopen = () => console.log('WebSocket соединение установлено');

    socket.onmessage = (event) => onMessage(event.data);

    socket.onerror = (error) => console.error('WebSocket ошибка:', error);

    socket.onclose = () => console.log('WebSocket соединение закрыто');
}

export function sendMessage(message) {
    if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify(message));
    } else {
        console.error('WebSocket не подключен');
    }
}
