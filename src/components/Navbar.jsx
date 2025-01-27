    import React, { useState } from "react";
    import { Button, Flex } from "rizzui";
    import { Link } from "react-router-dom";
    import { Swiper, SwiperSlide } from 'swiper/react';
    import { Navigation, Pagination } from 'swiper/modules';
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';

    const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-indigo-600">
        <Flex
            align="center"
            justify="space-between"
            className="px-4 py-4 mx-auto max-w-screen-xl relative"
        >
            <Link to="/" className="text-white text-2xl font-semibold">
            Logo
            </Link>

            {/* Desktop Navigation */}
            <Flex
            direction="row"
            gap="5"
            className="hidden md:flex md:items-center md:space-x-8"
            >
            <Link to="/" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                Home
            </Link>
            <Link to="/about" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                About
            </Link>
            <Link to="/contact" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                Contact
            </Link>

            </Flex>
            <Button className="hidden md:block bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 w-32 ">
                Sign Up
            </Button>
            {/* <Flex className="items-center space-x-4">
            <Button className="hidden md:block bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 w-32 ">
                Sign Up
            </Button>

            </Flex> */}
            <Button 
                className="text-white md:hidden absolute top-4 right-4"
                onClick={toggleMenu}
            >
                ☰
            </Button>
        </Flex>

        {/* Mobile Side Menu with Swiper */}
        {isOpen && (
            <div className="fixed inset-y-0 right-0 w-4/5 z-50 bg-white shadow-lg">
            <div className="flex justify-end p-4">
                <Button className="text-black" onClick={toggleMenu}>
                ×
                </Button>
            </div>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className="h-full"
            >
                <SwiperSlide>
                <div className="flex flex-col space-y-4 p-6">
                    <Link 
                    to="/" 
                    className="text-black text-lg font-medium hover:bg-gray-100 p-2 rounded"
                    onClick={toggleMenu}
                    >
                    Home
                    </Link>
                    <Link 
                    to="/about" 
                    className="text-black text-lg font-medium hover:bg-gray-100 p-2 rounded"
                    onClick={toggleMenu}
                    >
                    About
                    </Link>
                    <Link 
                    to="/contact" 
                    className="text-black text-lg font-medium hover:bg-gray-100 p-2 rounded"
                    onClick={toggleMenu}
                    >
                    Contact
                    </Link>
                    <Button 
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700"
                    onClick={toggleMenu}
                    >
                    Sign Up
                    </Button>
                </div>
                </SwiperSlide>
            </Swiper>
            </div>
        )}
        </nav>
    );
    };

    export default Navbar;