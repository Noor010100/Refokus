import React, { useState, useRef } from "react";
import Product from "./Product";

const Products = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const productRefs = useRef([]);

  const products = [
    {
      title: "Cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates",
      color: "#4a576b", // Color for Cula
    },
    {
      title: "BCG Platinion",
      description:
        "We redesigned BCG Platinion's website to be sophisticated and technology-driven, incorporating powerful animations and interactions while maintaining the core elements of its brand.",
      color: "#005337", // Color for BCG Platinion
    },
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel's approach and show how migration data translates into real estate.",
      color: "#5355ee", // Color for Arqitel
    },
    {
      title: "Layout Land",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      color: "#1626f3", // Color for Layout Land
    },
    {
      title: "TTR AI",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about AI, industry trends and design.",
      color: "#46289a", // Color for TTR AI
    },
    {
      title: "Maniv",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      color: "#2a9c6c", // Color for Maniv
    },
    {
      title: "Intenseye",
      description:
        "We focused on creating something beautiful while still ensuring the brand felt mature and contextual within their industry.",
      color: "#ff501a", // Color for Intenseye
    },
    {
      title: "Silvr",
      description:
        "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
      color: "#557548", // Color for Silvr
    },
  ];

  return (
    <div className="mt-20 space-y-8">
      {products.map((elem, index) => (
        <div
          key={index}
          ref={(el) => (productRefs.current[index] = el)}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Product
            title={elem.title}
            description={elem.description}
            hoverColor={hoveredIndex === index ? elem.color : "#111111"} // Default color
          />
        </div>
      ))}
    </div>
  );
};

export default Products;
