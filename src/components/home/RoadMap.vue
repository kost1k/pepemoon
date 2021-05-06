<template>
  <section id="road-map" class="section">
    <div class="road-map">
      <h2 class="section__title road-map__title">Road Map</h2>

      <div class="road-map__content">
        <div
          v-for="(step, i) in roadSteps"
          :key="i"
          class="road-map-step"
          :class="{ 'road-map-step--reversed': step.reversed }"
        >
          <img
            :src="step.img"
            alt=""
            width="140"
            height="140"
            class="road-map-step__img"
          />

          <div class="road-map-step__content">
            <div class="road-map-step__title">{{ step.title }}</div>
            <div class="road-map-step__descr" v-html="step.descr"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "RoadMap",
  data() {
    return {
      roadSteps: [
        {
          reversed: false,
          img: require("@/assets/images/road/step-1.png"),
          title: "Protocol Initialized",
          descr:
            "Pepemoon was created as an idea to be a revolutionary currency amidst the other meme coins that have revolutionized the cryptocurrency space.Our intention is to bring Pepemoon to the masses by building its own NFT marketplace where pepes and art are created/traded in form of rare NFT's.",
        },
        {
          reversed: true,
          img: require("@/assets/images/road/step-2.png"),
          title: "The Initial Push",
          descr:
            "Pepemoon will sign exclusive promotional deals and various marketing campaigns along with other efforts in order to grow the community.",
        },
        {
          reversed: false,
          img: require("@/assets/images/road/step-3.png"),
          title: "Holding the Line",
          descr:
            "The Pepemoon ecosystem development will be at its latest stages, Pepemoon users will be invited to test our products (Pepemoon NFT marketplace and Pepemoon payments gateway).",
        },
        {
          reversed: true,
          img: require("@/assets/images/road/step-4.png"),
          title: "To the Moon!",
          descr:
            "The main projects of Pepemoon will be done and we will start scaling these projects. Aside from the main burn-events which will take place, we plan on burning additional tokens by buying Pepemoon with 50% of all profits generated from the Pepemoon ecosystem, these tokens will also be burnt in order to reduce the circulating supply tremendously. At this point, anyone can use the products of the Pepemoon ecosystem.Artists and designers attained in order to close exclusive deals to release their art only on our Pepemoon NFT marketplace (The Pepemoon will not only be a Pepe or meme related NFT marketplace).</br> </br> ANY Merchant can accept Pepemoon as payment method by using our Pepemoon payments gateway, meaning that you can spend your Pepemoon on any participating store. ",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.road-map {
  &__title {
    text-align: center;
  }

  &__content {
    margin-top: 40px;
  }
}

.road-map-step {
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 80px;

  @include media-sm {
    flex-direction: column;
    justify-content: initial;
    align-items: center;
  }

  &:not(:last-child) {
    &:before {
      content: "";
      position: absolute;
      top: 140px;
      left: calc(50% - 2px);
      width: 4px;
      height: calc(100% - 140px);
      background-image: url("../../assets/images/dash.svg");

      @include media-sm {
        top: initial;
        bottom: 0;
        height: 80px;
      }
    }
  }

  &:last-child {
    @include media-sm {
      padding-bottom: 0;
    }
  }

  &--reversed {
    flex-direction: row-reverse;
    text-align: right;

    @include media-sm {
      flex-direction: column;
    }
  }

  &__img {
    margin: 0 20px;
  }

  &__content {
    width: calc(50% - 140px / 2 - 20px);

    @include media-sm {
      width: 100%;
      margin-top: 30px;
      text-align: center;
    }
  }

  &__title {
    font-size: 24px;
    line-height: 26px;
    font-weight: $bold;
    color: $light-gray;
  }

  &__descr {
    margin-top: 10px;
    font-size: 14px;
    line-height: 26px;
    color: $gray;
  }
}
</style>
