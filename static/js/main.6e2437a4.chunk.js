(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(6),s=n.n(o),i=n(1),c=n(2),l=n(4),u=n(3),h=(n(13),n(7)),p=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={isReverse:!1,isAlphabeticallySort:!1,isLengthSort:!1},t.Reverse=function(){t.setState((function(t){return{isReverse:!t.isReverse}}))},t.SortAlphabetically=function(){t.setState((function(t){return{isAlphabeticallySort:!t.isAlphabeticallySort,isLengthSort:!1}}))},t.SortByLength=function(){t.setState((function(t){return{isLengthSort:!t.isLengthSort,isAlphabeticallySort:!1}}))},t.Reset=function(){t.setState((function(){return{isReverse:!1,isAlphabeticallySort:!1,isLengthSort:!1}}))},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.props.goods,e=this.state,n=function(t,e,n,a){var r=Object(h.a)(t);return n&&r.sort((function(t,e){return t.localeCompare(e)})),a&&r.sort((function(t,e){return t.length-e.length})),e&&r.reverse(),r}(t,e.isReverse,e.isAlphabeticallySort,e.isLengthSort);return r.a.createElement("div",{className:"App"},r.a.createElement("button",{type:"button",onClick:this.Reverse},"Reverse"),r.a.createElement("button",{type:"button",onClick:this.SortAlphabetically},"Sort alphabetically"),r.a.createElement("button",{type:"button",onClick:this.SortByLength},"Sort by length"),r.a.createElement("button",{type:"button",onClick:this.Reset},"Reset"),r.a.createElement("h1",null,"Goods"),r.a.createElement("ul",null,n.map((function(t){return r.a.createElement("li",{key:t},t)}))))}}]),n}(r.a.Component),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],f=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={isGoodsVisible:!1},t.changeGoodsStatus=function(){t.setState((function(t){return{isGoodsVisible:!t.isGoodsVisible}}))},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state.isGoodsVisible;return r.a.createElement("div",{className:"App"},r.a.createElement("button",{type:"button",onClick:this.changeGoodsStatus,className:t?"App__start-active":"App__start"},"Start"),t&&r.a.createElement(p,{goods:b}))}}]),n}(r.a.Component);s.a.render(r.a.createElement(f,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.6e2437a4.chunk.js.map