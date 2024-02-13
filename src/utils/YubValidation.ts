import * as Yup from "yup"



export const CreatePostValidationSchema = Yup.object({
   description: Yup.string().required("Post description is required"),
})