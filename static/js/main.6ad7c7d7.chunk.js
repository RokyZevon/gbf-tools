(this["webpackJsonpgbf-tools"]=this["webpackJsonpgbf-tools"]||[]).push([[0],{74:function(e,t,a){e.exports=a(83)},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),l=a.n(o),c=a(22),i=a(18),m=a(36),u=a(37),s=a(40),h=a(140),E=a(119),d=a(123),v=a(85),g=a(57),k=a(146),p=a(124),f=a(125),T=a(86),C=a(126),b=a(66),x=a.n(b),M=a(67),H=a.n(M),O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleDrawerOpen=function(){a.setState({open:!0})},a.handleDrawerClose=function(){a.setState({open:!1})},a.handleItemClick=function(e,t){a.handleDrawerClose(),a.props.onItemClicked(e,t)},a.state={open:!1},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.handleDrawerOpen,a=this.handleDrawerClose,n=this.state.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{position:"static"},r.a.createElement(d.a,null,r.a.createElement(v.a,{color:"inherit",edge:"start",onClick:t},r.a.createElement(x.a,null)),r.a.createElement(g.a,{variant:"h5",noWrap:!0},this.props.currentTool))),r.a.createElement(k.a,{variant:"persistent",anchor:"left",open:n},r.a.createElement("div",null,r.a.createElement(v.a,{onClick:a},r.a.createElement(H.a,null))),r.a.createElement(p.a,null),r.a.createElement(f.a,null,this.props.tools.map((function(t,a){return r.a.createElement(T.a,{button:!0,key:t,selected:e.props.currentTool===a,onClick:function(t){return e.handleItemClick(t,a)}},r.a.createElement(C.a,{primary:t}))})))))}}]),t}(n.Component),w=a(21),j=a(9),y=a(84),B=a(144),P=a(141),S=a(132),A=a(143),I=a(142),N=a(148),D=a(128),F=a(129),G=a(147),W=a(68),q=a.n(W),J=a(127),$=Object(J.a)((function(e){return{margin:{margin:e.spacing(1)}}}));function z(e){var t=e.current,a=e.onChange,n=$(),o=function(e){a(e.target.name,Number(e.target.value))};return r.a.createElement(N.a,null,r.a.createElement(D.a,{expandIcon:r.a.createElement(q.a,null)},r.a.createElement(g.a,null,"\u6570\u636e\u8f93\u5165")),r.a.createElement(p.a,null),r.a.createElement(F.a,{style:{flexDirection:"column"}},r.a.createElement("div",null,r.a.createElement(G.a,{name:"targetBox",label:"\u76ee\u6807\u7bb1\u6570",variant:"standard",className:n.margin,onChange:o,value:null===t.targetBox?"":t.targetBox}),r.a.createElement(G.a,{name:"drewBox",label:"\u5df2\u5237\u7bb1\u6570",variant:"standard",className:n.margin,onChange:o,value:null===t.drewBox?"":t.drewBox})),r.a.createElement("div",null,r.a.createElement(G.a,{name:"currentToken",label:"\u6301\u6709\u6218\u8d27\u6570",variant:"standard",className:n.margin,onChange:o,value:null===t.currentToken?"":t.currentToken}),r.a.createElement(G.a,{name:"currentHonor",label:"\u7d2f\u8ba1\u8d21\u732e",variant:"standard",className:n.margin,onChange:o,value:null===t.currentHonor?"":t.currentHonor}),r.a.createElement(G.a,{name:"currentMeat",label:"\u6301\u6709\u8089\u6570\u91cf",variant:"standard",className:n.margin,onChange:o,value:null===t.currentMeat?"":t.currentMeat}))))}var K=a(133),L=a(134),Q=a(135),R=a(136),U=a(137),V=a(138),X=a(139);function Y(e){var t=e.progress,a=t.requiredToken,n=t.currentToken+t.drewToken+t.currentTokenFromHonor;return r.a.createElement(K.a,{component:y.a},r.a.createElement(L.a,null,r.a.createElement(Q.a,null,r.a.createElement(R.a,null,r.a.createElement(U.a,null,"\u8fdb\u5ea6"),r.a.createElement(U.a,{align:"center"},"\u9700\u6c42\u6218\u8d27"),r.a.createElement(U.a,{align:"center"},"\u5df2\u5b8c\u6210\u6218\u8d27"),r.a.createElement(U.a,{align:"center"},"\u5f53\u524d\u8fdb\u5ea6"))),r.a.createElement(V.a,null,r.a.createElement(R.a,null,r.a.createElement(U.a,{component:"th",scope:"row"},"\u603b\u8fdb\u5ea6"),r.a.createElement(U.a,{align:"center"},a),r.a.createElement(U.a,{align:"center"},n),r.a.createElement(U.a,{align:"center"},r.a.createElement(X.a,{variant:"determinate",value:0!==a&&n<a?n/a*100:100}),(0!==a?n/a*100:100).toFixed(2)+"%")))))}function Z(e){var t=e.payload;return r.a.createElement(K.a,{component:y.a},r.a.createElement(L.a,null,r.a.createElement(Q.a,null,r.a.createElement(R.a,null,r.a.createElement(U.a,null,"\u8fd8\u9700"),r.a.createElement(U.a,{align:"center"},"\u6570\u91cf"),r.a.createElement(U.a,{align:"center"},"\u534a\u7ea2"),0===t.mode&&r.a.createElement(U.a,{align:"center"},"\u8089"))),r.a.createElement(V.a,null,Object.entries(t.neededSolos).map((function(e){var a=Object(w.a)(e,2),n=a[0],o=a[1];return r.a.createElement(R.a,{key:n},r.a.createElement(U.a,{component:"th",scope:"row"},n),r.a.createElement(U.a,{align:"center"},o.num),r.a.createElement(U.a,{align:"center"},o.elixir),0===t.mode&&r.a.createElement(U.a,{align:"center"},o.meat))})))))}var _=[1600,2400,2400,2400,2e3,6e3],ee={Ex:{hostToken:22,victoryToken:20,mvpToken:14,soloHonor:51e3,AP:30,BP:1,meat:0,meatGain:3},ExPlus:{hostToken:26,victoryToken:20,mvpToken:20,soloHonor:73e3,AP:30,BP:1,meat:0,meatGain:3.5},Hell90:{hostToken:45,victoryToken:20,mvpToken:18,soloHonor:26e4,AP:30,BP:2,meat:5},Hell95:{hostToken:55,victoryToken:30,mvpToken:26,soloHonor:91e4,AP:40,BP:3,meat:10},Hell100:{hostToken:80,victoryToken:48,mvpToken:40,soloHonor:265e4,AP:50,BP:3,meat:20},Hell150:{hostToken:100,victoryToken:68,mvpToken:52,soloHonor:36e5,AP:50,BP:3,meat:20}};function te(e){return e<5?_[e-1]:e<45?_[4]:_[5]}function ae(e){for(var t=0,a=1;a<=e;a++)t+=te(a);return t}function ne(e){return e.hostToken+e.victoryToken+e.mvpToken+6e-5*e.soloHonor}function re(e,t){var a={};return a.num=Math.ceil(t/ne(e)),a.num<0&&(a.num=0),a.elixir=Math.ceil(e.AP*a.num/75),a.elixir<0&&(a.elixir=0),a.meat=a.num*e.meat>0?a.num*e.meat:0,a}function oe(e,t,a,n){return{requiredToken:ae(e),currentToken:a,drewToken:ae(t),currentTokenFromHonor:Math.floor(6e-5*n)}}function le(e){var t=oe(e.targetBox,e.drewBox,e.currentToken,e.currentHonor),a=t.requiredToken-t.drewToken-t.currentToken-t.currentTokenFromHonor,n={},r=function(e,t,a,n){var r={};return r.numMeat=Math.ceil((a-n/t.meat*ne(t))/(ne(e)+e.meatGain/t.meat*ne(t))),r.numMeat<0&&(r.numMeat=0),r.numHell=r.numMeat>0?Math.floor((n+r.numMeat*e.meatGain)/t.meat):Math.ceil(a/ne(t)),r.numHell<0&&(r.numHell=0),r.elixirMeat=Math.ceil(e.AP*r.numMeat/75),r.elixirHell=Math.ceil(t.AP*r.numHell/75),r.elixirMeat<0&&(r.elixirMeat=0),r.elixirHell<0&&(r.elixirHell=0),r}(ee[e.meatChoice],ee[e.soloChoice],a,e.currentMeat);return n[e.meatChoice]={num:r.numMeat,elixir:r.elixirMeat},n[e.soloChoice]={num:r.numHell,elixir:r.elixirHell},[t,n]}var ce=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).onInputChange=function(e,t){a.setState(Object(j.a)({},e,Number(t)))},a.onModeChange=function(e,t){a.setState({estimationMode:t})},a.onChoiceChange=function(e){a.setState(Object(j.a)({},e.target.name,e.target.value))},a.state={targetBox:null,drewBox:null,currentToken:null,currentHonor:null,currentMeat:null,estimationMode:0,meatChoice:"Ex",soloChoice:"Hell90"},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=Object.keys(ee).filter((function(e){return!ee[e].meat})),t=Object.keys(ee).filter((function(e){return ee[e].meat})),a={mode:this.state.estimationMode,progress:null,neededSolos:null};switch(this.state.estimationMode){case 0:var n=function(e){for(var t=oe(e.targetBox,e.drewBox,e.currentToken,e.currentHonor),a=t.requiredToken-t.drewToken-t.currentToken-t.currentTokenFromHonor,n={},r=0,o=Object.keys(ee);r<o.length;r++){var l=o[r];n[l]=re(ee[l],a)}return[t,n]}(this.state),o=Object(w.a)(n,2);a.progress=o[0],a.neededSolos=o[1];break;case 1:var l=le(this.state),c=Object(w.a)(l,2);a.progress=c[0],a.neededSolos=c[1]}return r.a.createElement(h.a,{container:!0,spacing:1},r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(y.a,null,r.a.createElement(z,{current:this.state,onChange:this.onInputChange}))),r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(Y,{progress:a.progress})),r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(y.a,null,r.a.createElement(B.a,{value:this.state.estimationMode,onChange:this.onModeChange,centered:!0},r.a.createElement(P.a,{value:0,label:"Solo\u5355\u4e00\u5173\u5361"}),r.a.createElement(P.a,{value:1,label:"Solo+\u8865\u8089"})),r.a.createElement(h.a,{container:!0,spacing:1,alignItems:"center"},r.a.createElement(h.a,{item:!0,xs:3},r.a.createElement(S.a,{fullWidth:!0},r.a.createElement(A.a,{name:"meatChoice",value:this.state.meatChoice,disabled:0===this.state.estimationMode,onChange:this.onChoiceChange},e.map((function(e){return r.a.createElement(I.a,{key:e,value:e},e)}))))),r.a.createElement(h.a,{item:!0,xs:3},r.a.createElement(S.a,{fullWidth:!0},r.a.createElement(A.a,{name:"soloChoice",value:this.state.soloChoice,disabled:0===this.state.estimationMode,onChange:this.onChoiceChange},t.map((function(e){return r.a.createElement(I.a,{key:e,value:e},e)}))))),r.a.createElement(h.a,{item:!0,xs:6},1===this.state.estimationMode&&r.a.createElement(g.a,{variant:"subtitle2",align:"center"},"\u8ba1\u7b97\u5047\u8bbe\u5e73\u5747\u6bcf\u53ea",this.state.meatChoice,"\u6389\u843d",ee[this.state.meatChoice].meatGain,"\u8089"))))),r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(Z,{payload:a})))}}]),t}(n.Component),ie=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).onToolSelected=function(e,t){a.setState({currentTool:a.state.tools[t]})},a.state={open:!1,tools:e.tools,currentTool:e.tools[0]},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{container:!0},r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(O,{tools:this.state.tools,currentTool:this.state.currentTool,onItemClicked:this.onToolSelected})),r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(ce,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ie,{tools:["\u5237\u7bb1\u8ba1\u7b97\u5668","\u6512\u4e95\u8fdb\u5ea6\u8ba1\u7b97\u5668"]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[74,1,2]]]);
//# sourceMappingURL=main.6ad7c7d7.chunk.js.map