import { Formik, useFormik } from "formik"
import { CreatePostValidationSchema } from "../../utils/YubValidation"
import { useMutation } from "@tanstack/react-query";
import { createPostApi } from "../../APIServices/post/postApi";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
import { FaTimesCircle } from "react-icons/fa";


function CreatePost() {
// state for WYSIWYG
const [description, setDescription]=useState<string>("");

  const postMutate = useMutation({
    mutationKey:["createPost"],
    mutationFn:createPostApi
  });
const {error, isPending, isError,isSuccess,data} = postMutate
  // console.log("Mutation: ", error?.message, isPending, isError,isSuccess)

  console.log("this is the errorMessage",error, "data", data)

  //  set display image state

  const [imagePreview, setImagePreview] = useState<string>("")
  
  // set image error state
  
  const [imageError, setImageError]= useState<string | null>(null)


 
  const formik = useFormik({

        // initial data
        initialValues: {
        description:"",
        image:""
        },

        // validation
        validationSchema:CreatePostValidationSchema,
        // form submit handler
        onSubmit: (values) => {
            // Handle form submission, e.g., API call or further processing
            console.log("submit ran", values)
            const formData = new FormData()
            formData.append("description", values.description)
            formData.append("postImage", values.image)
            
          
             postMutate.mutate(formData)
          },
     
    })
    const {errors,touched} = formik

    // handle file upload

    const handleFileChange = (e) => {
  const file = e.currentTarget.files[0]
  console.log(file)

// ensure the size of the image does not exceed 1MB
if(file.size > 1048576){
  setImageError("file size exceeds 1MB")
  return
}
if(!["image/png", "image/jpeg", "image/jpg"].includes(file.type)){
  setImageError("Image format not supported")
  return
}
setImageError("")
 formik.setFieldValue("image", file)
 setImagePreview(URL.createObjectURL(file))

    }

    // removeImage function

    const removeImage = () => {
      setImagePreview("")
     formik.setFieldValue("image", "")
    }


  return (
   
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

           {/* Image Upload Input - File input for uploading images */}
           <div className="flex flex-col items-center justify-center bg-gray-50 p-4 shadow rounded-lg">
            <label
              htmlFor="images"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Upload Image
            </label>
            <div className="flex justify-center items-center w-full">
              <input
                 id="images"
                type="file"
                name="postImage"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor="images"
                className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
              >
                Choose a file
              </label>
            </div>
            {/* Display error message */}
            {formik.touched.image && formik.errors.image && (
              <p className="text-sm text-red-600">{formik.errors.image}</p>
            )}

            {/* error message */}
            {imageError && <p className="text-sm text-red-600">{imageError}</p>}

            {/* Preview image */}

            {imagePreview && (
              <div className="mt-2 relative">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="mt-2 h-24 w-24 object-cover rounded-full"
                />
                <button
                   onClick={removeImage}
                  className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-1"
                >
                  <FaTimesCircle className="text-red-500" />
                </button>
              </div>
            )} 
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