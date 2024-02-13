import { Formik, useFormik } from "formik"
import { CreatePostValidationSchema } from "../../utils/YubValidation"
import { useMutation } from "@tanstack/react-query";
import { createPostApi } from "../../APIServices/post/postApi";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";


function CreatePost() {
// state for WYSIWYG
const [description, setDescription]=useState<string>("");
console.log("this is description", description)
  const postMutate = useMutation({
    mutationKey:["createPost"],
    mutationFn:createPostApi
  });
const {error, isPending, isError,isSuccess} = postMutate
  // console.log("Mutation: ", error?.message, isPending, isError,isSuccess)
    const formik = useFormik({

        // initial data
        initialValues: {
        description:""
        },

        // validation
        validationSchema:CreatePostValidationSchema,
        // form submit handler
        onSubmit: (values) => {
            // Handle form submission, e.g., API call or further processing
            console.log("submit ran")
            postMutate.mutate(values)
          },
     
    })
    const {errors,touched} = formik
  console.log("this is the error message",errors)
  return (
    // <div>
    //   {
    //     isPending && <p>Loading...</p>
    //   }
    //    {
       
    //     isSuccess && <p>Post Created Successfull</p>
    //   }
    
    //    {
       
    //     isError && <p>{error?.response?.data?.message}</p>
    //   }
    //     <form onSubmit={formik.handleSubmit}>
    //        <ReactQuill
    //        value={formik.values.description}
    //        onChange={(value) => {
           
    //         setDescription(value.trim());
    //            formik.setFieldValue("description", value.trim());
    //        }}
    //        />
    //       { touched.description && errors.description &&   <p className="bg-red-400">{errors.description}</p>}

    //         <button type="submit">Create Post</button>
    //     </form>
    // </div>
    <div className="flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 m-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Add New Post
        </h2>
        {/* show alert */}

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Description Input - Using ReactQuill for rich text editing */}
          <div className="mb-10">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <ReactQuill
              value={formik.values.description}
              onChange={(value) => {
                setDescription(value);
                formik.setFieldValue("description", value);
              }}
              className="h-40"
            />
            {/* display err msg */}
            {formik.touched.description && formik.errors.description && (
              <span className="px-1" style={{ color: "red" }}>{formik.errors.description}</span>
            )}
          </div>

          <div className="flex flex-col items-center justify-center bg-gray-50 p-4 shadow rounded-lg">
            <label
              htmlFor="images"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Upload Image
            </label>
          
         

        
          </div>

          {/* Submit Button - Button to submit the form */}
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-orange-500 hover:from-indigo-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Post
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreatePost