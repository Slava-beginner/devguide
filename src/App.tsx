import React from 'react';
import Layout from './components/Layout';
import { Code, Terminal, CheckSquare, ClipboardList, BookOpen } from 'lucide-react';

function App() {
  const sections = [
    {
      title: 'Направления разработки',
      description: 'Изучите различные направления разработки: от веб-разработки до искусственного интеллекта. Узнайте, какие технологии используются и чем занимаются специалисты.',
      icon: <Code className="w-8 h-8 text-indigo-600" />,
      path: '/paths'
    },
    {
      title: 'Языки программирования',
      description: 'Подробные описания популярных языков программирования, их особенности, синтаксис, преимущества и недостатки.',
      icon: <Terminal className="w-8 h-8 text-indigo-600" />,
      path: '/languages'
    },
    {
      title: 'Тест на профориентацию',
      description: 'Пройдите тест, который поможет определить наиболее подходящее для вас направление разработки на основе ваших интересов и навыков.',
      icon: <CheckSquare className="w-8 h-8 text-indigo-600" />,
      path: '/test'
    },
    {
      title: 'Опрос по выбору языка',
      description: 'Ответьте на вопросы о ваших целях и предпочтениях, чтобы получить рекомендации по выбору первого языка программирования.',
      icon: <ClipboardList className="w-8 h-8 text-indigo-600" />,
      path: '/survey'
    },
    {
      title: 'Ресурсы для обучения',
      description: 'Подборка качественных материалов, курсов и документации для изучения различных языков программирования.',
      icon: <BookOpen className="w-8 h-8 text-indigo-600" />,
      path: '/resources'
    }
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Добро пожаловать в мир программирования
          </h1>
          <p className="text-xl text-gray-600">
            Найдите свой путь в разработке программного обеспечения
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section) => (
            <a
              key={section.title}
              href={section.path}
              className="group bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-4">{section.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                {section.title}
              </h3>
              <p className="text-gray-600">
                {section.description}
              </p>
            </a>
          ))}
        </section>
      </div>
    </Layout>
  );
}

export default App;