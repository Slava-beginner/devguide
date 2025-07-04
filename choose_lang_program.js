let currentQuestions = {
    web: 0,
    desktop: 0,
    mobile: 0,
    game: 0,
    ml: 0,
    blockchain: 0
};

const webLanguages = new Set();
const desktopLanguages = new Set();
const mobileLanguages = new Set();
const gameLanguages = new Set();
const mlLanguages = new Set();
const blockchainLanguages = new Set();

const recommendationsByType = {
    web: {
        "HTML": [
            "Семантика: Используйте семантические теги для улучшения доступности и SEO. Например, <section> для разделов, <nav> для навигации.",
            "Адаптивный дизайн: Используйте атрибуты srcset и sizes для изображений, чтобы улучшить загрузку на мобильных устройствах.",
            "Архитектура: Разделяйте HTML на компоненты для упрощения управления и поддержки, особенно в больших проектах."
        ],
        "CSS": [
            "Методологии: Применяйте BEM (Block Element Modifier) для создания понятной структуры классов.",
            "Анимации: Применяйте CSS-анимации и переходы для улучшения пользовательского опыта.",
            "Инструменты: Используйте PostCSS для автопреобразования CSS, оптимизации и сжатия кода."
        ],
        "JavaScript": [
            "Современные стандарты: Применяйте ES6+ для использования новых синтаксических возможностей, таких как стрелочные функции и деструктуризация.",
            "Фреймворки: Используйте React или Vue.js для создания компонентов и управления состоянием приложения.",
            "Тестирование: Внедряйте библиотеки тестирования, такие как Jest или Mocha, для обеспечения качества кода.",
            "Инструменты разработки: Используйте Webpack или Parcel для сборки и оптимизации фронтенд-ресурсов."
        ],
        "PHP": [
            "Фреймворки: Используйте Laravel или Symfony для разработки сложных веб-приложений.",
            "Безопасность: Применяйте валидацию и фильтрацию входящих данных для защиты от SQL-инъекций и XSS.",
            "RESTful API: Создавайте API с использованием PHP для обеспечения взаимодействия с фронтендом.",
            "Тестирование: Используйте PHPUnit для написания модульных тестов и обеспечения качества кода."
        ],
        "SQL": [
            "Оптимизация: Используйте индексы для ускорения запросов, а также анализируйте запросы с помощью EXPLAIN.",
            "Нормализация: Применяйте нормализацию баз данных для уменьшения избыточности данных.",
            "Безопасность: Используйте подготовленные выражения для защиты от SQL-инъекций.",
            "Мониторинг: Используйте инструменты мониторинга баз данных для отслеживания производительности и выявления узких мест."
        ]
    },
    mobile: {
        "Java": [
            "Android SDK: Используйте Android SDK и Android Studio для разработки нативных приложений.",
            "Архитектура: Применяйте архитектурные паттерны (MVP, MVVM) для организации кода и уменьшения связности.",
            "Библиотеки: Используйте популярные библиотеки, такие как Retrofit для работы с сетевыми запросами и Glide для загрузки изображений.",
            "Тестирование: Используйте JUnit и Espresso для написания тестов и обеспечения качества кода."
        ],
        "Kotlin": [
            "Современные функции: Используйте корутины для асинхронного программирования и упрощения работы с потоками данных.",
            "Расширения: Применяйте функции расширения для повышения читаемости и переиспользуемости кода.",
            "Jetpack: Используйте Android Jetpack для упрощения разработки, включая компоненты для навигации и работы с базами данных.",
            "Кросс-платформенность: Рассмотрите использование Kotlin Multiplatform для разработки приложений на нескольких платформах."
        ],
        "Swift": [
            "SwiftUI: Используйте SwiftUI для создания декларативных интерфейсов, упрощая разработку и поддержку.",
            "Core Data: Применяйте Core Data для управления локальным хранилищем данных.",
            "Тестирование: Используйте XCTest для написания модульных тестов и UI-тестов.",
            "Производительность: Оптимизируйте код с помощью инструментов профилирования, таких как Instruments."
        ]
    },
    desktop: {
        "C#": [
            "WPF: Используйте WPF для создания графических интерфейсов с поддержкой MVVM.",
            "Entity Framework: Применяйте Entity Framework для управления базами данных и выполнения миграций.",
            "Синхронизация: Используйте асинхронные операции для повышения отзывчивости интерфейса.",
            "Модули: Разделяйте проект на модули для повышения удобства поддержки и тестирования."
        ],
        "C++": [
            "Qt: Используйте Qt для кросс-платформенной разработки GUI.",
            "Управление памятью: Применяйте RAII для управления ресурсами и предотвращения утечек памяти.",
            "Стандартная библиотека: Используйте STL (Standard Template Library) для работы с контейнерами и алгоритмами.",
            "Профилирование: Используйте инструменты профилирования (Valgrind) для оптимизации производительности."
        ],
        "Python": [
            "Tkinter/PyQt: Используйте Tkinter или PyQt для создания графических интерфейсов.",
            "Модули: Разделяйте код на модули для повышения читаемости и переиспользуемости.",
            "GUI-тестирование: Применяйте инструменты для автоматизации тестирования GUI, такие как Pywinauto.",
            "Пакетирование: Используйте PyInstaller или cx_Freeze для создания исполняемых файлов."
        ],
        "Java": [
            "JavaFX: Используйте JavaFX для создания современных графических интерфейсов.",
            "MVC: Применяйте паттерн MVC для структурирования кода.",
            "Библиотеки: Используйте библиотеки, такие как JFreeChart для построения графиков и диаграмм.",
            "Тестирование: Используйте JUnit для написания тестов и обеспечения качества кода."
        ]
    },
    game: {
        "C++": [
            "Unreal Engine: Используйте Unreal Engine для разработки высококачественных 3D-игр.",
            "Оптимизация: Применяйте оптимизации, такие как использование умных указателей и управление памятью.",
            "Паттерны проектирования: Используйте паттерны проектирования (например, состояние, наблюдатель) для организации игровой логики.",
            "Инструменты: Используйте инструменты профилирования для выявления узких мест в производительности."
        ],
        "C#": [
            "Unity: Используйте Unity для разработки кросс-платформенных игр с поддержкой 2D и 3D.",
            "Компоненты: Применяйте компоненты MonoBehaviour для управления логикой игровых объектов.",
            "Скрипты: Используйте C#-скрипты для создания игровых механик и взаимодействия между объектами.",
            "Тестирование: Используйте NUnit и Unity Test Framework для тестирования игровых компонентов."
        ],
        "Python": [
            "Pygame: Используйте Pygame для создания 2D-игр и прототипирования.",
            "Модули: Разделяйте код на модули для повышения удобства поддержки.",
            "Инструменты: Используйте инструменты, такие как PyInstaller, для упаковки игр в исполняемые файлы.",
            "Тестирование: Применяйте unittest для написания тестов и проверки логики игры."
        ],
        "Java": [
            "LibGDX: Используйте LibGDX для кросс-платформенной разработки игр.",
            "Паттерны проектирования: Применяйте паттерны проектирования для улучшения структуры кода.",
            "Инструменты: Используйте инструменты для контроля версий (Git) и управления проектом.",
            "Тестирование: Используйте JUnit для написания тестов и обеспечения качества кода."
        ]
    },
    ml: {
        "Python": [
            "Библиотеки: Используйте TensorFlow, PyTorch и scikit-learn для разработки моделей.",
            "Обработка данных: Применяйте pandas и NumPy для подготовки и обработки данных.",
            "Визуализация: Используйте Matplotlib и Seaborn для визуализации данных и результатов.",
            "Тестирование: Проводите тестирование моделей на качество и производительность с использованием кросс-валидации."
        ],
        "Java": [
            "Библиотеки: Используйте Weka и Deeplearning4j для разработки моделей машинного обучения.",
            "Интеграция: Разрабатывайте интеграции с системами больших данных, такими как Apache Hadoop и Apache Spark.",
            "Тестирование: Применяйте JUnit для написания тестов и проверки логики алгоритмов.",
            "Производительность: Оптимизируйте код с использованием параллельных потоков и потоковой обработки."
        ],
        "C++": [
            "Библиотеки: Используйте OpenCV для обработки изображений и Dlib для работы с алгоритмами машинного обучения.",
            "Оптимизация: Оптимизируйте алгоритмы и структуры данных для достижения высокой производительности.",
            "Параллельные вычисления: Используйте OpenMP или CUDA для ускорения вычислений.",
            "Тестирование: Проводите тестирование с использованием Google Test для проверки алгоритмов."
        ]
    },
    blockchain: {
        "JavaScript": [
            "Фреймворки: Используйте React или Vue.js для создания интерфейсов dApps.",
            "Web3.js: Применяйте Web3.js для взаимодействия с блокчейном Ethereum.",
            "Безопасность: Следите за безопасностью, используя методы шифрования и защиты от атак.",
            "Тестирование: Используйте Mocha и Chai для написания тестов для смарт-контрактов."
        ],
        "Python": [
            "Библиотеки: Используйте web3.py для взаимодействия с блокчейном Ethereum.",
            "Фреймворки: Применяйте Flask или Django для создания серверной части dApp.",
            "Тестирование: Используйте pytest для написания тестов для серверной логики.",
            "Мониторинг: Используйте инструменты мониторинга для отслеживания состояния dApp и блокчейна."
        ],
        "Java": [
            "Hyperledger: Используйте Hyperledger Fabric для разработки корпоративных блокчейн-решений.",
            "Spring Boot: Применяйте Spring Boot для создания RESTful API для взаимодействия с блокчейном.",
            "Безопасность: Следите за безопасностью, используя SSL/TLS для защиты данных.",
            "Тестирование: Используйте JUnit для написания тестов для бизнес-логики dApp."
        ]
    }
};


function showQuestions(type) {
    // Очищаем множества языков перед началом нового опроса
    webLanguages.clear();
    desktopLanguages.clear();
    mobileLanguages.clear();
    gameLanguages.clear();
    mlLanguages.clear();
    blockchainLanguages.clear();

    document.getElementById("general-question").style.display = "none";
    document.getElementById(type + "-questions").style.display = "block";
    currentQuestions[type] = 0; // Сбросить счетчик текущих вопросов
    displayQuestion(type);
}

function displayQuestion(type) {
    const questions = document.querySelectorAll(`#${type}-questions .question`);
    questions.forEach((q, index) => {
        q.style.display = index === currentQuestions[type] ? "block" : "none";
    });
}

function nextQuestion(type, questionNumber) {
    if (type === 'web') {
        handleWebResponses(questionNumber);
    } else if (type === 'desktop') {
        handleDesktopResponses(questionNumber);
    } else if (type === 'mobile') {
        handleMobileResponses(questionNumber);
    } else if (type === 'game') {
        handleGameResponses(questionNumber);
    } else if (type === 'ml') {
        handleMLResponses(questionNumber);
    } else if (type === 'blockchain') {
        handleBlockchainResponses(questionNumber);
    }

    currentQuestions[type]++;

    const questions = document.querySelectorAll(`#${type}-questions .question`);
    if (currentQuestions[type] < questions.length) {
        displayQuestion(type);
    } else {
        document.querySelectorAll('.questions').forEach(q => q.style.display = "none");
        document.getElementById("result").style.display = "block";
        displayProgrammingLanguages(type);
    }
}

function handleWebResponses(questionNumber) {
    if (questionNumber === 1) {
        const checkboxes = document.querySelectorAll('#web-questions input[type="checkbox"]:checked');
        checkboxes.forEach(input => {
            if (!webLanguages.has(input.value)) { // Проверка на уникальность
                webLanguages.add(input.value);
            }
        });
    } else {
        const radio = document.querySelector(`#web-questions input[type="radio"]:checked`);
        if (radio && !webLanguages.has(radio.value)) { // Проверка на уникальность
            webLanguages.add(radio.value);
        }
    }
}

// Аналогичные изменения для других обработчиков ответов
function handleDesktopResponses(questionNumber) {
    if (questionNumber === 1) {
        const checkboxes = document.querySelectorAll('#desktop-questions input[type="checkbox"]:checked');
        checkboxes.forEach(input => {
            if (!desktopLanguages.has(input.value)) {
                desktopLanguages.add(input.value);
            }
        });
    } else {
        const radio = document.querySelector(`#desktop-questions input[type="radio"]:checked`);
        if (radio && !desktopLanguages.has(radio.value)) {
            desktopLanguages.add(radio.value);
        }
    }
}

function handleMobileResponses(questionNumber) {
    if (questionNumber === 1) {
        const checkboxes = document.querySelectorAll('#mobile-questions input[type="checkbox"]:checked');
        checkboxes.forEach(input => {
            if (!mobileLanguages.has(input.value)) { // Проверка на уникальность
                mobileLanguages.add(input.value);
            }
        });
    } else {
        const radio = document.querySelector(`#mobile-questions input[type="radio"]:checked`);
        if (radio && !mobileLanguages.has(radio.value)) { // Проверка на уникальность
            mobileLanguages.add(radio.value);
        }
    }
}

function handleGameResponses(questionNumber) {
    if (questionNumber === 1) {
        const checkboxes = document.querySelectorAll('#game-questions input[type="checkbox"]:checked');
        checkboxes.forEach(input => {
            if (!gameLanguages.has(input.value)) { // Проверка на уникальность
                gameLanguages.add(input.value);
            }
        });
    } else {
        const radio = document.querySelector(`#game-questions input[type="radio"]:checked`);
        if (radio && !gameLanguages.has(radio.value)) { // Проверка на уникальность
            gameLanguages.add(radio.value);
        }
    }
}

function handleMLResponses(questionNumber) {
    if (questionNumber === 1) {
        const checkboxes = document.querySelectorAll('#ml-questions input[type="checkbox"]:checked');
        checkboxes.forEach(input => {
            if (!mlLanguages.has(input.value)) { // Проверка на уникальность
                mlLanguages.add(input.value);
            }
        });
    } else {
        const radio = document.querySelector(`#ml-questions input[type="radio"]:checked`);
        if (radio && !mlLanguages.has(radio.value)) { // Проверка на уникальность
            mlLanguages.add(radio.value);
        }
    }
}

function handleBlockchainResponses(questionNumber) {
    if (questionNumber === 1) {
        const checkboxes = document.querySelectorAll('#blockchain-questions input[type="checkbox"]:checked');
        checkboxes.forEach(input => {
            if (!blockchainLanguages.has(input.value)) { // Проверка на уникальность
                blockchainLanguages.add(input.value);
            }
        });
    } else {
        const radio = document.querySelector(`#blockchain-questions input[type="radio"]:checked`);
        if (radio && !blockchainLanguages.has(radio.value)) { // Проверка на уникальность
            blockchainLanguages.add(radio.value);
        }
    }
}
function displayProgrammingLanguages(type) {
    let languages = [];
    if (type === 'web') {
        languages = Array.from(webLanguages);
    } else if (type === 'desktop') {
        languages = Array.from(desktopLanguages);
    } else if (type === 'mobile') {
        languages = Array.from(mobileLanguages);
    } else if (type === 'game') {
        languages = Array.from(gameLanguages);
    } else if (type === 'ml') {
        languages = Array.from(mlLanguages);
    } else if (type === 'blockchain') {
        languages = Array.from(blockchainLanguages);
    }
    
    // Удаление дубликатов (хотя Set уже обеспечивает это)
    const uniqueLanguages = [...new Set(languages)];
    document.getElementById("programming-languages").innerText = uniqueLanguages.join(", ") || "Нет подходящих языков.";
  
}

function cancelSurvey() {
    if (confirm("Вы уверены, что хотите выйти?")) {
        window.location.href = "index.html"; // Укажите здесь нужный URL
    }
}

function finishSurvey() {
    window.location.href = "index.html"; // Укажите здесь нужный URL
}