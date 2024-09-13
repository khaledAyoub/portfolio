import React, { useEffect, useRef } from "react";

export default function Header() {
  const canvasRef = useRef(null);
  const bannerRef = useRef(null);

  // Initialize the dots array outside of useEffect
  const dots = [];
  for (let index = 0; index < 50; index++) {
    dots.push({
      x: Math.floor(Math.random() * window.innerWidth),
      y: Math.floor(Math.random() * window.innerHeight + 70),
      size: Math.random() * 3 + 1,
      color: "#EEEEEE",
    });
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const banner = bannerRef.current;
    const ctx = canvas.getContext("2d");

    // Set the canvas size based on the banner size
    const setCanvasSize = () => {
      canvas.width = banner.offsetWidth;
      canvas.height = banner.offsetHeight;
    };
    setCanvasSize();

    // Draw dots on the canvas
    const drawDots = () => {
      dots.forEach((dot) => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    // Mouse move event for drawing lines between dots and the mouse
    const handleMouseMove = (event) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawDots();
      const mouse = {
        x: event.clientX - banner.getBoundingClientRect().left,
        y: event.clientY - banner.getBoundingClientRect().top,
      };
      dots.forEach((dot) => {
        const distance = Math.sqrt(
          (mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2
        );
        if (distance < 300) {
          ctx.strokeStyle = dot.color;
          ctx.lineWidth = 0.4;
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });
    };

    // Mouse out event to clear lines
    const handleMouseOut = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawDots();
    };

    // Resize event to handle window resize
    const handleResize = () => {
      setCanvasSize();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawDots();
    };

    // Initial drawing
    drawDots();

    // Event listeners
    banner.addEventListener("mousemove", handleMouseMove);
    banner.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      banner.removeEventListener("mousemove", handleMouseMove);
      banner.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("resize", handleResize);
    };
  }, []); // The empty array ensures the effect runs only once (on mount)

  function snapToproject() {
    const container = document.getElementById("label");
    container.scrollIntoView({
      behavior: "smooth",
    });
  }
  function snapToAbout() {
    const container = document.querySelector(".about");
    container.scrollIntoView({
      behavior: "smooth",
    });
  }
  function snapToContact() {
    const container = document.querySelector(".contact");
    container.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div>
      <header>
        <div className="banner" ref={bannerRef}>
          <nav>
            <img id="logo" src={require("../images/light.png")} alt="Logo" />
            <div>
              <ul>
                <li id="homenav" className="selected">
                  Home
                </li>
                <li id="projectnav" onClick={snapToproject}>
                  Project
                </li>
                <li id="aboutnav" onClick={snapToAbout}>
                  About
                </li>
                <li id="contactnav" onClick={snapToContact}>
                  Contact Us
                </li>
              </ul>
            </div>
          </nav>
          <div id="data">
            <h1 id="fullstack">FullStack Developer</h1>
            <h2 id="name">Khaled Ayoub</h2>
          </div>
          <canvas ref={canvasRef} id="dotsCanvas"></canvas>
        </div>
      </header>
    </div>
  );
}
