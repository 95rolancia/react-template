import React from "react";
import ReactDOM from "react-dom/client";
import LikeButton from "components/LikeButton";

const rootNode = document.getElementById("root");
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(LikeButton));
