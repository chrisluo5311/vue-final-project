<template>
  <LoadingComponent :active="isLoading"></LoadingComponent>
  <div class="text-end mt-3">
      <button class="btn btn-primary" type="button"
      @click="openModal(true)">
        建立新的優惠券
      </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>名稱</th>
        <th width="120">折扣百分比</th>
        <th width="120">到期日</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="coupon in coupons" :key="coupon.id">
        <td>{{ coupon.title }}</td>
        <td class="text-right">{{ coupon.percent }}%</td>
        <td class="text-right">{{ $filters.date(coupon.due_date) }}</td>
        <td>
          <span class="text-success" v-if="coupon.is_enabled">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm" @click="openModal(false,coupon)">編輯</button>
            <button class="btn btn-outline-danger btn-sm" @click="openModal(false,coupon,true)">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <PaginationComponent :pages="pagination" @emit-pages="getCoupons"></PaginationComponent>
  <CouponModal ref="couponModal" :coupon="tempCoupon" @update-coupon="updateCoupon"></CouponModal>
  <DelCouponModal ref="delCouponModal" :coupon="tempCoupon" @delete-coupon="deleteCoupon"></DelCouponModal>
</template>

<script>
import CouponModal from '@/components/CouponModal.vue';
import DelCouponModal from '@/components/DelCouponModal.vue';
import PaginationComponent from '../components/PaginationComponent.vue';

export default {
  data() {
    return {
      coupons: [],
      tempCoupon: {},
      pagination: {},
      isNew: false,
      isLoading: false
    }
  },
  components: {
    CouponModal,
    DelCouponModal,
    PaginationComponent
  },
  methods: {
    openModal (isNew, item, isDelete = false) {
      if (isNew) {
        this.tempCoupon = {};
      } else {
        this.tempCoupon = { ...item };
      }
      this.isNew = isNew;
      const modalComponent = (isDelete) ? this.$refs.delCouponModal : this.$refs.couponModal;
      modalComponent.showModal();
    },
    getCoupons(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        this.isLoading = false;
        if (response.data.success) {
          console.log(response.data.coupons);
          this.coupons = response.data.coupons;
          this.pagination = response.data.pagination;
        }
      });
    },
    updateCoupon(item) {
      this.tempCoupon = item;
      console.log('updateCoupon', this.tempCoupon);
      // 新增
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`;
      let httpMethod = 'post';
      // 編輯
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
        httpMethod = 'put';
      }
      const couponComponent = this.$refs.couponModal;
      this.isLoading = true;
      this.$http[httpMethod](api, { data: this.tempCoupon }).then((response) => {
        this.isLoading = false;
        console.log(response);
        couponComponent.hideModal();
        this.getCoupons();
        this.$httpPushMessageState(response, '優惠券更新');
      });
    },
    deleteCoupon(item) {
      const delCoupon = this.$refs.delCouponModal;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`;
      this.isLoading = true;
      this.$http.delete(api).then((response) => {
        this.isLoading = false;
        if (response.data.success) {
          console.log(response);
          delCoupon.hideModal();
          this.getCoupons();
        }
      });
    }
  },
  created() {
    this.getCoupons();
  }
}
</script>
