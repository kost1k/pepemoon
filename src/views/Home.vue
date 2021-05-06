<template>
  <main class="container">
    <Info />
    <AutoStacking />
    <RoadMap />
    <BuyNow />
    <Partners />
  </main>
</template>

<script>
import Info from "@/components/Info.vue";
import AutoStacking from "@/components/home/AutoStacking.vue";
import RoadMap from "@/components/home/RoadMap.vue";
import BuyNow from "@/components/home/BuyNow.vue";
import Partners from "@/components/whitepaper/Partners.vue";

export default {
  name: "Home",
  components: {
    Info,
    AutoStacking,
    RoadMap,
    BuyNow,
    Partners,
  },
};
</script>
