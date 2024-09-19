import React, { useState, useEffect } from 'react';
import './App.css';

// Импортируем все JSON-файлы
const jsonFiles = {
  antaliya_arenda: require('./messagesFromChatsV4/antaliya_arenda.json'),
  AntalyaNedvizhka: require('./messagesFromChatsV4/AntalyaNedvizhka.json'),
  cancun_expats: require('./messagesFromChatsV4/cancun_expats.json'),
  Cancun_Go: require('./messagesFromChatsV4/Cancun_Go.json'),
  chatinNJ: require('./messagesFromChatsV4/chatinNJ.json'),
  colive_beograd: require('./messagesFromChatsV4/colive_beograd.json'),
  floridaarenda: require('./messagesFromChatsV4/floridaarenda.json'),
  FloridaWorld: require('./messagesFromChatsV4/FloridaWorld.json'),
  group_florida: require('./messagesFromChatsV4/group_florida.json'),
  istanbul_channel: require('./messagesFromChatsV4/istanbul_channel.json'),
  kankyn_chat: require('./messagesFromChatsV4/kankyn_chat.json'),
  lissabon_appart: require('./messagesFromChatsV4/lissabon_appart.json'),
  living_zaedno_beo: require('./messagesFromChatsV4/living_zaedno_beo.json'),
  los_angeles_chat_ru: require('./messagesFromChatsV4/los_angeles_chat_ru.json'),
  Mexico_Arenda: require('./messagesFromChatsV4/Mexico_Arenda.json'),
  MIAMICHATRU: require('./messagesFromChatsV4/MIAMICHATRU.json'),
  nashi_v_miami: require('./messagesFromChatsV4/nashi_v_miami.json'),
  portugal_granitsa: require('./messagesFromChatsV4/portugal_granitsa.json'),
  portugal_topchat: require('./messagesFromChatsV4/portugal_topchat.json'),
  porty_appart: require('./messagesFromChatsV4/porty_appart.json'),
  porty_chat: require('./messagesFromChatsV4/porty_chat.json'),
  rental_nyc: require('./messagesFromChatsV4/rental_nyc.json'),
  rentasplaya: require('./messagesFromChatsV4/rentasplaya.json'),
  rentinChicagoChat: require('./messagesFromChatsV4/rentinChicagoChat.json'),
  SanDiegoNomads: require('./messagesFromChatsV4/SanDiegoNomads.json'),
  TexasNomads: require('./messagesFromChatsV4/TexasNomads.json'),
  TURKEY_1CHAT: require('./messagesFromChatsV4/TURKEY_1CHAT.json')
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
                  <strong>{message.username}<span className='select-none'>:</span></strong> 
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
