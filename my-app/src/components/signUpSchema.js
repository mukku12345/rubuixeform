import * as Yup from "yup";


 export const signUpSchema =Yup.object(
    {
     email:Yup.string().email().required("Please Enter Your Email"),
     password:Yup.string().min(8).required("Please Enter Your password"),
     confirmPassword:Yup.string().required().oneOf([Yup.ref("password"),null],"Password must Match")

    }
)