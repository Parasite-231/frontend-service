import React from "react";
import loaderImage from "../../assets/img/loading.gif";

export default function LoaderLayout() {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column", // Align items vertically
      justifyContent: "center",
      alignItems: "center",
    //   minHeight: "100vh",
    //   width: "100vw",
    },
    image: {
        marginBottom: "10px", // Add margin bottom to create space between image and text
        
    },
    text: {
      textAlign: "center",
      fontSize: "16px",
      color: "#ccc",
    },
  };

  return (
    <div style={styles.container}>
      <img src={loaderImage} alt="Loading..." style={styles.image} />
      <p style={styles.text}>Loading Information. Please Wait...</p>
    </div>
  );
}
