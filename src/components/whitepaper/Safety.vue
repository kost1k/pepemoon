<template>
  <section class="section">
    <h2 class="section__title">Safety</h2>

    <div class="section__text">Step by step plan to ensure 100% safety.</div>

    <div class="safety">
      <div v-for="(step, i) in safetySteps" :key="i" class="safety-step">
        <div class="safety-step__title">{{ step.title }}</div>

        <img
          :src="step.icon"
          alt=""
          width="64"
          height="64"
          class="safety-step__icon"
        />

        <div class="safety-step__descr">{{ step.descr }}</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Safety",
  data() {
    return {
      safetySteps: [
        {
          icon: require("@/assets/images/safety/step-1.svg"),
          title: "Step 1",
          descr: "Developers will burn a big majority of all tokens so there are less PepeMoon in circulation",
        },
        {
          icon: require("@/assets/images/safety/step-2.svg"),
          title: "Step 2",
          descr: "Fair launch on DxSale",
        },
        {
          icon: require("@/assets/images/safety/step-3.svg"),
          title: "Step 3",
          descr: "LP locked on DxLocker for 24 months",
        },
        {
          icon: require("@/assets/images/safety/step-4.svg"),
          title: "Step 4",
          descr: "LP generated with every trade and locked on Pancakeswap",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.safety {
  display: flex;
  margin-top: 30px;

  @include media-md {
    flex-wrap: wrap;
    margin-left: -10px;
    margin-right: -10px;
  }

  @include media-xs {
    margin-left: 0;
    margin-right: 0;
  }
}

.safety-step {
  flex: 1;
  padding: 30px;
  box-sizing: border-box;
  background-color: $element-bg;
  border-radius: 20px;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  @include media-md {
    flex: none;
    width: calc(50% - 20px);
    margin: 0 10px;
  }

  @include media-sm {
    padding: 20px;
  }

  @include media-xs {
    width: 100%;
    margin: 0;
  }

  & + & {
    margin-left: 30px;

    @include media-md {
      margin-left: 10px;
    }

    @include media-xs {
      margin-left: 0;
      margin-top: 20px;
    }
  }

  &:nth-child(n + 3) {
    @include media-md {
      margin-top: 20px;
    }
  }

  &__title {
    color: $gray;
  }

  &__descr {
    margin-top: 30px;
    color: $light-gray;
  }

  &__icon {
    margin-top: 30px;
  }
}
</style>
