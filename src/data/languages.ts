import { ProgrammingLanguage } from '../types';

export const programmingLanguages: ProgrammingLanguage[] = [
  {
    id: 'html',
    name: 'HTML',
    description: 'Язык разметки для создания структуры веб-страниц',
    purpose: 'Создание структуры и содержимого веб-страниц',
    features: ['Семантическая разметка', 'Поддержка мультимедиа', 'Формы'],
    syntax: '<тег>содержимое</тег>',
    pros: ['Прост в изучении', 'Универсальный стандарт', 'Широкая поддержка'],
    cons: ['Не является языком программирования', 'Только структура, без стилей'],
    resources: [
      {
        title: 'MDN Web Docs',
        url: 'https://developer.mozilla.org/ru/docs/Web/HTML',
        description: 'Официальная документация по HTML'
      }
    ]
  },
  {
    id: 'css',
    name: 'CSS',
    description: 'Язык стилей для оформления веб-страниц',
    purpose: 'Стилизация и визуальное оформление веб-страниц',
    features: ['Селекторы', 'Flexbox', 'Grid', 'Анимации'],
    syntax: 'селектор { свойство: значение; }',
    pros: ['Отделение стилей от структуры', 'Мощные возможности оформления', 'Поддержка адаптивного дизайна'],
    cons: ['Сложность специфичности', 'Разная поддержка браузерами'],
    resources: [
      {
        title: 'MDN Web Docs',
        url: 'https://developer.mozilla.org/ru/docs/Web/CSS',
        description: 'Официальная документация по CSS'
      }
    ]
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    description: 'Мультипарадигменный язык программирования для веб-разработки',
    purpose: 'Создание интерактивных веб-приложений',
    features: ['Динамическая типизация', 'Функции первого класса', 'Прототипное наследование'],
    syntax: 'function example() { return "Hello, World!"; }',
    pros: ['Везде работает', 'Большое сообщество', 'Много фреймворков'],
    cons: ['Динамическая типизация может вести к ошибкам', 'Разные версии ECMAScript'],
    resources: [
      {
        title: 'learn.javascript.ru',
        url: 'https://learn.javascript.ru/',
        description: 'Современный учебник JavaScript'
      }
    ]
  },
  {
    id: 'php',
    name: 'PHP',
    description: 'Серверный язык программирования для веб-разработки',
    purpose: 'Создание динамических веб-сайтов и приложений',
    features: ['Работа с базами данных', 'Обработка форм', 'Сессии и куки'],
    syntax: '<?php echo "Hello, World!"; ?>',
    pros: ['Простой старт', 'Большое количество CMS', 'Хостинг везде'],
    cons: ['Непоследовательный дизайн языка', 'Устаревший код в интернете'],
    resources: [
      {
        title: 'PHP.net',
        url: 'https://www.php.net/manual/ru/',
        description: 'Официальная документация PHP'
      }
    ]
  },
  {
    id: 'sql',
    name: 'SQL',
    description: 'Язык запросов для работы с реляционными базами данных',
    purpose: 'Управление и манипуляция данными в базах данных',
    features: ['CRUD операции', 'Объединение таблиц', 'Агрегация данных'],
    syntax: 'SELECT column FROM table WHERE condition;',
    pros: ['Стандартизированный язык', 'Мощные возможности запросов', 'Транзакционность'],
    cons: ['Разные диалекты у разных СУБД', 'Сложность оптимизации'],
    resources: [
      {
        title: 'PostgreSQL Tutorial',
        url: 'https://postgrespro.ru/education/books/tutorial',
        description: 'Учебник по PostgreSQL'
      }
    ]
  },
  {
    id: 'python',
    name: 'Python',
    description: 'Высокоуровневый язык программирования общего назначения',
    purpose: 'Веб-разработка, анализ данных, машинное обучение, автоматизация',
    features: ['Простой синтаксис', 'Большая стандартная библиотека', 'Множество фреймворков'],
    syntax: 'def hello(): print("Hello, World!")',
    pros: ['Легко учить', 'Читаемый код', 'Универсальность'],
    cons: ['Медленнее компилируемых языков', 'GIL в CPython'],
    resources: [
      {
        title: 'Python.org',
        url: 'https://docs.python.org/ru/3/',
        description: 'Официальная документация Python'
      }
    ]
  },
  {
    id: 'csharp',
    name: 'C#',
    description: 'Объектно-ориентированный язык программирования от Microsoft',
    purpose: 'Разработка приложений для Windows, игр, веб-приложений',
    features: ['Строгая типизация', 'LINQ', 'Async/await'],
    syntax: 'public class Example { public static void Main() { } }',
    pros: ['Современный дизайн', 'Экосистема .NET', 'Отличная IDE'],
    cons: ['В основном для Windows', 'Сложность для начинающих'],
    resources: [
      {
        title: 'Microsoft Docs',
        url: 'https://docs.microsoft.com/ru-ru/dotnet/csharp/',
        description: 'Официальная документация C#'
      }
    ]
  },
  {
    id: 'cpp',
    name: 'C++',
    description: 'Компилируемый, статически типизированный язык программирования',
    purpose: 'Системное программирование, игры, высокопроизводительные приложения',
    features: ['Прямое управление памятью', 'Шаблоны', 'Множественное наследование'],
    syntax: 'int main() { return 0; }',
    pros: ['Высокая производительность', 'Полный контроль', 'Широкое применение'],
    cons: ['Сложный синтаксис', 'Ручное управление памятью', 'Долгая компиляция'],
    resources: [
      {
        title: 'CPPReference',
        url: 'https://en.cppreference.com/',
        description: 'Справочник по C++'
      }
    ]
  },
  {
    id: 'java',
    name: 'Java',
    description: 'Объектно-ориентированный язык программирования',
    purpose: 'Корпоративные приложения, Android-разработка, веб-сервисы',
    features: ['JVM', 'Строгая типизация', 'Многопоточность'],
    syntax: 'public class Main { public static void main(String[] args) { } }',
    pros: ['Кроссплатформенность', 'Большая экосистема', 'Надёжность'],
    cons: ['Многословность', 'Потребление памяти'],
    resources: [
      {
        title: 'Oracle Docs',
        url: 'https://docs.oracle.com/javase/tutorial/',
        description: 'Официальный учебник по Java'
      }
    ]
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    description: 'Современный язык программирования для JVM',
    purpose: 'Android-разработка, серверные приложения, веб-разработка',
    features: ['Null-безопасность', 'Корутины', 'Совместимость с Java'],
    syntax: 'fun main() { println("Hello, World!") }',
    pros: ['Современный синтаксис', 'Безопасность', 'Меньше кода'],
    cons: ['Медленная компиляция', 'Размер приложений'],
    resources: [
      {
        title: 'Kotlin Docs',
        url: 'https://kotlinlang.org/docs/home.html',
        description: 'Официальная документация Kotlin'
      }
    ]
  }
];