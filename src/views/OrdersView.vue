<template>
  <LoadingComponent :active="isLoading"></LoadingComponent>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>購買時間</th>
        <th>Email</th>
        <th>購買款項</th>
        <th>應付金額</th>
        <th>是否付款</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="order in orders" :key="order.id">
        <tr>
          <td>{{ $filters.date(order.create_at) }}</td>
          <td><span v-if="order.user">{{ order.user.email }}</span></td>
          <td>
            <ul class="list-unstyled">
              <li v-for="product in order.products" :key="product.id">
              {{ product.title }} 數量: {{ product.qty }} {{ product.unit }}
              </li>
            </ul>
          </td>
          <td class="text-right">{{ order.total }}</td>
          <td>
            <div class="form-check form switch">
              <input
                class="form-check-input"
                type="checkbox"
                :id="`paidSwitch${order.id}`"
                v-model="order.is_paid"
                @change="updatePaid(order)"
              />
              <label class="form-check-label" :for="`paidSwitch${order.id}`">
                <span v-if="order.is_paid">已付款</span>
                <span v-else>未付款</span>
              </label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm" @click="openModal(false,order)">檢視</button>
              <button class="btn btn-outline-danger btn-sm" @click="openModal(false,order,true)">刪除</button>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
  <PaginationComponent :pages="pagination" @emit-pages="getOrders"></PaginationComponent>
  <OrderModal ref="orderModal" :order="tempOrder" ></OrderModal>
  <DelOrderModal ref="delOrderModal" :order="tempOrder" @delete-order="deleteOrder"></DelOrderModal>
</template>

<script>
import OrderModal from '@/components/OrderModal.vue';
import DelOrderModal from '@/components/DelOrderModal.vue';
import PaginationComponent from '../components/PaginationComponent.vue';

export default {
  data() {
    return {
      orders: [],
      pagination: {},
      tempOrder: {},
      isLoading: false,
      isNew: false
    };
  },
  components: {
    OrderModal,
    DelOrderModal,
    PaginationComponent
  },
  methods: {
    openModal (isNew, item, isDelete = false) {
      console.log('openModal', item);
      this.tempOrder = { ...item };
      this.isNew = isNew;
      let modalComponent = this.$refs.orderModal;
      if (isDelete) {
        modalComponent = this.$refs.delOrderModal;
      }
      modalComponent.showModal();
    },
    getOrders(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        this.isLoading = false;
        if (response.data.success) {
          console.log(response);
          this.orders = response.data.orders;
          this.pagination = response.data.pagination;
        }
      });
    },
    updatePaid(order) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${order.id}`;
      this.isLoading = true;
      const paid = {
        is_paid: order.is_paid
      };
      this.$http.put(api, { data: paid }).then((response) => {
        this.isLoading = false;
        if (response.data.success) {
          console.log(response);
          this.getOrders();
          this.$httpPushMessageState(response, '訂單更新');
        }
      });
    },
    deleteOrder (item) {
      const delComponent = this.$refs.delOrderModal;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`;
      this.isLoading = true;
      this.$http.delete(api).then((response) => {
        this.isLoading = false;
        if (response.data.success) {
          console.log(response);
          delComponent.hideModal();
          this.getOrders();
        }
      });
    }
  },
  created() {
    this.getOrders();
  },
};
</script>
