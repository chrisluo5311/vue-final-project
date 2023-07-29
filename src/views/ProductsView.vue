<template>
    <div class="text-end">
      <button class="btn btn-primary" type="button"
      @click="$refs.productModal.showModal()">
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
        <td>{{item.category}}</td>
        <td>{{item.title}}</td>
        <td class="text-right">
            {{item.origin_price}}
        </td>
        <td class="text-right">
            {{item.price}}
        </td>
        <td>
            <span class="text-success" v-if="item.is_enabled">啟用</span>
            <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
            <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm">編輯</button>
            <button class="btn btn-outline-danger btn-sm">刪除</button>
            </div>
        </td>
        </tr>
    </tbody>
    </table>
    <ProductModal ref="productModal"></ProductModal>
</template>

<script>
import ProductModal from '../components/ProductModal.vue'

export default {
  data () {
    return {
      product: [],
      pagination: {}
    }
  },
  components: {
    ProductModal
  },
  methods: {
    getProducts () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products`
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          console.log(res)
          this.product = res.data.products
          this.pagination = res.data.pagination
        }
      })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>