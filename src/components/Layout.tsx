import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { MenuItem } from '../types';

const menuItems: MenuItem[] = [
  { title: 'Главная', path: '/', icon: 'home' },
  { title: 'Направления разработки', path: '/paths', icon: 'code' },
  { title: 'Языки программирования', path: '/languages', icon: 'terminal' },
  { title: 'Тест', path: '/test', icon: 'check-square' },
  { title: 'Опрос', path: '/survey', icon: 'clipboard' },
  { title: 'Ресурсы', path: '/resources', icon: 'book' }
];

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-bold">CodeGuide</h1>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-indigo-700 rounded-md"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-y-0 right-0 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } w-64 bg-white shadow-lg transition-transform duration-200 ease-in-out z-50`}
      >
        <div className="p-4">
          <div className="flex justify-end">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-md"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="mt-8">
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <a
                    href={item.path}
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-50 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <p className="text-center">© 2024 CodeGuide. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}