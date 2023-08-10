<template>
    <LoadingComponent :active="isLoading"></LoadingComponent>
    <div class="text-end mt-3">
      <button class="btn btn-primary" type="button"
      @click="openModal(true)">
        增加一個商品
      </button>
    </div>
    <table class="table mt-4">
    <thead>
        <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="item in product" :key="item.id">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td class="text-right">
            {{ $filters.currency(item.origin_price) }}
        </td>
        <td class="text-right">
            {{ $filters.currency(item.price) }}
        </td>
        <td>
            <span class="text-success" v-if="item.is_enabled">啟用</span>
            <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
            <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm" @click="openModal(false, item)">編輯</button>
            <button class="btn btn-outline-danger btn-sm" @click="openModal(false, item, true)">刪除</button>
            </div>
        </td>
        </tr>
    </tbody>
    </table>
    <PaginationComponent :pages="pagination" @emit-pages="getProducts"></PaginationComponent>
    <ProductModal ref="productModal"
    :product="tempProduct" @update-product="updateProduct"></ProductModal>
    <DelModal ref="delModal" :product="tempProduct" @delete-product="deleteProduct"></DelModal>
</template>

<script>
import ProductModal from '../components/ProductModal.vue';
import DelModal from '../components/DelModal.vue';
import PaginationComponent from '../components/PaginationComponent.vue';

export default {
  data () {
    return {
      product: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false,
    }
  },
  components: {
    ProductModal,
    DelModal,
    PaginationComponent
  },
  inject: ['emitter'],
  methods: {
    openModal (isNew, item, isDelete = false) {
      if (isNew) {
        this.tempProduct = {};
      } else {
        this.tempProduct = { ...item };
      }
      this.isNew = isNew;
      let modalComponent = this.$refs.productModal;
      if (isDelete) {
        modalComponent = this.$refs.delModal;
      }
      modalComponent.showModal();
    },
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        this.isLoading = false;
        if (response.data.success) {
          console.log(response);
          this.product = response.data.products;
          this.pagination = response.data.pagination;
        }
      });
    },
    updateProduct (item) {
      this.tempProduct = item;
      console.log(this.tempProduct);
      // 新增
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpMethod = 'post';
      // 編輯
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        httpMethod = 'put';
      }
      const productComponent = this.$refs.productModal;
      this.isLoading = true;
      this.$http[httpMethod](api, { data: this.tempProduct }).then((response) => {
        this.isLoading = false;
        console.log(response);
        productComponent.hideModal();
        this.getProducts();
        this.$httpPushMessageState(response)
      });
    },
    deleteProduct (item) {
      const delComponent = this.$refs.delModal;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
      this.isLoading = true;
      this.$http.delete(api).then((response) => {
        this.isLoading = false;
        if (response.data.success) {
          console.log(response);
          delComponent.hideModal();
          this.getProducts();
        }
      });
    }
  },
  created () {
    this.getProducts();
  }
}
</script>
