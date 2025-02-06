import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Banner from './Banner/Banner';
import AboutMe from './AboutMe/AboutMe';

const Home = () => {
    return (
        <>
            {/* navbar section start */}
            <nav className='sticky z-30 top-0 bg-[#2e064e]'>
                <div className='w-[90%] mx-auto'>
                    <Navbar></Navbar>
                </div>
            </nav>
            {/* navbar section end */}

            {/* banner section start  */}
            <section className="bg-[linear-gradient(130deg,#040641_10.47%,#3F0753_98.32%)] bg-no-repeat pb-20 w-full bg-cover bg-center pt-20">
                <section className='lg:w-[80%] w-[90%] mx-auto'>
                    <Banner></Banner>
                </section>
            </section>
            {/* banner section end  */}

            {/* about me section start  */}
            <section className="bg-[linear-gradient(130deg,#1A1A4D_20%,#562D5C_90%)] bg-no-repeat pb-20 w-full bg-cover bg-center pt-20">
                <section className='lg:w-[80%] w-[90%] mx-auto'>
                    <AboutMe></AboutMe>
                </section>
            </section>
            {/* about me section end  */}

            {/* footer section start  */}
            <footer className=''>
                {/* <Footer></Footer> */}
            </footer>
            {/* footer section end  */}
        </>
    );
};

export default Home;