import React from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon} from '@heroicons/react/outline'
import { Link } from 'gatsby';
import Logo from '../images/eye.png';

const navigationLinks = [
  { name: 'Home', href: '/eye-index/' },
  { name: 'About Us', href: '/eye-aboutus/' },
  { name: 'Services', href: '/eye-services/' },
  { name: 'Pattient', href: '/eye-pattient/' },
  { name: 'Contact Us', href: '/eye-contact/' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Menu() {
  return (
    < Disclosure as="header" >
      {({ open }) => (
        <>
          <div className="shadow-lg py-4">
            <div className="max-w-7xl mx-auto px-2 sm:px-12 lg:px-8 relative flex items-center justify-between h-20">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-8 w-8" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-8 w-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center lg:items-stretch lg:justify-start">
                <div className="flex-shrink-0 flex items-center lg:justify-start">
                  <Link to="/">
                    <img
                      className="h-20 w-auto"
                      src={Logo}
                      alt="Dr Laji Ba"
                    />
                  </Link>
                  <span class="pl-4 font-bold text-3xl"> Balaji Eye Hospital</span>
                </div>
                <div className="hidden lg:block lg:ml-8 xl:ml-12 2xl:ml-16">
                  <nav className="flex space-x-3 mt-4 text-lg">
                    {navigationLinks.map((item) => (
                      <Link

                        key={item.name}
                        to={item.href}
                        className={classNames(
                          'hover:bg-blue-500 hover:text-white',
                          'px-3 py-3 rounded-md'
                        )}
                        activeClassName="bg-blue-500 text-white"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel as='nav' className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={
                    'hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                  }
                  activeClassName="bg-gray-900 text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )
      }
    </Disclosure >
  )
}
