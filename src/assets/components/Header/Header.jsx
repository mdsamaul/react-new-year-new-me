import React from 'react';
import Button from '../Button/Button';

const Header = () => {
    return (
        <div className='sticky top-0 left-0 right-0 z-50'>
            <div className="navbar bg-base-100 px-5 md:px-10 lg:px-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Product
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Samsung</a></li>
                                    <li><a>Onepuls</a></li>
                                    <li><a>Iphone</a></li>
                                </ul>
                            </li>
                            <li><a>Services</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </div>
                    <div className='hidden md:hidden lg:block'>
                        <a className="btn btn-ghost normal-case text-xl text-center">LOGO</a>
                    </div>

                </div>
                <div className='lg:hidden'>
                    <a className="btn btn-ghost normal-case text-xl text-center">LOGO</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li tabIndex={0}>
                            <a>
                                Product
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Samsung</a></li>
                                <li><a>Iphone</a></li>
                                <li><a>Onepuls</a></li>
                                <li><a>Vivo</a></li>
                                <li><a>Oppo</a></li>
                            </ul>
                        </li>
                        <li><a>Services</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <a className="btn bg-accent text-white font-bold">Sing Up</a> */}
                    <Button>Sing Up</Button>
                </div>
            </div>
        </div>
    );
};

export default Header;