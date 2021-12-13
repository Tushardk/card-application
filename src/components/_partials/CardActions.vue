<template>
  <div
    class="row no-gutter"
    :class="[device === 'mobile' ? 'card-actions' : 'card-actions-desktop']"
  >
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
        <div class="text-dark pt-1 fw-bold">{{ item.label }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardActions",
  props: ["device"],
  data() {
    return {
      menuItems: [
        { id: 100, label: "Freeze Card", logoIconName: "Freezecard" },
        { id: 101, label: "Set spend limit", logoIconName: "Set spend limit" },
        {
          id: 102,
          label: "Add to GPay",
          logoIconName: "GPay",
        },
        { id: 103, label: "Replace card", logoIconName: "Replace card" },
        { id: 104, label: "Cancel card", logoIconName: "Deactivate card" },
      ],
    };
  },
};
</script>

<style scoped>
.card-actions {
  font-size: 10px;
  padding: 10px 0 20px 0;
  border-radius: 20px 20px 0 0;
  background-color: #edf3ff;
}
.card-actions-desktop {
  font-size: 12px;
  padding: 10px 0 20px 0;
  border-radius: 20px;
  background-color: #edf3ff;
  margin-top: 2rem;
}
.card-actions .col {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>