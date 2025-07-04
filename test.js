// Инициализация текущего вопроса и общего результата
let currentQuestionIndex = 0;
let totalScore = 0;
// Объект для хранения ответов
const userAnswers = {};

// Основной массив вопросов
const questions = [
    {
        type: "multiple",
        text: "Какие из следующих языков программирования чаще всего используются для веб-разработки?",
        options: ["Python", "HTML", "C++", "JavaScript"],
        correct: [1, 3],  // HTML и JavaScript
        score: 4
    },
    {
        type: "drag-and-drop",
        text: "Сопоставьте язык программирования с его основным применением.",
        languages: ["Java", "Python", "SQL", "JavaScript", "C++"],
        applications: [
            "Работа с базами данных",
            "Разработка корпоративных приложений",
            "Анализ данных и автоматизация",
            "Добавление интерактивности",
            "Разработка приложений со сложной архитектурой"
        ],
        correct: {
            "Java": "Разработка корпоративных приложений",
            "Python": "Анализ данных и автоматизация",
            "SQL": "Работа с базами данных",
            "JavaScript": "Добавление интерактивности",
            "C++": "Разработка приложений со сложной архитектурой"
        },
        score: 5
    },
    {
        type: "drag-and-drop",
        text: "Сопоставьте язык программирования с подходящим фреймворком или библиотекой.",
        languages: ["JavaScript", "Python", "PHP", "Java"],
        applications: [
            "Django",
            "Laravel",
            "JavaFX",
            "React"
        ],
        correct: {
            "JavaScript": "React",
            "Python": "Django",
            "PHP": "Laravel",
            "Java": "JavaFX"
        },
        score: 5
    },
    {
        type: "multiple",
        text: "Какие языки предпочитают в использовании при создании веб-страницы с базовой структурой, стилизованным дизайном и простой кнопкой для отправки данных?",
        options: ["HTML, CSS, JavaScript", "Python, SQL", "C++, Java", "PHP, Kotlin"],
        correct: [0],  // HTML, CSS, JavaScript
        score: 4
    },
    {
        type: "fill-in",
        text: "Как называется язык, который работает с командами SELECT, INSERT, DELETE?",
        correct: "SQL",
        score: 2
    },
    {
        type: "characteristics",
        text: "Выберите к каждому языку подходящую характеристику.",
        options: ["Kotlin", "Java", "PHP", "C++"],
        matches: [
            "Сложности с отладкой и совместимостью некоторых библиотек",
            "Высокая загрузка памяти при работе с большими проектами",
            "Устаревший синтаксис и проблемы с безопасностью",
            "Высокая сложность синтаксиса, особенно для новичков"
        ],
        correct: [0, 1, 2, 3],
        score: 4
    },
    {
        type: "true-false",
        text: "JavaScript является языком, предназначенным для создания серверных приложений.",
        options: ["Правда", "Ложь"],
        correct: 1,  // Ложь
        score: 1
    },
    {
        type: "fill-in",
        text: "Назовите язык программирования, который используется для написания мобильных приложений помимо Java.",
        correct: "Kotlin",
        score: 5
    },
    {
        type: "image-selection",
        text: "Какой язык программирования используется в следующем фрагменте кода?",
        images: [
            { src: "https://cdn.glitch.global/7c5bfd96-c6cb-4437-8495-9c6685ab23cb/python_example.png?v=1733886380824", correct: "Python" },
            { src: "https://cdn.glitch.global/7c5bfd96-c6cb-4437-8495-9c6685ab23cb/java_example.png?v=1733886371741", correct: "Java" },
            { src: "https://cdn.glitch.global/7c5bfd96-c6cb-4437-8495-9c6685ab23cb/csharp_example.png?v=1733886361610", correct: "C#" }
        ],
        options: ["Python", "Java", "C#"],
        score: 2
    },
    { 
        type: "multiple",
        text: "Что из списка снизу является языком низкого уровня.",
        options: ["Python", "Java", "C++", "PHP"],
        correct: [3],
        score: 4
    },
    {
        type: "true-false",
        text: 'Конструкция "switch" поддерживается всеми языками программирования.',
        options: ["Верно", "Неверно"],
        correct: 1,  // Неверно
        score: 1
    },
    {
        type: "fill-in",
        text: "Этот язык используется для стилизации веб-страниц, изменяя цвета, шрифты и расположение элементов. Какой это язык?",
        correct: "CSS",
        score: 2
    },
    {
        type: "fill-in",
        text: "Какой язык программирования используется для разработки игр с использованием Unity?",
        correct: "C#",
        score: 5
    },
    {
        type: "characteristics",
        text: "Выберите к каждому языку подходящую характеристику.",
        options: ["Python", "C++", "C#", "JavaScript"],
        matches: [
            "Простота синтаксиса, динамическая типизация, но невысокая производительность",
            "Позволяет работать с низкоуровневыми ресурсами, но требует ручного управления памятью",
            "Удобен для разработки Windows-приложений",
            "Асинхронная работа, универсальность для фронтенд- и серверной разработки"
        ],
        correct: [0, 1, 2, 3],
        score: 4
    },
    {
        type: "multiple",
        text: "Какой из следующих недостатков может быть у C#?",
        options: [
            "Высокая производительность",
            "Требования к ресурсам при выполнении",
            "Сложный синтаксис для новичков",
            "Ограниченная поддержка на других платформах"
        ],
        correct: [1, 3],  // Требования к ресурсам и ограниченная поддержка
        score: 4
    },
    {
        type: "true-false",
        text: "Python имеет строгую типизацию.",
        options: ["Верно", "Неверно"],
        correct: 1,  // Неверно
        score: 1
    },
    {
        type: "drag-and-drop",
        text: "Сопоставьте инструменты, использующиеся в C# с их применением.",
        languages: ["Unity", "Xamarin", "WPF"],
        applications: [
            "Создание мобильных приложений",
            "Разработка игр",
            "Создание графических интерфейсов для компьютера"
        ],
        correct: {
            "Unity": "Разработка игр",
            "Xamarin": "Создание мобильных приложений",
            "WPF": "Создание графических интерфейсов для компьютера"
        },
        score: 5
    },
    {
        type: "multiple",
        text: "Какие из следующих преимуществ характеризуют Kotlin?",
        options: [
            "Лаконичный синтаксис",
            "Поддержка многопоточности",
            "Совместимость с Java",
            "Высокая производительность на старых устройствах"
        ],
        correct: [0, 1, 2],  // Лаконичный синтаксис, поддержка многопоточности и совместимость
        score: 4
    },
    {
        type: "fill-in",
        text: "Как называется оператор, который используется для выполнения одного из нескольких блоков кода в зависимости от условия?",
        correct: "if",
        score: 2
    },
    {
        type: "image-selection",
        text: "Какой язык программирования используется в следующем фрагменте кода?",
        images: [
            { src: "https://cdn.glitch.global/7c5bfd96-c6cb-4437-8495-9c6685ab23cb/kotlin.png?v=1733886375135", correct: "Kotlin" },
            { src: "https://cdn.glitch.global/7c5bfd96-c6cb-4437-8495-9c6685ab23cb/sql.png?v=1733886383911", correct: "SQL" },
            { src: "https://cdn.glitch.global/7c5bfd96-c6cb-4437-8495-9c6685ab23cb/php.png?v=1733886377519", correct: "PHP" }
        ],
        options: ["PHP", "Kotlin", "SQL"],
        score: 2
    }
];


// Функция загрузки вопросов
function loadQuestion(index) {
    const question = questions[index];
    const questionText = document.getElementById("question-text");
    const answersContainer = document.getElementById("answers-container");
    questionText.textContent = question.text;
    answersContainer.innerHTML = "";

    switch (question.type) {
        case "multiple":
            question.options.forEach((option, i) => {
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.id = `option-${i}`;
                checkbox.value = i;

                const label = document.createElement("label");
                label.htmlFor = `option-${i}`;
                label.textContent = option;

                answersContainer.appendChild(checkbox);
                answersContainer.appendChild(label);
                answersContainer.appendChild(document.createElement("br"));
            });
            break;

        case "fill-in":
            const input = document.createElement("input");
            input.type = "text";
            input.id = "fill-in-answer";
            input.placeholder = "Введите ответ";
            answersContainer.appendChild(input);
            break;

        case "characteristics":
            question.options.forEach(option => {
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.value = option;
                checkbox.id = option;

                const label = document.createElement("label");
                label.htmlFor = option;
                label.textContent = option;

                answersContainer.appendChild(checkbox);
                answersContainer.appendChild(label);
                answersContainer.appendChild(document.createElement("br"));
            });
            break;

        case "true-false":
            const trueOption = document.createElement("input");
            trueOption.type = "radio";
            trueOption.id = "true-option";
            trueOption.name = "true-false";
            trueOption.value = 1;

            const falseOption = document.createElement("input");
            falseOption.type = "radio";
            falseOption.id = "false-option";
            falseOption.name = "true-false";
            falseOption.value = 0;

            answersContainer.appendChild(trueOption);
            answersContainer.appendChild(document.createElement("label").appendChild(document.createTextNode("Верно")));
            answersContainer.appendChild(document.createElement("br"));
            answersContainer.appendChild(falseOption);
            answersContainer.appendChild(document.createElement("label").appendChild(document.createTextNode("Неверно")));
            answersContainer.appendChild(document.createElement("br"));
            break;

        case "image-selection":
            question.images.forEach((image, i) => {
                const img = document.createElement("img");
                img.src = image.src;
                img.alt = `Пример кода ${i + 1}`;
                img.classList.add("image-option");
                const select = document.createElement("select");
                select.classList.add("styled-select");
                question.options.forEach(option => {
                    const optionElement = document.createElement("option");
                    optionElement.value = option;
                    optionElement.textContent = option;
                    select.appendChild(optionElement);
                });
                select.dataset.correct = image.correct;

                answersContainer.appendChild(img);
                answersContainer.appendChild(select);
            });
            break;

        case "drag-and-drop":
            const list = document.createElement("ul");
            list.id = "drag-list";
            question.options.forEach(option => {
                const listItem = document.createElement("li");
                listItem.textContent = option;
                listItem.draggable = true;

                listItem.addEventListener("dragstart", (event) => {
                    event.dataTransfer.setData("text/plain", option);
                });

                listItem.addEventListener("dragover", (event) => {
                    event.preventDefault();
                });

                listItem.addEventListener("drop", (event) => {
                    event.preventDefault();
                    const data = event.dataTransfer.getData("text/plain");
                    if (data) {
                        const droppedItem = document.createElement("li");
                        droppedItem.textContent = data;
                        list.appendChild(droppedItem);
                        updateUserAnswer();
                    }
                });

                list.appendChild(listItem);
            });

            answersContainer.appendChild(list);
            break;

        case "odd-one-out":
            question.options.forEach((option, i) => {
                const radio = document.createElement("input");
                radio.type = "radio";
                radio.name = "odd-one-out";
                radio.id = `odd-option-${i}`;
                radio.value = option;

                const label = document.createElement("label");
                label.htmlFor = `odd-option-${i}`;
                label.textContent = option;
                answersContainer.appendChild(radio);
                answersContainer.appendChild(label);
                answersContainer.appendChild(document.createElement("br"));
            });
			
			const explanationInput = document.createElement("input");
            explanationInput.type = "text";
            explanationInput.placeholder = "Почему этот язык лишний?";
            answersContainer.appendChild(explanationInput);
            break;
    }
}

function updateUserAnswer() {
    const listItems = document.querySelectorAll("#drag-list li");
    userAnswers[currentQuestionIndex] = Array.from(listItems).map(item => item.textContent);
}

/// Изменяем логику начисления баллов в функции handleNextQuestion
function handleNextQuestion() {
    const question = questions[currentQuestionIndex];
    let scoreForCurrentQuestion = 0;

    switch (question.type) {
        case "multiple":
            const selected = Array.from(document.querySelectorAll("input[type=checkbox]:checked"))
                .map(checkbox => parseInt(checkbox.value));
            const correctAnswers = question.correct;
            if (selected.length === correctAnswers.length && selected.every(val => correctAnswers.includes(val))) {
                scoreForCurrentQuestion = question.score; // Полные баллы за правильный ответ
            }
            userAnswers[currentQuestionIndex] = selected; // Сохраняем выбранные ответы
            break;

        case "fill-in":
            const answer = document.getElementById("fill-in-answer").value.trim();
            if (answer.toLowerCase() === question.correct.toLowerCase()) {
                scoreForCurrentQuestion = question.score; // Полные баллы за правильный ответ
            }
            userAnswers[currentQuestionIndex] = answer; // Сохраняем ответ
            break;

        case "true-false":
            const selectedOption = document.querySelector("input[name='true-false']:checked");
            if (selectedOption && parseInt(selectedOption.value) === question.correct) {
                scoreForCurrentQuestion = question.score; // Полные баллы за правильный ответ
            }
            userAnswers[currentQuestionIndex] = selectedOption ? parseInt(selectedOption.value) : null; // Сохраняем ответ
            break;
			
        case "drag-and-drop":
            const dropZones = document.querySelectorAll(".drop-zone");
            let correctCount = 0;
            Object.keys(question.correct).forEach(language => {
                const zone = Array.from(dropZones).find(zone => zone.textContent.trim() === question.correct[language]);
                if (zone) correctCount++;
            });
            scoreForCurrentQuestion = correctCount; // Количество правильно сопоставленных
            isAnswerCorrect = correctCount === Object.keys(question.correct).length; // Проверяем, все ли сопоставления правильные
            userAnswers[currentQuestionIndex] = {}; // Сохраняем соответствия
            dropZones.forEach(zone => {
                const dragging = zone.querySelector(".draggable");
                if (dragging) {
                    userAnswers[currentQuestionIndex][dragging.textContent.trim()] = zone.textContent.trim();
                }
            });
            break;

        case "characteristics":
            const selectedCharacteristics = Array.from(question.options).map((_, i) => {
                const select = document.getElementById(`characteristic-${i}`);
                return parseInt(select.value);
            });
            if (selectedCharacteristics.length === question.correct.length && selectedCharacteristics.every((value, index) => value === question.correct[index])) {
                scoreForCurrentQuestion = question.score; // Полные баллы за правильный ответ
            }
            userAnswers[currentQuestionIndex] = selectedCharacteristics; // Сохраняем ответы
            break;

        case "odd-one-out":
            const oddSelectedOption = Array.from(document.querySelectorAll("input[name='odd-one-out']:checked"))
                .map(radio => radio.value)[0];
            if (oddSelectedOption === question.correct) {
                scoreForCurrentQuestion += question.score; // Полные баллы за правильный ответ
            }
            const explanation = document.querySelector("input[placeholder='Почему этот язык лишний?']").value.trim();
            if (explanation === question.correctExplanation) {
                scoreForCurrentQuestion += 1; // Дополнительный балл за объяснение
            }
            userAnswers[currentQuestionIndex] = { oddAnswer: oddSelectedOption, explanation }; // Сохраняем ответ
            break;

        case "image-selection":
            const selectedImage = Array.from(document.querySelectorAll(".styled-select")).find(select => select.selectedOptions[0].textContent === select.dataset.correct);
            if (selectedImage) {
                scoreForCurrentQuestion = question.score; // Полные баллы за правильный ответ
            }
            userAnswers[currentQuestionIndex] = selectedImage ? selectedImage.selectedOptions[0].textContent : null; // Сохраняем ответ
            break;
    }
	
    totalScore += scoreForCurrentQuestion;

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) loadQuestion(currentQuestionIndex);
    else showResults();
}

// Функция загрузки вопросов
function loadQuestion(index) {
    const question = questions[index];
    const questionText = document.getElementById("question-text");
    const answersContainer = document.getElementById("answers-container");
    questionText.textContent = question.text;
    answersContainer.innerHTML = "";

    switch (question.type) {
        case "multiple":
            question.options.forEach((option, i) => {
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.id = `option-${i}`;
                checkbox.value = i;

                // Устанавливаем состояние чекбоксов на основе сохранённых ответов
                if (userAnswers[index] && userAnswers[index].includes(i)) {
                    checkbox.checked = true;
                }

                const label = document.createElement("label");
                label.htmlFor = `option-${i}`;
                label.textContent = option;
                answersContainer.appendChild(checkbox);
                answersContainer.appendChild(label);
                answersContainer.appendChild(document.createElement("br"));
            });
            break;

        case "fill-in":
            const input = document.createElement("input");
            input.type = "text";
            input.id = "fill-in-answer";
            input.placeholder = "Введите ответ";
            if (userAnswers[index]) {
                input.value = userAnswers[index]; // Восстанавливаем предыдущий ответ
            }
            answersContainer.appendChild(input);
            break;

        case "characteristics":
            question.options.forEach((option, i) => {
                const label = document.createElement("label");
                label.textContent = option;
                const select = document.createElement("select");
                select.id = `characteristic-${i}`;
                question.matches.forEach((match, j) => {
                    const optionElement = document.createElement("option");
                    optionElement.value = j;
                    optionElement.textContent = match;
                    select.appendChild(optionElement);
                });

                // Устанавливаем значение для селекта на основе сохранённых ответов
                if (userAnswers[index] && userAnswers[index][i] !== undefined) {
                    select.value = userAnswers[index][i];
                }

                answersContainer.appendChild(label);
                answersContainer.appendChild(select);
                answersContainer.appendChild(document.createElement("br"));
            });
            break;

        case "true-false":
            question.options.forEach((option, i) => {
                const radio = document.createElement("input");
                radio.type = "radio";
                radio.name = "true-false";
                radio.id = `option-${i}`;
                radio.value = i;

                // Устанавливаем состояние радио-кнопок на основе сохранённых ответов
                if (userAnswers[index] === i) {
                    radio.checked = true;
                }

                const label = document.createElement("label");
                label.htmlFor = `option-${i}`;
                label.textContent = option;
                answersContainer.appendChild(radio);
                answersContainer.appendChild(label);
                answersContainer.appendChild(document.createElement("br"));
            });
            break;

        case "image-selection":
            question.images.forEach((image, i) => {
                const img = document.createElement("img");
                img.src = image.src;
                img.alt = `Пример кода ${i + 1}`;
                img.classList.add("image-option");
                const select = document.createElement("select");
                select.classList.add("styled-select");
                question.options.forEach(option => {
                    const optionElement = document.createElement("option");
                    optionElement.value = option;
                    optionElement.textContent = option;
                    select.appendChild(optionElement);
                });
                select.dataset.correct = image.correct;

                // Устанавливаем значение для селекта на основе сохранённых ответов
                if (userAnswers[index] && userAnswers[index] === select.dataset.correct) {
                    select.value = select.dataset.correct;
                }

                answersContainer.appendChild(img);
                answersContainer.appendChild(select);
            });
            break;

        case "drag-and-drop":
            const container = document.createElement("div");
            container.classList.add("drag-container");

            const languagesDiv = document.createElement("div");
            languagesDiv.classList.add("left-column");
            const applicationsDiv = document.createElement("div");
            applicationsDiv.classList.add("right-column");

            question.languages.forEach(language => {
                const languageDiv = document.createElement("div");
                languageDiv.textContent = language;
                languageDiv.classList.add("draggable");
                languageDiv.draggable = true;
                languageDiv.dataset.type = "language";

                // Восстанавливаем состояние перетаскиваемого элемента
                if (userAnswers[index] && userAnswers[index][language]) {
                    languageDiv.classList.add("selected"); // Отметка для визуализации
                }

                languagesDiv.appendChild(languageDiv);
            });

            question.applications.forEach(application => {
                const applicationDiv = document.createElement("div");
                applicationDiv.textContent = application;
                applicationDiv.classList.add("drop-zone");
                applicationDiv.dataset.type = "application";
                applicationsDiv.appendChild(applicationDiv);
            });

            container.appendChild(languagesDiv);
            container.appendChild(applicationsDiv);
            answersContainer.appendChild(container);
            enableDragAndDrop();
            break;

        case "odd-one-out":
            question.options.forEach((option, i) => {
                const radio = document.createElement("input");
                radio.type = "radio";
                radio.name = "odd-one-out";
                radio.id = `odd-option-${i}`;
                radio.value = option;

                // Устанавливаем состояние радио-кнопок на основе сохранённых ответов
                if (userAnswers[index] && userAnswers[index].oddAnswer === option) {
                    radio.checked = true;
                }

                const label = document.createElement("label");
                label.htmlFor = `odd-option-${i}`;
                label.textContent = option;
                answersContainer.appendChild(radio);
                answersContainer.appendChild(label);
                answersContainer.appendChild(document.createElement("br"));
            });

            const explanationInput = document.createElement("input");
            explanationInput.type = "text";
            explanationInput.placeholder = "Почему этот язык лишний?";
            if (userAnswers[index] && userAnswers[index].explanation) {
                explanationInput.value = userAnswers[index].explanation; // Восстанавливаем объяснение
            }
            answersContainer.appendChild(explanationInput);
            break;
    }
}

// Восстанавливаем функциональность drag-and-drop
function enableDragAndDrop() {
    const draggables = document.querySelectorAll(".draggable");
    const dropZones = document.querySelectorAll(".drop-zone");

    draggables.forEach(draggable => {
        draggable.addEventListener("dragstart", () => {
            draggable.classList.add("dragging");
        });

        draggable.addEventListener("dragend", () => {
            draggable.classList.remove("dragging");
        });
    });

    dropZones.forEach(zone => {
        zone.addEventListener("dragover", e => {
            e.preventDefault();
            const dragging = document.querySelector(".dragging");
            if (zone.children.length === 0) { // Позволяем добавлять только в пустую зону
                zone.appendChild(dragging);
            }
        });
    });
}

// Логика для перехода к предыдущему вопросу
function handlePrevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
    }
}

// Функция для отображения результатов
function showResults() {
    const container = document.getElementById("test-container");
    totalScore = calculateScore(); // Подсчитываем баллы
    const maxScore = 100; // Максимальное количество баллов

    container.innerHTML = `<h2>Результаты</h2>
        <p>Вы набрали ${totalScore} из ${maxScore} баллов</p>`;

    // Комментарии в зависимости от диапазона
    if (totalScore >= 80) {
        container.innerHTML += "<p><strong>Вы очень хорошо усвоили материал! Знаете про языки програмиирования, их особенности и применение в IT сфере. Определитесь с какими языками программирования вы будете работать, изучайте каждый из них и используйте для написания первых программ. Позже сможете создава полноценный проекты</strong></p>";
    } else if (totalScore >= 50) {
        container.innerHTML += "<p><strong>Вы неплохо усвоили материал. Понимаете некотроые основы, но допускаете некоторые ошибки. Повторите материал для устранения отдельных пробелов. В дальнейшем, можете  начать изучение определённых языков для напиаания первых программ.</strong></p>";
    } else if (totalScore >= 30) {
        container.innerHTML += "<p><strong>Знания фрагментарны, часто теряетесь в нюансах или деталях. Повторно ознакомьтесь с материалом и пройдите тест повторно.</strong></p>";
    } else {
        container.innerHTML += "<p><strong>Материал усвоен плохо, требуется серьёзное изучение. Пересмотрите материал с самого начала. Ознакомтесь внимательно с языками програмирования. Пройдите тест снова для проверки закрепившихся знаний. У вас всё получиться!</strong></p>";
    }
	
}


// Функция для подсчета баллов
function calculateScore() {
    return totalScore; // Возвращаем общую сумму баллов
}

// Инициализация теста
function initTest() {
    currentQuestionIndex = 0;
    loadQuestion(currentQuestionIndex);
}

document.getElementById("next-btn").addEventListener("click", handleNextQuestion);
document.getElementById("prev-btn").addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
    }
});

// Запускаем тест при загрузке страницы
window.onload = initTest;