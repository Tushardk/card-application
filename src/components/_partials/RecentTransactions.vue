<template>
  <div class="recent-transactions text-dark mt-4">
    <div
      class="px-2 py-4 mx-4 recent-transactions-collapsible-link fw-bold row"
      data-bs-toggle="collapse"
      data-bs-target="#recent-transactions"
      aria-expanded="false"
      aria-controls="recent-transactions"
    >
      <div class="col-2">
        <img src="@/assets/mobile/Group11889-1.svg" alt="Aspire" />
      </div>
      <div class="col-8 d-flex align-self-end">Recent Transactions</div>
      <div v-if="recentTransactionsCollapsed" class="col-2">
        <img src="@/assets/mobile/down-arrow.svg" alt="Aspire" />
      </div>
      <div v-else class="col-2">
        <img src="@/assets/mobile/down-arrow-1.svg" alt="Aspire" />
      </div>
    </div>
    <div class="px-4 mx-4 collapse details" id="recent-transactions">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
      aspernatur libero ut, repellendus, cumque nulla ex labore dolor dolore
      quod inventore ad nam perspiciatis soluta quos assumenda tempora id
      obcaecati molestias voluptate necessitatibus cupiditate voluptatem maxime!
      Repellat provident commodi porro perspiciatis nihil possimus optio esse?
      Quas molestias quidem alias animi.
    </div>
  </div>
</template>

<script>
export default {
  name: "RecentTransactions",
  data() {
    return { recentTransactionsCollapsed: true };
  },
  mounted: function () {
    this.collapsibleEvents();
  },
  methods: {
    collapsibleEvents() {
      const t = this;
      document
        .querySelector("#recent-transactions")
        .addEventListener("show.bs.collapse", function () {
          t.recentTransactionsCollapsed = false;
        });
      document
        .querySelector("#recent-transactions")
        .addEventListener("hide.bs.collapse", function () {
          t.recentTransactionsCollapsed = true;
        });
    },
  },
};
</script>

<style scoped>
.recent-transactions-collapsible-link {
  -webkit-box-shadow: 0 0 10px #333;
  box-shadow: 0 0 10px #333;
  border-radius: 10px;
  background-color: #edf3ff;
  font-size: 14px;
  color: #0c365a;
}

.recent-transactions .recent-transactions-collapsible-link {
  -webkit-box-shadow: 0 0 10px #edf3ff;
  box-shadow: 0 0 10px #edf3ff;
  border-radius: 10px;
  background-color: #edf3ff;
  font-size: 15px;
  color: #0c365a;
  position: relative;
}
.recent-transactions .details {
  border: 2px solid #edf3ff;
  border-radius: 10px;
  margin-top: -20px;
  padding-top: 40px;
}
</style>