<template>
  <LoadingComponent :active="isLoading"></LoadingComponent>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/user/cart">購物車</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ product.title }}
        </li>
      </ol>
    </nav>
    <div class="row justify-content-center">
      <article class="col-8">
        <h2>{{ product.title }}</h2>
        <div>{{ product.content }}</div>
        <div>{{ product.description }}</div>
        <img :src="product.imageUrl" alt="" class="img-fluid mb-3" />
      </article>
      <div class="col-4">
        <div class="h5" v-if="!product.price">
          {{ product.origin_price }} 元
        </div>
        <del class="h6" v-if="product.price"
          >原價 {{ product.origin_price }} 元</del
        >
        <div class="h5" v-if="product.price">
          現在只要 {{ product.price }} 元
        </div>
        <hr />
        <div class="mb-3">
          <label for="productNum" class="form-label">數量</label>
          <input
            type="number"
            class="form-control"
            id="productNum"
            placeholder="數量"
            min="1"
            v-model="quantity"
          />
        </div>
        <button
          type="button"
          class="btn btn-outline-danger"
          @click="addToCart(product.id)"
        >
          <div
            v-if="this.status.loadingItem === product.id"
            class="spinner-grow text-danger spinner-grow-sm"
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
          加到購物車
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["productId"],
  data() {
    return {
      product: {},
      quantity: 1,
      isLoading: false,
      status: {
        loadingItem: '', // 對應品項id
      },
    };
  },
  methods: {
    getProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.productId}`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        this.isLoading = false;
        if (response.data.success) {
          console.log("getProduct", response);
          this.product = response.data.product;
        }
      });
    },
    addToCart(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty: this.quantity,
      };
      this.$http.post(api, { data: cart }).then((response) => {
        if (response.data.success) {
          this.status.loadingItem = "";
          console.log(response);
        }
      });
    },
  },
  created() {
    this.getProduct();
  },
};
</script>
