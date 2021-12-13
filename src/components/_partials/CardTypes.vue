<template>
  <div class="mt-4">
    <div v-if="device === 'mobile'" class="d-inline container row no-gutter">
      <span
        v-for="(cardType, index) in typeOfCards"
        :key="`cardType-${index}`"
        class="me-4"
      >
        <span class="card-label" @click="changeCardType(cardType.id)">
          <span
            :class="[
              cardType.selected
                ? 'border-bottom border-3 border-info text-white fw-bold'
                : 'text-secondary',
            ]"
            >{{ cardType.label }}
          </span>
        </span>
      </span>
    </div>

    <div v-if="device === 'desktop'" class="d-inline">
      <span
        v-for="(cardType, index) in typeOfCards"
        :key="`cardType-${index}`"
        class="me-4"
      >
        <span @click="changeCardType(cardType.id)">
          <span
            role="button"
            :class="[
              cardType.selected
                ? 'border-bottom border-3 border-info text-dark fw-bold'
                : 'text-secondary',
            ]"
            >{{ cardType.label }}
          </span>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardTypes",
  props: ["device"],
  data() {
    return {
      typeOfCards: [
        { id: 100, label: "My debit cards", selected: true },
        { id: 101, label: "All company cards" },
      ],
    };
  },
  methods: {
    changeCardType(id) {
      this.typeOfCards.forEach((cardType) => {
        if (id === cardType.id) {
          cardType["selected"] = true;
        } else {
          cardType.selected = false;
        }
      });
    },
  },
};
</script>
<style scoped>
.card-label {
  font-size: 12px;
}
</style>
