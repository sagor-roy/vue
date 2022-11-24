<template lang="">
  <div class="col-md-4 my-2">
    <div class="product">
      <img :src="item.thumbnail" alt="product" class="img-fluid img__height" />
      <div class="product__body">
        <div class="d-flex align-items-center justify-content-between mb-2">
          <ul class="review__list">
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-regular fa-star"></i></li>
          </ul>
          <span class="badge bg-secondary">{{ item.brand }}</span>
        </div>

        <h6>{{ item.title }}</h6>
        <div class="d-flex align-items-center justify-content-between">
          <p class="price__with__discount">
            {{
              parseFloat(
                item.price - (item.price * item.discountPercentage) / 100
              ).toFixed(2)
            }}$
            <del> {{ item.price }}$</del>
          </p>
          <p class="stock">Stock : {{ item.stock }}</p>
        </div>

        <div class="d-flex mt-2">
          <button class="btn btn-sm btn-outline-info mx-1">View</button>
          <button class="btn btn-sm btn-outline-warning mx-1">Wishlist</button>
          <button @click="addToCart(item)" class="btn btn-sm btn-primary mx-1">
            Add to Cart
          </button>
          <!-- <div class="input-group mx-1">
            <button class="btn-primary btn btn-sm">-</button>
            <input type="text" readonly class="form-control form-control-sm" />
            <button class="btn-primary btn btn-sm">+</button>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
  emits: {
    products: null,
  },
  methods: {
    addToCart(item) {
      this.$emit("products", { ...item, qty: 1 });
    },
  },
};
</script>
