<template lang="">
  <div class="col-md-4 my-2" v-for="(item, index) in data" :key="index">
    <div class="product">
      <div class="loading__img"></div>
      <div class="product__body">
        <div class="d-flex align-items-center justify-content-between mb-2">
          <div class="loader__star"></div>
          <span class="loader__brand"></span>
        </div>

        <div class="product__title"></div>
        <div class="d-flex align-items-center justify-content-between">
          <p class="loader__product_loader"></p>
          <p class="loader__stock"></p>
        </div>

        <div class="d-flex my-2">
          <div class="loader__btn mx-2"></div>
          <div class="loader__btn mx-2"></div>
          <div class="loader__btn mx-2"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    count: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    for (let index = 0; index < this.count; index++) {
      this.data.push(index);
    }
  },
};
</script>

<style scoped>
.loading__img {
  height: 25vh;
  display: block;
  width: 100%;
  background-color: #adb5bd;
}

.loader__star {
  background-color: #adb5bd;
  padding: 9px 0;
  width: 85%;
  margin-top: 10px;
  border-radius: 10px;
}

.product__title {
  background-color: #adb5bd;
  padding: 6px 0;
  width: 30%;
  margin-top: 16px;
  border-radius: 10px;
}

p.loader__product_loader {
  background-color: #adb5bd;
  padding: 6px 0;
  width: 70%;
  margin-top: 16px;
  border-radius: 10px;
}

.loader__btn {
  background-color: #adb5bd;
  padding: 6px 0;
  width: 45%;
  margin-top: 16px;
  border-radius: 10px;
}
</style>
