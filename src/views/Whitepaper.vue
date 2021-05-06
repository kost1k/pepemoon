<template>
  <main class="container">
    <Info />

    <section class="section">
      <h2 class="section__title">PepeMoon Protocol</h2>
      <div class="section__sub-title">
        Static Rewards, LP Acquisition, Automatic Burn
      </div>

      <div class="section__text">
        A common misconception with the heavy APY average is the subjectivity of
        the impermanent loss from staking an LP (liquidity provider) in a
        farming reward generator. With the explosion of DeFi we have seen too
        many new cryptocurrency prospectors get sucked into high APY LP-farming
        traps that lead to a sour taste in the end. With Pepemoon you are
        ensured that you receive your staking yields in form of tokens on every
        transaction that happens in our blockchain. Grow wealthy the Pepe Boss
        way!
      </div>
    </section>

    <section class="section">
      <h2 class="section__title">How are Static Rewards distributed ?</h2>

      <div class="section__text">
        Static Rewards in our blockchain basically are paid instantly on every
        transaction that is facilitated within where the proceedings of the
        generated fees from our deflationary system are split evenly depending
        on your stake of tokens you hold.This system rewards early $PEPE holders
        and ensures their smooth sailing to Wealth.
      </div>
    </section>

    <section class="section">
      <h2 class="section__title">Automatic Burns</h2>

      <div class="section__text">
        Due to us committing 25% of the total supply to be sent on a burner
        address the staking proceedings by holding PepeMoon are automatically
        burned as the burner address will keep growing its initial stake
        ensuring that PepeMoon remains deflationary.
      </div>
    </section>

    <section class="section">
      <h2 class="section__title">Automatic Liquidity Pool (LP)</h2>

      <div class="section__text">
        Automatic LP is one of the perks of PepeMoon. Here we have a function
        that acts as a two-fold beneficial system for holders. First, the
        contract yields tokens from Sellers and Buyers alike, and adds them to
        the LP creating a solid price floor. Second, the penalty acts as an
        arbitrage resistant mechanism that secures the volume of PepeMoon as a
        reward for the holders. In theory, the added LP creates a stability in
        price. As the PepeMoon token LP increases, the price stability mirrors
        this function with the benefit of a solid price floor and cushion for
        holders. The goal here is to prevent the larger dips when whales decide
        to sell their tokens later in the game, which keeps the price from
        fluctuating as much as if there was no automatic LP function.
      </div>
    </section>

    <Tokenomics />

    <section class="section">
      <h2 class="section__title">PepeMoon Protocol</h2>

      <div class="section__text">
        PepeMoon employs 3 simple functions: Redistribution + LP acquisition +
        Burn In each trade, the transaction is taxed a 8% fee, which is split 3
        ways.

        <ul class="protocol-list">
          <li>
            4% fee = Redistributed to all existing holders for Auto Staking.
          </li>
          <li>
            2% fee = Burned by the Staking proceedings of the Burner Address
            making PepeMoon deflationary.
          </li>
          <li>
            2% fee = Auto Staking Yield Governance Fund that ensures that the
            tokens are sold gradually and put on PancakeSwap to add Liquidity in
            BNB pair.
          </li>
        </ul>
      </div>
    </section>

    <section class="section">
      <h2 class="section__title">PepeMoon Vision</h2>

      <div class="section__text">
        <h3 class="section__paragraph">Pepemoon NFT marketplace:</h3>
        The Pepemoon NFT marketplace will encourage users to buy and sell NFTs
        using Pepemoon by giving them incentives such as exclusive NFTs which
        can only be bought with Pepemoon. We will work on exclusive contracts
        with well-known artists and designers to only use Pepemoon in order to
        sell their art.
        <h3 class="section__paragraph">Pepemoon payments terminal:</h3>
        Any merchant can accept Pepemoon (and other cryptos) by using our
        payments gateway, they can choose to either liquidate or hold the
        Pepemoon they receive, (if liquidated, it will be funded by our cash
        reserves and we might hold the Pepemoon as reserves, rebalancing of USD
        cash reserves and Pepemoon will take place in small pieces to counter
        sell pressure (if any).
        <br />
        <b>
          50% of all profits of the NFT marketplace and Pepemoon Payments
          gateway will be fully invested in Pepemoon buybacks and burned to 100%
          at the end of each every month. (A fully detailed report will be
          released along with the burned tokens txid)</b
        >
      </div>
    </section>

    <Safety />
    <Partners />
  </main>
</template>

<script>
import Info from "@/components/Info.vue";
import Safety from "@/components/whitepaper/Safety.vue";
import Tokenomics from "@/components/whitepaper/Tokenomics.vue";
import Partners from "@/components/whitepaper/Partners.vue";

export default {
  name: "Whitepaper",
  components: {
    Info,
    Safety,
    Tokenomics,
    Partners,
  },
};
</script>

<style scoped lang="scss">
.protocol-list {
  margin-top: 20px;
  padding-left: 20px;
  list-style-type: initial;

  li::marker {
    font-size: 12px;
  }
}
.section__paragraph {
  padding: 1em 0;
}
</style>
