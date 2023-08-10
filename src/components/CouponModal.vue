<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>新增優惠券</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-12">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  placeholder="請輸入標題"
                  v-model="tempCoupon.title"
                />
              </div>

              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="coupon_percent" class="form-label"
                    >折扣百分比</label
                  >
                  <input
                    type="number"
                    class="form-control"
                    id="coupon_percent"
                    placeholder="請輸入百分比"
                    min="1"
                    v-model.number="tempCoupon.percent"
                  />
                </div>
              </div>
              <div class="mb-3">
                <label for="due_date" class="form-label">到期日</label>
                <input
                  type="date"
                  class="form-control"
                  id="due_date"
                  v-model.lazy="dueDate"
                />
              </div>
              <div class="mb-3">
                <label for="code" class="form-label">Code</label>
                <input
                  type="text"
                  class="form-control"
                  id="code"
                  placeholder="請輸入code"
                  v-model="tempCoupon.code"
                />
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="tempCoupon.is_enabled"
                    :true-value="1"
                    :false-value="0"
                    id="is_enabled"
                  />
                  <label class="form-check-label" for="is_enabled">
                    是否啟用
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="$emit('update-coupon', tempCoupon)"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from "@/mixins/modalMixin";

export default {
  props: {
    coupon: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: {
    coupon() {
      this.tempCoupon = this.coupon;
      this.dueDate = this.$filters.formatTime(this.coupon.due_date);
    },
    dueDate() {
      this.tempCoupon.due_date = this.$filters.toUnixStamp(this.dueDate);
    }
  },
  data() {
    return {
      modal: {},
      tempCoupon: {},
      dueDate: ''
    };
  },
  mixins: [modalMixin],
};
</script>
