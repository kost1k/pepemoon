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
          descr: "Dev burned all tokens in Dev Wallet prior to launch",
        },
        {
          icon: require("@/assets/images/safety/step-2.svg"),
          title: "Step 2",
          descr: "Fair launch on DxSale",
        },
        {
          icon: require("@/assets/images/safety/step-3.svg"),
          title: "Step 3",
          descr: "LP locked on DxLocker for 4 years",
        },
        {
          icon: require("@/assets/images/safety/step-4.svg"),
          title: "Step 4",
          descr: "LP generated with every trade and locked on Pancake",
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
}

.safety-step {
  flex: 1;
  padding: 30px;
  background-color: $element-bg;
  border-radius: 20px;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  & + & {
    margin-left: 30px;
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
