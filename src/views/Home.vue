<template>
  <div class="main__body">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3">
          <Categories :cate="category" :loading="isLoading" />
        </div>
        <div class="col-md-9">
          <div class="card card-body mb-3">
            <Slider />
          </div>
          <div class="card">
            <div class="card-body">
              <div class="row">
                <Product
                  :product="product.products"
                  @product="addToCart"
                  :loading="isLoading"
                  :cart="cart"
                />
                <div class="col-12">
                  <Pagination
                    :product="product"
                    @skipOfNumber="getSkipNumber"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Slider from "../components/Slider.vue";
import Pagination from "../components/Pagination.vue";
import Categories from "./../components/Categories.vue";
import Product from "./../components/Product.vue";
export default {
  components: {
    Product,
    Categories,
    Pagination,
    Slider,
  },
  data() {
    return {
      product: [],
      category: [],
      isLoading: true,
      cart: [],
      limit: 12,
    };
  },
  methods: {
    async getProduct(limit = this.limit, skip = 0) {
      await axios
        .get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
        .then((res) => {
          this.isLoading = false;
          this.product = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getCateogory() {
      await axios
        .get("https://dummyjson.com/products/categories")
        .then((res) => {
          this.isLoading = false;
          this.category = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addToCart(product) {
      let itemIndex = this.cart.findIndex((item) => item.id == product.id);
      if (itemIndex >= 0) {
        this.cart[itemIndex].qty++;
      } else {
        this.cart.push(product);
      }
      this.emitter.emit("cart", this.cart);
      this.$toast.show("Add to Cart", {
        type: "success",
        position: "top",
      });
    },
    getSkipNumber(number) {
      this.isLoading = true;
      this.getProduct(this.limit, number);
    },
  },
  mounted() {
    this.getProduct();
    this.getCateogory();
    this.emitter.on("addIncre", (id) => {
      let itemIndex = this.cart.findIndex((item) => item.id == id);
      this.cart[itemIndex].qty++;
    });
    this.emitter.on("addDec", (id) => {
      let itemIndex = this.cart.findIndex((item) => item.id == id);
      this.cart[itemIndex].qty--;
    });
    this.emitter.on("remove", (id) => {
      let itemIndex = this.cart.findIndex((item) => item.id == id);
      this.cart.splice(itemIndex, 1);
    });
  },
};
</script>
