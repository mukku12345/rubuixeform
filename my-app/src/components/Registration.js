import React from 'react';
import { useFormik } from "formik";
import {signUpSchema} from './signUpSchema';
import classes from './Form.module.css'

const Registration = () => {
   const initialValues ={
    name:"",
    email:"",
    password:"",
    confirmPassword:""

   }
const{values , handleChange ,handleBlur,handleSubmit,touched,errors, }=useFormik({

        initialValues ,
        validationSchema:signUpSchema,
        validateOnChange:true,
        validateOnBlur:false,
        onSubmit: (values,action)=>{
            console.log("LINE NUMBER 20",values);
            action.resetForm()
        }
        
    })
    
    return (
              <div className={classes.registration}>
                <form onSubmit={handleSubmit}>
                <div >

                <label htmlFor='name'>Name*</label><br/>
           <input 
           id='name' 
           name='name'
           value={values.name}
           className={classes.name}
            placeholder='Enter your Name'
            onChange={handleChange}
            onBlur={handleBlur}
            required
            
            />
            <br/>



           <label htmlFor='email'>Email</label><br/>
           <input 
           id='email' 
           name='email'
           value={values.email}
           className={classes.email}
            placeholder='Enter your mail '
            onChange={handleChange}
            onBlur={handleBlur}
            
            />
            {touched.email && errors.email ? (
                      <p className={classes.formError}>{errors.email}</p>
                    ) : null}
            </div>
            <div>
            <label htmlFor='password'>Password</label><br/>
           <input 
           id='password' 
           name='password'
           value={values.password}
           className={classes.password}
            placeholder='Enter Password'
            onChange={handleChange}
            onBlur={handleBlur}
            />
            {touched.password && errors.password ? (
                      <p className={classes.formError}>{errors.password}</p>
                    ) : null}
            </div>
            <div>
            <label htmlFor='confirmPassword'>Confirm Password</label><br/>
           <input 
           id='confirmPassword' 
           name='confirmPassword'
           value={values.confirmPassword}
           className={classes.confirmPassword}
          placeholder='ConfirmPassword'
          onChange={handleChange}
          onBlur={handleBlur}
            />
            {touched.confirmPassword && errors.confirmPassword ? (
                      <p className={classes.formError}>{errors.confirmPassword}</p>
                    ) : null}
            </div><br/>
            <div>
            <button type='submit' className={classes.btnsignIn}>Register Now</button>
            
            </div>
            </form>
           
        </div>
    )
}

export default Registration;