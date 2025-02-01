import React from 'react';
import Layout from '../components/Layout';
import { programmingLanguages } from '../data/languages';
import { Code2 } from 'lucide-react';

function Languages() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Языки программирования
          </h1>
          <p className="text-xl text-gray-600">
            Изучите особенности и применение различных языков программирования
          </p>
        </section>

        <div className="grid gap-8">
          {programmingLanguages.map((language) => (
            <div
              key={language.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-indigo-100 rounded-lg">
                    <Code2 className="w-8 h-8 text-indigo-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {language.name}
                    </h2>
                    <p className="text-gray-600">{language.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Назначение
                    </h3>
                    <p className="text-gray-600 mb-4">{language.purpose}</p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Особенности
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {language.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Пример синтаксиса
                    </h3>
                    <pre className="bg-gray-50 p-4 rounded-lg text-sm font-mono mb-4">
                      {language.syntax}
                    </pre>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Преимущества
                        </h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {language.pros.map((pro) => (
                            <li key={pro}>{pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Недостатки
                        </h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {language.cons.map((con) => (
                            <li key={con}>{con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Ресурсы для изучения
                  </h3>
                  <div className="space-y-3">
                    {language.resources.map((resource) => (
                      <a
                        key={resource.url}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <h4 className="font-semibold text-indigo-600">
                          {resource.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {resource.description}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Languages;