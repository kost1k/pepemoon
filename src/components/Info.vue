<template>
  <section class="section">
    <div class="info">
      <div class="emerging-block" :class="{ animate: animateRun }">
        <img
          src="@/assets/images/pepe/astronaut.png"
          alt=""
          width="187"
          height="200"
          class="emerging-block__img"
        />

        <h2 class="emerging-block__title">
          Strike the moon, shoot at the stars
        </h2>

        <div class="emerging-block__moon-wrap">
          <img
            src="@/assets/images/moon.svg"
            alt=""
            width="194"
            height="195"
            class="emerging-block__moon"
          />
        </div>
      </div>

      <div class="info__row-wrap">
        <div class="info__row">
          <div class="info__item-wrap">
            <div v-for="(item, i) in infoItems" :key="i" class="info-item">
              <div class="info-item__value">{{ item.value }}</div>
              <div class="info-item__label">{{ item.label }}</div>
            </div>
          </div>

          <a href="#" class="info__btn">Live Chat</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Info",
  data() {
    return {
      animateRun: false,
      infoItems: [
        {
          value: "$0.000004753",
          label: "VALUE",
        },
        {
          value: "1,272,957",
          label: "HOLDERS",
        },
        {
          value: "226,764,815.24",
          label: "LIQUIDITY (USD)",
        },
        {
          value: "2,800,296,758.24",
          label: "MARKET CAP (USD)",
        },
        {
          value: "410.836 T",
          label: "BURNED",
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => (this.animateRun = true), 1000);
  },
};
</script>

<style scoped lang="scss">
.emerging-block {
  $this: &;

  position: relative;
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 210px;
  visibility: hidden;
  transform: translateY(100%);
  transition: transform 2s;

  @include media-sm {
    flex-direction: column-reverse;
    align-items: stretch;
    padding-left: 0;
    padding-right: 0;
  }

  &__img {
    @include media-sm {
      width: 140px;
      height: auto;
    }
  }

  &__title {
    margin-left: 40px;
    font-size: 38px;
    line-height: 46px;
    font-weight: $bold;
    color: $light-gray;
    transform: translateY(-75px);
    transition: transform 2s;

    @include media-md {
      margin-left: 30px;
      font-size: 30px;
      line-height: 42px;
    }

    @include media-sm {
      margin-left: 0;
      margin-bottom: 50px;
      text-align: center;
      font-size: 34px;
      line-height: 42px;
    }
  }

  &__moon-wrap {
    position: absolute;
    bottom: 40px;
    right: 10px;
    transform: rotate(-20deg) translateY(65px);
    transition: transform 2s;
  }

  &__moon {
    will-change: transform;
    animation: bounce 1s ease-in-out infinite alternate;

    @include media-sm {
      width: 140px;
      height: auto;
    }
  }

  &.animate {
    transform: translateY(30px);
    visibility: visible;

    #{$this}__title {
      transform: translateY(0);
    }

    #{$this}__moon-wrap {
      transform: rotate(0) translateY(0);
    }
  }
}

.info {
  padding-top: 30px;
  overflow: hidden;

  @include media-sm {
    padding-top: 0;
  }

  &__row-wrap {
    position: relative;
    background-color: $main-bg;
  }

  &__row {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: $element-bg;
    border-radius: 20px;
    z-index: 1;

    @include media-sm {
      flex-direction: column;
    }
  }

  &__item-wrap {
    display: flex;
    justify-content: center;
    align-items: center;

    @include media-md {
      flex-wrap: wrap;
    }
  }

  &__btn {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 190px;
    height: 60px;
    margin-left: 45px;
    box-sizing: border-box;
    border: 4px solid transparent;
    border-radius: 10px;
    background-color: $element-bg;
    background-clip: padding-box;
    font-size: 18px;
    line-height: 22px;
    font-weight: $bold;
    color: $white;

    @include media-lg {
      width: 160px;
    }

    @include media-sm {
      margin-left: 0;
      margin-top: 20px;
    }

    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: -4px;
      border-radius: inherit;
      background: linear-gradient(to right, #3a9f15, #029b92);
      z-index: -1;
    }
  }
}

.info-item {
  position: relative;
  padding: 5px 0;
  text-align: center;

  @include media-md {
    flex: 1 1 calc(50% - 10px);
  }

  @include media-sm {
    flex: none;
    width: 100%;
  }

  & + & {
    margin-left: 45px;
    padding-left: 46px;

    @include media-lg {
      margin-left: 25px;
      padding-left: 26px;
    }

    @include media-md {
      margin-left: 0;
      padding-left: 0;
      margin: 0 5px;
    }

    @include media-sm {
      margin: 0;
      margin-top: 10px;
      padding-top: 11px;
      border-top: 1px solid #4f4f4f;
    }

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 1px;
      height: 100%;
      background-color: #4f4f4f;

      @include media-md {
        content: none;
      }
    }

    &:nth-child(n + 3) {
      @include media-md {
        margin-top: 10px;
        padding-top: 11px;
        border-top: 1px solid #4f4f4f;
      }
    }
  }

  &__value {
    font-size: 16px;
    line-height: 20px;
    font-weight: $bold;
    color: $white;
  }

  &__label {
    margin-top: 5px;
    font-size: 12px;
    line-height: 15px;
    color: $gray;
  }
}

@keyframes bounce {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-20px);
  }
}
</style>
