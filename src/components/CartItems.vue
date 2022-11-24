<template lang="">
  <div class="row m-2 py-3 border-bottom" v-for="items in item" :key="items.id">
    <div class="col-md-9">
      <div class="row">
        <div class="col-md-4">
          <img :src="items.thumbnail" class="img-fluid" />
        </div>
        <div class="col-md-8">
          <h6>{{ items.title }}</h6>
          <div class="row">
            <div class="col-7">
              <div class="input-group">
                <button
                  @click="decrement(items)"
                  class="btn-primary btn btn-sm"
                >
                  -
                </button>
                <input
                  type="text"
                  readonly
                  class="form-control form-control-sm"
                  :value="items.qty"
                />
                <button
                  @click="increment(items.id)"
                  class="btn-primary btn btn-sm"
                >
                  +
                </button>
              </div>
            </div>
            <div class="col-12">
              <p>
                {{
                  parseFloat(
                    items.price - (items.price * items.discountPercentage) / 100
                  ).toFixed(2)
                }}$ x {{ items.qty }} =
                {{
                  parseFloat(
                    parseFloat(
                      items.price -
                        (items.price * items.discountPercentage) / 100
                    ).toFixed(2) * items.qty
                  ).toFixed(2)
                }}$
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-3 text-end">
      <button @click="remove(items.id)" class="btn btn-danger btn-sm">
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
  </div>
  <div v-if="total > 0" class="text-end m-4">
    <h5>Total : {{ total }}$</h5>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      total: 0,
    };
  },
  emits: {
    increment: null,
    decrement: null,
    removeItem: null,
  },
  methods: {
    getTotal() {
      let discount = 0;
      let price = 0;
      this.item.forEach(
        (items) => {
          discount +=
            (items.qty * (items.price * items.discountPercentage)) / 100;
          price += items.price * items.qty;
        },
        discount,
        price
      );
      this.total = parseFloat(price - discount).toFixed(2);
    },
    increment(id) {
      this.$emit("increment", id);
      this.getTotal();
    },
    decrement(items) {
      if (items.qty <= 1) {
        this.$toast.show("Minimun 1 quantity must be kept", {
          type: "error",
          position: "top",
        });
        return;
      }
      this.$emit("decrement", items.id);
      this.getTotal();
    },
    remove(id) {
      this.$emit("removeItem", id);
      this.getTotal();
    },
  },
  mounted() {
    this.getTotal();
  },
};
</script>
<style lang=""></style>
