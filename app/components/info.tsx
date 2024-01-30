import {
  container,
  icon,
  phrase,
  title,
  wedding,
  weddingRow,
} from "./info.css";
import { LeavesArt } from "./svgs";

export default function Info() {
  return (
    <section className={container}>
      <div className={icon}>
        <LeavesArt />
      </div>

      <h2 className={title}>초대합니다</h2>
      <p className={phrase}>
        <b>9년의 연애를 마치고, 새로운 시작을 맞이하게 되었습니다.</b>
        <br />
        서로의 소중함을 더욱 깨닫고, 행복하게 살아가겠습니다.
        <br />
        따뜻하게 격려해 주시면 큰 힘이 되겠습니다.
      </p>

      <p className={wedding}>
        <time dateTime="2024-03-30 11:30">
          <b>2024년 3월 30일</b> 토요일 오전 <b>11시 30분</b>
        </time>
        <span>
          <b>포항 UA컨벤션 5층</b>, 메리골드홀
        </span>
      </p>

      <p className={wedding}>
        <span className={weddingRow}>
          박원용 · 이미연의 아들 <b>박범영</b>
        </span>
        <span className={weddingRow}>
          정길훈 · 김미화의 딸 <b>정미량</b>
        </span>
      </p>
    </section>
  );
}
