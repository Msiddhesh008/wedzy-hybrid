// GlobalStateContext.js
import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalStateProvider = ({ children }) => {

  const [globalState, setGlobalState] = useState("hello");
  const [profileImage, setProfileImage] = useState("https://lh3.googleusercontent.com/a/AAcHTtexZmYd3xyJOFzQgCGBA7ZzoZymatZ_4LL9tYI2RQ7wQxBac3ciFLblnJb6saDWInGMTxIH7Dn6ijWUbenOFJpZ3Pk=s288-c-no"
  );

  const [userDetails, setUserDetails] = useState({
    userName: "Siddhesh More",
    email: "",
    mobile: "+9198992429530",
  });

  return (
    <GlobalStateContext.Provider
      value={{
        globalState,
        setGlobalState,
        profileImage,
        setProfileImage,
        userDetails,
        setUserDetails,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalStateProvider;