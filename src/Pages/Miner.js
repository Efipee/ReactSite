import React from "react";
import "../styles.css";

const MyComponent = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "93%",
      }}
    >
      {/* Seu conteúdo React aqui */}
      <iframe
        title="miner"
        src="https://5626-2804-5c-4de4-a200-c4ca-db96-3f2-ac4d.ngrok-free.app/home.html"
        style={{ width: "100%", height: "100%", border: "none" }}
        allowFullScreen
      />
    </div>
  );
};

export default MyComponent;
