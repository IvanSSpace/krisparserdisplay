import React, { useState, useEffect } from 'react';
import './App.css';

// Импортируем все JSON-файлы
const jsonFiles = {
  antaliya_arenda: require('./messagesFromChatsV3/antaliya_arenda.json'),
  AntalyaNedvizhka: require('./messagesFromChatsV3/AntalyaNedvizhka.json'),
  cancun_expats: require('./messagesFromChatsV3/cancun_expats.json'),
  Cancun_Go: require('./messagesFromChatsV3/Cancun_Go.json'),
  chatinNJ: require('./messagesFromChatsV3/chatinNJ.json'),
  colive_beograd: require('./messagesFromChatsV3/colive_beograd.json'),
  floridaarenda: require('./messagesFromChatsV3/floridaarenda.json'),
  FloridaWorld: require('./messagesFromChatsV3/FloridaWorld.json'),
  group_florida: require('./messagesFromChatsV3/group_florida.json'),
  istanbul_channel: require('./messagesFromChatsV3/istanbul_channel.json'),
  kankyn_chat: require('./messagesFromChatsV3/kankyn_chat.json'),
  lissabon_appart: require('./messagesFromChatsV3/lissabon_appart.json'),
  living_zaedno_beo: require('./messagesFromChatsV3/living_zaedno_beo.json'),
  los_angeles_chat_ru: require('./messagesFromChatsV3/los_angeles_chat_ru.json'),
  Mexico_Arenda: require('./messagesFromChatsV3/Mexico_Arenda.json'),
  MIAMICHATRU: require('./messagesFromChatsV3/MIAMICHATRU.json'),
  nashi_v_miami: require('./messagesFromChatsV3/nashi_v_miami.json'),
  portugal_granitsa: require('./messagesFromChatsV3/portugal_granitsa.json'),
  portugal_topchat: require('./messagesFromChatsV3/portugal_topchat.json'),
  porty_appart: require('./messagesFromChatsV3/porty_appart.json'),
  porty_chat: require('./messagesFromChatsV3/porty_chat.json'),
  rental_nyc: require('./messagesFromChatsV3/rental_nyc.json'),
  rentasplaya: require('./messagesFromChatsV3/rentasplaya.json'),
  rentinChicagoChat: require('./messagesFromChatsV3/rentinChicagoChat.json'),
  SanDiegoNomads: require('./messagesFromChatsV3/SanDiegoNomads.json'),
  TexasNomads: require('./messagesFromChatsV3/TexasNomads.json'),
  TURKEY_1CHAT: require('./messagesFromChatsV3/TURKEY_1CHAT.json')
};

function App() {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Создаем список файлов
    setFiles(Object.keys(jsonFiles));
  }, []);

  const handleFileSelect = (fileName) => {
    setSelectedFile(fileName);
    setMessages(jsonFiles[fileName]);
  };

  return (
    <div className="App bg-gray-500 w-full h-screen flex">
      <div className="w-1/4 bg-gray-700 p-4 overflow-auto">
        <h2 className="text-white text-xl mb-4">Чаты</h2>
        <ul>
          {files.map((file) => (
            <li
              key={file}
              className={`text-white cursor-pointer p-2 ${
                selectedFile === file
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'hover:bg-gray-600'
              }`}
              onClick={() => handleFileSelect(file)}
            >
              {file}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-3/4 p-4 overflow-auto">
        {selectedFile ? (
          <>
            <h2 className="text-xl mb-4 text-white">{selectedFile}</h2>
            <ul className=" p-4 rounded-md">
              {messages.map((message, index) => (
                <li key={index} className="mb-2 flex flex-row justify-start gap-7 bg-gray-100 p-4 rounded-md">
                  <strong>{message.username}:</strong> 
                  {message.message}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className='text-white'>Выберите файл для просмотра сообщений</p>
        )}
      </div>
    </div>
  );
}

export default App;
