import { useState, useEffect } from 'react';
import { Box, Typography, makeStyles, CircularProgress, Button, Grid } from '@material-ui/core';
import ProductDetail from './ProductDetail';
import ActionItem from './ActionItem';
import { useParams } from 'react-router-dom';
import clsx from 'clsx';
import { getProductById } from '../../service/api';
import { useDispatch, useSelector } from 'react-redux';

import { getProductDetails } from '../../redux/actions/productActions';
import ReactPlayer from 'react-player'

const useStyles = makeStyles(theme => ({
    component: {
        marginTop: 55,
        background: '#F2F2F2'
    },
    container: {
        background: '#FFFFFF',
        // margin: '0 80px',
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    },
    leftContainer: {
        minWidth: '40%',
        // textAlign: 'center',
        padding: '40px 0 0 80px',
        [theme.breakpoints.down('md')]: {
            padding: '20px 40px'
        }
    },
    rightContainer: {
        marginTop: 50,
        marginLeft: 300,
        '& > *': {
            marginTop: 10,

        }
    },
    productImage: {
        padding: '15px 20px',
        border: '1px solid #f0f0f0',
        width: '95%'
    },
    price: {
        fontSize: 28
    },
    smallText: {
        fontSize: 14,
    },
    greyTextColor: {
        color: '#878787'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    description: {
        marginRight: 45,
    },
    video: {
        marginLeft: 150,
    },
}));

const data = {
    id: '',
    url: '',
    detailUrl: '',
    title: {
        shortTitle: '',
        longTitle: '',
    },
    price: {
        mrp: 0,
        cost: 0,
        discount: ''
    },
    description: '',
    discount: '',
    tagline: ''
};

const WorkoutNutritionView = ({ history, match }) => {
    const classes = useStyles();
    // const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    // const [ product, setProduct ] = useState(data);
    // const [ loading, setLoading ] = useState(false);
    // const { id } = useParams();

    // const [ quantity, setQuantity ] = useState(1);

    const productDetails = useSelector(state => state.getProductDetails);
    const { loading, product } = productDetails;

    const dispatch = useDispatch();

    useEffect(() => {
        if (product && match.params.id !== product.id)
            dispatch(getProductDetails(match.params.id));
    }, [dispatch, product, match, loading]);

    // useEffect(() => {
    //     getProductValues();
    // }, []);

    // const getProductValues = async () => {
    //     setLoading(true);
    //     const response = await getProductById(id);
    //     console.log(response.data);
    //     setProduct(response.data);
    //     setLoading(false);
    // }

    return (
        <Box className={classes.component}>
            {product && Object.keys(product).length &&
                <Grid container className={classes.container}>
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        {/* <Box className={classes.leftContainer}>
                <img src={product.detailUrl} className={classes.productImage} /><br />
                
        </Box> */}
                    </Grid>
                    <Grid item lg={8} md={8} sm={8} xs={12} className={classes.rightContainer}>
                        <div className={classes.video}>
                            <ReactPlayer controls url={product.video} />
                        </div>
                        <Typography className={classes.title}>{product.title.shortTitle}</Typography>
                        <Typography className={classes.description}>{product.description}</Typography>
                        {/* <ProductDetail product={product} /> */}
                    </Grid>
                </Grid>
            }
        </Box>
    )
}

export default WorkoutNutritionView;