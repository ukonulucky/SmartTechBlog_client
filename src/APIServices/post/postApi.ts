import axios from "axios";
import { postDataType } from "../../types";

/// create a new post
const Base_Url = "http://localhost:5000/api/v1/posts"

export const createPostApi = async (postData:postDataType) => {
  console.log('createPostApi', postData)
 const response =  await  axios.post(`${Base_Url}/create`, postData)
  return response.data
} 



// get all posts

export const getAllPostApi = async () => {
  const response = await axios.get(`${Base_Url}`)
  return response.data
}

// getSingPost 
export const getSingPostApi = async (postId) => {
  const response = await axios.get(`${Base_Url}/${postId}`);
  return response.data
}

// update post 

export const updatePostApi = async (updateData) => {
  const response = await axios.put(`${Base_Url}/${updateData?.postId}`, {
    title:updateData.title,
    description:updateData.description
  })
  return response.data
}

// delete post

export const deletePost = async(postId) => {
  const response  = await axios.delete(`${Base_Url}/${postId}`)
  return response.data
}