import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function StoreBanner() {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      loop={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
      pagination={true}
      modules={[Autoplay, EffectCoverflow, Pagination]}
    >
      <SwiperSlide key={0}>
        <Banner
          playable="지금 플래이 가능"
          desc={` 게임, 새로운 업데이트,
        그리고 새로운 방식의 플레이를 즐길 수 있는
        가장 큰 게임 커뮤니티에 가입하세요!`}
          thumbnail="https://www.minecraft.net/content/dam/games/minecraft/key-art/Vanilla-PMP_Collection-Carousel-0_Buzzy-Bees_1280x768.jpg"
          price="36,000"
          logo="/debug/minecraft.png"
          id={1}
        />
      </SwiperSlide>
      <SwiperSlide key={1}>
        <Banner
          playable="지금 플래이 가능"
          desc={` 게임, 새로운 업데이트,
        그리고 새로운 방식의 플레이를 즐길 수 있는
        가장 큰 게임 커뮤니티에 가입하세요!`}
          thumbnail="https://www.minecraft.net/content/dam/games/minecraft/key-art/Vanilla-PMP_Collection-Carousel-0_Buzzy-Bees_1280x768.jpg"
          price="36,000"
          logo="/debug/minecraft.png"
          id={1}
        />
      </SwiperSlide>
      <SwiperSlide key={2}>
        <Banner
          playable="지금 플래이 가능"
          desc={` 게임, 새로운 업데이트,
        그리고 새로운 방식의 플레이를 즐길 수 있는
        가장 큰 게임 커뮤니티에 가입하세요!`}
          thumbnail="https://www.minecraft.net/content/dam/games/minecraft/key-art/Vanilla-PMP_Collection-Carousel-0_Buzzy-Bees_1280x768.jpg"
          price="36,000"
          logo="/debug/minecraft.png"
          id={1}
        />
      </SwiperSlide>
    </Swiper>
  );
}

function Banner(props: {
  id: number;
  thumbnail: string;
  logo: string;
  playable: string;
  desc: string;
  price: string;
}) {
  return (
    <div>
      <div className="banner-desc">
        <div className="logo">
          <img src={props.logo} />
        </div>
        <p>{props.playable}</p>
        <p>
          {props.desc.split("\n").map((line) => (
            <>
              {line}
              <br />
            </>
          ))}
        </p>
        <div className="banner-play">
          <p>₩{props.price} 부터 시작</p>
          <a href={"/product/" + props.id.toString()}>지금 구매하기</a>
        </div>
      </div>
      <div className="banner-thumbnail">
        <img src={props.thumbnail} />
      </div>
    </div>
  );
}
