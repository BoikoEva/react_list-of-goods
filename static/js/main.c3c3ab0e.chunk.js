(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(6),s=n.n(o),c=n(1),i=n(2),l=n(4),u=n(3),h=(n(13),n(7)),p=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={isReverse:!1,sortByAlphabet:!1,SortByLength:!1},t.Reverse=function(){t.setState((function(t){return{isReverse:!t.isReverse}}))},t.SortAlphabetically=function(){t.setState((function(t){return{sortByAlphabet:!t.sortByAlphabet,SortByLength:!1}}))},t.SortByLength=function(){t.setState((function(t){return{SortByLength:!t.SortByLength,sortByAlphabet:!1}}))},t.Reset=function(){t.setState((function(){return{isReverse:!1,sortByAlphabet:!1,SortByLength:!1}}))},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.props.goods,e=this.state,n=function(t,e,n,r){var a=Object(h.a)(t);return n&&a.sort((function(t,e){return t.localeCompare(e)})),r&&a.sort((function(t,e){return t.length-e.length})),e&&a.reverse(),a}(t,e.isReverse,e.sortByAlphabet,e.SortByLength);return a.a.createElement("div",{className:"App"},a.a.createElement("button",{type:"button",onClick:this.Reverse},"Reverse"),a.a.createElement("button",{type:"button",onClick:this.SortAlphabetically},"Sort alphabetically"),a.a.createElement("button",{type:"button",onClick:this.SortByLength},"Sort by length"),a.a.createElement("button",{type:"button",onClick:this.Reset},"Reset"),a.a.createElement("h1",null,"Goods"),a.a.createElement("ul",null,n.map((function(t){return a.a.createElement("li",{key:t},t)}))))}}]),n}(a.a.Component),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],y=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={isGoodsVisible:!1},t.changeGoodsStatus=function(){t.setState((function(t){return{isGoodsVisible:!t.isGoodsVisible}}))},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state.isGoodsVisible;return a.a.createElement("div",{className:"App"},a.a.createElement("button",{type:"button",onClick:this.changeGoodsStatus,className:t?"App__start-active":"App__start"},"Start"),t&&a.a.createElement(p,{goods:b}))}}]),n}(a.a.Component);s.a.render(a.a.createElement(y,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.c3c3ab0e.chunk.js.map