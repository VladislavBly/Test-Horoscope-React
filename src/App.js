import './App.scss';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage';
import DetailHotoscopePage from './Pages/DetailHoroscopePage/DetailHoroscopePage';
import useTelegram from './hooks/useTelegram';


function App() {
  const { t } = useTranslation();

  const cock_lang = localStorage.getItem('lang');
  const {user, lang} = useTelegram();

  const [selectLang, setSelectLang] = useState(false);

  // Установка языка
  useEffect(() => {
    console.log('sss', lang)
    if (cock_lang === 'en'){
      i18n.changeLanguage('en');
    }
    else if(cock_lang === 'ru'){
      i18n.changeLanguage('ru');
    } else{
      i18n.changeLanguage(lang);
      localStorage.setItem('lang', lang);
    
    }    
  }, []);


  return (
    <div className="App">
      <div className='selectLang'></div>
      <Routes>
        <Route index element={<MainPage />}></Route>

        <Route path={'horoscope/:tag'} element={<DetailHotoscopePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
