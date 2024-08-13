import './App.scss';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { useEffect, useState } from 'react';
import horoscope_data from './horoscopeData';
import useTelegram from './hooks/useTelegram';

function App() {
  const { t } = useTranslation();
  const [horoscope, setHoroscope] = useState([]);

  const {tg, user} = useTelegram();


  const renderHoroscope = () => {
    const listt = horoscope_data.map((item, index) => (
      <div key={index} className='horoscopeBlock'>
        <img className='horoscopeImg' src={item.img} alt={item.name} />
        <p className='horoscopeTitle'>{t(item.name)}</p>
        <p className='horoscopeDesp'>{item.date}</p> 
      </div>
    ));

 
    if (horoscope.length === 0) {
      setHoroscope(listt);
    }
  }
  useEffect(() => {
    tg.ready();
    renderHoroscope()

    
  }, [renderHoroscope, tg]);

  // Установка языка
  useEffect(() => {
    i18n.changeLanguage('uz');
  }, []);

  return (
    <div className="App">
      <div className='TitleBlock'>
        <h1 className='TitleBlockTitle'>
          {t('TitleBlockTitle')} {user}!
        </h1>
        <p className='TitleBlockDesp'>{t('TitleBlockDesp')}</p>
      </div>

      <div className='horoscopeHolderBlock'>
        {horoscope}
      </div>
      
    </div>
  );
}

export default App;
