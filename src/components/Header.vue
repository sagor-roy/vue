<template lang="">
  <header class="position-relative">
    <div class="header__fixed">
      <div class="container-fluid">
        <div class="card card-body shadow">
          <div class="d-flex align-items-center justify-content-between">
            <h3 class="m-0">Ecommerce</h3>
            <ul class="assets">
              <li>
                <span><i class="fa-solid fa-code-compare"></i></span>
                <span class="qty">0</span>
              </li>
              <li @click="cartShow()">
                <span><i class="fa-sharp fa-solid fa-cart-shopping"></i></span>
                <span class="qty">{{ cart.length }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  props: {
    cart: {
      type: Array,
      default: 0,
    },
  },
  methods: {
    cartShow() {
      this.emitter.emit("cartShow", true);
    },
  },
};
</script>
<style lang=""></style>
