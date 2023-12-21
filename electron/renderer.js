import { ipcRenderer } from "electron";
ipcRenderer.send('messageFromRenderer', 'Данные от рендерера'); // Отправляем сообщение главному процессу
ipcRenderer.on('messageToRenderer', (event, data) => {
    console.log(data); // Выводим полученный ответ от главного процесса
});
// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process unless
// nodeIntegration is set to true in webPreferences.
// Use preload.js to selectively enable features
// needed in the renderer process.
const titleElement = document.getElementById('title');
function speakText() {
    debugger;
    // const text = document.getElementById('spoken-text').textContent
    // ipcRenderer.send('speak', text);
}
if (titleElement) {
    titleElement.addEventListener('mouseover', speakText);
}
