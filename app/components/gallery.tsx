import { container, description, image, imageContainer } from "./gallery.css";
import SectionTitle from "./section-title";

export const r2 = "https://r2.wedding.beomyeong.miryang.dev";

export const images = [
  "_BKK6848-2.jpg",
  "_BKK7163-2.jpg",
  "_BKK7323-2.jpg",
  "_BKK7391-2.jpg",
  "_BKK7238-2.jpg",
  "_BKK7348-2.jpg",
];

export default function Gallery() {
  return (
    <section className={container}>
      <SectionTitle title="사진첩" />

      <span className={description}>
        여행을 좋아하는 저희는 방콕에서 스냅 사진을 찍었어요.
      </span>
      <div className={imageContainer}>
        {images.map((img) => (
          <img
            className={image}
            key={img}
            src={`${r2}/${img}`}
            alt="웨딩 사진"
          />
        ))}
      </div>
    </section>
  );
}
