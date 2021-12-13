<template>
  <div class="row no-gutter mobile-bottom-bar bg-light">
    <div
      v-for="(item, index) in menuItems"
      :key="`menu-item${index}`"
      class="col"
    >
      <div class="text-center">
        <div class="my-1">
          <img
            :src="require(`@/assets/mobile/${item.logoIconName}.svg`)"
            :alt="`${item.logoIconName}`"
          />
        </div>
        <div class="text-dark">{{ item.label }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileBottomBar",
  data() {
    return {
      menuItems: [
        { id: 100, label: "Home", logoIconName: "Logo-1" },
        { id: 101, label: "Cards", logoIconName: "pay" },
        {
          id: 102,
          label: "Payments",
          logoIconName: "77cfcfe5525d392a91457d5e35b0352c",
        },
        { id: 103, label: "Credit", logoIconName: "Credit" },
        { id: 104, label: "Profile", logoIconName: "Account" },
      ],
    };
  },
};
</script>

<style scoped>
.mobile-bottom-bar {
  position: fixed;
  z-index: 1000;
  bottom: 0;
  height: 9vh;
  left: 0;
  right: 0;
  padding-top: 1vh;
  font-size: 12px;
  box-shadow: 0 -5px 5px -5px #333;

}

.mobile-bottom-bar .col {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>