import * as Yup from "yup"



export const CreatePostValidationSchema = Yup.object({
   description: Yup.string().required("Post description is required"),
   image:Yup.string().required("Image is required")
})
export const RegisterUserValidationSchema = Yup.object({
 userName:Yup.string().required("User name is required"),
 email:Yup.string().email("Please enter a valid email").required("Email is required"),
 password:Yup.string().min(5, "Minimum lenght of pasword is 4 charected").max(10, "Maximum lenght of pasword is 10 characters").required("Password is required")
})
export const LoginUserValidationSchema = Yup.object({
 userName:Yup.string().required("User name is required"),
 password:Yup.string().required("Password is required")
})

