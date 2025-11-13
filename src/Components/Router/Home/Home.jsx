import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer/Footer';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <nav className='container mx-auto'>
        <Navbar></Navbar>
            </nav>
            <header>
                <Banner></Banner>
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