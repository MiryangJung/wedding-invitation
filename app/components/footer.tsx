import Link from "next/link";
import { block, container, link } from "./footer.css";

export default function Footer() {
  return (
    <footer className={container}>
      <div className={block}>
        <Link href={`tel:${process.env.NEXT_PUBLIC_M_PHONE}`} className={link}>
          <b>신부</b>에게 연락하기
        </Link>
        <Link href={`tel:${process.env.NEXT_PUBLIC_B_PHONE}`} className={link}>
          <b>신랑</b>에게 연락하기
        </Link>
      </div>
      <div className={block}>
        <span>
          개발, 디자인 <b>정미량</b>
        </span>
      </div>
    </footer>
  );
}
