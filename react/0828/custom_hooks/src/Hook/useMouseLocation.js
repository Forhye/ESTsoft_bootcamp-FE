import React, { useEffect, useState } from "react";

export default function useMouseLocation() {
  const [mouseLocation, setMouseLocation] = useState({
    x: null,
    y: null,
  });

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setMouseLocation({ x: e.x, y: e.y });
    });
  });

  return mouseLocation;
}
