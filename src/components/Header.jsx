import React, { useEffect, useRef } from "react";

export default function Header() {
  const canvasRef = useRef(null);
  const bannerRef = useRef(null);
  const dotsRef = useRef([]);

  // Initialize dots only once when the component mounts
  useEffect(() => {
    const canvas = canvasRef.current;
    const banner = bannerRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size and initialize dots
    const setCanvasSize = () => {
      canvas.width = banner.offsetWidth;
      canvas.height = banner.offsetHeight;

      // Initialize dots only if they are not already initialized
      if (dotsRef.current.length === 0) {
        for (let index = 0; index < 50; index++) {
          dotsRef.current.push({
            xPercent: Math.random(), // Percentage of canvas width
            yPercent: Math.random(), // Percentage of canvas height
            size: Math.random() * 3 + 1,
            color: "#EEEEEE",
          });
        }
      }
    };
    setCanvasSize();

    // Draw dots on the canvas
    const drawDots = () => {
      dotsRef.current.forEach((dot) => {
        const x = dot.xPercent * canvas.width;
        const y = dot.yPercent * canvas.height;
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(x, y, dot.size, 0, Math.PI * 2);
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
      dotsRef.current.forEach((dot) => {
        const x = dot.xPercent * canvas.width;
        const y = dot.yPercent * canvas.height;
        const distance = Math.sqrt((mouse.x - x) ** 2 + (mouse.y - y) ** 2);
        if (distance < 300) {
          ctx.strokeStyle = dot.color;
          ctx.lineWidth = 0.4;
          ctx.beginPath();
          ctx.moveTo(x, y);
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
  }, []); // Empty array ensures this effect runs only once (on mount)

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
