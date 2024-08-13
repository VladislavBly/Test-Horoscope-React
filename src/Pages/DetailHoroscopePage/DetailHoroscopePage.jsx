import './style.scss';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import horoscope_data_obj from '../../horoscopeData';
import useTelegram from '../../hooks/useTelegram';

function DetailHotoscopePage({ tagg }) {
  const { t } = useTranslation();
  let { tag } = useParams();
  const { tg } = useTelegram();
  const navigate = useNavigate();
  const [desp, setDesp] = useState('');
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  // Отслеживание изменений языка
  useEffect(() => {
    
    const handleLanguageChange = (lng) => {
      setCurrentLanguage(lng);
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);

  // Выполнение запроса при изменении языка или тега
  useEffect(() => {
    if (!currentLanguage) return;

 

    // Показать кнопку назад
    tg.BackButton.show();
    tg.BackButton.onClick(() => {navigate(-1)});

    let formData;
    if (currentLanguage === 'ru') {
      formData = { 'sign': tag, 'language': 'original' };
    } else {
      formData = { 'sign': tag, 'language': 'translated' };
    }

    fetch('https://poker247tech.ru/get_horoscope/', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(formData),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
      
        setDesp(data['horoscope']);
      })
      .catch((error) => {
      
      });
  }, [currentLanguage, tag, tagg]);

  return (
    <>
      <div className='horoscopeIMGHolder'>
        <img className='horoscopeIMG' src={horoscope_data_obj[tag]?.img} alt={tag} />
      </div>
      <div className='detailInfoBlock'>
        <p className='detailTitle'>{t(horoscope_data_obj[tag]?.name)}</p>
        <p className='detailDate'>{horoscope_data_obj[tag]?.date}</p>
        <div className='detailInfoBlockk'>
          <p className='horoscope'>{desp}</p>
        </div>
      </div>
    </>
  );
}

export default DetailHotoscopePage;
