<template>
  <div class="side-section min-vh-100 vh-100 p-5">
    <img src="@/assets/AspireLogo.svg" alt="Aspire" />
    <div class="py-4 site-text fs-5">
      Trusted way of banking for 3,000+ SMEs and startups in Singapore
    </div>
    <div v-for="(item, index) in menuItems" :key="`menu-item${index}`">
      <div class="d-flex mt-4" role="button">
        <div class="my-3">
          <img
            :src="require(`@/assets/mobile/${item.logoIconName}.svg`)"
            :alt="`${item.logoIconName}`"
          />
        </div>
        <div class="fs-6 ms-4 my-3">{{ item.label }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideSection",
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
        { id: 104, label: "Settings", logoIconName: "Account" },
      ],
    };
  },
};
</script>

<style scoped>
.side-section {
  background: #0c365a;
  color: #edf3ff;
}
</style>