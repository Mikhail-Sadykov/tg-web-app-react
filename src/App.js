import './App.css';
import {useEffect} from 'react';
const tg = window.Telegram.WebApp;

function App() {

    useEffect(() => {
           tg.ready();
    }, []);


  return (
    <div className="App">
      Начать
        <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
