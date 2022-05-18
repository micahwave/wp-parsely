!function(){"use strict";var e,t,a=window.wp.element,l=window.wp.components,r=window.wp.editPost,n=window.wp.plugins,o=window.React;function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},c.apply(this,arguments)}var s=function(e){var t=e.post;return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(l.Card,null,(0,a.createElement)(l.CardHeader,null,(0,a.createElement)("b",null,t.title)),(0,a.createElement)(l.CardBody,null,(0,a.createElement)("p",null,"Published on ",t.date," by ",(0,a.createElement)("em",null,t.author),"."),(0,a.createElement)("p",null,(0,a.createElement)(l.Button,{href:t.viewUrl,target:"_blank",variant:"primary"},"Open Post")," "," ",(0,a.createElement)(l.Button,{href:t.statsUrl,target:"_blank",variant:"secondary"},"Post Stats")))),(0,a.createElement)("br",null))};function i(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}var m=window.wp.data,u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a;return t=e,a=[{key:"getTopPosts",value:function(){var e=(0,m.select)("core/editor").getCurrentPost(),t=(0,m.select)("core").getEntityRecord("taxonomy","category",e.categories[0]),a=(0,m.select)("core").getEntityRecord("root","user",e.author);return this.fetchData(a,t),[{id:1,title:"Demo Post 1",author:"Some author",date:"December 15, 2022",viewUrl:"http://www.example.com",statsUrl:"http://www.example.com"},{id:2,title:"Demo Post 2",author:"Some author",date:"December 15, 2022",viewUrl:"http://www.example.com",statsUrl:"http://www.example.com"},{id:3,title:"Demo Post 3",author:"Some author",date:"December 15, 2022",viewUrl:"http://www.example.com",statsUrl:"http://www.example.com"},{id:4,title:"Demo Post 4",author:"Some author",date:"December 15, 2022",viewUrl:"http://www.example.com",statsUrl:"http://www.example.com"},{id:5,title:"Demo Post 5",author:"Some author",date:"December 15, 2022",viewUrl:"http://www.example.com",statsUrl:"http://www.example.com"}]}},{key:"fetchData",value:function(e,t){}}],null&&i(t.prototype,null),a&&i(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}();(0,n.registerPlugin)("wp-parsely-block-editor-sidebar",{icon:function(a){return o.createElement("svg",c({id:"parsely-logo-green_svg__Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 60 65"},a),e||(e=o.createElement("defs",null,o.createElement("style",null,".parsely-logo-green_svg__cls-1{fill:#5ba745}"))),t||(t=o.createElement("path",{className:"parsely-logo-green_svg__cls-1",d:"M23.72 51.53c0-.18 0-.34-.06-.52a13.11 13.11 0 0 0-2.1-5.53A14.74 14.74 0 0 0 19.12 43c-.27-.21-.5-.11-.51.22l-.24 3.42c0 .33-.38.35-.49 0l-1.5-4.8a1.4 1.4 0 0 0-.77-.78 23.91 23.91 0 0 0-3.1-.84c-1.38-.24-3.39-.39-3.39-.39-.34 0-.45.21-.25.49l2.06 3.76c.2.27 0 .54-.29.33l-4.51-3.6a3.68 3.68 0 0 0-2.86-.48c-1 .16-2.44.46-2.44.46a.68.68 0 0 0-.39.25.73.73 0 0 0-.14.45S.41 43 .54 44a3.63 3.63 0 0 0 1.25 2.62L6.48 50c.28.2.09.49-.23.37l-4.18-.94c-.32-.12-.5 0-.4.37 0 0 .69 1.89 1.31 3.16a24 24 0 0 0 1.66 2.74 1.34 1.34 0 0 0 1 .52l5 .13c.33 0 .41.38.1.48L7.51 58c-.31.1-.34.35-.07.55a14.29 14.29 0 0 0 3.05 1.66 13.09 13.09 0 0 0 5.9.5 25.13 25.13 0 0 0 4.34-1 9.55 9.55 0 0 1-.08-1.2 9.32 9.32 0 0 1 3.07-6.91M59.7 41.53a.73.73 0 0 0-.14-.45.68.68 0 0 0-.39-.25s-1.43-.3-2.44-.46a3.64 3.64 0 0 0-2.86.48l-4.51 3.6c-.26.21-.49-.06-.29-.33l2.06-3.76c.2-.28.09-.49-.25-.49 0 0-2 .15-3.39.39a23.91 23.91 0 0 0-3.1.84 1.4 1.4 0 0 0-.77.78l-1.5 4.8c-.11.32-.48.3-.49 0l-.24-3.42c0-.33-.24-.43-.51-.22a14.74 14.74 0 0 0-2.44 2.47 13.11 13.11 0 0 0-2.1 5.49c0 .18 0 .34-.06.52a9.26 9.26 0 0 1 3 8.1 24.1 24.1 0 0 0 4.34 1 13.09 13.09 0 0 0 5.9-.5 14.29 14.29 0 0 0 3.05-1.66c.27-.2.24-.45-.07-.55l-3.22-1.17c-.31-.1-.23-.47.1-.48l5-.13a1.38 1.38 0 0 0 1-.52A24.6 24.6 0 0 0 57 52.92c.61-1.27 1.31-3.16 1.31-3.16.1-.33-.08-.49-.4-.37l-4.18.94c-.32.12-.51-.17-.23-.37l4.69-3.34A3.63 3.63 0 0 0 59.46 44c.13-1 .24-2.47.24-2.47M46.5 25.61c0-.53-.35-.72-.8-.43l-4.86 2.66c-.45.28-.56-.27-.23-.69l4.66-6.23a2 2 0 0 0 .28-1.68 36.51 36.51 0 0 0-2.19-4.89 34 34 0 0 0-2.81-3.94c-.33-.41-.74-.35-.91.16l-2.28 5.68c-.16.5-.6.48-.59-.05l.28-8.93a2.54 2.54 0 0 0-.66-1.64S35 4.27 33.88 3.27 30.78.69 30.78.69a1.29 1.29 0 0 0-1.54 0s-1.88 1.49-3.12 2.59-2.48 2.35-2.48 2.35A2.5 2.5 0 0 0 23 7.27l.27 8.93c0 .53-.41.55-.58.05l-2.29-5.69c-.17-.5-.57-.56-.91-.14a35.77 35.77 0 0 0-3 4.2 35.55 35.55 0 0 0-2 4.62 2 2 0 0 0 .27 1.67l4.67 6.24c.33.42.23 1-.22.69l-4.87-2.66c-.45-.29-.82-.1-.82.43a18.6 18.6 0 0 0 .83 5.07 20.16 20.16 0 0 0 5.37 7.77c3.19 3 5.93 7.8 7.45 11.08a9.6 9.6 0 0 1 2.83-.44 9.31 9.31 0 0 1 2.86.45c1.52-3.28 4.26-8.11 7.44-11.09a20.46 20.46 0 0 0 5.09-7 19 19 0 0 0 1.11-5.82M36.12 58.44A6.12 6.12 0 1 1 30 52.32a6.11 6.11 0 0 1 6.12 6.12"})))},render:function(){var e=u.getTopPosts();return(0,a.createElement)(r.PluginSidebar,{name:"wp-parsely-sidebar",title:"Parse.ly"},(0,a.createElement)(l.Panel,null,(0,a.createElement)(l.PanelHeader,null,"Parse.ly Content Helper"),(0,a.createElement)(l.PanelBody,null,(0,a.createElement)("p",null,"Related posts that performed well in the past:"),e.map((function(e){return(0,a.createElement)(s,{key:e.id,post:e})})))))}})}();