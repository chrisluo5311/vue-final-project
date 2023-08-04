const orderTestData = {
  success: true,
  orders: [
    {
      create_at: 1523539834,
      id: "-L9u2EUkQSoEmW7QzGLF",
      is_paid: true,
      message: "這是留言",
      paid_date: 1523539924,
      payment_method: "credit_card",
      products: {
        L8nBrq8Ym4ARI1Kog4t: {
          id: "L8nBrq8Ym4ARI1Kog4t",
          product_id: "-L8moRfPlDZZ2e-1ritQ",
          qty: "3",
        },
      },
      total: 100,
      user: {
        address: "kaohsiung",
        email: "test@gmail.com",
        name: "test",
        tel: "0912346768",
      },
      num: 1,
    },
    {
      create_at: 1523539519,
      id: "-L9u11NAE0m0SpSBUDIq",
      is_paid: false,
      message: "這是留言",
      payment_method: "credit_card",
      products: {
        L8nBrq8Ym4ARI1Kog4t: {
          id: "L8nBrq8Ym4ARI1Kog4t",
          product_id: "-L8moRfPlDZZ2e-1ritQ",
          qty: "3",
        },
      },
      user: {
        address: "kaohsiung",
        email: "test@gmail.com",
        name: "test",
        tel: "0912346768",
      },
      num: 2,
    },
  ],
  pagination: {
    total_pages: 1,
    current_page: 1,
    has_pre: false,
    has_next: false,
    category: null,
  },
  messages: [],
};

export { orderTestData };
