import React from "react";

export default function FluensLogo({ size = 64, color = '#3576C9' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="16" fill={color}/>
      <path d="M18 36C22 28 34 28 38 36H48C44 23 20 23 16 36H18Z" fill="white"/>
      <path d="M18 28C20 24 28 24 30 28H38C36 19 20 19 16 28H18Z" fill="white" fillOpacity="0.8"/>
    </svg>
  );
}
