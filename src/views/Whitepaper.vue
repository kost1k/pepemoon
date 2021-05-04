<template>
  <main class="container">
    <Info />

    <section class="section">
      <h2 class="section__title">SafeMoon Protocol</h2>
      <div class="section__sub-title">
        Static Rewards, LP Acquisition, Manual Burn
      </div>

      <div class="section__text">
        A common misconception with the heavy APY average is the subjectivity of
        the impermanent loss from staking an LP (liquidity provider) in a
        farming reward generator. With the explosion of DeFi we have seen too
        many new cryptocurrency prospectors get sucked into a high APY
        LP-farming trap, feeling hopeless as they are pushed out by earlier
        buyers with higher staking rewards. We’ve all been there, seeing those
        shiny 6 digit figures can be pretty damn tempting to jump in. However,
        almost always the token suffers from the inevitable valuation bubble,
        which is then followed by the burst and the impending collapse of the
        price. This Is why we have seen the mass adoption of static rewards,
        also known as reflection, a separate concept that seeks to eliminate the
        troubles caused by farming rewards.
      </div>
    </section>

    <section class="section">
      <h2 class="section__title">Why Static?</h2>

      <div class="section__text">
        Static rewards solve a host of problems. First, the reward amount is
        conditional upon the volume of the token being traded. This mechanism
        aims to alleviate some of the downward sell pressure put on the token
        caused by earlier adopters selling their tokens after farming crazy high
        APY’s. Second, the reflect mechanism encourages holders to hang onto
        their tokens to garner higher kick-backs which are based upon a
        percentages carried out and dependant upon the total tokens held by the
        owner.
      </div>
    </section>

    <section class="section">
      <h2 class="section__title">Manual Burns</h2>

      <div class="section__text">
        Sometimes burns matter; sometimes they don’t. A continuous burn on any
        one protocol can be nice in the early days, however, this means the burn
        cannot be finite or controlled in any way. Having burns controlled by
        the team and promoted based on achievements helps to keep the community
        rewarded and informed. The conditions of the manual burn and the amounts
        can be advertised and tracked. SafeMoon aims to implement a burn
        strategy that is beneficial and rewarding for those engaged for the long
        term. Furthermore, the total number of SAFEMOON burned is featured on
        our readout located on the website which allows for further transparency
        in identifying the current circulating supply at any given point of
        time.
      </div>
    </section>

    <section class="section">
      <h2 class="section__title">Automatic Liquidity Pool (LP)</h2>

      <div class="section__text">
        Automatic LP is the secret sauce of SAFEMOON. Here we have a function
        that acts as a two-fold beneficial implementation for holders. First,
        the contract sucks up tokens from sellers and buyers alike, and adds
        them to the LP creating a solid price floor. Second, the penalty acts as
        an arbitrage resistant mechanism that secures the volume of SAFEMOON as
        a reward for the holders. In theory, the added LP creates a stability
        from the supplied LP by adding the tax to the overall liquidity of the
        token, thus increasing the tokens overall LP and supporting the price
        floor of the token. This is different from the burn function of other
        reflection tokens which is only beneficial in the short term from the
        granted reduction of supply. As the SAFEMOON token LP increases, the
        price stability mirrors this function with the benefit of a solid price
        floor and cushion for holders. The goal here is to prevent the larger
        dips when whales decide to sell their tokens later in the game, which
        keeps the price from fluctuating as much as if there was no automatic LP
        function. All of this is an effort to alleviate some of the troubles we
        have seen with the current DeFi reflection tokens. We are confident that
        this model and protocol will prevail over the outdated reflection tokens
        for these reasons.
      </div>
    </section>

    <Tokenomics />

    <section class="section">
      <h2 class="section__title">SafeMoon Protocol</h2>

      <div class="section__text">
        SafeMoon employs 3 simple functions: Reflection + LP acquisition + Burn
        In each trade, the transaction is taxed a 10% fee, which is split 2
        ways.

        <ul class="protocol-list">
          <li>5% fee = redistributed to all existing holders</li>
          <li>
            5% fee is split 50/50 half of which is sold by the contract into
            BNB, while the other half of the SAFEMOON tokens are paired
            automatically with the previously mentioned BNB and added as a
            liquidity pair on Pancake Swap.
          </li>
        </ul>
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
</style>
