<template>
  <LoadingComponent :active="isLoading"></LoadingComponent>
  <div class="container">
    <div class="row mt-4">
      <div class="col-md-7">
        <table class="table align-middle">
          <thead>
            <tr>
              <th>圖片</th>
              <th>商品名稱</th>
              <th>價格</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id">
              <td style="width: 200px">
                <div
                  style="
                    height: 100px;
                    background-size: cover;
                    background-position: center;
                  "
                  :style="{ backgroundImage: `url(${product.imageUrl})` }"
                ></div>
              </td>
              <td>
                <a href="#" class="text-dark">{{ product.title }}</a>
              </td>
              <td>
                <div class="h5"></div>
                <div class="h6" v-if="!product.price">
                  {{ product.origin_price }}
                </div>
                <del class="h6" v-if="product.price"
                  >原價 {{ product.origin_price }}</del
                >
                <div class="h5" v-if="product.price">
                  現在只要 {{ product.price }}
                </div>
              </td>
              <td>
                <div class="btn-group">
                  <button
                    class="btn btn-outline-secondary btn-sm"
                    @click="getProduct(product.id)"
                  >
                    查看更多
                  </button>
                  <button
                    class="btn btn-outline-danger btn-sm"
                    :disabled="this.status.loadingItem === product.id"
                    @click="addCart(product.id)"
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
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 購物車列表 -->
      <div class="col-md-5">
        <div class="sticky-top">
          <table class="table align-middle">
            <thead>
              <tr>
                <th></th>
                <th>品名</th>
                <th style="width: 130px">數量</th>
                <th>單價</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="this.cart">
                <tr v-for="order in cart.carts" :key="order.id">
                  <td>
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm"
                      @click="deleteOrder(order)"
                    >
                      <i class="bi bi-trash"></i>
                    </button>
                  </td>
                  <td>
                    {{ order.product.title }}
                    <div class="text-success" v-if="order.coupon">
                      已套用優惠券
                    </div>
                  </td>
                  <td>
                    <div class="input-group input-group-sm">
                      <input
                        type="number"
                        class="form-control"
                        min="1"
                        :disabled="order.id === status.loadingItem"
                        @change="updateCart(order)"
                        v-model.number="order.qty"
                      />
                      <div class="input-group-text">
                        / {{ order.product.unit }}
                      </div>
                    </div>
                  </td>
                  <td class="text-end">
                    <small
                      class="text-success"
                      v-if="order.final_total !== order.total"
                      >折扣價：</small
                    >
                    {{ $filters.currency(order.final_total) }}
                  </td>
                </tr>
              </template>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" class="text-end">總計</td>
                <td class="text-end">{{ $filters.currency(cart.total) }}</td>
              </tr>
              <tr v-if="cart.final_total != cart.total">
                <td colspan="3" class="text-end text-success">折扣價</td>
                <td class="text-end text-success">
                  {{ $filters.currency(cart.final_total) }}
                </td>
              </tr>
            </tfoot>
          </table>
          <div class="input-group mb-3 input-group-sm">
            <input
              type="text"
              class="form-control"
              placeholder="請輸入優惠碼"
              v-model="coupon_code"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-secondary"
                type="button"
                :disabled="
                  coupon_code != '' && this.status.loadingCoupon === coupon_code
                "
                @click="addCouponCode"
              >
                <div
                  class="spinner-border text-secondary spinner-border-sm"
                  role="status"
                  v-if="
                    coupon_code != '' &&
                    this.status.loadingCoupon === coupon_code
                  "
                >
                  <span class="visually-hidden">Loading...</span>
                </div>
                套用優惠碼
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <!-- 建立訂單 -->
      <div class="my-5 row justify-content-center">
        <Form class="col-md-6" @submit="createOrder" v-slot="{ errors }">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <Field
              id="email"
              name="email"
              type="email"
              class="form-control"
              rules="email|required"
              placeholder="請輸入 Email"
              :class="{'is-invalid':errors['email'] }"
              v-model="form.user.email"
            />
            <!-- 此處的 invalid-feedback 搭配上面 is-invalid 表示無效 -->
            <error-message name="email" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">收件人姓名</label>
            <Field
              id="name"
              name="姓名"
              type="text"
              class="form-control"
              rules="required"
              placeholder="請輸入姓名"
              :class="{'is-invalid':errors['姓名'] }"
              v-model="form.user.name"
            />
            <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">電話</label>
            <Field
              id="phone"
              name="電話"
              type="text"
              class="form-control"
              placeholder="請輸入電話"
              :rules="isPhone"
              :class="{'is-invalid':errors['電話'] }"
              v-model="form.user.tel"
            />
            <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="address" class="form-label">地址</label>
            <Field
              id="address"
              name="地址"
              type="text"
              class="form-control"
              rules="required"
              placeholder="請輸入地址"
              :class="{'is-invalid':errors['地址'] }"
              v-model="form.user.address"
            />
            <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">留言</label>
            <Field
              as="textarea"
              id="message"
              name="留言"
              type="text"
              class="form-control"
              :class="{'is-invalid':errors['留言'] }"
              v-model="form.message"
            />
            <ErrorMessage name="留言" class="invalid-feedback"></ErrorMessage>
          </div>
          <button class="btn btn-danger" type="submit">Submit</button>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      product: {},
      status: {
        loadingItem: "", // 對應品項id
        loadingCoupon: "",
      },
      cart: [],
      coupon_code: "",
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      isLoading: false,
    };
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        this.isLoading = false;
        if (response.data.success) {
          this.products = response.data.products;
        }
      });
    },
    getProduct(id) {
      this.$router.push(`/user/product/${id}`);
    },
    addCart(productId) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.status.loadingItem = productId;
      const cart = {
        product_id: productId,
        qty: 1,
      };
      this.$http.post(api, { data: cart }).then((response) => {
        if (response.data.success) {
          this.status.loadingItem = "";
          console.log(response);
          this.getCart();
        }
      });
    },
    getCart() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(api).then((response) => {
        if (response.data.success) {
          console.log("getCart", response);
          this.cart = response.data.data;
        }
      });
    },
    deleteOrder(order) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${order.id}`;
      this.isLoading = true;
      this.$http.delete(api).then((response) => {
        if (response.data.success) {
          this.isLoading = false;
          console.log("deleteOrder", response);
          this.getCart();
        }
      });
    },
    updateCart(order) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${order.id}`;
      this.status.loadingItem = order.id;
      const cart = {
        product_id: order.product_id,
        qty: order.qty,
      };
      this.isLoading = true;
      this.$http.put(api, { data: cart }).then((response) => {
        if (response.data.success) {
          this.isLoading = false;
          console.log("updateCart", response);
          this.status.loadingItem = "";
          this.getCart();
        }
      });
    },
    addCouponCode() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      this.status.loadingCoupon = this.coupon_code;
      const coupon = {
        code: this.coupon_code,
      };
      this.$http.post(api, { data: coupon }).then((response) => {
        if (response.data.success) {
          console.log("addCouponCode", response);
          this.status.loadingCoupon = "";
          this.getCart();
          this.coupon_code = "";
        }
      });
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    },
    createOrder() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      const order = this.form;
      this.$http.post(api, { data: order }).then((response) => {
        console.log("createOrder", response);
      });
    },
  },
  created() {
    this.getProducts();
    this.getCart();
  },
};
</script>
