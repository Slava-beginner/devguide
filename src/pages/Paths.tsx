import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { developmentPaths } from '../data/paths';
import { Code2, Smartphone, Monitor, Gamepad, Brain, ArrowRight } from 'lucide-react';

const pathIcons = {
  web: Code2,
  mobile: Smartphone,
  desktop: Monitor,
  games: Gamepad,
  ai: Brain,
};

function Paths() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Направления разработки
          </h1>
          <p className="text-xl text-gray-600">
            Исследуйте различные области программирования и найдите то, что вам интересно
          </p>
        </section>

        <div className="space-y-8">
          {developmentPaths.map((path) => {
            const IconComponent = pathIcons[path.id as keyof typeof pathIcons];
            
            return (
              <Link
                to={`/paths/${path.id}`}
                key={path.id}
                className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-indigo-100 rounded-lg">
                        <IconComponent className="w-8 h-8 text-indigo-600" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{path.title}</h2>
                        <p className="text-gray-600 mt-1">{path.description}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </div>

                  <div className="mt-6 grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Специализации
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {path.sections.map((section) => (
                          <span
                            key={section.title}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                          >
                            {section.title}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Основные технологии
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {path.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {path.technologies.length > 4 && (
                          <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                            +{path.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default Paths;