<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <router-link to="/">
          <img
            src="@/assets/images/logo.png"
            alt="Pepemoon logo"
            width="308"
            height="84"
            class="header__logo"
          />
        </router-link>

        <nav class="header__nav">
          <ul class="header-nav">
            <li v-for="(item, i) in menuList" :key="i" class="header-nav__item">
              <router-link :to="item.link">{{ item.title }}</router-link>
            </li>
          </ul>
        </nav>

        <a href="#" class="bn-btn header__bn-btn">Buy Now</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
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
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  &__inner {
    display: flex;
    align-items: center;
    padding: 40px 0;

    @include media-md {
      flex-wrap: wrap;
    }

    @include media-sm {
      padding: 20px 0;
    }

    @include media-xs {
      flex-direction: column;
      justify-content: center;
    }
  }

  &__logo {
    @include media-sm {
      width: 280px;
      height: auto;
    }
  }

  &__nav {
    margin-left: auto;

    @include media-md {
      order: 1;
      display: flex;
      justify-content: center;
      width: 100%;
      margin-top: 20px;
      margin-left: 0;
    }

    @include media-sm {
      margin: 20px -20px 0;
      padding: 10px 20px;
      background-color: $element-bg;
    }
  }

  &__bn-btn {
    margin-left: 40px;

    @include media-md {
      margin-left: auto;
    }

    @include media-xs {
      margin-left: 0;
      margin-top: 20px;
    }
  }
}

.header-nav {
  display: flex;

  @include media-sm {
    justify-content: space-between;
    max-width: 360px;
    width: 100%;
  }

  &__item {
    font-size: 18px;
    line-height: 22px;

    @include media-sm {
      font-size: 16px;
    }

    & + & {
      margin-left: 40px;

      @include media-sm {
        margin-left: 10px;
      }
    }
  }
}
</style>
