import React from 'react';
import Banner from '../Banner/Banner';
import TopFoodSection from '../TopFoodSection/TopFoodSection';
import Owner from '../Owner/Owner';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <>
           <Banner></Banner> 
           <TopFoodSection></TopFoodSection> 
           <Owner></Owner>
           <Reviews></Reviews>
        </>
    );
};

export default Home;