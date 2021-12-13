<template>
  <div>
    <card-actions device="mobile" />
    <card-details device="mobile" />
    <recent-transactions device="mobile" />
  </div>
</template>

<script>
import CardActions from "./CardActions";
import CardDetails from "./CardDetails";
import RecentTransactions from "./RecentTransactions";
export default {
  name: "MobileScrollbleContents",
  components: {
    CardActions,
    CardDetails,
    RecentTransactions,
  },
};
</script>

<style>
</style>