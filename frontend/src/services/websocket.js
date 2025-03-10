// let socket;
//
// export function connectWebSocket(onMessage) {
//     socket = new WebSocket('ws://localhost:8080/ws');
//
//     socket.onopen = () => console.log('WebSocket соединение установлено');
//
//     socket.onmessage = (event) => onMessage(event.data);
//
//     socket.onerror = (error) => console.error('WebSocket ошибка:', error);
//
//     socket.onclose = () => console.log('WebSocket соединение закрыто');
// }
//
// export function sendMessage(message) {
//     if (socket && socket.readyState === WebSocket.OPEN) {
//         socket.send(JSON.stringify(message));
//     } else {
//         console.error('WebSocket не подключен');
//     }
// }

// src/services/websocket.js
export function connectWebSocket(callback) {
    console.log('WebSocket подключен (заглушка)');
    setInterval(() => callback(`Test message ${Date.now()}`), 2000);
}

export function sendMessage(message) {
    console.log('Отправлено:', message);
}