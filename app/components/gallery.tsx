import { container, image, imageContainer, title } from "./gallery.css";

const r2 = "https://r2.wedding.beomyeong.miryang.dev";

const images = [
  "_BKK6848-2.jpg",
  "_BKK7391-2.jpg",
  "_BKK7323-2.jpg",
  "_BKK7238-2.jpg",
  "_BKK7348-2.jpg",
  "_BKK7163-2.jpg",
];

export default function Gallery() {
  return (
    <div className={container}>
      <span className={title}>사진첩</span>
      <div className={imageContainer}>
        {images.map((img) => (
          <img
            className={image}
            key={img}
            src={`${r2}/${img}`}
            loading="lazy"
            alt="웨딩 사진"
          />
        ))}
      </div>
    </div>
  );
}
