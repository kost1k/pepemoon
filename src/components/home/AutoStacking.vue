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

  @include media-sm {
    display: block;
    margin-bottom: 50px;
  }

  &__content {
    width: 450px;

    @include media-sm {
      width: 100%;
      text-align: center;
    }
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
    margin-left: 20px;

    @include media-sm {
      justify-content: center;
      margin-left: 0;
      margin-top: 30px;
    }
  }

  &__motion-state {
    position: relative;

    @include media-sm {
      max-width: 140px;
      width: 35%;
    }
  }

  &__motion-img {
    @include media-md {
      width: 140px;
      height: auto;
    }

    @include media-sm {
      width: 100%;
    }
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

    @include media-md {
      font-size: 14px;
      line-height: 22px;
    }

    @include media-sm {
      margin-top: 10px;
    }
  }

  &__motion-arrow {
    margin: 0 80px;

    @include media-md {
      width: 80px;
      height: auto;
      margin: 0 40px;
    }

    @include media-sm {
      margin: 0 20px;
    }
  }
}
</style>
