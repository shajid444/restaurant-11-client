import React from 'react';
import Banner from '../Banner/Banner';
import TopFoodSection from '../TopFoodSection/TopFoodSection';
import Owner from '../Owner/Owner';

const Home = () => {
    return (
        <>
           <Banner></Banner> 
           <TopFoodSection></TopFoodSection> 
           <Owner></Owner>
        </>
    );
};

export default Home;