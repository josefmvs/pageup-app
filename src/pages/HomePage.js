
import React, { useCallback, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { withRouter, } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
import * as parcelApi from '../api/parcelApi';

import {
    Box,
    CardContent,
    Grid,
    Container,
    FormControlLabel,
    FormControl,
    FormLabel,
    Button,
    TextField
} from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';


const validationSchema = yup.object({
    Weight: yup
        .number()
        .typeError('Please specify a number')
        .required('Weight is required'),
    Height: yup
    .number()
    .typeError('Please specify a number')
        .required('Height is required'),
    Width: yup
    .number()
    .typeError('Please specify a number')
        .required('Width is required'),
    Depth: yup
    .number()
    .typeError('Please specify a number')
        .required('Depth is required'),
});

const parcelObj = {
    Weight: 0,
    Height: 0,
    Width: 0,
    Depth: 0,
};



const HomePage = () => {

   const[delivery, setDelivery] = useState({cost: 0, category: ""});
    
    const handleSubmit = useCallback(async (values) => {
        //console.log("handle submit");

        return parcelApi
        .saveParcel(values)
        .then(savedParcel => {
         var test = savedParcel;
         setDelivery({cost: savedParcel.cost, category: savedParcel.category});
        })
        .catch(error => {
          throw error;
        });
    }, []);
    
    return (
        <>
            <Container mt={10} maxWidth="md">
                <Box>
                    <h3>Parcel Cost Calculator</h3>
                </Box>
                <Box mt={5}>
                    <Formik validationSchema={validationSchema} initialValues={{
                        Weight: parcelObj.Weight,
                        Height: parcelObj.Height,
                        Width: parcelObj.Width,
                        Depth: parcelObj.Depth
                        }}
                        enableReinitialize={true}
                            onSubmit={handleSubmit}>
                         {({ values, handleSubmit, handleChange, touched, errors }) => (
                            <form onSubmit={handleSubmit}>
                            <Box
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                                }}
                                >
                                <div>
                                <TextField
                                    name="Weight"
                                    label="Weight"
                                    value={values.Weight}
                                    onChange={handleChange}
                                    error={touched.Weight && Boolean(errors.Weight)}
                                    helperText={touched.Weight && errors.Weight}
                                />
                                 
                                <TextField
                                name="Height"
                                label="Height"
                                value={values.Height}
                                onChange={handleChange}
                                error={touched.Height && Boolean(errors.Height)}
                                helperText={touched.Height && errors.Height}
                                />
                                </div>
                                <div>
                                <TextField
                                    name="Width"
                                    label="Width"
                                    value={values.Width}
                                    onChange={handleChange}
                                    error={touched.Width && Boolean(errors.Width)}
                                    helperText={touched.Width && errors.Width}
                                />
                                <TextField
                                name="Depth"
                                label="Depth"
                                value={values.Depth}
                                onChange={handleChange}
                                error={touched.Depth && Boolean(errors.Depth)}
                                helperText={touched.Depth && errors.Depth}
                                />
                                </div>
                            </Box>
                            <Box mt={2} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }} >
                                <Box>
                                    Category: {delivery.category}
                                </Box>   
                                <Box ml={2}>
                                    Cost: ${delivery.cost}
                                </Box>
                            </Box>
                            <Box mt={4}>
                                <Button role="button" type="submit" variant="contained" color='primary' size={'medium'}>
                                    Enter
                                </Button>
                            </Box>
                            </form>
                         )}
                    </Formik>
                </Box>
            </Container>
        </>
    
    );
}

export default HomePage;
