(self["webpackChunkvue_final_project"]=self["webpackChunkvue_final_project"]||[]).push([[277],{8803:function(t,e,s){
/*!
  * Bootstrap toast.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,n){t.exports=n(s(1884),s(4130),s(9069),s(1437))})(0,(function(t,e,s,n){"use strict";const a="toast",i="bs.toast",o=`.${i}`,r=`mouseover${o}`,l=`mouseout${o}`,c=`focusin${o}`,u=`focusout${o}`,h=`hide${o}`,d=`hidden${o}`,m=`show${o}`,_=`shown${o}`,v="fade",g="hide",f="show",b="showing",p={animation:"boolean",autohide:"boolean",delay:"number"},w={animation:!0,autohide:!0,delay:5e3};class k extends t{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return w}static get DefaultType(){return p}static get NAME(){return a}show(){const t=e.trigger(this._element,m);if(t.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(v);const s=()=>{this._element.classList.remove(b),e.trigger(this._element,_),this._maybeScheduleHide()};this._element.classList.remove(g),n.reflow(this._element),this._element.classList.add(f,b),this._queueCallback(s,this._element,this._config.animation)}hide(){if(!this.isShown())return;const t=e.trigger(this._element,h);if(t.defaultPrevented)return;const s=()=>{this._element.classList.add(g),this._element.classList.remove(b,f),e.trigger(this._element,d)};this._element.classList.add(b),this._queueCallback(s,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(f),super.dispose()}isShown(){return this._element.classList.contains(f)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e;break}if(e)return void this._clearTimeout();const s=t.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){e.on(this._element,r,(t=>this._onInteraction(t,!0))),e.on(this._element,l,(t=>this._onInteraction(t,!1))),e.on(this._element,c,(t=>this._onInteraction(t,!0))),e.on(this._element,u,(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=k.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return s.enableDismissTrigger(k),n.defineJQueryPlugin(k),k}))},1909:function(t,e,s){"use strict";s.d(e,{Z:function(){return T}});var n=s(3396),a=s(9242);const i={class:"navbar navbar-expand-lg navbar-dark bg-dark"},o={class:"container-fluid"},r=(0,n._)("a",{class:"navbar-brand",href:"#"},"範例後台",-1),l=(0,n._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,n._)("span",{class:"navbar-toggler-icon"})],-1),c={class:"collapse navbar-collapse",id:"navbarText"},u={class:"navbar-nav me-auto mb-2 mb-lg-0"},h={class:"nav-item"},d={class:"nav-item"},m={class:"nav-item"},_={class:"nav-item"},v={class:"nav-item"},g={class:"navbar-nav"},f={class:"nav-item"},b={class:"nav-item"};function p(t,e,s,p,w,k){const y=(0,n.up)("LoadingComponent"),T=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(y,{active:w.isLoading},null,8,["active"]),(0,n._)("nav",i,[(0,n._)("div",o,[r,l,(0,n._)("div",c,[(0,n._)("ul",u,[(0,n._)("li",h,[(0,n.Wm)(T,{to:"/dashboard/products",class:"nav-link"},{default:(0,n.w5)((()=>[(0,n.Uk)("產品")])),_:1})]),(0,n._)("li",d,[(0,n.Wm)(T,{to:"/dashboard/orders",class:"nav-link"},{default:(0,n.w5)((()=>[(0,n.Uk)("訂單")])),_:1})]),(0,n._)("li",m,[(0,n.Wm)(T,{to:"/dashboard/coupons",class:"nav-link"},{default:(0,n.w5)((()=>[(0,n.Uk)("優惠券")])),_:1})]),(0,n._)("li",_,[(0,n.Wm)(T,{to:"",class:"nav-link"},{default:(0,n.w5)((()=>[(0,n.Uk)("貼文")])),_:1})]),(0,n._)("li",v,[(0,n._)("a",{class:"nav-link",href:"#",onClick:e[0]||(e[0]=(0,a.iM)(((...t)=>k.logout&&k.logout(...t)),["prevent"]))},"登出")])]),(0,n._)("ul",g,[(0,n._)("li",f,[(0,n.Wm)(T,{to:"",class:"nav-link"},{default:(0,n.w5)((()=>[(0,n.Uk)("Blog")])),_:1})]),(0,n._)("li",b,[(0,n.Wm)(T,{to:"/user/cart",class:"nav-link"},{default:(0,n.w5)((()=>[(0,n.Uk)("購物車")])),_:1})])])])])])],64)}s(7658);var w={data(){return{isLoading:!1}},methods:{logout(){const t="https://vue3-course-api.hexschool.io/logout";this.isLoading=!0,this.$http.post(t,this.user).then((t=>{this.isLoading=!1,t.data.success&&this.$router.push("/login")}))}}},k=s(89);const y=(0,k.Z)(w,[["render",p]]);var T=y},5704:function(t,e,s){"use strict";s.d(e,{Z:function(){return k}});var n=s(3396);const a={class:"toast-container position-absolute pe-3 top-0 end-0"};function i(t,e,s,i,o,r){const l=(0,n.up)("Toast");return(0,n.wg)(),(0,n.iD)("div",a,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.messages,((t,e)=>((0,n.wg)(),(0,n.j4)(l,{key:e,msg:t},null,8,["msg"])))),128))])}s(7658);var o=s(7139);const r={class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"toast"},l={class:"toast-header"},c={class:"me-auto"},u=(0,n._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),h={key:0,class:"toast-body"};function d(t,e,s,a,i,d){return(0,n.wg)(),(0,n.iD)("div",r,[(0,n._)("div",l,[(0,n._)("span",{class:(0,o.C_)([`bg-${s.msg.style}`,"p-2 rounded me-2 d-inline-block"])},null,2),(0,n._)("strong",c,(0,o.zw)(s.msg.title),1),u]),s.msg.content?((0,n.wg)(),(0,n.iD)("div",h,(0,o.zw)(s.msg.content),1)):(0,n.kq)("",!0)],512)}var m=s(8803),_=s.n(m),v={name:"ToastComponent",props:["msg"],mounted(){const t=this.$refs.toast,e=new(_())(t,{delay:6e3});e.show()}},g=s(89);const f=(0,g.Z)(v,[["render",d]]);var b=f,p={components:{Toast:b},data(){return{messages:[]}},inject:["emitter"],mounted(){this.emitter.on("push-message",(t=>{const{style:e="success",title:s,content:n}=t;this.messages.push({style:e,title:s,content:n})}))}};const w=(0,g.Z)(p,[["render",i]]);var k=w},3277:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return d}});var n=s(3396);const a={class:"container-fluid mt-3 position-relative"};function i(t,e,s,i,o,r){const l=(0,n.up)("Navbar"),c=(0,n.up)("ToastMessages"),u=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(l),(0,n._)("div",a,[(0,n.Wm)(c),(0,n.Wm)(u)])],64)}var o=s(1909),r=s(5820),l=s(5704),c={components:{Navbar:o.Z,ToastMessages:l.Z},provide(){return{emitter:r.Z}},created(){}},u=s(89);const h=(0,u.Z)(c,[["render",i]]);var d=h}}]);
//# sourceMappingURL=277.df134af3.js.map