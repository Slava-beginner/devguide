import { DevelopmentPath } from '../types';

export const developmentPaths: DevelopmentPath[] = [
  {
    id: 'web',
    title: 'Веб-разработка',
    description: 'Создание веб-сайтов и веб-приложений, доступных через интернет',
    whatTheyDo: 'Веб-разработчики создают пользовательские интерфейсы, разрабатывают серверную логику и работают с базами данных для создания современных веб-приложений',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'SQL'],
    languages: ['JavaScript', 'PHP', 'Python', 'TypeScript'],
    sections: [
      {
        title: 'Frontend-разработка',
        description: 'Создание пользовательского интерфейса и клиентской части веб-приложений',
        technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue.js', 'Angular'],
        details: 'Frontend-разработчики отвечают за внешний вид и поведение веб-приложений. Они создают интерактивные интерфейсы, обеспечивают отзывчивость и оптимизируют производительность на стороне клиента.'
      },
      {
        title: 'Backend-разработка',
        description: 'Разработка серверной части веб-приложений',
        technologies: ['Node.js', 'Python', 'PHP', 'Java', 'SQL', 'MongoDB'],
        details: 'Backend-разработчики создают серверную логику, работают с базами данных, обеспечивают безопасность и производительность серверной части приложений.'
      },
      {
        title: 'Fullstack-разработка',
        description: 'Комплексная разработка веб-приложений',
        technologies: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'SQL'],
        details: 'Fullstack-разработчики владеют как frontend, так и backend технологиями, что позволяет им создавать веб-приложения полностью самостоятельно.'
      }
    ]
  },
  {
    id: 'mobile',
    title: 'Мобильная разработка',
    description: 'Разработка приложений для мобильных устройств',
    whatTheyDo: 'Мобильные разработчики создают приложения для iOS и Android, обеспечивая оптимальную производительность и пользовательский опыт',
    technologies: ['Android Studio', 'Xcode', 'React Native', 'Flutter'],
    languages: ['Java', 'Kotlin', 'Swift', 'JavaScript'],
    sections: [
      {
        title: 'iOS-разработка',
        description: 'Создание приложений для устройств Apple',
        technologies: ['Swift', 'Xcode', 'SwiftUI', 'UIKit'],
        details: 'iOS-разработчики создают приложения для iPhone и iPad, используя официальные инструменты и следуя гайдлайнам Apple.'
      },
      {
        title: 'Android-разработка',
        description: 'Разработка приложений для устройств на Android',
        technologies: ['Java', 'Kotlin', 'Android Studio', 'Jetpack Compose'],
        details: 'Android-разработчики создают приложения для устройств на базе Android, используя официальный инструментарий Google.'
      },
      {
        title: 'Кроссплатформенная разработка',
        description: 'Создание приложений для нескольких платформ одновременно',
        technologies: ['React Native', 'Flutter', 'JavaScript', 'Dart'],
        details: 'Разработчики кроссплатформенных приложений используют фреймворки, позволяющие создавать приложения для iOS и Android с помощью единой кодовой базы.'
      }
    ]
  },
  {
    id: 'desktop',
    title: 'Десктопная разработка',
    description: 'Создание программного обеспечения для компьютеров',
    whatTheyDo: 'Разработчики создают приложения для Windows, macOS и Linux, от простых утилит до сложных программных комплексов',
    technologies: ['WPF', 'Electron', 'Qt'],
    languages: ['C#', 'C++', 'Java', 'Python'],
    sections: [
      {
        title: 'Windows-разработка',
        description: 'Создание приложений для Windows',
        technologies: ['C#', 'WPF', '.NET', 'Windows Forms'],
        details: 'Разработчики Windows-приложений создают программы с использованием платформы .NET и других технологий Microsoft.'
      },
      {
        title: 'Кроссплатформенная разработка',
        description: 'Создание приложений для разных операционных систем',
        technologies: ['Electron', 'Qt', 'Java'],
        details: 'Разработчики используют кроссплатформенные фреймворки для создания приложений, работающих на Windows, macOS и Linux.'
      },
      {
        title: 'Системное программирование',
        description: 'Разработка системного ПО и драйверов',
        technologies: ['C++', 'C', 'Rust'],
        details: 'Системные программисты работают на низком уровне, создавая драйверы, утилиты и компоненты операционных систем.'
      }
    ]
  },
  {
    id: 'games',
    title: 'Разработка игр',
    description: 'Создание видеоигр для различных платформ',
    whatTheyDo: 'Игровые разработчики работают над механикой, графикой и оптимизацией производительности игр',
    technologies: ['Unity', 'Unreal Engine', 'Godot'],
    languages: ['C#', 'C++', 'Python'],
    sections: [
      {
        title: 'Разработка на игровых движках',
        description: 'Создание игр с использованием готовых движков',
        technologies: ['Unity', 'Unreal Engine', 'Godot'],
        details: 'Разработчики используют популярные игровые движки для создания игр различных жанров и сложности.'
      },
      {
        title: 'Разработка игровых движков',
        description: 'Создание собственных игровых движков',
        technologies: ['C++', 'OpenGL', 'Vulkan'],
        details: 'Разработчики создают собственные игровые движки для специфических требований или оптимизации производительности.'
      },
      {
        title: 'Геймдизайн',
        description: 'Проектирование игровой механики и уровней',
        technologies: ['Unity', 'Unreal Engine', 'Blender'],
        details: 'Геймдизайнеры создают концепции игр, прорабатывают механики и занимаются балансировкой игрового процесса.'
      }
    ]
  },
  {
    id: 'ai',
    title: 'Машинное обучение и ИИ',
    description: 'Разработка систем искусственного интеллекта и машинного обучения',
    whatTheyDo: 'Специалисты по ИИ создают алгоритмы машинного обучения, работают с большими данными и разрабатывают нейронные сети',
    technologies: ['TensorFlow', 'PyTorch', 'scikit-learn'],
    languages: ['Python', 'R', 'Julia'],
    sections: [
      {
        title: 'Машинное обучение',
        description: 'Разработка и обучение ML-моделей',
        technologies: ['scikit-learn', 'TensorFlow', 'PyTorch'],
        details: 'Специалисты по машинному обучению создают и обучают модели для решения различных задач, от классификации до прогнозирования.'
      },
      {
        title: 'Компьютерное зрение',
        description: 'Разработка систем обработки и анализа изображений',
        technologies: ['OpenCV', 'TensorFlow', 'PyTorch'],
        details: 'Разработчики создают системы распознавания образов, обработки изображений и видео.'
      },
      {
        title: 'Обработка естественного языка',
        description: 'Разработка систем понимания и генерации текста',
        technologies: ['NLTK', 'spaCy', 'Transformers'],
        details: 'Специалисты разрабатывают системы анализа текста, чатботы и другие приложения для работы с естественным языком.'
      }
    ]
  }
];