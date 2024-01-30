import { LeavesCrownArt } from "./svgs";
import { container, title, subTitle } from "./title.css";

export default function Title() {
  return (
    <div className={container}>
      <LeavesCrownArt />
      <h2 className={subTitle}>청첩장</h2>
      <h1 className={title}>박범영 & 정미량</h1>
    </div>
  );
}
