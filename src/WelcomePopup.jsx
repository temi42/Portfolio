import { useState, useEffect } from "react";

export default function WelcomePopup() {
  const [show, setShow] = useState(true); 
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Start fade after 2 seconds
    const fadeTimeout = setTimeout(() => setFade(true), 1000);
    // Remove splash after 3 seconds
    const hideTimeout = setTimeout(() => setShow(false), 2000);

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  if (!show) return null; // hide completely

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "#e89cc2",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "48px",
        fontWeight: "bold",
        opacity: fade ? 0 : 1,
        transition: "opacity 1s ease-in-out",
        zIndex: 1000,
      }}
    >
      Welcome to Temi's portfolio! 💗
    </div>
  );
}