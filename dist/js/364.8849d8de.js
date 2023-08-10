"use strict";(self["webpackChunkvue_final_project"]=self["webpackChunkvue_final_project"]||[]).push([[364],{364:function(t,e,s){s.r(e),s.d(e,{default:function(){return mt}});var a=s(3396),l=s(7139),o=s(9242);const i={class:"container"},n={class:"row mt-4"},d={class:"col-md-7"},r={class:"table align-middle"},c=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"圖片"),(0,a._)("th",null,"商品名稱"),(0,a._)("th",null,"價格"),(0,a._)("th")])],-1),u={style:{width:"200px"}},p={href:"#",class:"text-dark"},m=(0,a._)("div",{class:"h5"},null,-1),h={key:0,class:"h6"},_={key:1,class:"h6"},g={key:2,class:"h5"},b={class:"btn-group"},f=["onClick"],v=["disabled","onClick"],k={key:0,class:"spinner-grow text-danger spinner-grow-sm",role:"status"},y=(0,a._)("span",{class:"visually-hidden"},"Loading...",-1),C=[y],w={class:"col-md-5"},x={class:"sticky-top"},q={class:"table align-middle"},U=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th",null,"品名"),(0,a._)("th",{style:{width:"130px"}},"數量"),(0,a._)("th",null,"單價")])],-1),V=["onClick"],$=(0,a._)("i",{class:"bi bi-trash"},null,-1),D=[$],L={key:0,class:"text-success"},W={class:"input-group input-group-sm"},z=["disabled","onChange","onUpdate:modelValue"],I={class:"input-group-text"},O={class:"text-end"},P={key:0,class:"text-success"},j=(0,a._)("td",{colspan:"3",class:"text-end"},"總計",-1),N={class:"text-end"},E={key:0},H=(0,a._)("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),S={class:"text-end text-success"},Y={class:"input-group mb-3 input-group-sm"},F={class:"input-group-append"},K=["disabled"],M={key:0,class:"spinner-border text-secondary spinner-border-sm",role:"status"},Z=(0,a._)("span",{class:"visually-hidden"},"Loading...",-1),A=[Z],B=(0,a._)("hr",null,null,-1),G={class:"my-5 row justify-content-center"},J={class:"mb-3"},Q=(0,a._)("label",{for:"email",class:"form-label"},"Email",-1),R={class:"mb-3"},T=(0,a._)("label",{for:"name",class:"form-label"},"收件人姓名",-1),X={class:"mb-3"},tt=(0,a._)("label",{for:"phone",class:"form-label"},"電話",-1),et={class:"mb-3"},st=(0,a._)("label",{for:"address",class:"form-label"},"地址",-1),at={class:"mb-3"},lt=(0,a._)("label",{for:"message",class:"form-label"},"留言",-1),ot={class:"btn btn-danger",type:"submit"},it={key:0,class:"spinner-border text-secondary spinner-border-sm",role:"status"},nt=(0,a._)("span",{class:"visually-hidden"},"Loading...",-1),dt=[nt];function rt(t,e,s,y,$,Z){const nt=(0,a.up)("LoadingComponent"),rt=(0,a.up)("Field"),ct=(0,a.up)("error-message"),ut=(0,a.up)("ErrorMessage"),pt=(0,a.up)("Form");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(nt,{active:$.isLoading},null,8,["active"]),(0,a._)("div",i,[(0,a._)("div",n,[(0,a._)("div",d,[(0,a._)("table",r,[c,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)($.products,(t=>((0,a.wg)(),(0,a.iD)("tr",{key:t.id},[(0,a._)("td",u,[(0,a._)("div",{style:(0,l.j5)([{height:"100px","background-size":"cover","background-position":"center"},{backgroundImage:`url(${t.imageUrl})`}])},null,4)]),(0,a._)("td",null,[(0,a._)("a",p,(0,l.zw)(t.title),1)]),(0,a._)("td",null,[m,t.price?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",h,(0,l.zw)(t.origin_price),1)),t.price?((0,a.wg)(),(0,a.iD)("del",_,"原價 "+(0,l.zw)(t.origin_price),1)):(0,a.kq)("",!0),t.price?((0,a.wg)(),(0,a.iD)("div",g," 現在只要 "+(0,l.zw)(t.price),1)):(0,a.kq)("",!0)]),(0,a._)("td",null,[(0,a._)("div",b,[(0,a._)("button",{class:"btn btn-outline-secondary btn-sm",onClick:e=>Z.getProduct(t.id)}," 查看更多 ",8,f),(0,a._)("button",{class:"btn btn-outline-danger btn-sm",disabled:this.status.loadingItem===t.id,onClick:e=>Z.addCart(t.id)},[this.status.loadingItem===t.id?((0,a.wg)(),(0,a.iD)("div",k,C)):(0,a.kq)("",!0),(0,a.Uk)(" 加到購物車 ")],8,v)])])])))),128))])])]),(0,a._)("div",w,[(0,a._)("div",x,[(0,a._)("table",q,[U,(0,a._)("tbody",null,[this.cart?((0,a.wg)(!0),(0,a.iD)(a.HY,{key:0},(0,a.Ko)($.cart.carts,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e.id},[(0,a._)("td",null,[(0,a._)("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:t=>Z.deleteOrder(e)},D,8,V)]),(0,a._)("td",null,[(0,a.Uk)((0,l.zw)(e.product.title)+" ",1),e.coupon?((0,a.wg)(),(0,a.iD)("div",L," 已套用優惠券 ")):(0,a.kq)("",!0)]),(0,a._)("td",null,[(0,a._)("div",W,[(0,a.wy)((0,a._)("input",{type:"number",class:"form-control",min:"1",disabled:e.id===$.status.loadingItem,onChange:t=>Z.updateCart(e),"onUpdate:modelValue":t=>e.qty=t},null,40,z),[[o.nr,e.qty,void 0,{number:!0}]]),(0,a._)("div",I," / "+(0,l.zw)(e.product.unit),1)])]),(0,a._)("td",O,[e.final_total!==e.total?((0,a.wg)(),(0,a.iD)("small",P,"折扣價：")):(0,a.kq)("",!0),(0,a.Uk)(" "+(0,l.zw)(t.$filters.currency(e.final_total)),1)])])))),128)):(0,a.kq)("",!0)]),(0,a._)("tfoot",null,[(0,a._)("tr",null,[j,(0,a._)("td",N,(0,l.zw)(t.$filters.currency($.cart.total)),1)]),$.cart.final_total!=$.cart.total?((0,a.wg)(),(0,a.iD)("tr",E,[H,(0,a._)("td",S,(0,l.zw)(t.$filters.currency($.cart.final_total)),1)])):(0,a.kq)("",!0)])]),(0,a._)("div",Y,[(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",placeholder:"請輸入優惠碼","onUpdate:modelValue":e[0]||(e[0]=t=>$.coupon_code=t)},null,512),[[o.nr,$.coupon_code]]),(0,a._)("div",F,[(0,a._)("button",{class:"btn btn-outline-secondary",type:"button",disabled:""!=$.coupon_code&&this.status.loadingCoupon===$.coupon_code,onClick:e[1]||(e[1]=(...t)=>Z.addCouponCode&&Z.addCouponCode(...t))},[""!=$.coupon_code&&this.status.loadingCoupon===$.coupon_code?((0,a.wg)(),(0,a.iD)("div",M,A)):(0,a.kq)("",!0),(0,a.Uk)(" 套用優惠碼 ")],8,K)])])])]),B,(0,a._)("div",G,[(0,a.Wm)(pt,{class:"col-md-6",onSubmit:Z.createOrder},{default:(0,a.w5)((({errors:t})=>[(0,a._)("div",J,[Q,(0,a.Wm)(rt,{id:"email",name:"email",type:"email",class:(0,l.C_)(["form-control",{"is-invalid":t["email"]}]),rules:"email|required",placeholder:"請輸入 Email",modelValue:$.form.user.email,"onUpdate:modelValue":e[2]||(e[2]=t=>$.form.user.email=t)},null,8,["class","modelValue"]),(0,a.Wm)(ct,{name:"email",class:"invalid-feedback"})]),(0,a._)("div",R,[T,(0,a.Wm)(rt,{id:"name",name:"姓名",type:"text",class:(0,l.C_)(["form-control",{"is-invalid":t["姓名"]}]),rules:"required",placeholder:"請輸入姓名",modelValue:$.form.user.name,"onUpdate:modelValue":e[3]||(e[3]=t=>$.form.user.name=t)},null,8,["class","modelValue"]),(0,a.Wm)(ut,{name:"姓名",class:"invalid-feedback"})]),(0,a._)("div",X,[tt,(0,a.Wm)(rt,{id:"phone",name:"電話",type:"text",class:(0,l.C_)(["form-control",{"is-invalid":t["電話"]}]),placeholder:"請輸入電話",rules:Z.isPhone,modelValue:$.form.user.tel,"onUpdate:modelValue":e[4]||(e[4]=t=>$.form.user.tel=t)},null,8,["rules","class","modelValue"]),(0,a.Wm)(ut,{name:"電話",class:"invalid-feedback"})]),(0,a._)("div",et,[st,(0,a.Wm)(rt,{id:"address",name:"地址",type:"text",class:(0,l.C_)(["form-control",{"is-invalid":t["地址"]}]),rules:"required",placeholder:"請輸入地址",modelValue:$.form.user.address,"onUpdate:modelValue":e[5]||(e[5]=t=>$.form.user.address=t)},null,8,["class","modelValue"]),(0,a.Wm)(ut,{name:"地址",class:"invalid-feedback"})]),(0,a._)("div",at,[lt,(0,a.Wm)(rt,{as:"textarea",id:"message",name:"留言",type:"text",class:(0,l.C_)(["form-control",{"is-invalid":t["留言"]}]),modelValue:$.form.message,"onUpdate:modelValue":e[6]||(e[6]=t=>$.form.message=t)},null,8,["class","modelValue"]),(0,a.Wm)(ut,{name:"留言",class:"invalid-feedback"})]),(0,a._)("button",ot,[""!=this.form.user.name&&this.status.laodingUserName===this.form.user.name?((0,a.wg)(),(0,a.iD)("div",it,dt)):(0,a.kq)("",!0),(0,a.Uk)(" Submit ")])])),_:1},8,["onSubmit"])])])])],64)}s(7658);var ct={data(){return{products:[],product:{},status:{loadingItem:"",loadingCoupon:"",laodingUserName:""},cart:[],coupon_code:"",form:{user:{name:"",email:"",tel:"",address:""},message:""},isLoading:!1}},methods:{getProducts(){const t="https://vue3-course-api.hexschool.io/api/chrisluo-api/products/all";this.isLoading=!0,this.$http.get(t).then((t=>{this.isLoading=!1,t.data.success&&(this.products=t.data.products)}))},getProduct(t){this.$router.push(`/user/product/${t}`)},addCart(t){const e="https://vue3-course-api.hexschool.io/api/chrisluo-api/cart";this.status.loadingItem=t;const s={product_id:t,qty:1};this.$http.post(e,{data:s}).then((t=>{t.data.success&&(this.status.loadingItem="",console.log(t),this.getCart())}))},getCart(){const t="https://vue3-course-api.hexschool.io/api/chrisluo-api/cart";this.$http.get(t).then((t=>{t.data.success&&(console.log("getCart",t),this.cart=t.data.data)}))},deleteOrder(t){const e=`https://vue3-course-api.hexschool.io/api/chrisluo-api/cart/${t.id}`;this.isLoading=!0,this.$http.delete(e).then((t=>{t.data.success&&(this.isLoading=!1,console.log("deleteOrder",t),this.getCart())}))},updateCart(t){const e=`https://vue3-course-api.hexschool.io/api/chrisluo-api/cart/${t.id}`;this.status.loadingItem=t.id;const s={product_id:t.product_id,qty:t.qty};this.isLoading=!0,this.$http.put(e,{data:s}).then((t=>{t.data.success&&(this.isLoading=!1,console.log("updateCart",t),this.status.loadingItem="",this.getCart())}))},addCouponCode(){const t="https://vue3-course-api.hexschool.io/api/chrisluo-api/coupon";this.status.loadingCoupon=this.coupon_code;const e={code:this.coupon_code};this.$http.post(t,{data:e}).then((t=>{t.data.success&&(console.log("addCouponCode",t),this.status.loadingCoupon="",this.getCart(),this.coupon_code="")}))},isPhone(t){const e=/^(09)[0-9]{8}$/;return!!e.test(t)||"需要正確的電話號碼"},createOrder(){const t="https://vue3-course-api.hexschool.io/api/chrisluo-api/order",e=this.form;this.status.laodingUserName=this.form.user.name,this.$http.post(t,{data:e}).then((t=>{console.log("createOrder",t),this.status.laodingUserName="",this.$router.push(`/user/checkout/${t.data.orderId}`)}))}},created(){this.getProducts(),this.getCart()}},ut=s(89);const pt=(0,ut.Z)(ct,[["render",rt]]);var mt=pt}}]);
//# sourceMappingURL=364.8849d8de.js.map