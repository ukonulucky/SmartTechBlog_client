import axios from "axios";
import { postDataType } from "../../types";
import { Base_Url } from "../../utils/BaseUrl";

/// create a new post


export const createPostApi = async (postData:postDataType) => {
  console.log('createPostApi', postData)
 const response =  await  axios.post(`${Base_Url}/posts/create`, postData)
 console.log("this is the response 44")
  return response.data
} 



// get all posts

export const getAllPostApi = async () => {
  const response = await axios.get(`${Base_Url}`)
  return response.data
}

// getSingPost 
export const getSingPostApi = async (postId) => {
  const response = await axios.get(`${Base_Url}/posts/${postId}`);
  return response.data
}

// update post 

export const updatePostApi = async (updateData) => {
  const response = await axios.put(`${Base_Url}/posts/${updateData?.postId}`, {
    title:updateData.title,
    description:updateData.description
  })
  return response.data
}

// delete post

export const deletePost = async(postId) => {
  const response  = await axios.delete(`${Base_Url}/posts/${postId}`)
  return response.data
}