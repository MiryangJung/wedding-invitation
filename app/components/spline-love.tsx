import Spline from "@splinetool/react-spline";
import { container } from "./spline-love.css";

export default function SplineLove() {
  return (
    <div className={container}>
      <Spline scene="https://prod.spline.design/5ZOC7Jegz859We9z/scene.splinecode" />
    </div>
  );
}
