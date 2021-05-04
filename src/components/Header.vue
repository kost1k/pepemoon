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
  }

  &__nav {
    margin-left: auto;
  }

  &__bn-btn {
    margin-left: 40px;
  }
}

.header-nav {
  display: flex;

  &__item {
    font-size: 18px;
    line-height: 22px;

    & + & {
      margin-left: 40px;
    }
  }
}
</style>
