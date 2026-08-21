import { useEffect, useState } from "react";
import "./StarBackground.css";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const numberOfStars = Math.floor(
        (window.innerWidth * window.innerHeight) / 9000,
      );

      const newStars = [];

      for (let i = 0; i < numberOfStars; i++) {
        newStars.push({
          id: i,
          size: Math.random() * 3 + 1,
          x: Math.random() * 100,
          y: Math.random() * 100,
          opacity: Math.random() * 0.5 + 0.5,
          animationDuration: Math.random() * 1 + 2,
        });
      }

      setStars(newStars);
    };

    const generateMeteors = () => {
      const numberOfMeteors = 4;
      const newMeteors = [];

      for (let i = 0; i < numberOfMeteors; i++) {
        newMeteors.push({
          id: i,
          size: Math.random() * 2 + 1,
          x: Math.random() * 100,
          y: Math.random() * 20,
          delay: `${Math.random() * 8}s`,
          animationDuration: Math.random() * 3 + 2,
        });
      }

      setMeteors(newMeteors);
    };

    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
      generateMeteors();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="star-background-container">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animation-meteor"
          style={{
            width: `${meteor.size}px`,
            height: `${meteor.size}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDelay: meteor.delay,
            animationDuration: `${meteor.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};
