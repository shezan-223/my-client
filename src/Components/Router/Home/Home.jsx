import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from './Footer/Footer';
import Banner from '../Banner/Banner';
import Allproperties from '../../Allproperties/Allproperties';
import { Outlet } from 'react-router';

const Home = () => {
      
    return (
        <div>
            <nav className='container mx-auto'>
        <Navbar></Navbar>
            </nav>
            <header>
           
            </header>
            <main className='container mx-auto'>
                <Outlet></Outlet>

            </main>
            <footer>
                <Footer></Footer>
            </footer>

            
        </div>
    );
};

export default Home;