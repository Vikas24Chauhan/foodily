import React from "react";
import "./GalleryList.css";

const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=800&auto=format&fit=crop", // Tall smoothie
    alt: "Strawberry Smoothie",
    size: "tall", // Custom class for tall items
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop", // Chia Pudding
    alt: "Chia Pudding",
    size: "normal",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1596450523824-3b2d7119b48c?q=80&w=800&auto=format&fit=crop", // Woman drinking
    alt: "Woman Drinking",
    size: "normal",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=800&auto=format&fit=crop", // Top view
    alt: "Watermelon Top View",
    size: "normal",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop", // Mojito
    alt: "Lime Drink",
    size: "normal",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?q=80&w=800&auto=format&fit=crop", // Blueberry
    alt: "Blueberry Smoothie",
    size: "wide", // Custom class for wide items
  },
];

const GalleryList = () => {
  return (
    <div className="galleryList-container">
      <div className="galleryList-grid">
        {galleryItems.map((item) => (
          <div key={item.id} className={`galleryList-item ${item.size}`}>
            <img src={item.src} alt={item.alt} loading="lazy" />
            {/* Optional Overlay for hover effect */}
            <div className="overlay">
              <h3>{item.alt}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryList;
