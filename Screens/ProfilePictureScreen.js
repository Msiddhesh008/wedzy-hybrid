import React, { useState, useEffect, useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import GlobalStateContext from "../Contexts/GlobalStateContext";

const ProfilePictureScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);

  const { setProfileImage } = useContext(GlobalStateContext);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      console.log(photo.uri); // Log the captured photo URI
      setProfileImage(photo.uri);
      navigation.navigate("RegisterScreen");
    }
  };

  const pickImageFromGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      // console.log(result.assets[0].uri); // Log the selected image URI
      setProfileImage(result.assets[0].uri);
      navigation.navigate("RegisterScreen");
    }
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No access to camera</Text>
      </View>
    );
  }

  const switchCamera = () => {
    setCameraType(
      cameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
    // console.log(cameraType);
  };

  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 2, aspectRatio: 1 }}
        ref={(ref) => setCameraRef(ref)}
      ></Camera>
      <View
        style={{
          flex: 1,
          backgroundColor: "transperant",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            display: "flex",
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "#fff",
            flexDirection: "row",
            padding: 20,
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <TouchableOpacity onPress={pickImageFromGallery}>
            <FontAwesomeIcon name="image" size={30} color="#EE3764" />
          </TouchableOpacity>

          <TouchableOpacity onPress={takePicture}>
            <MaterialIcons name="camera" size={30} color="#EE3764" />
          </TouchableOpacity>

          <TouchableOpacity onPress={switchCamera}>
            <MaterialIcons
              name="flip-camera-android"
              size={30}
              color="#EE3764"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfilePictureScreen;
