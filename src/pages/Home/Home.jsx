import React from 'react';
import { useLoaderData } from 'react-router';
import HomeBanner1 from '../../component/Banner/Homebanner1';
import Apps from '../Apps/Apps';

const Home = () => {
    const trendAppPromise = useLoaderData();
    
    return (
        <div>
            <HomeBanner1></HomeBanner1>
            <Apps trendAppPromise={trendAppPromise}></Apps>

        </div>
    );
};

export default Home;