import React from 'react';

const paragraphs = [
  'Welcome to Good Luck Tattoo Studio, where art and ink converge to create unforgettable masterpieces. Our studio is a haven for self-expression, where we believe that every tattoo tells a unique story.',
  'At Good Luck Tattoo Studio, we understand the significance of a tattoo as a lifelong commitment. That’s why we take the time to listen to your ideas, offering personalized consultations to ensure that your tattoo is not just a design but a reflection of your story, values, and aspirations.',
  'Welcome to the world of Good Luck Tattoo Studio, where your dreams become art on your skin.',
];

const TextComponent = () => (
  <>
    {paragraphs.map((text, index) => (
      <p
        key={index}
        className="text-gray xs:mt-[8px] sm:mt-[16px] lg:mt-[16px] xs:text-[16px] sm:text-[20px] lg:text-[20px]"
      >
        {text}
      </p>
    ))}
  </>
);

export default TextComponent;
