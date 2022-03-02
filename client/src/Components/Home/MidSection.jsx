import { Box, makeStyles, Grid } from '@material-ui/core';
import clsx from 'clsx';

const ImageURL = [
    'https://iide.co/wp-content/uploads/2019/09/MuscleBlaze-Marketing-Strategy.png',
    'https://www.schultzfitness.com/wp-content/uploads/2021/04/SCHULTZ-MULTI-STATION-POWER-RACK-GSX600R.jpg',
    // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSooRG1W8l-fPwYm9ERjLHBv8Vu_V_UFpHimA&usqp=CAU'
    'https://media.istockphoto.com/photos/functional-training-sports-equipment-kettlebell-and-skipping-rope-on-picture-id1279522744?b=1&k=20&m=1279522744&s=170667a&w=0&h=tSWexNNtcCI6mY5eD-d2AqymuxWx8tRPVeXwv7KegJk='
    
];

const useStyle = makeStyles(theme => ({
    wrapper: {
        display: 'flex',
        marginTop: 20,
        justifyContent: 'space-between'
    },
    image: {
        width: '100%',
        height: '80%',
        marginTop: 35
        
    },
    help: {
        [theme.breakpoints.down('md')]: {
            objectFit: 'cover',
            height: 120
        }
    }
}));

const MidSection = () => {
    const classes = useStyle();
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
        <>
            <Grid lg={12} sm={12} md={12} xs={12} container className={classes.wrapper}>
                {
                    ImageURL.map(image => (
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                            <img src={image} className={classes.image} />
                        </Grid>
                    ))
                }
            </Grid>
            {/* <img src={url} className={clsx(classes.wrapper, classes.help)} style={{width: '100%'}} /> */}
        </>
    )
}

export default MidSection;