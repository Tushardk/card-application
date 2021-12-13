<template>
  <div>
    <div class="row no-gutter">
      <!-- Mobile Like Devices Components -->
      <div class="mobile-components no-gutter d-lg-none">
        <div class="row no-gutter">
          <div class="mobile-fixed-contents position-fixed">
            <account-summery device="mobile" />
            <card-types device="mobile" />
            <cards-carousel />
          </div>
          <div class="mobile-scrollable-contents">
            <mobile-scrollble-contents />
          </div>
          <div class="mobile-fixed-bottom-bar">
            <mobile-bottom-bar />
          </div>
        </div>
      </div>
      <!-- Desktop Like Devices Components -->
      <div class="desktop-components container no-gutter d-none d-lg-block">
        <div class="row no-gutter">
          <div class="col-3 no-gutter">
            <div class="wrapper">
              <div class="sticky-top"><side-section /></div>
            </div>
          </div>
          <div class="col-9 no-gutter">
            <main-section />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardTypes from "./_partials/CardTypes";
import CardsCarousel from "./_partials/CardsCarousel";
import AccountSummery from "./_partials/AccountSummery";
import MobileScrollbleContents from "./_partials/MobileScrollbleContents";
import MobileBottomBar from "./_partials/MobileBottomBar";
import SideSection from "./_partials/SideSection";
import MainSection from "./_partials/MainSection.vue";

export default {
  name: "Home",
  components: {
    CardTypes,
    CardsCarousel,
    AccountSummery,
    MobileScrollbleContents,
    MobileBottomBar,
    SideSection,
    MainSection,
  },
  mounted() {
    const mobileFixedContentsDivHeight = document.querySelector(
      ".mobile-fixed-contents"
    ).offsetHeight;
    document.querySelector(".mobile-scrollable-contents").style.marginTop = `${
      mobileFixedContentsDivHeight + 25
    }px`;
  },
  data() {
    return {
      accountBalance: 3000,
    };
  },
};
</script>

<style scoped>
.mobile-components {
  background: #0c365a;
}
.aspire-bg-green {
  background-color: #01d167;
}
.aspire-text-new-card {
  color: #23cefd;
}
.aspire-bg-new-card {
  background-color: #23cefd;
}
.mobile-scrollable-contents {
  z-index: 100;
  padding: 0 0 12vh 0;
  background-color: #fff;
  border-radius: 20px 20px 0 0;
}
</style>
