import React, { useState } from 'react';
import Link from '../link/Link';
// import Link from '../link/Link'
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {

    const [open, setOpen] = useState(true);

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/products', name: 'Products' }
    ];

    return (
        <div>
            <div className='md:hidden text-2xl' onClick={() => setOpen(!open)}>
                {
                    // open === true ? 'open' : 'close';

                    open === true ? <AiOutlineMenuUnfold></AiOutlineMenuUnfold> : <RxCross1></RxCross1>
                }
                {/* <button><AiOutlineMenuUnfold className='' /></button> */}
            </div>
            <ul className='md:flex gap-4 m-2'>
                {
                    routes.map((route, idx) => <Link key={idx} route={route}></Link>)
                }
            </ul>
        </div>
    );
};

export default Navbar;