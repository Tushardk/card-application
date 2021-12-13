<template>
  <div class="main-section min-vh-100 vh-100 p-5">
    <account-summery device="desktop" />
    <card-types device="desktop" />
    <div class="row desktop-details-section">
      <div class="col-6">
        <cards-carousel device="desktop" />
        <card-actions device="desktop" />
      </div>
      <div class="col-6 mt-3 overflow-auto max-height-inherit">
        <card-details device="desktop" />
        <recent-transactions device="desktop" />
      </div>
    </div>
  </div>
</template>
<script>
import CardTypes from "./CardTypes";
import CardsCarousel from "./CardsCarousel";
import AccountSummery from "./AccountSummery";
import CardActions from "./CardActions";
import CardDetails from "./CardDetails";
import RecentTransactions from "./RecentTransactions";
export default {
  name: "MainSection",
  components: {
    CardTypes,
    CardsCarousel,
    AccountSummery,
    CardActions,
    CardDetails,
    RecentTransactions,
  },
};
</script>
<style scoped>
.main-section .account-balance-text {
  color: #333;
}
.desktop-details-section {
  box-shadow: 0px 0px 10px #b7caf0;
  margin-top: 2rem;
  border-radius: 1rem;
  min-height: 70vh;
  max-height: 50vh;
  overflow: hidden;
}
.max-height-inherit {
  max-height: inherit;
}
</style>