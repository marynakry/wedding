export type Locale = 'ru' | 'en' | 'ua'

type ProgramItem = { time: string; title: string }

type SiteContent = {
  names: {
    couple: string
  }
  intro: {
    title: string
    line1: string
    line2: string
  }
  venue: {
    sectionTitle: string
    name: string
    address: string
    buttonText: string
  }
  program: {
    sectionTitle: string
    items: ProgramItem[]
  }
  dressCode: {
    title: string
    intro: string
    note: string
    colors: string[]
  }
  wishes: {
    title: string
    message1: string
    message2: string
  }
  rsvp: {
    title: string
    introBeforeDate: string
    deadline: string
    nameLabel: string
    attendanceLegend: string
    attendanceYes: string
    attendanceNo: string
    mainCourseLegend: string
    courseSalmon: string
    courseBeef: string
    courseVegetarian: string
    submitIdle: string
    submitLoading: string
    successMessage: string
    errorMessage: string
    ending: string
  }
}

const dressCodeColors = ['#fee691', '#fdb325', '#fe801a', 'rgb(255 168 97)', 'rgb(232 62 127)', '#fe7b8e', '#fcc2bf', '#a8ac85', '#8b8648']

export const contentByLocale: Record<Locale, SiteContent> = {
  ru: {
    names: {
      couple: 'Максим и Марина'
    },
    intro: {
      title: 'Дорогие друзья и родные',
      line1: 'Мы будем счастливы разделить с вами один из самых важных дней нашей жизни.',
      line2: 'Приглашаем вас стать частью этого особенного момента и отпраздновать начало нашей семейной истории'
    },
    venue: {
      sectionTitle: 'Место проведения',
      name: 'Vila Lanna',
      address: 'V Sadech 1/1, Prague',
      buttonText: 'Посмотреть на карте'
    },
    program: {
      sectionTitle: 'Программа дня',
      items: [
        { time: '14:30', title: 'Сбор гостей' },
        { time: '15:00', title: 'Церемония' },
        { time: '17:00', title: 'Праздничный банкет' },
        { time: '22:00', title: 'Торт' }
      ]
    },
    dressCode: {
      title: 'Дресс-код',
      intro: 'Мы хотим, чтобы этот день был наполнен легкостью и теплом. Будем рады, если вы поддержите атмосферу нашего праздника, выбрав образ в оттенках нашей цветовой палитры',
      note: '',
      colors: dressCodeColors
    },
    wishes: {
      title: 'Пожелания',
      message1: 'Самым ценным подарком для нас станет ваше присутствие в этот день',
      message2: 'Если вы захотите поздравить нас еще и подарком, будем благодарны за вклад в бюджет нашей молодой семьи, который поможет воплотить наши мечты'
    },
    rsvp: {
      title: 'Анкета',
      introBeforeDate: 'Будем благодарны, если вы подтвердите свое присутствие и заполните небольшую анкету до',
      deadline: '15.08.2026',
      nameLabel: 'Ваше имя и фамилия',
      attendanceLegend: 'Будете ли вы на нашем свадебном торжестве?',
      attendanceYes: 'Обязательно буду',
      attendanceNo: 'К сожалению, не получится',
      mainCourseLegend: 'Какое основное блюдо вы предпочитаете?',
      courseSalmon: 'Лосось',
      courseBeef: 'Говядина',
      courseVegetarian: 'Вегетарианское блюдо',
      submitIdle: 'Отправить',
      submitLoading: 'Отправка...',
      successMessage: 'Спасибо! Ответ успешно отправлен.',
      errorMessage: 'Не удалось отправить форму. Попробуйте еще раз.',
      ending: 'С нетерпением ждем нашей встречи и будем счастливы отпраздновать этот день вместе с вами!'
    }
  },
  en: {
    names: {
      couple: 'Maksym & Maryna'
    },
    intro: {
      title: 'Dear family and friends',
      line1: 'We will be truly happy to share one of the most important days of our lives with you.',
      line2: 'We warmly invite you to be part of this special moment and celebrate the beginning of our family story.'
    },
    venue: {
      sectionTitle: 'Venue',
      name: 'Vila Lanna',
      address: 'V Sadech 1/1, Prague',
      buttonText: 'View on map'
    },
    program: {
      sectionTitle: 'Day Program',
      items: [
        { time: '14:30', title: 'Guest Arrival' },
        { time: '15:00', title: 'Ceremony' },
        { time: '17:00', title: 'Wedding Dinner' },
        { time: '22:00', title: 'Cake' }
      ]
    },
    dressCode: {
      title: 'Dress Code',
      intro: 'We want this day to feel light and warm. We would love for you to support the atmosphere of our celebration by choosing an outfit in shades from our color palette.',
      note: '',
      colors: dressCodeColors
    },
    wishes: {
      title: 'Wishes',
      message1: 'Your presence on this day is the most precious gift for us.',
      message2: 'If you would also like to congratulate us with a gift, we would be grateful for a contribution to our young family budget to help bring our dreams to life.'
    },
    rsvp: {
      title: 'RSVP',
      introBeforeDate: 'We would be grateful if you could confirm your attendance and complete this short form by',
      deadline: '15.08.2026',
      nameLabel: 'Your full name',
      attendanceLegend: 'Will you attend our wedding celebration?',
      attendanceYes: 'I will be there',
      attendanceNo: 'Unfortunately, I cannot attend',
      mainCourseLegend: 'Which main course do you prefer?',
      courseSalmon: 'Salmon',
      courseBeef: 'Beef',
      courseVegetarian: 'Vegetarian dish',
      submitIdle: 'Submit',
      submitLoading: 'Sending...',
      successMessage: 'Thank you! Your response has been sent.',
      errorMessage: 'Could not submit the form. Please try again.',
      ending: 'We are looking forward to seeing you and will be happy to celebrate this day together!'
    }
  },
  ua: {
    names: {
      couple: 'Maksym & Maryna'
    },
    intro: {
      title: 'Дорогі рідні та друзі',
      line1: 'Ми будемо щасливі розділити з вами один із найважливіших днів нашого життя.',
      line2: 'Запрошуємо вас стати частиною цього особливого моменту та відсвяткувати початок нашої сімейної історії.'
    },
    venue: {
      sectionTitle: 'Місце проведення',
      name: 'Vila Lanna',
      address: 'V Sadech 1/1, Prague',
      buttonText: 'Переглянути на мапі'
    },
    program: {
      sectionTitle: 'Програма дня',
      items: [
        { time: '14:30', title: 'Збір гостей' },
        { time: '15:00', title: 'Церемонія' },
        { time: '17:00', title: 'Святкова вечеря' },
        { time: '22:00', title: 'Торт' }
      ]
    },
    dressCode: {
      title: 'Дрес-код',
      intro: 'Ми хочемо, щоб цей день був сповнений легкості та тепла. Будемо раді, якщо ви підтримаєте атмосферу нашого свята, обравши образ у відтінках нашої кольорової палітри.',
      note: '',
      colors: dressCodeColors
    },
    wishes: {
      title: 'Побажання',
      message1: 'Найціннішим подарунком для нас буде ваша присутність у цей день.',
      message2: 'Якщо ви також захочете привітати нас подарунком, будемо вдячні за внесок у бюджет нашої молодої сімʼї, який допоможе втілити наші мрії.'
    },
    rsvp: {
      title: 'Анкета',
      introBeforeDate: 'Будемо вдячні, якщо ви підтвердите свою присутність і заповните коротку анкету до',
      deadline: '15.08.2026',
      nameLabel: 'Ваше імʼя та прізвище',
      attendanceLegend: 'Чи будете ви на нашому весільному святкуванні?',
      attendanceYes: 'Обовʼязково буду',
      attendanceNo: 'На жаль, не зможу',
      mainCourseLegend: 'Яку основну страву ви обираєте?',
      courseSalmon: 'Лосось',
      courseBeef: 'Яловичина',
      courseVegetarian: 'Вегетаріанська страва',
      submitIdle: 'Надіслати',
      submitLoading: 'Надсилання...',
      successMessage: 'Дякуємо! Відповідь успішно надіслано.',
      errorMessage: 'Не вдалося надіслати форму. Спробуйте ще раз.',
      ending: 'З нетерпінням чекаємо на зустріч і будемо щасливі відсвяткувати цей день разом із вами!'
    }
  }
}
