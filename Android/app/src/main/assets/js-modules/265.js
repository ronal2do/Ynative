__d(function(e,t,s,r){"use strict";var o=t(45),i=(t(27),t(208)),l=t(235),a=t(266),n=t(273),b=(t(277),t(207)),p=t(13),c=function(e){function t(){return babelHelpers.classCallCheck(this,t),babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"render",value:function(){var e=this.props,t=e.accessibilityLabel,s=e.color,r=e.onPress,o=e.title,l=e.disabled,c=e.testID,u=[d.button],y=[d.text],h=n;s&&u.push({backgroundColor:s}),l&&(u.push(d.buttonDisabled),y.push(d.textDisabled)),p("string"==typeof o,"The title prop of a Button must be a string");var f=o.toUpperCase(),g=["button"];return l&&g.push("disabled"),i.createElement(h,{accessibilityComponentType:"button",accessibilityLabel:t,accessibilityTraits:g,testID:c,disabled:l,onPress:r},i.createElement(b,{style:u},i.createElement(a,{style:y},f)))}}]),t}(i.Component);c.propTypes={title:i.PropTypes.string.isRequired,accessibilityLabel:i.PropTypes.string,color:o,disabled:i.PropTypes.bool,onPress:i.PropTypes.func.isRequired,testID:i.PropTypes.string};var u="#2196F3",d=l.create({button:{elevation:4,backgroundColor:u,borderRadius:2},text:{textAlign:"center",color:"white",padding:8,fontWeight:"500"},buttonDisabled:{elevation:0,backgroundColor:"#dfdfdf"},textDisabled:{color:"#a1a1a1"}});s.exports=c},265);