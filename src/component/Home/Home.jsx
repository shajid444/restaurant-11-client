import React from 'react';
import Banner from '../Banner/Banner';
import TopFoodSection from '../TopFoodSection/TopFoodSection';
import Owner from '../Owner/Owner';
import Reviews from '../Reviews/Reviews';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <>
        <Helmet>
            <title>Omiza/Home</title>
        </Helmet>
           <Banner></Banner> 
           <TopFoodSection></TopFoodSection> 
           <Owner></Owner>
           <Reviews></Reviews>
        </>
    );
};

export default Home;