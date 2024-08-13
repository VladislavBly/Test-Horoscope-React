import '../../App.scss';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { useEffect, useState } from 'react';
import horoscope_data from '../../horoscopeData';
import useTelegram from '../../hooks/useTelegram';
import { Link } from 'react-router-dom';

function MainPage() {
  const { t } = useTranslation();
  const [horoscope, setHoroscope] = useState([]);
  const [langg, setLang] = useState(localStorage.getItem('lang') || 'ru'); // Начальный язык из localStorage

  const { user } = useTelegram();

  useEffect(() => {
 
    const listt = Object.keys(horoscope_data).map((key, index) => {
      const item = horoscope_data[key];
      return (
        <Link to={'/horoscope/' + item.link} key={index} className='horoscopeBlock'>
          <img className='horoscopeImg' src={item.img} alt={item.name} />
          <p className='horoscopeTitle'>{t(item.name)}</p>
          <p className='horoscopeDesp'>{item.date}</p>
        </Link>
      );
    });
    setHoroscope(listt);
  }, [t, langg]); 

  const changeHandler = () => {
    const newLang = langg === 'ru' ? 'en' : 'ru';
    setLang(newLang);
    localStorage.setItem('lang', newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="App">
      <div className='changeLang' onClick={changeHandler}>
        <span className='changeLangText'>{langg === 'ru' ? 'English' : 'Русский'}</span>
      </div>
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

export default MainPage;
