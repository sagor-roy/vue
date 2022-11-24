<template>
  <Header :cart="cart"></Header>
  <Cart
    v-if="cartIsNull"
    @cartShow="showCart"
    :cart="cart"
    @clickIncre2="addIncrement"
    @clickDecre2="addDecrement"
    @removeItem="removeItems"
  />
  <router-view></router-view>
</template>

<script>
import Header from "./components/Header.vue";
import Cart from "./components/Cart.vue";
export default {
  components: {
    Header,
    Cart,
  },
  data() {
    return {
      cartIsNull: false,
      cart: [],
    };
  },
  methods: {
    addIncrement(id) {
      this.emitter.emit("addIncre", id);
    },
    addDecrement(id) {
      this.emitter.emit("addDec", id);
    },
    removeItems(id) {
      this.emitter.emit("remove", id);
      this.cartIsNull = this.cart.length === 0 ? false : true;
      this.$toast.show("Remove from Cart", {
        type: "success",
        position: "top",
      });
    },
    showCart(status) {
      this.cartIsNull = status;
    },
  },
  mounted() {
    this.emitter.on("cartShow", (status) => {
      this.showCart(status);
    });
    this.emitter.on("cart", (res) => {
      this.cart = res;
    });
  },
};
</script>
