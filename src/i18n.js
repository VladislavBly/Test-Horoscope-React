import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'TitleBlockTitle': 'Hello',
      'TitleBlockDesp' : 'Select your horscope:',
      'Овен':'Aries',
      'Телец':'Taurus',
      'Близнецы':'Gemini',
      'Рак':'Cancer',
      'Лев':'Leo',
      'Дева':'Virgo',
      'Весы':'Libra',
      'Скорпион':'Scorpio',
      'Стрелец':'Sagittarius',
      'Козерог':'Capricorn',
      'Водолей':'Aquarius',
      'Рыбы':'Pisces',
    },
  },
  ru: {
    translation: {
      'TitleBlockTitle': 'Привет',
      'TitleBlockDesp' : 'Выберите свой гороскоп:',
      'Овен':'Овен',
      'Телец':'Телец',
      'Близнецы':'Близнецы',
      'Рак':'Рак',
      'Лев':'Лев',
      'Дева':'Дева',
      'Весы':'Весы',
      'Скорпион':'Скорпион',
      'Стрелец':'Стрелец',
      'Козерог':'Козерог',
      'Водолей':'Водолей',
      'Рыбы':'Рыбы',
      
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // Важно установить это значение в false
    },
  });

export default i18n;
