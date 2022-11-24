<template lang="">
  <ProductLoader v-if="loading" :count="6" />
  <ProductItem
    v-else
    v-for="(item, index) in product"
    :key="index"
    :item="item"
    @products="addToCart($event)"
  />
</template>
<script>
import ProductLoader from "./loader/ProductLoader.vue";
import ProductItem from "./ProductItem.vue";
export default {
  components: {
    ProductLoader,
    ProductItem,
  },
  props: {
    product: {
      type: Array,
      default: null,
    },
    cart: {
      type: Array,
      default: null,
    },
    loading: {
      type: Boolean,
      default: true,
    },
  },
  emits: {
    product: null,
  },
  methods: {
    addToCart(item) {
      this.$emit("product", item);
    },
  },
};
</script>
