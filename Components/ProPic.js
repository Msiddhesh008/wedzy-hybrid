import { Image, StyleSheet} from 'react-native'
import React, { useContext } from 'react'
import GlobalStateContext from '../Contexts/GlobalStateContext';

const ProPic = ({ width, height, BR}) => {
    const { profileImage } = useContext(GlobalStateContext);
  return (
    <Image style={{
        width: width,
        height: height,
        borderRadius: BR,
      }} source={{ uri: profileImage }} />
  )
}

export default ProPic
