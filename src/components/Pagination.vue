<template lang="">
  <nav>
    <ul class="pagination mt-4">
      <li class="page-item" :class="[product.skip === 0 ? 'disabled' : '']">
        <a class="page-link" @click="prevList(prev)">Previous</a>
      </li>
      <li class="page-item" v-for="(items, index) in item">
        <a
          class="page-link"
          :class="[items === product.skip ? 'active' : '']"
          @click="skipOfItem(items)"
          >{{ index + 1 }}</a
        >
      </li>
      <li class="page-item" :class="[next == undefined ? 'disabled' : '']">
        <a class="page-link" @click="nextList(next)">Next</a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      item: [],
      next: 12,
      prev: null,
      skip: 12,
    };
  },
  mounted() {
    for (let skip = 0; skip <= 100; skip += this.skip) {
      this.item.push(skip);
    }
    this.commonFunction(this.product.skip);
  },
  methods: {
    skipOfItem(skip) {
      this.commonEmitFunction(skip);
      this.commonFunction(skip);
    },
    nextList(skip) {
      this.commonEmitFunction(skip);
      this.commonFunction(skip);
    },
    prevList(prev) {
      const number = prev - this.skip;
      this.commonEmitFunction(number);
      this.commonFunction(number);
    },
    commonEmitFunction(skipNumber) {
      this.$emit("skipOfNumber", skipNumber);
    },
    commonFunction(skipNumber) {
      for (let index = 0; index < this.item.length; index++) {
        if (this.item[index] == skipNumber) {
          this.next = this.item[index + 1];
          this.prev = this.item[index];
        }
      }
    },
  },
};
</script>
<style scoped>
a.page-link {
  cursor: pointer;
}
</style>
