webpackJsonp([3],{820:function(e,t,n){function a(e){n(843)}var o=n(85)(n(833),n(855),a,"data-v-54fdf7b4",null);e.exports=o.exports},833:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{renderedMarkdown:""}},methods:{getReadme:function(){var e=this;this.$gitHubApi.getReadme(this).then(function(t){t.data&&(e.renderedMarkdown=e.$marked(t.data))})}},mounted:function(){var e=this;this.$nextTick(function(){e.getReadme()})}}},839:function(e,t,n){t=e.exports=n(817)(!1),t.push([e.i,".about-me[data-v-54fdf7b4]{-ms-flex-positive:1;flex-grow:1;padding:30px;overflow-y:auto}",""])},843:function(e,t,n){var a=n(839);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(818)("334b7deb",a,!0,{})},855:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about-me bga-back-top"},[n("article",{staticClass:"markdown-body",domProps:{innerHTML:e._s(e.renderedMarkdown)}})])},staticRenderFns:[]}}});