<template>
  <LoadingComponent :active="isLoading"></LoadingComponent>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">購買時間</th>
        <th>Email</th>
        <th>購買款項</th>
        <th width="120">應付金額</th>
        <th width="100">是否付款</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="order in orders" :key="order.id">
        <td>{{ $filters.date(order.create_at) }}</td>
        <td>{{ order.user.email }}</td>
        <td>標題</td>
        <td class="text-right">{{ order.total }}</td>
        <td>
          <!-- <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"> -->
          <!-- <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label> -->

          <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
          <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm">檢視</button>
            <button class="btn btn-outline-danger btn-sm">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data () {
    return {
      orders: [],
      pagination: {},
      tempOrder: {},
      isLoading: false
    }
  },
  methods: {
    getOrders (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        this.isLoading = false;
        if (response.data.success) {
          console.log(response);
          this.orders = response.data.orders;
          this.pagination = response.data.pagination;
        }
      })
    }
  },
  created () {
    // this.getOrders();
  }
}

</script>
