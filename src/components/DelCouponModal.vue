<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-danger text-white">
        <h5 class="modal-title">刪除 {{ tempCoupon.title }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <p>是否刪除 <span class="text-danger">{{ tempCoupon.title }}</span>(刪除後將無法恢復)</p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger text-white" @click="$emit('delete-coupon',tempCoupon)">確認刪除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  props: {
    coupon: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  watch: {
    coupon () {
      this.tempCoupon = this.coupon;
    }
  },
  data () {
    return {
      modal: {},
      tempCoupon: {},
    }
  },
  mixins: [modalMixin]
}

</script>
