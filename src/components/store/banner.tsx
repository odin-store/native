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
          desc={`Red Dead Redemption 2는 현대 시대가 시작될 무렵
        무법자인 아서 모건과 악명 높은 반 더 린드 갱단이
        미국 전역을 따라 도주하는 장대한 서사시입니다.`}
          thumbnail="https://rukminim2.flixcart.com/image/850/1000/poster/j/z/y/medium-poster965-red-dead-redemption-2-2017-game-on-fine-art-original-imaes76xjaxzcdbr.jpeg?q=90&crop=false"
          price="42,000"
          logo="/debug/rdr2.png"
          id={2}
        />
      </SwiperSlide>
      <SwiperSlide key={2}>
        <Banner
          playable="지금 플래이 가능"
          desc={`새로운 타이탄, 파일럿, 치명적인 무기, 그리고 당신과 타이탄이
        하나의 멈출 수 없는 살인 기계가 되도록 돕는
        커스터마이징 및 진행 시스템을 결합하여 정복하십시오.`}
          thumbnail="https://image.api.playstation.com/vulcan/img/rnd/202010/0613/DofWaSgGffRBByLa8OvYgYFG.png"
          price="42,000"
          logo="/debug/titanfall.png"
          id={3}
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
