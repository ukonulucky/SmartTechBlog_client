import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import PrivateNavbar from '../Navbar/PrivateNavbar';
import PublicNavbar from '../Navbar/PublicNavbar';

const AuthNavbar = () => {
    const { authReducer } = useSelector((state) => state);

    if(authReducer?.userAuth || authReducer?.user){
   return <PrivateNavbar />
    }else{
  return <PublicNavbar />
    }
 
}
export default AuthNavbar