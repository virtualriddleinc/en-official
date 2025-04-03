"use client";

import { useState } from "react";
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const products = {
    "İş Birliği & Güvenlik": [
      { name: "Jira Software", href: "/products/jira-software" },
      { name: "Confluence", href: "/products/confluence" },
    ],
    "Kod Yönetimi": [
      { name: "Bitbucket", href: "/products/bitbucket" },
    ],
    "Servis Yönetimi": [
      { name: "Jira Service Management", href: "/products/jira-service-management" },
      { name: "Opsgenie", href: "/products/opsgenie" },
    ],
    "Agile & DevOps": [
      { name: "Trello", href: "/products/trello" },
      { name: "Statuspage", href: "/products/statuspage" },
    ],
  };

  return (
    <nav className="fixed w-full bg-white shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900">Virtual Riddle</span>
          </a>

          {/* Masaüstü Menü */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Ana Sayfa</a>
            
            {/* Ürünler Dropdown */}
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors">
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
                <Menu.Items className="absolute left-0 z-10 mt-2 w-72 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {Object.entries(products).map(([category, items]) => (
                      <div key={category} className="px-4 py-2">
                        <p className="text-sm font-semibold text-gray-900 mb-2">{category}</p>
                        {items.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm rounded-md'
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            <a href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">Hakkımızda</a>
            <a href="/career" className="text-gray-600 hover:text-blue-600 transition-colors">Kariyer</a>
            <a href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">İletişim</a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Başlayın
            </button>
          </div>

          {/* Mobil Menü Butonu */}
          <button 
            className="md:hidden text-gray-600 hover:text-blue-600 transition-colors"
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

        {/* Mobil Menü */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Ana Sayfa</a>
              
              {/* Mobil Ürünler Menüsü */}
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-900">Ürünler</p>
                {Object.entries(products).map(([category, items]) => (
                  <div key={category} className="pl-4 space-y-2">
                    <p className="text-sm font-medium text-gray-700">{category}</p>
                    {items.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block pl-4 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                ))}
              </div>

              <a href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">Hakkımızda</a>
              <a href="/career" className="text-gray-600 hover:text-blue-600 transition-colors">Kariyer</a>
              <a href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">İletişim</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full">
                Başlayın
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 