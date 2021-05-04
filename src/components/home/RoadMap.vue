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
            <div class="road-map-step__descr">{{ step.descr }}</div>
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
            "We have successfully onboarded and confirmed a DogeCoin trading pair with Bibipom. We have also successfully begun integration process with WhiteBit [Imminent] and began legal paperwork with Bitmart. Our team size has doubled and our marketing campaign has begun.",
        },
        {
          reversed: true,
          img: require("@/assets/images/road/step-2.png"),
          title: "The Initial Push",
          descr:
            "The Whitebit tokenomics integration will be completed along with the completion of the SafeMoon App, Wallet, and Game(s). The Bitmart integration with tokenomics will also be completed in this quarter. We will begin architecting the NFT Exchange as well as video-game integrations. We will be integrating SafeMoon with African Markets in addition to setting up a Charity drive and charity vote. We will be exploring other exchanges (i.e. Binance) and begin architecting the SafeMoon Exchange. We will be expanding the team by 35% and establish a UK/Ireland office. We will be architecting a crypto educational app as well as onboarding new partners.",
        },
        {
          reversed: false,
          img: require("@/assets/images/road/step-3.png"),
          title: "Holding the Line",
          descr:
            "We will finish our crypto educational app and begin our own charity project. We will begin a community listing donation raise for several exchanges (i.e. Coinbase, Binance, Kraken). We will finish our NFT exchange and release our first video game with SafeMoon integrated. We will be expanding the team by 25% and do a community meetup (pending covid restrictions). We will also be integrating with other large exchanges (I.e. Binance, Mandala).",
        },
        {
          reversed: true,
          img: require("@/assets/images/road/step-4.png"),
          title: "To the Moon!",
          descr:
            "We will finish the SafeMoon Exchange and our charity project. We will finish integrations with our first African market and begin the next integrations with additional African markets. We will create an African based SafeMoon Office and begin hiring in those markets to create jobs. We will be taking donations for our next charity project and begin a vote on the next project as well. We will be establishing a SafeMoon Scholarship in this quarter as well.",
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

  &:not(:last-child) {
    &:before {
      content: "";
      position: absolute;
      top: 140px;
      left: calc(50% - 2px);
      width: 4px;
      height: calc(100% - 140px);
      background-image: url("../../assets/images/dash.svg");
    }
  }

  &--reversed {
    flex-direction: row-reverse;
    text-align: right;
  }

  &__img {
    margin: 0 20px;
  }

  &__content {
    width: calc(50% - 140px / 2 - 20px);
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
