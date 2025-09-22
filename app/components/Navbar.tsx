"use client";

import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import UniversalSearchBox from './UniversalSearchBox';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const products = {
  'Proje & İş Yönetimi': [
    { name: 'Jira Software', href: '/products/jira-software' },
    { name: 'Jira Work Management', href: '/products/jira-work-management' },
    { name: 'Jira Service Management', href: '/products/jira-service-management' },
  ],
  'Doküman & İşbirliği': [
    { name: 'Confluence', href: '/products/confluence' },
  ],
  'DevOps & Code': [
    { name: 'Bitbucket', href: '/products/bitbucket' },
  ],
  'Platform & Marketplace': [
    { name: 'Atlassian Platform', href: '/products/platform' },
    { name: 'Marketplace', href: '/products/marketplace' },
  ],
};

const exploreProducts = [
  { name: 'Bitbucket', href: '/products/bitbucket' },
  { name: 'Trello', href: '/products/trello' },
  { name: 'Statuspage', href: '/products/statuspage' },
  { name: 'Opsgenie', href: '/products/opsgenie' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">Virtual Riddle</span>
          </Link>

          {/* Masaüstü Menü */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Ana Sayfa
            </Link>
            
            {/* Ürünler Dropdown */}
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Ürünler
                  <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute left-0 z-10 mt-2 w-72 origin-top-left rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {Object.entries(products).map(([category, items]) => (
                      <div key={category} className="px-4 py-2">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">{category}</p>
                        {items.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <Link
                                href={item.href}
                                className={classNames(
                                  active ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300',
                                  'block px-4 py-2 text-sm rounded-md'
                                )}
                              >
                                {item.name}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    ))}
                    
                    {/* Keşfet Bölümü */}
                    <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Keşfet</p>
                      <div className="grid grid-cols-2 gap-1">
                        {exploreProducts.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <Link
                                href={item.href}
                                className={classNames(
                                  active ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300',
                                  'block px-3 py-2 text-sm rounded-md'
                                )}
                              >
                                {item.name}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </div>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Hakkımızda
            </Link>
            <Link href="/career" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Kariyer
            </Link>
            <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              İletişim
            </Link>
            <UniversalSearchBox />
            <ThemeToggle />

            <Link href="/free-discovery" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Başlayın
            </Link>
          </div>

          {/* Mobil Menü Butonu */}
          <div className="md:hidden flex items-center space-x-4">
            <UniversalSearchBox />
            <ThemeToggle />
            <button 
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobil Menü */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-gray-200 dark:border-gray-700 relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20">
            {/* Arkaplan gradient */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-blue-400/30 via-transparent to-transparent opacity-70"></div>
            
            <div className="flex flex-col space-y-6 relative z-10">
              <Link 
                href="/" 
                className="text-lg font-bold text-blue-700 dark:text-blue-300 transition-colors py-2 hover:text-blue-800 dark:hover:text-blue-200"
                onClick={() => setIsOpen(false)}
              >
                Ana Sayfa
              </Link>
              
              {/* Mobil Ürünler Menüsü */}
              <div className="space-y-4">
                <p className="text-xl font-bold text-gray-900 dark:text-white border-b-2 border-blue-200 dark:border-blue-700 pb-2">
                  Ürünler
                </p>
                {Object.entries(products).map(([category, items]) => (
                  <div key={category} className="space-y-3">
                    <p className="text-sm font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wide">
                      {category}
                    </p>
                    <div className="pl-4 space-y-2">
                      {items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block text-base text-blue-700 dark:text-blue-300 transition-colors py-1 hover:text-blue-800 dark:hover:text-blue-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                
                {/* Mobil Keşfet Bölümü - 2x2 Grid */}
                <div className="space-y-3">
                  <p className="text-sm font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wide">
                    Keşfet
                  </p>
                  <div className="grid grid-cols-2 gap-3 pl-4">
                    {exploreProducts.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block text-base text-blue-700 dark:text-blue-300 transition-colors py-2 px-3 bg-white/50 dark:bg-gray-800/50 rounded-lg hover:bg-white/80 dark:hover:bg-gray-800/80 hover:text-blue-800 dark:hover:text-blue-200 text-center"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <Link 
                  href="/about" 
                  className="block text-lg font-bold text-blue-700 dark:text-blue-300 transition-colors py-2 hover:text-blue-800 dark:hover:text-blue-200"
                  onClick={() => setIsOpen(false)}
                >
                  Hakkımızda
                </Link>
                <Link 
                  href="/career" 
                  className="block text-lg font-bold text-blue-700 dark:text-blue-300 transition-colors py-2 hover:text-blue-800 dark:hover:text-blue-200"
                  onClick={() => setIsOpen(false)}
                >
                  Kariyer
                </Link>
                <Link 
                  href="/contact" 
                  className="block text-lg font-bold text-blue-700 dark:text-blue-300 transition-colors py-2 hover:text-blue-800 dark:hover:text-blue-200"
                  onClick={() => setIsOpen(false)}
                >
                  İletişim
                </Link>
              </div>

              <div className="pt-4 border-t-2 border-blue-200 dark:border-blue-700">
                <Link 
                  href="/free-discovery" 
                  className="block w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Başlayın
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 