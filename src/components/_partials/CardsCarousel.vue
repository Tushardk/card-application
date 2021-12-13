<template>
  <div>
    <div class="row flex-nowrap mt-1 overflow-y-hidden overflow-x-hideen pb-4">
      <div
        class="col-11"
        v-for="card in cards"
        :key="`card-${card.id}`"
        :data-card-="`${card.id}`"
        @click="bringCardToFront(card.id)"
      >
        <div
          class="show-card-no toggle-card-border-radius"
          @click="toggleCardNo(card.id)"
        >
          {{ card.cardNoShown ? "Hide card number" : "Show card number" }}
        </div>
        <div
          class="px-4 py-3 card-border-radius position-relative"
          :style="{ backgroundColor: card.cardColor }"
        >
          <div class="text-end pb-2">
            <img src="@/assets/mobile/Logo-2.svg" alt="Aspire" />
          </div>
          <div class="fs-4 fw-bold pb-2">{{ card.cardHolderName }}</div>
          <div
            class="pb-2"
            :class="[
              card.cardNoShown ? 'letter-spacing-5' : 'letter-spacing-1',
            ]"
            v-html="
              card.cardNoShown ? card.cardNoVisible : card.cardNoInvisible
            "
          ></div>
          <div class="d-flex justify-content-start fw-bold">
            <div class="me-4">{{ card.cardExpiry }}</div>
            <div v-html="card.cardCvvNo"></div>
          </div>
          <div class="text-end pb-2">
            <img src="@/assets/mobile/Visa Logo.svg" alt="Aspire" />
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div
        v-for="card in cards"
        :key="`card-navigator-${card.id}`"
        class="card-dot rounded me-3"
        :class="[card.cardInView ? 'selected-card-dot' : 'deselected-card-dot']"
        @click="bringCardToFront(card.id)"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardsCarousel",
  data() {
    return {
      cards: [
        {
          id: 100,
          cardColor: "#01d167",
          // cardColor: "#666628",
          cardHolderName: "Mark Henry",
          cardNoVisible: "1234 5678 2020",
          cardNoInvisible:
            "&#9679; &#9679; &#9679; &#9679; &#9679; &#9679; &#9679; &#9679; 2020",
          cardExpiry: "Thru: 12/20",
          cardCvvNo: "CVV: * * *",
          cardInView: true,
          cardNoShown: false,
        },
        {
          id: 101,
          cardColor: "#2d2ddf",
          cardHolderName: "John Doe",
          cardNoVisible: "1234 5678 2020",
          cardNoInvisible:
            "&#9679; &#9679; &#9679; &#9679; &#9679; &#9679; &#9679; &#9679; 2020",
          cardExpiry: "Thru: 12/20",
          cardCvvNo: "CVV: * * *",
          cardInView: false,
          cardNoShown: false,
        },
        {
          id: 102,
          cardColor: "#4a184a",
          cardHolderName: "Jeff Bezos",
          cardNoVisible: "1234 5678 2020",
          cardNoInvisible:
            "&#9679; &#9679; &#9679; &#9679; &#9679; &#9679; &#9679; &#9679; 2020",
          cardExpiry: "Thru: 12/20",
          cardCvvNo: "CVV: * * *",
          cardInView: false,
          cardNoShown: false,
        },
        {
          id: 103,
          cardColor: "#01d167",
          cardHolderName: "Dwayne Johnson",
          cardNoVisible: "1234 5678 2020",
          cardNoInvisible:
            "&#9679; &#9679; &#9679; &#9679; &#9679; &#9679; &#9679; &#9679; 2020",
          cardExpiry: "Thru: 12/20",
          cardCvvNo: "CVV: * * *",
          cardInView: false,
          cardNoShown: false,
        },
      ],
    };
  },
  methods: {
    bringCardToFront(id) {
      document.querySelector(`[data-card-="${id}"]`).scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
      this.cards.forEach((card) => {
        id === card.id ? (card.cardInView = true) : (card.cardInView = false);
      });
    },
    toggleCardNo(id) {
      this.cards.map((card) => {
        card.id === id ? (card.cardNoShown = !card.cardNoShown) : null;
        return;
      });
    },
  },
};
</script>

<style scoped>
.overflow-y-hidden {
  overflow-y: hidden;
}
::-webkit-scrollbar {
  display: none;
}
.card-border-radius {
  border-radius: 0.8rem;
}
.toggle-card-border-radius {
  border-radius: 0.8rem 0.8rem 0 0;
}
.card-dot {
  width: 10px;
  height: 10px;
  background-color: #327855;
}
.selected-card-dot {
  width: 20px;
  background-color: #01d167;
}
.deselected-card-dot {
  background-color: #327855;
}
.show-card-no {
  margin-left: auto;
  background: #fff;
  width: 44%;
  text-align: center;
  color: #01d167;
  padding: 0 10px 4px 0;
  padding-bottom: 20px;
  top: 16px;
  position: relative;
  font-size: 0.8rem;
}
.letter-spacing-5 {
  letter-spacing: 5px;
}
.letter-spacing-1 {
  letter-spacing: 1px;
}
</style>