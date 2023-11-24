import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
    const [open, setOpen] = useState(false); // শুরুতে মেনু বন্ধ থাকবে / setOpen(!opne) -> false thakle true hoye jabe, abar true thakle false hoye jabe
    const routes = [
  {
    id: 1,
    name: 'Home',
    path: '/'
  },
  {
    id: 2,
    name: 'About',
    path: '/about'
  },
  {
    id: 3,
    name: 'Services',
    path: '/services'
  },
  {
    id: 4,
    name: 'Contact',
    path: '/contact'
  },
  {
    id: 5,
    name: 'Products',
    path: '/products'
  }
];
    return (
         // step-2
        <nav className='bg-sky-100'>
            <div className='md:hidden' onClick={() => setOpen(!open)}> 
            {/* <span>{open === true ? 'open' : 'close'}</span> */}
            <span>
                {open === true ? 
                <XMarkIcon className="h-6 w-6 text-blue-500" /> 
                : <Bars3Icon className="h-6 w-6 text-blue-500" />}
                </span>
            </div>
            {/* // step-1 */}
            <ul className={`md:flex absolute md:static duration-500 p-3 bg-sky-100 z-10 ${open ? 'top-6' : '-top-80'}`}>
                {
                    routes.map(route => <Link 
                        key={route.id}
                        route={route}
                        ></Link> )
                }
            </ul>
        </nav>
    );
};

const routes = [
  {
    id: 1,
    name: 'Home',
    path: '/'
  },
  {
    id: 2,
    name: 'About',
    path: '/about'
  },
  {
    id: 3,
    name: 'Services',
    path: '/services'
  },
  {
    id: 4,
    name: 'Contact',
    path: '/contact'
  },
  {
    id: 5,
    name: 'Products',
    path: '/products'
  }
];
export default Navbar;