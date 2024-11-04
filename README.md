# alifAcademyProject6

Проект **alifAcademyProject6** представляет собой учебное задание по верстке веб-страницы с использованием базовых технологий: HTML, CSS и JavaScript. В этом проекте вы научитесь создавать многостраничные веб-сайты с простым функционалом, включая слайдеры, фильтрацию и модальные окна.

## Описание проекта

Проект состоит из **6 страниц**, каждая из которых имеет свой уникальный контент и включает **12 элементов**. В рамках проекта будет разработан функционал для слайдера и фильтрации элементов, а также реализованы страницы для входа и регистрации с модальными окнами.

### Структура страниц

1. **Главная страница (CREATEX)** - основная страница сайта с приветственным контентом и кратким описанием.
2. **About Us** - страница с информацией о компании или проекте.
3. **Course** - страница с описанием доступных курсов и программ обучения.
4. **Events** - страница с анонсами предстоящих мероприятий.
5. **Blog** - страница с блогом или новостями.
6. **Contacts** - страница с контактной информацией и формой обратной связи.

### Структура проекта

Проект организован с использованием папок `public` и `src` для разделения статических ресурсов и исходного кода.

alifAcademyProject6/
├── public/
│ └── index.html # Главный HTML файл, точка входа в приложение
│
├── src/
│ ├── components/ # Компоненты для каждой страницы
│ │ ├── Home.js # Компонент главной страницы (CREATEX)
│ │ ├── AboutUs.js # Компонент About Us
│ │ ├── Course.js # Компонент Course
│ │ ├── Events.js # Компонент Events
│ │ ├── Blog.js # Компонент Blog
│ │ └── Contacts.js # Компонент Contacts
│ │
│ ├── shared/ # Общие ресурсы для всего проекта
│ │ ├── icons/ # Иконки
│ │ ├── images/ # Изображения
│ │ └── modules/ # Модули, используемые в проекте (например, модальные окна, слайдеры)
│ │
│ ├── css/
│ │ └── styles.css # Основные стили
│ │
│ └── js/
│ └── main.js # Основной JavaScript файл

### Функциональные требования

Слайдер - На главной странице будет реализован слайдер для демонстрации нескольких элементов или изображений.
Фильтрация - На странице с курсами будет доступен функционал для фильтрации элементов по заданным параметрам.
Модальные окна - Страницы для входа и регистрации будут реализованы в виде модальных окон, которые открываются поверх текущей страницы.

Без адаптации - Проект не требует адаптации для мобильных устройств, поэтому фокус будет сделан на настольной версии.

### Используемые технологии

HTML - для разметки страниц.
CSS - для стилизации интерфейса.
JavaScript - для реализации интерактивного функционала, такого как модальные окна, слайдер и фильтрация.

### Установка и запуск

Склонируйте репозиторий:

git clone https://github.com/your-username/alifAcademyProject6.git
Откройте файл public/index.html в браузере.

### Ожидаемые результаты

Понимание основ HTML и CSS - создание структурированной и стилизованной страницы.
Работа с JavaScript - освоение создания простых слайдеров, модальных окон и фильтрации.
Создание многократно используемых компонентов - за счет написания чистого и логичного кода.

### Примечания

- Убедитесь, что файлы в `src/shared` организованы и четко разделены, чтобы упростить доступ к изображениям и иконкам.
- Обновите ссылку на репозиторий GitHub, если вы публикуете проект онлайн.
