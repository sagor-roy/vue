<template lang="">
  <div @click="cartShow()" class="layouts"></div>
  <div class="cart__item">
    <h4>Cart Item</h4>
    <CartItems
      :item="cart"
      @increment="clickIncre($event)"
      @decrement="clickDec($event)"
      @removeItem="removeItem($event)"
    />
  </div>
</template>
<script>
import CartItems from "./CartItems.vue";
export default {
  props: {
    cart: {
      type: Array,
      default: null,
    },
  },
  components: {
    CartItems,
  },
  emits: {
    cartShow: null,
    clickIncre2: null,
    removeItem: null,
    clickDecre2: null,
  },
  methods: {
    cartShow() {
      this.$emit("cartShow", false);
    },
    clickIncre(id) {
      this.$emit("clickIncre2", id);
    },
    clickDec(id) {
      this.$emit("clickDecre2", id);
    },
    removeItem(id) {
      this.$emit("removeItem", id);
    },
  },
};
</script>
<style lang=""></style>
