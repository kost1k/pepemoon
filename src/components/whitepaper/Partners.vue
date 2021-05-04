<template>
  <section class="section">
    <h2 class="section__title">Partners</h2>

    <div class="partners-slider-wrapper">
      <div class="swiper-container partners-slider">
        <div class="swiper-wrapper">
          <div
            v-for="(slide, i) in partners"
            :key="i"
            class="swiper-slide partners-slider__item"
          >
            <a :href="slide.link">
              <img :src="slide.img" alt="" />
            </a>
          </div>
        </div>
      </div>

      <div class="partners-slider-prev"></div>
      <div class="partners-slider-next"></div>
    </div>
  </section>
</template>

<script>
import Swiper from "swiper";
import SwiperCore, { Navigation } from "swiper/core";

import "swiper/swiper.scss";

SwiperCore.use([Navigation]);

export default {
  name: "Partners",
  data() {
    return {
      partners: [
        {
          link: "#",
          img: require("@/assets/images/partners/bsc-news.png"),
        },
        {
          link: "#",
          img: require("@/assets/images/partners/dext.png"),
        },
        {
          link: "#",
          img: require("@/assets/images/partners/binance.png"),
        },
        {
          link: "#",
          img: require("@/assets/images/partners/bsc-news.png"),
        },
        {
          link: "#",
          img: require("@/assets/images/partners/dext.png"),
        },
        {
          link: "#",
          img: require("@/assets/images/partners/binance.png"),
        },
      ],
    };
  },
  methods: {
    sliderInit() {
      new Swiper(".swiper-container", {
        slidesPerView: 5,
        spaceBetween: 60,
        loop: true,
        navigation: {
          nextEl: ".partners-slider-next",
          prevEl: ".partners-slider-prev",
        },
      });
    },
  },
  mounted() {
    this.sliderInit();
  },
};
</script>

<style scoped lang="scss">
.partners-slider-wrapper {
  position: relative;
  margin-top: 30px;
  padding: 0 100px;
}

.partners-slider {
  &__item {
    display: flex;
    justify-content: center;
  }
}

.partners-slider-prev,
.partners-slider-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 52px;
  height: 52px;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
}

.partners-slider-prev {
  left: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 52 52'%3E%3Crect width='52' height='52' fill='%23333' rx='26'/%3E%3Cpath stroke='%23828282' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M30 36L20 26l10-10'/%3E%3C/svg%3E");
}

.partners-slider-next {
  right: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 52 52'%3E%3Crect width='52' height='52' x='52' y='52' fill='%23333' rx='26' transform='rotate(-180 52 52)'/%3E%3Cpath stroke='%23828282' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M22 16l10 10-10 10'/%3E%3C/svg%3E");
}
</style>
