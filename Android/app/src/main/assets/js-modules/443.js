__d(function(e,t,a,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(160),r=babelHelpers.interopRequireDefault(o),i=t(12),l=t(444),s=babelHelpers.interopRequireDefault(l),c=t(446),d=babelHelpers.interopRequireDefault(c),m=function(e){function t(e){babelHelpers.classCallCheck(this,t);var a=babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),n=[{name:"\u70ed\u9500\u699c",books:[{},{},{},{},{}],dataKey:"hotRank",cover:"https://qidian.gtimg.com/readnovelm/img/rank/rank-bg-hotsales.0.1.jpg"},{name:"\u98ce\u4e91\u699c",books:[{},{},{},{},{}],dataKey:"forbesRank",cover:"https://qidian.gtimg.com/readnovelm/img/rank/rank-bg-forbes.0.1.jpg"},{name:"\u65b0\u4e66\u699c",books:[{},{},{},{},{}],dataKey:"newRank",cover:"https://qidian.gtimg.com/readnovelm/img/rank/rank-bg-newbook.0.1.jpg"},{name:"\u63a8\u8350\u699c",books:[{},{},{},{},{}],dataKey:"weekRecomRank",cover:"https://qidian.gtimg.com/readnovelm/img/rank/rank-bg-recom.0.1.jpg"},{name:"\u5b8c\u672c\u699c",books:[{},{},{},{},{}],dataKey:"finishRank",cover:"https://qidian.gtimg.com/readnovelm/img/rank/rank-bg-finish.0.1.jpg"},{name:"\u6253\u8d4f\u699c",books:[{},{},{},{},{}],dataKey:"ticketRank",cover:"https://qidian.gtimg.com/readnovelm/img/rank/rank-bg-donate.0.1.jpg"},{name:"\u66f4\u65b0\u699c",books:[{},{},{},{},{}],dataKey:"updateRank",cover:"https://qidian.gtimg.com/readnovelm/img/rank/rank-bg-update.0.1.jpg"},{name:"\u70b9\u51fb\u699c",books:[{},{},{},{},{}],dataKey:"clickRank",cover:"https://qidian.gtimg.com/readnovelm/img/rank/rank-bg-click.0.1.jpg"},{name:"\u6536\u85cf\u699c",books:[{},{},{},{},{}],dataKey:"collectRank",cover:"https://qidian.gtimg.com/readnovelm/img/rank/rank-bg-collect.0.1.jpg"}],o=new i.ListView.DataSource({rowHasChanged:function(e,t){return e!==t}});return a.ranks=n,a.state={ds:o.cloneWithRows(n)},a}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://m.readnovel.com/majax/rank").then(function(e){return e.json()}).then(function(t){var a=e.state,n=e.ranks.map(function(e){return e.books=t.data[e.dataKey]||[],babelHelpers.extends({},e)});a.ds=a.ds.cloneWithRows(n),e.setState(a)})}},{key:"render",value:function(){var e=this;return r.default.createElement(i.View,{style:u.view},r.default.createElement(s.default,{title:"\u6392\u884c\u699c",barStyle:u.nav,backHidden:!1,barTintColor:"white",statusbarPadding:!1,backFunc:function(){return e.props.navigator.pop()}}),r.default.createElement(i.ListView,{style:u.list,dataSource:this.state.ds,renderRow:function(t,a,n){return e._renderRank(t,n)},automaticallyAdjustContentInsets:!1}))}},{key:"_renderRank",value:function(e,t){var a=this;return r.default.createElement(i.View,{style:u.item,key:t},r.default.createElement(i.View,{style:u.rank},r.default.createElement(i.Image,{style:u.cover,source:{uri:e.cover}}),r.default.createElement(i.Text,{style:u.name},e.name)),r.default.createElement(i.View,{style:u.books},e.books.map(function(e,t){return r.default.createElement(i.TouchableHighlight,{onPress:function(){return a.goDetailPage(e)},key:t},r.default.createElement(i.View,{style:u.book},r.default.createElement(i.Text,{style:[u.bindex,u["bindex-"+(t+1)]]},t+1,"."),t>0?r.default.createElement(i.View,{style:u.bline}):null,r.default.createElement(i.Text,{style:u.bname,numberOfLines:1},e.bName)))})))}},{key:"goDetailPage",value:function(e){this.props.navigator.push({component:d.default,args:{title:e.bName,url:"https://m.readnovel.com/book/"+e.bid}})}}]),t}(o.Component),u=i.StyleSheet.create({view:{backgroundColor:"#f6f7f9",flex:1},nav:{},list:{},item:{backgroundColor:"#fff",flex:1,flexDirection:"row",marginTop:20},rank:{width:120},cover:{height:180,flex:1},name:{bottom:76,color:"#fff",fontSize:22,left:0,lineHeight:28,position:"absolute",right:1,textAlign:"center"},books:{flex:1},book:{flex:1,height:36,justifyContent:"center",paddingLeft:38},bindex:{color:"#ccc",fontWeight:"bold",position:"absolute",textAlign:"center",width:38},"bindex-1":{color:"#ff3f59"},"bindex-2":{color:"#ff7e00"},"bindex-3":{color:"#ffc700"},bline:{backgroundColor:"#f0f1f2",height:1,left:38,position:"absolute",right:0,top:0},barrow:{height:18,position:"absolute",right:16,width:12},bname:{color:"#33373D",fontWeight:"bold",marginRight:30}});n.default=m},443);