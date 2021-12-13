<template>
  <div class="card-details text-dark mt-4">
    <div
      class="px-2 py-4 mx-4 card-details-collapsible-link fw-bold row"
      data-bs-toggle="collapse"
      data-bs-target="#card-details"
      aria-expanded="false"
      aria-controls="card-details"
    >
      <div class="col-2">
        <img src="@/assets/mobile/Group11889.svg" alt="Aspire" />
      </div>
      <div class="col-8 d-flex align-self-end">Card details</div>
      <div v-if="cardDetailsCollapsed" class="col-2">
        <img src="@/assets/mobile/down-arrow.svg" alt="Aspire" />
      </div>
      <div v-else class="col-2">
        <img src="@/assets/mobile/down-arrow-1.svg" alt="Aspire" />
      </div>
    </div>
    <div class="px-4 mx-4 collapse details" id="card-details">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
        aspernatur libero ut, repellendus, cumque nulla ex labore dolor dolore
        quod inventore ad nam perspiciatis soluta quos assumenda tempora id
        obcaecati molestias voluptate necessitatibus cupiditate voluptatem
        maxime! Repellat provident commodi porro perspiciatis nihil possimus
        optio esse? Quas molestias quidem alias animi.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
        aspernatur libero ut, repellendus, cumque nulla ex labore dolor dolore
        quod inventore ad nam perspiciatis soluta quos assumenda tempora id
        obcaecati molestias voluptate necessitatibus cupiditate voluptatem
        maxime! Repellat provident commodi porro perspiciatis nihil possimus
        optio esse? Quas molestias quidem alias animi.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
        aspernatur libero ut, repellendus, cumque nulla ex labore dolor dolore
        quod inventore ad nam perspiciatis soluta quos assumenda tempora id
        obcaecati molestias voluptate necessitatibus cupiditate voluptatem
        maxime! Repellat provident commodi porro perspiciatis nihil possimus
        optio esse? Quas molestias quidem alias animi.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
        aspernatur libero ut, repellendus, cumque nulla ex labore dolor dolore
        quod inventore ad nam perspiciatis soluta quos assumenda tempora id
        obcaecati molestias voluptate necessitatibus cupiditate voluptatem
        maxime! Repellat provident commodi porro perspiciatis nihil possimus
        optio esse? Quas molestias quidem alias animi.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
        aspernatur libero ut, repellendus, cumque nulla ex labore dolor dolore
        quod inventore ad nam perspiciatis soluta quos assumenda tempora id
        obcaecati molestias voluptate necessitatibus cupiditate voluptatem
        maxime! Repellat provident commodi porro perspiciatis nihil possimus
        optio esse? Quas molestias quidem alias animi.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardDetails",
  data() {
    return { cardDetailsCollapsed: true };
  },
  mounted: function () {
    this.collapsibleEvents();
  },
  methods: {
    collapsibleEvents() {
      const t = this;
      document
        .querySelector("#card-details")
        .addEventListener("show.bs.collapse", function () {
          t.cardDetailsCollapsed = false;
        });
      document
        .querySelector("#card-details")
        .addEventListener("hide.bs.collapse", function () {
          t.cardDetailsCollapsed = true;
        });
    },
  },
};
</script>

<style scoped>
.card-details .card-details-collapsible-link {
  -webkit-box-shadow: 0 0 10px #edf3ff;
  box-shadow: 0 0 10px #edf3ff;
  border-radius: 10px;
  background-color: #edf3ff;
  font-size: 15px;
  color: #0c365a;
  position: relative;
}
.card-details .details {
  border: 2px solid #edf3ff;
  border-radius: 10px;
  margin-top: -20px;
  padding-top: 40px;
}
</style>