import React from 'react';

const Navbar = () => {
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/products', name: 'Products' }
      ];      
    
    return (
        <div>
            <ul className='flex'>
                {
                    routes.map((route, idx) => <li className='text-3xl' key={idx}><a className='text-3xl' href={route.path}>{route.name}</a></li>)
                }    
            </ul>    
        </div>
    );
};

export default Navbar;