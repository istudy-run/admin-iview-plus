"use strict";(self["webpackChunkiview_admin_plus"]=self["webpackChunkiview_admin_plus"]||[]).push([[68],{60107:function(t,e,s){s.d(e,{Z:function(){return f}});var i=s(73396),r=s(87139);const l={class:"ivu-result"},n={key:0,class:"ivu-result-title"},o={key:1,class:"ivu-result-desc"},a={key:2,class:"ivu-result-extra"},c={key:3,class:"ivu-result-actions"};function u(t,e,s,u,d,p){const m=(0,i.up)("Icon");return(0,i.wg)(),(0,i.iD)("div",l,[(0,i._)("div",{class:(0,r.C_)(["ivu-result-icon",p.iconClasses])},["success"===s.type?((0,i.wg)(),(0,i.j4)(m,{key:0,type:"ios-checkmark"})):(0,i.kq)("",!0),"error"===s.type?((0,i.wg)(),(0,i.j4)(m,{key:1,type:"ios-close"})):(0,i.kq)("",!0),"warning"===s.type?((0,i.wg)(),(0,i.j4)(m,{key:2,type:"ios-information"})):(0,i.kq)("",!0)],2),s.title||t.$slots.title?((0,i.wg)(),(0,i.iD)("div",n,[(0,i.WI)(t.$slots,"title",{},(()=>[(0,i.Uk)((0,r.zw)(s.title),1)]))])):(0,i.kq)("",!0),s.desc||t.$slots.desc?((0,i.wg)(),(0,i.iD)("div",o,[(0,i.WI)(t.$slots,"desc",{},(()=>[(0,i.Uk)((0,r.zw)(s.desc),1)]))])):(0,i.kq)("",!0),s.extra||t.$slots.extra?((0,i.wg)(),(0,i.iD)("div",a,[(0,i.WI)(t.$slots,"extra",{},(()=>[(0,i.Uk)((0,r.zw)(s.extra),1)]))])):(0,i.kq)("",!0),t.$slots.actions?((0,i.wg)(),(0,i.iD)("div",c,[(0,i.WI)(t.$slots,"actions")])):(0,i.kq)("",!0)])}var d=s(10389),p=s(12171),m={name:"Result",components:{Icon:d.Z},props:{type:{validator(t){return(0,p.kw)(t,["success","error","warning"])}},title:{type:String},desc:{type:String},extra:{type:String}},computed:{iconClasses(){return{"ivu-result-icon-success":"success"===this.type,"ivu-result-icon-error":"error"===this.type,"ivu-result-icon-warning":"warning"===this.type}}}},w=s(40089);const y=(0,w.Z)(m,[["render",u]]);var v=y,f=v},85789:function(t,e,s){s.r(e),s.d(e,{default:function(){return _}});var i=s(73396);const r=(0,i.Uk)("返回修改"),l=(0,i._)("div",null,"您提交的内容有如下错误：",-1),n={class:"ivu-mt"},o=(0,i.Uk)(" 您的账户已被冻结 "),a={class:"ivu-ml-16"},c=(0,i.Uk)(" 立即解冻 "),u={class:"ivu-mt"},d=(0,i.Uk)(" 您的账户还不具备申请资格 "),p={class:"ivu-ml-16"},m=(0,i.Uk)(" 立即升级 ");function w(t,e,s,w,y,v){const f=(0,i.up)("Button"),g=(0,i.up)("Icon"),_=(0,i.up)("Result"),k=(0,i.up)("Card");return(0,i.wg)(),(0,i.j4)(k,{shadow:""},{default:(0,i.w5)((()=>[(0,i.Wm)(_,{type:"error",title:y.title,desc:y.description},{actions:(0,i.w5)((()=>[(0,i.Wm)(f,{type:"primary"},{default:(0,i.w5)((()=>[r])),_:1})])),extra:(0,i.w5)((()=>[l,(0,i._)("div",n,[(0,i.Wm)(g,{type:"ios-close-circle-outline",color:"#ed4014"}),o,(0,i._)("a",a,[c,(0,i.Wm)(g,{type:"ios-arrow-forward"})])]),(0,i._)("div",u,[(0,i.Wm)(g,{type:"ios-close-circle-outline",color:"#ed4014"}),d,(0,i._)("a",p,[m,(0,i.Wm)(g,{type:"ios-arrow-forward"})])])])),_:1},8,["title","desc"])])),_:1})}var y=s(60107),v={name:"Error",components:{Result:y.Z},data(){return{title:"提交失败",description:"请核对并修改以下信息后，再重新提交。"}}},f=s(40089);const g=(0,f.Z)(v,[["render",w]]);var _=g},117:function(t,e,s){s.r(e),s.d(e,{default:function(){return I}});var i=s(73396),r=s(94897);const l=t=>((0,i.dD)("data-v-1c5f88ee"),t=t(),(0,i.Cn)(),t),n=(0,i.Uk)("返回列表"),o=(0,i.Uk)("查看项目"),a=(0,i.Uk)("打印"),c=l((()=>(0,i._)("div",{style:{"font-size":"16px",color:"rgba(0, 0, 0, 0.85)","font-weight":"500","margin-bottom":"20px"}},"项目名称",-1))),u=l((()=>(0,i._)("span",{style:{color:"rgba(0, 0, 0, 0.85)"}},"项目 ID：",-1))),d=(0,i.Uk)(" 20180724089 "),p=l((()=>(0,i._)("span",{style:{color:"rgba(0, 0, 0, 0.85)"}},"负责人：",-1))),m=(0,i.Uk)(" 曲丽丽是谁？ "),w=l((()=>(0,i._)("span",{style:{color:"rgba(0, 0, 0, 0.85)"}},"生效时间：",-1))),y=(0,i.Uk)(" 2016-12-12 ~ 2017-12-12 "),v=l((()=>(0,i._)("div",{style:{margin:"8px 0 4px",display:"flex"}},[(0,i.Uk)(" 曲丽丽 "),(0,i._)("img",{style:{"margin-left":"8px",width:"12px",filter:"grayscale(1)"},src:r,alt:"微信"})],-1))),f=l((()=>(0,i._)("div",null,"2016-12-12 12:32",-1))),g=l((()=>(0,i._)("div",{style:{margin:"8px 0 4px",display:"flex"}},[(0,i.Uk)(" 周毛毛 "),(0,i._)("img",{style:{"margin-left":"8px",width:"12px"},src:r,alt:"微信"})],-1))),_=l((()=>(0,i._)("div",null,[(0,i._)("a",{href:""},"催一下")],-1)));function k(t,e,s,r,l,k){const x=(0,i.up)("Button"),W=(0,i.up)("Col"),h=(0,i.up)("Row"),U=(0,i.up)("Step"),b=(0,i.up)("Steps"),C=(0,i.up)("Result"),I=(0,i.up)("Card");return(0,i.wg)(),(0,i.j4)(I,{shadow:""},{default:(0,i.w5)((()=>[(0,i.Wm)(C,{type:"success",desc:l.description,title:l.title},{actions:(0,i.w5)((()=>[(0,i.Wm)(x,{type:"primary"},{default:(0,i.w5)((()=>[n])),_:1}),(0,i.Wm)(x,{style:{"margin-left":"8px"}},{default:(0,i.w5)((()=>[o])),_:1}),(0,i.Wm)(x,{style:{"margin-left":"8px"}},{default:(0,i.w5)((()=>[a])),_:1})])),extra:(0,i.w5)((()=>[c,(0,i.Wm)(h,{style:{"margin-bottom":"16px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(W,{xs:24,sm:12,md:12,lg:12,xl:6},{default:(0,i.w5)((()=>[u,d])),_:1}),(0,i.Wm)(W,{xs:24,sm:12,md:12,lg:12,xl:6},{default:(0,i.w5)((()=>[p,m])),_:1}),(0,i.Wm)(W,{xs:24,sm:24,md:24,lg:24,xl:12},{default:(0,i.w5)((()=>[w,y])),_:1})])),_:1}),(0,i.Wm)(b,{current:1,direction:t.isMobile&&l.directionType.vertical||l.directionType.horizontal},{default:(0,i.w5)((()=>[(0,i.Wm)(U,{title:"创建项目"},{content:(0,i.w5)((()=>[v,f])),_:1}),(0,i.Wm)(U,{title:"部门初审"},{content:(0,i.w5)((()=>[g,_])),_:1}),(0,i.Wm)(U,{title:"财务复核"}),(0,i.Wm)(U,{title:"完成"})])),_:1},8,["direction"])])),_:1},8,["desc","title"])])),_:1})}var x=s(60107),W=s(31137);const h={horizontal:"horizontal",vertical:"vertical"};var U={name:"Success",components:{Result:x.Z},mixins:[W.KT],data(){return{title:"提交成功",description:"提交结果页用于反馈一系列操作任务的处理结果，\n 如果仅是简单操作，使用 Message 全局提示反馈即可。\n 本文字区域可以展示简单的补充说明，如果有类似展示\n “单据”的需求，下面这个灰色区域可以呈现比较复杂的内容。",directionType:h}}},b=s(40089);const C=(0,b.Z)(U,[["render",k],["__scopeId","data-v-1c5f88ee"]]);var I=C},94897:function(t,e,s){t.exports=s.p+"img/wx.27465650.svg"}}]);