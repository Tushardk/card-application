<template>
  <div>
    <div v-if="device === 'mobile'">
      <div class="row no-gutter py-2 text-light">
        <div class="col-6 fs-6 align-self-end">Account balance</div>
        <div class="col-6 text-end">
          <img src="@/assets/mobile/Logo.svg" alt="Aspire" />
        </div>
      </div>

      <div class="row no-gutter">
        <div class="col-6 fw-bold d-flex">
          <div
            class="
              aspire-bg-green
              px-3
              rounded-3
              d-flex
              align-self-center
              flex-wrap
              me-2
            "
          >
            $$
          </div>
          <div class="fs-5 text-light">
            {{ accountBalance.toLocaleString() }}
          </div>
        </div>

        <div class="col-6 aspire-text-new-card d-flex justify-content-end">
          <div class="px-1 align-self-center">
            <img src="@/assets/mobile/box.svg" alt="Aspire" />
          </div>
          <div class="pt-1 fw-bold fs-6 align-self-center">New card</div>
        </div>
      </div>
    </div>

    <div v-if="device === 'desktop'">
      <div class="py-2 text-dark">
        <div class="fs-6 align-self-end">Account balance</div>
      </div>
      <div class="d-flex justify-content-between">
        <div class="fw-bold d-flex">
          <div
            class="
              aspire-bg-green
              px-3
              rounded-3
              align-self-center
              flex-wrap
              me-2
              text-light
            "
          >
            $$
          </div>
          <div class="fs-5 text-dark">
            {{ accountBalance.toLocaleString() }}
          </div>
        </div>

        <div
          class="
            aspire-text-new-card
            d-flex
            justify-content-end
            aspire-new-card-bg-desktop
            text-light
            py-1 px-3
            rounded
          "
        >
          <div class="px-1 align-self-center">
            <img src="@/assets/add.svg" alt="Aspire" />
          </div>
          <div class="pt-1 fw-bold fs-6 align-self-center">New card</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountSummery",
  props: ["device"],
  data() {
    return {
      accountBalance: 3000,
    };
  },
};
</script>

<style scoped>
.aspire-bg-green {
  background-color: #01d167;
}
.aspire-text-new-card {
  color: #23cefd;
}
.aspire-new-card-bg-desktop {
  background-color: #325baf;
}
.mobile-scrollable-contents {
  z-index: 100;
  padding: 0 0 12vh 0;
  background-color: #fff;
  border-radius: 20px 20px 0 0;
}
</style>