(this["webpackJsonpRedux-Practice"]=this["webpackJsonpRedux-Practice"]||[]).push([[0],{24:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n(7),r=n.n(o),i=n(2),d=n(6),c=n(3),p=n(1),s=function(){var e=Object(c.b)(),t=Object(a.useState)(""),n=Object(d.a)(t,2),o=n[0],r=n[1],i=Object(a.useState)(""),s=Object(d.a)(i,2),y=s[0],m=s[1],w=Object(a.useState)(!1),O=Object(d.a)(w,2),_=O[0],v=O[1],C="";return Object(p.jsxs)(b,{onClick:function(t){var n=t.target.getAttribute("data-num"),a=t.target.getAttribute("data-opere"),i=t.target.getAttribute("data-hotkey");if(a)_||v(!0),m(a);else if(n)_?(r(o+n),e({type:"isTyping",payload:o+n})):(C+=n,e(function(e){return{type:"firstInput",payload:e}}(Number(C))));else if(i)switch(i){case"percentage":return e({type:"percentage"});case"AC":return C="",v(!1),e({type:"typed"}),e({type:"AC"});default:return!1}},children:[Object(p.jsx)(h,{"data-hotkey":"AC",children:"AC"}),Object(p.jsx)(j,{"data-hotkey":"percentage",children:"%"}),Object(p.jsx)(j,{"data-opere":"divide",children:"\xf7"}),Object(p.jsx)(j,{"data-opere":"multiply",children:"\xd7"}),Object(p.jsx)(g,{"data-num":"7",children:"7"}),Object(p.jsx)(g,{"data-num":"8",children:"8"}),Object(p.jsx)(g,{"data-num":"9",children:"9"}),Object(p.jsx)(f,{"data-opere":"subtract",children:"\uff0d"}),Object(p.jsx)(g,{"data-num":"4",children:"4"}),Object(p.jsx)(g,{"data-num":"5",children:"5"}),Object(p.jsx)(g,{"data-num":"6",children:"6"}),Object(p.jsx)(f,{"data-opere":"add",children:"+"}),Object(p.jsx)(g,{"data-num":"1",children:"1"}),Object(p.jsx)(g,{"data-num":"2",children:"2"}),Object(p.jsx)(g,{"data-num":"3",children:"3"}),Object(p.jsx)(u,{"data-opere":"=",onClick:function(){switch(e({type:"typed"}),y){case"add":return e({type:"add",payload:Number(o)}),r("");case"subtract":return e(function(e){return{type:"subtract",payload:e}}(Number(o))),r("");case"multiply":return e(function(e){return{type:"multiply",payload:e}}(Number(o))),r("");case"divide":return e(function(e){return{type:"divide",payload:e}}(Number(o))),r("");default:return!1}},children:"="}),Object(p.jsx)(x,{"data-num":"0",children:"0"}),Object(p.jsx)(l,{"data-num":".",children:"."})]})},b=i.a.div.withConfig({displayName:"Buttons__Container",componentId:"sc-cg47av-0"})(["width:270px;display:grid;grid-template-columns:repeat(4,60px);grid-template-rows:repeat(5,48px);gap:10px;"]),u=i.a.button.withConfig({displayName:"Buttons__Equal",componentId:"sc-cg47av-1"})(["border:none;height:106px;background:linear-gradient(180deg,#f3963f 0%,#f6791f 100%);box-shadow:2px 1px 2px rgba(0,0,0,0.25);border-radius:5px;color:#fff;font-size:25px;&:active{box-shadow:inset 2px 2px 2px rgba(0,0,0,0.25);}"]),x=i.a.button.withConfig({displayName:"Buttons__Zero",componentId:"sc-cg47av-2"})(["width:130px;border:none;background:linear-gradient(180deg,#f8f9f4 0%,#f1eee9 100%);box-shadow:1px 1px 2px rgba(0,0,0,0.25);border-radius:5px;color:#575652;font-size:15px;font-weight:bold;&:active{box-shadow:inset 1px 1px 2px rgba(0,0,0,0.25);}"]),l=i.a.button.withConfig({displayName:"Buttons__Dot",componentId:"sc-cg47av-3"})(["grid-column:3;border:none;background:linear-gradient(180deg,#f8f9f4 0%,#f1eee9 100%);box-shadow:1px 1px 2px rgba(0,0,0,0.25);border-radius:5px;color:#575652;font-size:15px;font-weight:bold;&:active{box-shadow:inset 1px 1px 2px rgba(0,0,0,0.25);}"]),g=i.a.button.withConfig({displayName:"Buttons__NumBTN",componentId:"sc-cg47av-4"})(["border:none;background:linear-gradient(180deg,#f8f9f4 0%,#f1eee9 100%);box-shadow:1px 1px 2px rgba(0,0,0,0.25);border-radius:5px;color:#575652;font-size:15px;font-weight:bold;&:active{box-shadow:inset 1px 1px 2px rgba(0,0,0,0.25);}"]),f=i.a.button.withConfig({displayName:"Buttons__SimpleOperator",componentId:"sc-cg47av-5"})(["border:none;background:linear-gradient(180deg,#999fa2 0%,#818a91 100%);box-shadow:1px 1px 2px rgba(0,0,0,0.25);border-radius:5px;color:#fff;font-size:15px;font-weight:bold;&:active{box-shadow:inset 2px 2px 2px rgba(0,0,0,0.25);}"]),h=i.a.button.withConfig({displayName:"Buttons__ACBtn",componentId:"sc-cg47av-6"})(["border:none;background:linear-gradient(180deg,#f3963f 0%,#f6791f 100%);box-shadow:1px 1px 2px rgba(0,0,0,0.25);border-radius:5px;color:#fff;font-size:12px;font-weight:bold;letter-spacing:1px;&:active{box-shadow:inset 2px 2px 2px rgba(0,0,0,0.25);}"]),j=i.a.button.withConfig({displayName:"Buttons__OperatorBtn",componentId:"sc-cg47av-7"})(["border:none;background:linear-gradient(180deg,#4c4d48 0%,#3a3a38 100%);box-shadow:1px 1px 2px rgba(0,0,0,0.25);border-radius:5px;color:#fff;font-size:15px;font-weight:bold;&:active{box-shadow:inset 3px 3px 2px rgba(0,0,0,0.25);}"]),y=function(){var e=Object(a.useState)(),t=Object(d.a)(e,2),n=t[0],o=t[1],r=Object(c.c)((function(e){return e.counter})),i=Object(c.c)((function(e){return e.typing}));return Object(a.useEffect)((function(){r.toString().length>13?o("Error"):o(r)}),[r]),Object(p.jsxs)(m,{children:[Object(p.jsx)(w,{children:Object(p.jsx)(_,{children:i||n})}),Object(p.jsx)(O,{children:"REDUX PRACTICE"})]})},m=i.a.div.withConfig({displayName:"Display__Container",componentId:"sc-1y96tnb-0"})(["background-color:#5e6265;height:96px;width:270px;border-radius:8px;margin-bottom:16px;box-shadow:inset 0px 4px 4px rgba(0,0,0,0.25);display:flex;justify-content:center;align-items:center;flex-direction:column;"]),w=i.a.div.withConfig({displayName:"Display__Monitor",componentId:"sc-1y96tnb-1"})(["width:250px;height:60px;background:linear-gradient(180deg,#dbd2cb 0%,#c8c7b3 100%);box-shadow:inset 0px 4px 4px rgba(0,0,0,0.25);border-radius:6px;position:relative;"]),O=i.a.div.withConfig({displayName:"Display__Text",componentId:"sc-1y96tnb-2"})(['font-family:"Roboto",sans-serif;font-size:8px;font-weight:bold;letter-spacing:1px;color:#b7bbbc;margin-top:8px;']),_=i.a.div.withConfig({displayName:"Display__Number",componentId:"sc-1y96tnb-3"})(['font-family:"Roboto",sans-serif;font-size:30px;position:absolute;right:10px;top:13px;']),v=function(){return Object(p.jsxs)(C,{children:[Object(p.jsx)(y,{}),Object(p.jsx)(s,{})]})},C=i.a.div.withConfig({displayName:"Calculator__CalculatorScope",componentId:"sc-17ouihn-0"})(["padding:15px;background:#dbdad6;border-radius:5px;"]),N=function(){return Object(p.jsx)(I,{children:Object(p.jsx)(v,{})})},I=i.a.div.withConfig({displayName:"App__Container",componentId:"sc-si1k85-0"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;padding-top:100px;"]),k=n(8),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"firstInput":return t.payload;case"add":return e+t.payload;case"subtract":return e-t.payload;case"multiply":return e*t.payload;case"divide":var n=e/t.payload;return n.toFixed(4);case"percentage":var a=e/100;return a.toFixed(4);case"AC":return 0;default:return e}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"isTyping":return t.payload;case"typed":return null;default:return e}},A=Object(k.a)({counter:E,typing:B}),S=Object(k.b)(A,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r.a.render(Object(p.jsx)(c.a,{store:S,children:Object(p.jsx)(N,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.27d52ac5.chunk.js.map