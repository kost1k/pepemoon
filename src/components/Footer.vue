<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__row">
        <router-link to="/">
          <img
            src="@/assets/images/logo.png"
            alt="Pepemoon logo"
            width="224"
            height="61"
          />
        </router-link>

        <ul class="footer-nav">
          <li v-for="(item, i) in menuList" :key="i" class="footer-nav__item">
            <router-link :to="item.link">{{ item.title }}</router-link>
          </li>
        </ul>
      </div>

      <div class="footer__row">
        <div class="footer__descr">
          The SafeMoon Protocol is a community driven, fair launched DeFi Token.
          <br />
          Three simple functions occur during each trade: Reflection, LP
          Acquisition, & Burn.
        </div>

        <div class="footer-social">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 30 30"
          >
            <path
              fill="#fff"
              fill-rule="evenodd"
              d="M0 15C0 6.716 6.716 0 15 0c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15zm23.989-4.51a2.35 2.35 0 00-1.653-1.652C20.87 8.436 15 8.436 15 8.436s-5.869 0-7.336.386A2.397 2.397 0 006.01 10.49C5.625 11.957 5.625 15 5.625 15s0 3.058.386 4.51a2.35 2.35 0 001.653 1.652c1.482.402 7.336.402 7.336.402s5.869 0 7.336-.386a2.35 2.35 0 001.653-1.653c.386-1.467.386-4.51.386-4.51s.015-3.058-.386-4.525zM18.012 15l-4.88 2.81V12.19L18.011 15z"
              clip-rule="evenodd"
            />
          </svg>
          <a
            v-for="(item, i) in socialLinks"
            :key="i"
            :href="item.link"
            class="footer-social__item"
          >
            <img :src="item.img" alt="" width="30" height="30" />
          </a>
        </div>
      </div>

      <div class="footer__copyright">
        © 2021 Pepecoin | All Rights Reserved.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      menuList: [
        {
          title: "Auto Staking",
          link: "/#auto-stacking",
        },
        {
          title: "Road Map",
          link: "/#road-map",
        },
        {
          title: "Whitepaper",
          link: "/whitepaper",
        },
      ],
      socialLinks: [
        {
          img: require("@/assets/images/social/youtube.svg"),
          link: "#",
        },
        {
          img: require("@/assets/images/social/twitch.svg"),
          link: "#",
        },
        {
          img: require("@/assets/images/social/twitter.svg"),
          link: "#",
        },
        {
          img: require("@/assets/images/social/steam.svg"),
          link: "#",
        },
        {
          img: require("@/assets/images/social/facebook.svg"),
          link: "#",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.footer {
  margin-top: 160px;
  padding: 60px 0;
  background-color: $element-bg;

  @include media-sm {
    margin-top: 100px;
    padding: 20px 0;
    text-align: center;
  }

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include media-sm {
      flex-direction: column;
    }

    & + & {
      margin-top: 20px;
    }
  }

  &__descr {
    font-size: 14px;
    line-height: 20px;
    color: $gray;
  }

  &__copyright {
    margin-top: 30px;
    font-size: 14px;
    line-height: 20px;
    color: $gray;
  }
}

.footer-nav {
  display: flex;

  @include media-sm {
    justify-content: space-between;
    max-width: 360px;
    width: 100%;
    margin-top: 20px;
  }

  &__item {
    font-size: 14px;
    line-height: 20px;

    & + & {
      margin-left: 40px;

      @include media-sm {
        margin-left: 10px;
      }
    }
  }
}

.footer-social {
  display: flex;

  @include media-sm {
    margin-top: 20px;
  }

  &__item {
    & + & {
      margin-left: 40px;

      @include media-sm {
        margin-left: 20px;
      }
    }
  }
}
</style>
