import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import './Header.css'

const Header = () => {
    return (
        <div>
           <div className='bg-amber-200 flex justify-between px-10 py-4 items-center'>
            <div>
                <h1 className='text-4xl font-bold'>Ma<span className='text-teal-400'>r</span>y</h1>
            </div>
            <div className='flex items-center header-nav'>
                <ActiveLink className='mr-3 text-lg' to="/portfolio">Portfolio</ActiveLink>
                <ActiveLink className='mr-3 text-lg' to="/blogs">Blogs</ActiveLink>
                <ActiveLink className='mr-3 text-lg' to="/foods">Foods</ActiveLink>
                <NavLink className='mr-3 text-lg' to="/hireMe"><button className='bg-orange-300 p-1.5 rounded-sm'>Hire Me</button></NavLink>
            </div>
        </div>
            <Outlet></Outlet>
        </div>
        
    );
};

export default Header;