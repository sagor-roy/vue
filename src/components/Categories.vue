<template lang="">
  <div class="card overflow-hidden shadow">
    <div class="card-header bg-primary text-white">
      <h5 class="card-title">Categories</h5>
    </div>
    <div class="card-body p-0">
      <CategoriesLoader v-if="loading" :count="15" />
      <div v-else class="list-group rounded-0 border-0">
        <a
          v-for="(item, index) in cate"
          :key="index"
          href="#"
          class="list-group-item list-group-item-action border-end-0 border-start-0"
        >
          {{ item }}
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import CategoriesLoader from "./loader/CategoriesLoader.vue";
export default {
  components: {
    CategoriesLoader,
  },
  props: {
    cate: {
      type: Array,
      default: null,
    },
    loading: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
<style lang=""></style>
