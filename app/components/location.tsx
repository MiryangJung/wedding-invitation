"use client";

import Script from "next/script";
import { container, links, title, link, info, icon } from "./location.css";
import Link from "next/link";
import SectionTitle from "./section-title";
import { FlowerArt } from "./svgs";

declare global {
  interface Window {
    kakao: any;
  }
}

const kakaoMapUrl = "https://place.map.kakao.com/17192411";
const naverMapUrl = "https://naver.me/GJrFyntP";
const googleMapUrl = "https://maps.app.goo.gl/VG49SXPF5vnVPQuQA";

const maps = [
  {
    name: "카카오맵",
    url: kakaoMapUrl,
  },
  {
    name: "네이버지도",
    url: naverMapUrl,
  },
  {
    name: "구글맵스",
    url: googleMapUrl,
  },
];

export default function Location() {
  return (
    <section className={container}>
      <SectionTitle title="오시는 길" className={title} />
      <div className={links}>
        {maps.map((map) => (
          <Link href={map.url} target="_blank" key={map.name} className={link}>
            {map.name}
          </Link>
        ))}
      </div>

      <Map />

      <div className={info}>
        <b>위치 안내</b>
        <span>포항 시외버스터미널에서 차로 5분 거리</span>
        <span>포항 IC에서 차로 10분 거리</span>
      </div>

      <div className={info}>
        <b>주차 안내</b>
        <span>예식장 옆 포항시청주차장 무료 이용</span>
        <span>(동시주차 1000대)</span>
      </div>

      <div className={icon}>
        <FlowerArt />
      </div>
    </section>
  );
}

function Map() {
  return (
    <>
      <Script
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JS_KEY}&autoload=false&libraries=services`}
        strategy="afterInteractive"
        onLoad={() => {
          const kakao = window.kakao;
          kakao.maps.load(() => {
            const mapContainer = document.getElementById("map");
            const mapOption = {
              center: new kakao.maps.LatLng(
                36.01770625093597,
                129.34103582889725
              ),
              level: 5,
              draggable: false,
            };
            const map = new kakao.maps.Map(mapContainer, mapOption);
            const geocoder = new kakao.maps.services.Geocoder();
            geocoder.addressSearch(
              "경북 포항시 남구 대이로 18",
              (result: any) => {
                const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                const marker = new kakao.maps.Marker({
                  map: map,
                  position: coords,
                });

                const infowindow = new kakao.maps.InfoWindow({
                  content:
                    '<div style="width:150px;text-align:center;padding:3px 0;font-size:14px;">UA컨벤션</div>',
                });

                infowindow.open(map, marker);

                map.setCenter(coords);

                kakao.maps.event.addListener(marker, "click", function () {
                  window.open(kakaoMapUrl);
                });
              }
            );
          });
        }}
      />
      <div id="map" style={{ width: "100%", height: "200px" }} />
    </>
  );
}
