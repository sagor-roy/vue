<template lang="">
  <div class="list-group rounded-0 border-0">
    <div class="parent__list" v-for="(item, index) in data" :key="index">
      <div class="list"></div>
      <div class="list small"></div>
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
.list {
  width: 70%;
  background-color: #e0e0e0;
  padding: 3px 0;
  margin: 6px 15px;
  border-radius: 10px;
}

.list.small {
  width: 40%;
}

.parent__list {
  border-bottom: 1px solid #dee2e6;
  padding: 7px 0;
}
</style>
