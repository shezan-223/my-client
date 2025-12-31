import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from './Footer/Footer';
import Banner from '../Banner/Banner';
import Allproperties from '../../Allproperties/Allproperties';
import { Outlet } from 'react-router';

const Home = () => {
      
    return (
        <div className=''>
            <div className=''>

        <Navbar></Navbar>
            </div>
            
            <header>
           
            </header>
            <main className=''>
                <Outlet></Outlet>

            </main>
            <footer>
                <Footer></Footer>
            </footer>

            
        </div>
    );
};

export default Home;