// In App.jsx
import React from 'react';
import { BusinessCard } from './Card'; // Changed to named import to match the exported component

function App() {
  const cardInfo = {
    name: "Jane Doe",
    description: "Software Engineer | Tech Enthusiast",
    interests: ["Coding", "Tech Blogging", "Gaming"],
    linkedin: "https://www.linkedin.com/in/janedoe",
    twitter: "https://twitter.com/janedoe",
    otherSocialMedia: { url: "https://github.com/janedoe", label: "GitHub" } // Ensure this matches what the BusinessCard component expects
  };

  return (
    <div>
      <BusinessCard
        name={cardInfo.name}
        description={cardInfo.description}
        interests={cardInfo.interests}
        linkedin={cardInfo.linkedin}
        twitter={cardInfo.twitter}
        otherSocialMedia={cardInfo.otherSocialMedia.url} // Adjusted to pass the URL directly
        otherSocialMediaLabel={cardInfo.otherSocialMedia.label} // Pass the label as a separate prop
      />
    </div>
  );
}

export default App;
