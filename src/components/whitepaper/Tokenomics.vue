<template>
  <section class="section">
    <div class="tokenomics">
      <div class="tokenomics__content">
        <h2 class="section__title">Tokenomics</h2>

        <div class="tokenomics__info">
          <div class="tokenomics__info-row">
            <span class="tokenomics__info-label">Total Supply: </span>
            <span class="tokenomics__info-value">100,000,000,000</span>
          </div>

          <div class="tokenomics__info-row">
            <span class="tokenomics__info-label">Burned Dev Tokens: </span>
            <span class="tokenomics__info-value">25,000,000,000</span>
          </div>

          <div class="tokenomics__info-row">
            <span class="tokenomics__info-label">Fair Launch Supply: </span>
            <span class="tokenomics__info-value">75,000,000,000</span>
          </div>
        </div>
        <v-chart :options="polar" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Tekenomics",
};
</script>

<style scoped lang="scss">
.tokenomics {
  display: flex;

  &__info {
    margin-top: 20px;
  }

  &__info-row {
    font-size: 16px;
    line-height: 26px;

    & + & {
      margin-top: 20px;
    }
  }

  &__info-label {
    color: $gray;
  }

  &__info-value {
    color: $light-gray;
  }
}
</style>
