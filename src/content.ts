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
    inspirationButton: string
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
      inspirationButton: 'Вдохновение для образов',
      colors: dressCodeColors
    },
    wishes: {
      title: 'Пожелания',
      message1: 'Самым ценным подарком для нас станет ваше присутствие в этот день',
      message2: 'Если вы планируете поздравить нас еще и подарком, будем благодарны за вклад в бюджет нашей молодой семьи, который поможет воплотить наши мечты'
    },
    rsvp: {
      title: 'Анкета',
      introBeforeDate: 'Будем благодарны, если вы подтвердите свое присутствие и заполните небольшую анкету до',
      deadline: '10.08.2026',
      nameLabel: 'Ваше имя и фамилия',
      attendanceLegend: 'Будете ли вы на нашем свадебном торжестве?',
      attendanceYes: 'Обязательно буду',
      attendanceNo: 'К сожалению, не получится',
      mainCourseLegend: 'Какое основное блюдо вы предпочитаете?',
      courseSalmon: 'Лосось (Herb-Crusted Salmon)',
      courseBeef: 'Говядина (Beef Ball Tip Steak)',
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
      title: 'Dear friends',
      line1: 'We would be delighted to share one of the most important days of our lives with you.',
      line2: 'We warmly invite you to be part of this special day and celebrate the beginning of our journey as a family.'
    },
    venue: {
      sectionTitle: 'Location',
      name: 'Vila Lanna',
      address: 'V Sadech 1/1, Prague',
      buttonText: 'View on map'
    },
    program: {
      sectionTitle: 'Schedule',
      items: [
        { time: '14:30', title: 'Guest Arrival' },
        { time: '15:00', title: 'Wedding Ceremony' },
        { time: '17:00', title: 'Wedding Dinner' },
        { time: '22:00', title: 'Cake Cutting' }
      ]
    },
    dressCode: {
      title: 'Dress Code',
      intro: 'We wish for this day to be full of warmth and joy, and we would greatly appreciate it if you could reflect our celebration’s atmosphere by wearing an outfit in our color palette',
      note: '',
      inspirationButton: 'Outfit Inspiration',
      colors: dressCodeColors
    },
    wishes: {
      title: 'Wishes',
      message1: 'Your presence on our special day is the greatest gift we could ask for.',
      message2: 'If you would like to give us a gift, we would be grateful for a contribution toward our future together, helping us bring our dreams to life'
    },
    rsvp: {
      title: 'RSVP',
      introBeforeDate: 'We would truly appreciate it if you could confirm your attendance and complete this short form by',
      deadline: '10.08.2026',
      nameLabel: 'Your full name',
      attendanceLegend: 'Will you be joining us for our wedding celebration?',
      attendanceYes: 'Yes, with pleasure!',
      attendanceNo: 'Unfortunately, I can\'t make it',
      mainCourseLegend: 'Which main course do you prefer?',
      courseSalmon: 'Herb-Crusted Salmon',
      courseBeef: 'Beef Ball Tip Steak',
      courseVegetarian: 'Vegetarian dish',
      submitIdle: 'Submit',
      submitLoading: 'Sending...',
      successMessage: 'Thank you! Your response has been sent.',
      errorMessage: 'Could not submit the form. Please try again.',
      ending: 'We are looking forward to seeing you and will be happy to celebrate this special day together!'
    }
  },
  ua: {
    names: {
      couple: 'Maksym & Maryna'
    },
    intro: {
      title: 'Дорогі рідні та друзі',
      line1: 'Ми будемо щасливі розділити з вами один із найважливіших днів нашого життя.',
      line2: 'Запрошуємо вас стати частиною цієї особливої миті та разом із нами відсвяткувати початок нашої сімейної історії.'
    },
    venue: {
      sectionTitle: 'Місце проведення',
      name: 'Vila Lanna',
      address: 'V Sadech 1/1, Prague',
      buttonText: 'Показати на мапі'
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
      intro: 'Ми хочемо, щоб цей день був сповнений легкості та тепла. Будемо раді, якщо ви підтримаєте атмосферу нашого свята, обравши вбрання у відтінках нашої палітри кольорів',
      note: '',
      inspirationButton: 'Натхнення для образів',
      colors: dressCodeColors
    },
    wishes: {
      title: 'Побажання',
      message1: 'Найціннішим подарунком для нас буде ваша присутність у цей особливий день.',
      message2: 'Якщо ви також плануєте привітати нас подарунком, будемо щиро вдячні за внесок у бюджет нашої молодої сім\'ї, який допоможе здійснити наші мрії'
    },
    rsvp: {
      title: 'Анкета',
      introBeforeDate: 'Щоб ми могли якнайкраще підготуватися до свята, просимо вас підтвердити свою присутність і заповнити коротку анкету до',
      deadline: '10.08.2026',
      nameLabel: 'Ваше імʼя та прізвище',
      attendanceLegend: 'Чи зможете ви бути присутніми на нашому весіллі?',
      attendanceYes: 'Обовʼязково буду',
      attendanceNo: 'На жаль, не зможу',
      mainCourseLegend: 'Якій основній страві ви надаєте перевагу?',
      courseSalmon: 'Лосось (Herb-Crusted Salmon)',
      courseBeef: 'Яловичина (Beef Ball Tip Steak)',
      courseVegetarian: 'Вегетаріанська страва',
      submitIdle: 'Надіслати',
      submitLoading: 'Надсилання...',
      successMessage: 'Дякуємо! Відповідь успішно надіслано.',
      errorMessage: 'Не вдалося надіслати форму. Спробуйте ще раз.',
      ending: 'З нетерпінням чекаємо на зустріч і будемо щасливі розділити цей особливий день разом із вами!'
    }
  }
}
