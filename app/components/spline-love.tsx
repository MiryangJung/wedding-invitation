"use client";

import Spline from "@splinetool/react-spline";
import { container, loading } from "./spline-love.css";
import { Application } from "@splinetool/runtime";
import { useState } from "react";

export default function SplineLove() {
  const [loaded, setLoaded] = useState(false);

  function onLoad(spline: Application) {
    if (spline) {
      setLoaded(true);
      console.log("Spline loaded");
    }
  }

  return (
    <div className={container}>
      {!loaded && <span className={loading}>불러오는 중</span>}
      <Spline
        scene="https://prod.spline.design/5ZOC7Jegz859We9z/scene.splinecode"
        onLoad={onLoad}
      />
    </div>
  );
}
