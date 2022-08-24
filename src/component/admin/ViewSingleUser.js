import React from "react";

const SingleUser = ({ data }) => {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        minHeight: "80vh",
        background: "gray"
      }}
    >
        <img src={data?.profilePicture} width="100%" style={{borderRadius:"50%"}}/>
        <h1>{data?.name}</h1>
    </div>
  );
};

export default SingleUser;
