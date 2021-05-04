<template>
  <section id="auto-stacking" class="section">
    <div class="auto-stacking">
      <div class="auto-stacking__content">
        <h2 class="section__title">Auto Staking</h2>
        <div class="auto-stacking__descr">
          Pepecoin is a deflationary token, Pepecoin will be automatically
          staked just by holding it in your wallet, Pepecoin wont let you down!
        </div>
      </div>

      <div class="auto-stacking__motion">
        <div class="auto-stacking__motion-state">
          <img
            src="@/assets/images/pepe/cry.png"
            alt=""
            width="188"
            height="188"
            class="auto-stacking__motion-img"
          />
          <div class="auto-stacking__motion-title">Before Pepemoon</div>
        </div>

        <img
          src="@/assets/images/arrow.svg"
          alt=""
          width="112"
          height="74"
          class="auto-stacking__motion-arrow"
        />

        <div class="auto-stacking__motion-state">
          <img
            src="@/assets/images/pepe/money.png"
            alt=""
            width="188"
            height="188"
            class="auto-stacking__motion-img"
          />
          <div class="auto-stacking__motion-title">After Pepemoon</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AutoStacking",
};
</script>

<style scoped lang="scss">
.auto-stacking {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__content {
    width: 450px;
  }

  &__descr {
    margin-top: 20px;
    font-size: 16px;
    line-height: 26px;
    color: $gray;
  }

  &__motion {
    display: flex;
    align-items: center;
  }

  &__motion-state {
    position: relative;
  }

  &__motion-title {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    margin-top: 20px;
    font-size: 16px;
    line-height: 26px;
    color: $gray;
    text-align: center;
  }

  &__motion-arrow {
    margin: 0 80px;
  }
}
</style>
