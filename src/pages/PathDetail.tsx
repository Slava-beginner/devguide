import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { developmentPaths } from '../data/paths';
import { Code2, Smartphone, Monitor, Gamepad, Brain, ArrowLeft } from 'lucide-react';

const pathIcons = {
  web: Code2,
  mobile: Smartphone,
  desktop: Monitor,
  games: Gamepad,
  ai: Brain,
};

function PathDetail() {
  const { id } = useParams();
  const path = developmentPaths.find(p => p.id === id);

  if (!path) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900">Направление не найдено</h1>
          <Link to="/paths" className="text-indigo-600 hover:text-indigo-800 mt-4 inline-block">
            Вернуться к списку направлений
          </Link>
        </div>
      </Layout>
    );
  }

  const IconComponent = pathIcons[path.id as keyof typeof pathIcons];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <Link
          to="/paths"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Назад к направлениям
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-indigo-100 rounded-lg">
              <IconComponent className="w-12 h-12 text-indigo-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{path.title}</h1>
              <p className="text-lg text-gray-600 mt-2">{path.description}</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">О направлении</h2>
            <p className="text-gray-600">{path.whatTheyDo}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Используемые языки
              </h3>
              <div className="flex flex-wrap gap-2">
                {path.languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Ключевые технологии
              </h3>
              <div className="flex flex-wrap gap-2">
                {path.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">Специализации</h2>
            {path.sections.map((section) => (
              <div
                key={section.title}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {section.title}
                </h3>
                <p className="text-gray-600 mb-4">{section.description}</p>
                <p className="text-gray-600 mb-4">{section.details}</p>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">
                    Технологии
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {section.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default PathDetail;