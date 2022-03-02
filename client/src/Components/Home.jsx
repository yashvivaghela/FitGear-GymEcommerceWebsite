import { Box, makeStyles } from '@material-ui/core';
import NavBar from './Home/NarBar';
import Banner from './Home/Banner';
import MidSlide from './Home/MidSlide';
import MidSection from './Home/MidSection';
import Slide from './Home/Slide';
import React,  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // hooks
// import { getProducts as listProducts } from '../redux/actions/productActions';
import {dealData as products} from "../constant/data";
import { treadmillData } from '../constant/data';
import { ellipticalData } from '../constant/data';
import { dumbbellData } from '../constant/data';
import { bikesData } from '../constant/data';
import { platesData } from '../constant/data';
import {supplementsData} from '../constant/data'
import SimpleForm from './Home/SimpleForm';
import { nutritionData } from '../constant/data';
import { workoutData } from '../constant/data';

const useStyle = makeStyles({
    component: {
        padding: 10,
        background: '#F2F2F2'
    }
})

const Home = () => {
    const classes = useStyle();

    // const getProducts = useSelector(state => state.getProducts);
    // const { products, error } = getProducts;

    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(listProducts())
    // }, [dispatch])

    return (
        <>
            <NavBar />
            <Box className={classes.component}>
                <Banner />
                <MidSlide products={products} />
                <MidSection />
                <Slide
                    data={treadmillData} 
                    title='Treadmill'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={ellipticalData} 
                    title='Elliptical'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={dumbbellData} 
                    title='Dumbbells'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={bikesData} 
                    title='Exercise Bikes'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={platesData} 
                    title='Exercise Plates'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={supplementsData} 
                    title='Supplements'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={workoutData} 
                    title='Workout Plans'
                    timer={false} 
                    multi={true} 
                    link= 'workout'
                />
                <Slide
                    data={nutritionData} 
                    title='Nutrition'
                    timer={false} 
                    multi={true} 
                    link= 'nutrition'
                />
            </Box>
            <div style={{position:'relative', zIndex: 1001 }}>
                <SimpleForm />
            </div>
            
        </>
    )
}

export default Home;