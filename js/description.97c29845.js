(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["description"],{"11a72":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("Card",{attrs:{shadow:""}},[e("DescriptionList",{attrs:{title:"退款申请"}},[e("Description",{attrs:{term:"取货单号"}},[t._v("1000000000")]),e("Description",{attrs:{term:"状态"}},[t._v("已取货")]),e("Description",{attrs:{term:"销售单号"}},[t._v("1234123421")]),e("Description",{attrs:{term:"子订单"}},[t._v("3214321432")])],1),e("Divider"),e("DescriptionList",{attrs:{title:"用户信息"}},[e("Description",{attrs:{term:"用户姓名"}},[t._v("付小小")]),e("Description",{attrs:{term:"联系电话"}},[t._v("18100000000")]),e("Description",{attrs:{term:"常用快递"}},[t._v("菜鸟仓储")]),e("Description",{attrs:{term:"取货地址"}},[t._v("浙江省杭州市西湖区万塘路18号")]),e("Description",{attrs:{term:"备注"}},[t._v(" 无")])],1),e("Divider"),e("div",{staticClass:"title"},[t._v("退货商品")]),e("Table",{staticStyle:{"margin-bottom":"24px"},attrs:{columns:t.goodsColumns,data:t.goodsData}}),e("div",{staticClass:"title"},[t._v("退货进度")]),e("Table",{attrs:{columns:t.scheduleColumns,data:t.scheduleData},scopedSlots:t._u([{key:"status",fn:function(s){var a=s.row;return[e("Badge",{attrs:{status:a.status,text:t._f("statusFilter")(a.status)}})]}}])})],1)},r=[],i=s("2af9"),n={components:{DescriptionList:i["l"],Description:i["k"]},data:function(){return{goodsColumns:[{title:"商品编号",key:"id"},{title:"商品名称",key:"name"},{title:"商品条码",key:"barcode"},{title:"单价",key:"price",align:"right"},{title:"数量（件）",key:"num",align:"right"},{title:"金额",key:"amount",align:"right"}],goodsData:[{id:"1234561",name:"矿泉水 550ml",barcode:"12421432143214321",price:"2.00",num:"1",amount:"2.00"},{id:"1234562",name:"凉茶 300ml",barcode:"12421432143214322",price:"3.00",num:"2",amount:"6.00"},{id:"1234563",name:"好吃的薯片",barcode:"12421432143214323",price:"7.00",num:"4",amount:"28.00"},{id:"1234564",name:"特别好吃的蛋卷",barcode:"12421432143214324",price:"8.50",num:"3",amount:"25.50"}],scheduleColumns:[{title:"时间",key:"time"},{title:"当前进度",key:"rate"},{title:"状态",key:"status",slot:"status"},{title:"操作员ID",key:"operator"},{title:"耗时",key:"cost"}],scheduleData:[{key:"1",time:"2017-10-01 14:10",rate:"联系客户",status:"processing",operator:"取货员 ID1234",cost:"5mins"},{key:"2",time:"2017-10-01 14:05",rate:"取货员出发",status:"success",operator:"取货员 ID1234",cost:"1h"},{key:"3",time:"2017-10-01 13:05",rate:"取货员接单",status:"success",operator:"取货员 ID1234",cost:"5mins"},{key:"4",time:"2017-10-01 13:00",rate:"申请审批通过",status:"success",operator:"系统",cost:"1h"},{key:"5",time:"2017-10-01 12:00",rate:"发起退货申请",status:"success",operator:"用户",cost:"5mins"}]}},filters:{statusFilter:function(t){var e={processing:"进行中",success:"完成",failed:"失败"};return e[t]}}},o=n,c=(s("66cb"),s("2877")),u=Object(c["a"])(o,a,r,!1,null,"c26d4264",null);e["default"]=u.exports},"206a":function(t,e,s){},"2f29":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=this,s=e._self._c;return s("PageView",{attrs:{title:"单号：234231029431"},scopedSlots:e._u([{key:"headerContent",fn:function(){return[s("DescriptionList",{attrs:{size:"small",col:2}},[s("Description",{attrs:{term:"创建人"}},[e._v("曲丽丽")]),s("Description",{attrs:{term:"订购产品"}},[e._v("XX服务")]),s("Description",{attrs:{term:"创建时间"}},[e._v("2018-08-07")]),s("Description",{attrs:{term:"关联单据"}},[s("a",[e._v("12421")])]),s("Description",{attrs:{term:"生效日期"}},[e._v("2018-08-07 ~ 2018-12-11")]),s("Description",{attrs:{term:"备注"}},[e._v("请于两个工作日内确认")])],1)]},proxy:!0},{key:"extra",fn:function(){return[s("Row",{staticClass:"status-list"},[s("Col",{attrs:{xs:12,sm:12}},[s("div",{staticClass:"text"},[e._v("状态")]),s("div",{staticClass:"heading"},[e._v("待审批")])]),s("Col",{attrs:{xs:12,sm:12}},[s("div",{staticClass:"text"},[e._v("订单金额")]),s("div",{staticClass:"heading"},[e._v("¥ 568.08")])])],1)]},proxy:!0}])},[s("Card",{attrs:{shadow:"",title:"流程进度"}},[s("Steps",{attrs:{direction:e.isMobile?"vertical":"horizontal",current:1}},[s("Step",{attrs:{title:"创建项目"}}),s("Step",{attrs:{title:"部门初审"}}),s("Step",{attrs:{title:"财务复核"}}),s("Step",{attrs:{title:"完成"}})],1)],1),s("Card",{staticClass:"ivu-mt-16",attrs:{shadow:"",title:"用户信息"}},[s("description-list",[s("description",{attrs:{term:"用户姓名"}},[e._v("付晓晓")]),s("description",{attrs:{term:"会员卡号"}},[e._v("32943898021309809423")]),s("description",{attrs:{term:"身份证"}},[e._v("3321944288191034921")]),s("description",{attrs:{term:"联系方式"}},[e._v("18112345678")]),s("description",{attrs:{term:"联系地址"}},[e._v("浙江省杭州市西湖区黄姑山路工专路交叉路口")])],1),s("description-list",{attrs:{title:"信息组"}},[s("description",{attrs:{term:"某某数据"}},[e._v("725")]),s("description",{attrs:{term:"该数据更新时间"}},[e._v("2018-08-08")]),s("description"),s("description",{attrs:{term:"某某数据"}},[e._v("725")]),s("description",{attrs:{term:"该数据更新时间"}},[e._v("2018-08-08")]),s("description")],1),s("Card",{attrs:{title:"多层信息组","dis-hover":!0}},[s("description-list",{attrs:{title:"组名称",size:"small"}},[s("description",{attrs:{term:"负责人"}},[e._v("林东东")]),s("description",{attrs:{term:"角色码"}},[e._v("1234567")]),s("description",{attrs:{term:"所属部门"}},[e._v("XX公司-YY部")]),s("description",{attrs:{term:"过期时间"}},[e._v("2018-08-08")]),s("description",{attrs:{term:"描述"}},[e._v("这段描述很长很长很长很长很长很长很长很长很长很长很长很长很长很长...")])],1),s("Divider",{staticStyle:{margin:"16px 0"}}),s("description-list",{attrs:{title:"组名称",size:"small",col:1}},[s("description",{attrs:{term:"学名"}},[e._v(" Citrullus lanatus (Thunb.) Matsum. et Nakai一年生蔓生藤本；茎、枝粗壮，具明显的棱。卷须较粗..")])],1),s("Divider",{staticStyle:{margin:"16px 0"}}),s("description-list",{attrs:{title:"组名称",size:"small",col:2}},[s("description",{attrs:{term:"负责人"}},[e._v("付小小")]),s("description",{attrs:{term:"角色码"}},[e._v("1234567")])],1)],1)],1),s("Card",{staticClass:"ivu-mt-16",attrs:{shadow:"",title:"用户近半年来电记录"}},[s("div",{staticClass:"no-data"},[s("XIcon",{attrs:{type:"md-sad"}}),e._v(" 暂无数据 ")],1)]),s("Card",{staticClass:"ivu-mt-16",attrs:{shadow:"",padding:0}},[s("div",{staticClass:"ivu-pt-8"},[s("Tabs",{on:{"on-click":function(e){t.activeTabKey=e}}},e._l(e.tabList,(function(t){return s("TabPane",{key:t.key,attrs:{label:t.tab,name:t.key}},[s("div",{staticClass:"ivu-pr-16 ivu-pb-16 ivu-pl-16"},["1"===e.activeTabKey?s("Table",{attrs:{columns:e.operationColumns,data:e.operation1},scopedSlots:e._u([{key:"status",fn:function(t){var a=t.row;return[s("Badge",{attrs:{status:e._f("statusTypeFilter")(a.status),text:e._f("statusFilter")(a.status)}})]}}],null,!0)}):e._e(),"2"===e.activeTabKey?s("Table",{attrs:{columns:e.operationColumns,data:e.operation2},scopedSlots:e._u([{key:"status",fn:function(t){var a=t.row;return[s("Badge",{attrs:{status:e._f("statusTypeFilter")(a.status),text:e._f("statusFilter")(a.status)}})]}}],null,!0)}):e._e(),"3"===e.activeTabKey?s("Table",{attrs:{columns:e.operationColumns,data:e.operation3},scopedSlots:e._u([{key:"status",fn:function(t){var a=t.row;return[s("Badge",{attrs:{status:e._f("statusTypeFilter")(a.status),text:e._f("statusFilter")(a.status)}})]}}],null,!0)}):e._e()],1)])})),1)],1)])],1)},r=[],i=s("ac0d"),n=s("2af9"),o={name:"Advanced",components:{PageView:n["J"],Description:n["k"],DescriptionList:n["l"]},mixins:[i["b"]],data:function(){return{tabList:[{key:"1",tab:"操作日志一"},{key:"2",tab:"操作日志二"},{key:"3",tab:"操作日志三"}],activeTabKey:"1",operationColumns:[{title:"操作类型",key:"type",minWidth:120},{title:"操作人",key:"name",minWidth:120},{title:"执行结果",key:"status",slot:"status",minWidth:120},{title:"操作时间",key:"updatedAt",minWidth:180},{title:"备注",key:"remark",minWidth:120}],operation1:[{key:"op1",type:"订购关系生效",name:"曲丽丽",status:"agree",updatedAt:"2017-10-03  19:23:12",remark:"-"},{key:"op2",type:"财务复审",name:"付小小",status:"reject",updatedAt:"2017-10-03  19:23:12",remark:"不通过原因"},{key:"op3",type:"部门初审",name:"周毛毛",status:"agree",updatedAt:"2017-10-03  19:23:12",remark:"-"},{key:"op4",type:"提交订单",name:"林东东",status:"agree",updatedAt:"2017-10-03  19:23:12",remark:"很棒"},{key:"op5",type:"创建订单",name:"汗牙牙",status:"agree",updatedAt:"2017-10-03  19:23:12",remark:"-"}],operation2:[{key:"op2",type:"财务复审",name:"付小小",status:"reject",updatedAt:"2017-10-03  19:23:12",remark:"不通过原因"},{key:"op3",type:"部门初审",name:"周毛毛",status:"agree",updatedAt:"2017-10-03  19:23:12",remark:"-"},{key:"op4",type:"提交订单",name:"林东东",status:"agree",updatedAt:"2017-10-03  19:23:12",remark:"很棒"}],operation3:[{key:"op2",type:"财务复审",name:"付小小",status:"reject",updatedAt:"2017-10-03  19:23:12",remark:"不通过原因"},{key:"op3",type:"部门初审",name:"周毛毛",status:"agree",updatedAt:"2017-10-03  19:23:12",remark:"-"}]}},filters:{statusFilter:function(t){var e={agree:"成功",reject:"驳回"};return e[t]},statusTypeFilter:function(t){var e={agree:"success",reject:"error"};return e[t]}}},c=o,u=(s("d036"),s("2877")),l=Object(u["a"])(c,a,r,!1,null,"d6ed61e0",null);e["default"]=l.exports},"66cb":function(t,e,s){"use strict";s("7e6a")},"7e6a":function(t,e,s){},d036:function(t,e,s){"use strict";s("206a")}}]);