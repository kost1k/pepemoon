<template>
  <section class="section">
    <div class="buy-now">
      <div class="buy-now__decoration-wrap">
        <h2 class="buy-now__title">Strike the moon, shoot at the stars</h2>
        <img
          src="@/assets/images/buy-now/decor-1.png"
          alt=""
          width="82.5"
          height="82.5"
          class="buy-now__decoration buy-now__decoration--1"
          :class="{ animate: activeHover }"
        />
        <img
          src="@/assets/images/buy-now/decor-2.png"
          alt=""
          width="115"
          height="115"
          class="buy-now__decoration buy-now__decoration--2"
          :class="{ animate: activeHover }"
        />
        <img
          src="@/assets/images/buy-now/decor-3.png"
          alt=""
          width="115"
          height="115"
          class="buy-now__decoration buy-now__decoration--3"
          :class="{ animate: activeHover }"
        />
        <img
          src="@/assets/images/buy-now/decor-4.png"
          alt=""
          width="68"
          height="68"
          class="buy-now__decoration buy-now__decoration--4"
          :class="{ animate: activeHover }"
        />
      </div>

      <div class="buy-now__btn-row">
        <a
          href="#"
          class="bn-btn"
          @mouseenter="activeHover = true"
          @mouseleave="activeHover = false"
          >Buy Now</a
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BuyNow",
  data() {
    return {
      activeHover: false,
    };
  },
};
</script>

<style scoped lang="scss">
.buy-now {
  &__decoration-wrap {
    position: relative;
  }

  &__title {
    font-size: 64px;
    line-height: 78px;
    font-weight: $bold;
    color: $light-gray;
    text-align: center;

    @include media-md {
      font-size: 58px;
      line-height: 72px;
    }

    @include media-sm {
      font-size: 48px;
      line-height: 60px;
    }
  }

  &__decoration {
    position: absolute;
    transition: transform 0.8s ease-in-out;

    @include media-sm {
      display: none;
    }

    &--1 {
      top: 48px;
      left: 47px;

      @include media-md {
        top: 60px;
        left: 6%;
      }

      &.animate {
        transform: translate(218px, -2px) rotate(-60deg);
      }
    }

    &--2 {
      bottom: 40px;
      left: 220px;

      @include media-md {
        bottom: 120px;
        left: 30%;
      }

      &.animate {
        transform: translate(158px, 20px) rotate(45deg);
      }
    }

    &--3 {
      top: 36px;
      right: 254px;

      @include media-md {
        top: 130px;
        right: 20%;
      }

      &.animate {
        transform: translate(-100px, 12px) rotate(60deg);
      }
    }

    &--4 {
      bottom: 41px;
      right: 47px;

      @include media-md {
        bottom: 120px;
        right: 6%;
      }

      &.animate {
        transform: translate(-259px, 0) rotate(-45deg);
      }
    }
  }

  &__btn-row {
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }
}
</style>
