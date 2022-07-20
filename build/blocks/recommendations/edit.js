!function(){"use strict";var e,r={77:function(e,r,t){var n=t(893),o=window.wp.i18n,a=window.wp.blocks,i=window.wp.blockEditor;function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}var s=window.wp.apiFetch,c=t.n(s),u=window.wp.compose,p=window.wp.element,f=window.wp.url,d="RECOMMENDATIONS_BLOCK_ERROR",y="RECOMMENDATIONS_BLOCK_RECOMMENDATIONS";function m(){return m=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},m.apply(this,arguments)}function w(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function b(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function v(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?v(Object(t),!0).forEach((function(r){b(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var g=(0,p.createContext)(),_=function(e,r){switch(r.type){case d:return h(h({},e),{},{isLoaded:!0,error:r.error,recommendations:void 0});case"RECOMMENDATIONS_BLOCK_LOADED":return h(h({},e),{},{isLoaded:!0});case y:var t=r.recommendations;if(!Array.isArray(t))return h(h({},e),{},{recommendations:void 0});var n=t.map((function(e){return{title:e.title,url:e.url,image_url:e.image_url,thumb_url_medium:e.thumb_url_medium}}));return h(h({},e),{},{isLoaded:!0,error:void 0,recommendations:n});default:return h({},e)}},O=function(){return(0,p.useContext)(g)},j=function(e){var r,t,n,o,a={isLoaded:!1,recommendations:void 0,uuid:null===(r=window.PARSELY)||void 0===r||null===(t=r.config)||void 0===t?void 0:t.uuid,clientId:e.clientId},i=(n=(0,p.useReducer)(_,a),o=2,function(e){if(Array.isArray(e))return e}(n)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],_n=!0,i=!1;try{for(t=t.call(e);!(_n=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);_n=!0);}catch(e){i=!0,o=e}finally{try{_n||null==t.return||t.return()}finally{if(i)throw o}}return a}}(n,o)||function(e,r){if(e){if("string"==typeof e)return w(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?w(e,r):void 0}}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=i[0],s=i[1];return(0,p.createElement)(g.Provider,m({value:{state:l,dispatch:s}},e))},x=function(){return x=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},x.apply(this,arguments)},P=function(e,r,t,n){return new(t||(t=Promise))((function(o,a){function i(e){try{s(n.next(e))}catch(e){a(e)}}function l(e){try{s(n.throw(e))}catch(e){a(e)}}function s(e){var r;e.done?o(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(i,l)}s((n=n.apply(e,r||[])).next())}))},S=function(e,r){var t,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=r.call(e,i)}catch(e){a=[6,e],n=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}},C=function(e){var r=e.boost,t=e.limit,n=e.sort,o=e.isEditMode,a=O().dispatch,i={boost:r,limit:t,sort:n,url:window.location.href};function l(){return P(this,void 0,void 0,(function(){return S(this,(function(e){return[2,c()({path:(0,f.addQueryArgs)("/wp-parsely/v1/related",{query:i})})]}))}))}var s=function(e,r,t){if(t||2===arguments.length)for(var n,o=0,a=r.length;o<a;o++)!n&&o in r||(n||(n=Array.prototype.slice.call(r,0,o)),n[o]=r[o]);return e.concat(n||Array.prototype.slice.call(r))}([],Object.values(i),!0),m=(0,p.useCallback)((function(){return P(this,void 0,void 0,(function(){var e,r,t,n;return S(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,l()];case 1:return e=i.sent(),[3,3];case 2:return t=i.sent(),r=t,[3,3];case 3:return(null==e?void 0:e.error)&&(r=e.error),r?(a(function(e){return{type:d,error:e.error}}({error:r})),[2]):(n=(null==e?void 0:e.data)||[],o&&(n=n.map((function(e){return x(x({},e),{url:"#"})}))),a(function(e){return{type:y,recommendations:e.recommendations}}({recommendations:n})),[2])}}))}))}),s),w=(0,u.useDebounce)(m,300);return(0,p.useEffect)((function(){w()}),s),null},E=window.wp.components,k=function(){return k=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},k.apply(this,arguments)},A=function(e,r,t){return"original"===e?r:t},R=function(e){var r=e.imageAlt,t=e.imagestyle,o=e.recommendation,a=o.title,i=o.url,l=o.image_url,s=o.thumb_url_medium,c=e.showimages;return(0,n.jsx)("li",{children:(0,n.jsx)("a",k({href:i,className:"parsely-recommendations-link"},{children:(0,n.jsxs)(E.Card,k({className:"parsely-recommendations-card"},{children:[c&&(0,n.jsx)(E.CardMedia,k({className:"parsely-recommendations-cardmedia"},{children:(0,n.jsx)("img",{className:"parsely-recommendations-image",src:A(t,l,s),alt:r})})),(0,n.jsx)(E.CardBody,k({className:"parsely-recommendations-cardbody"},{children:a}))]}))}))})},N=function(){return N=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},N.apply(this,arguments)},T=function(e){var r=e.imagestyle,t=e.recommendations,a=e.showimages;return(0,n.jsx)("ul",N({className:"parsely-recommendations-list"},{children:t.map((function(e,t){return(0,n.jsx)(R,{imagestyle:r,imageAlt:(0,o.__)("Image for link","wp-parsely"),recommendation:e,showimages:a},t)}))}))},I=function(){return I=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},I.apply(this,arguments)},M=function(e){var r=e.title;return r?(0,n.jsx)("p",I({className:"parsely-recommendations-list-title"},{children:r})):(0,n.jsx)(n.Fragment,{})},L=function(){return L=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},L.apply(this,arguments)};function D(e){var r,t,a=e.boost,i=e.limit,s=e.imagestyle,c=e.isEditMode,u=e.showimages,p=e.sort,f=e.title,d=O().state,y=d.error,m=d.isLoaded,w=d.recommendations;return m&&c&&(y?((t="".concat((0,o.__)("Error:","wp-parsely")," ").concat(JSON.stringify(y))).includes('"errors":{"http_request_failed"')||"object"===l(y)&&"fetch_error"===(null==y?void 0:y.code)?t=(0,o.__)("The Parse.ly Recommendations API is not accessible. You may be offline.","wp-parsely"):t.includes('{"errors":{"403":["Forbidden"]},"error_data":[]}')?t=(0,o.__)("Access denied. Please verify that your Site ID is valid.","wp-parsely"):"object"===l(y)&&"rest_no_route"===(null==y?void 0:y.code)&&(t=(0,o.__)("The REST route is unavailable. To use it, wp_parsely_enable_related_api_proxy should be true.","wp-parsely")),r=t):Array.isArray(w)&&!(null==w?void 0:w.length)&&(r=(0,o.__)("No recommendations found.","wp-parsely"))),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(C,{boost:a,limit:i,sort:p,isEditMode:c}),!m&&(0,n.jsx)("span",L({className:"parsely-recommendations-loading"},{children:(0,o.__)("Loading…","wp-parsely")})),r&&(0,n.jsx)("span",L({className:"parsely-recommendations-error"},{children:r})),m&&!!(null==w?void 0:w.length)&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(M,{title:f}),(0,n.jsx)(T,{imagestyle:s,recommendations:w,showimages:u})]})]})}var B=function(){return B=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},B.apply(this,arguments)},F=function(e){var r=e.attributes,t=r.boost,a=r.imagestyle,l=r.limit,s=r.showimages,c=r.sort,u=r.title,p=e.setAttributes;return(0,n.jsx)(i.InspectorControls,{children:(0,n.jsxs)(E.PanelBody,B({title:"Settings",initialOpen:!0},{children:[(0,n.jsx)(E.PanelRow,{children:(0,n.jsx)(E.TextControl,{label:(0,o.__)("Title","wp-parsely"),value:u,onChange:function(e){return p({title:e})}})}),(0,n.jsx)(E.PanelRow,{children:(0,n.jsx)(E.RangeControl,{label:(0,o.__)("Maximum Results","wp-parsely"),min:1,max:25,onChange:function(e){return p({limit:e})},value:l})}),(0,n.jsx)(E.PanelRow,{children:(0,n.jsx)(E.ToggleControl,{label:(0,o.__)("Show Images","wp-parsely"),help:s?(0,o.__)("Showing images","wp-parsely"):(0,o.__)("Not showing images","wp-parsely"),checked:s,onChange:function(){return p({showimages:!s})}})}),s&&(0,n.jsx)(E.PanelRow,{children:(0,n.jsx)(E.RadioControl,{label:(0,o.__)("Image style","wp-parsely"),selected:a,options:[{label:(0,o.__)("Original image","wp-parsely"),value:"original"},{label:(0,o.__)("Thumbnail from Parse.ly","wp-parsely"),value:"thumbnail"}],onChange:function(e){return p({imagestyle:"original"===e?"original":"thumbnail"})}})}),(0,n.jsx)(E.PanelRow,{children:(0,n.jsx)(E.SelectControl,{label:(0,o.__)("Sort Recommendations","wp-parsely"),value:c,options:[{label:(0,o.__)("Score","wp-parsely"),value:"score"},{label:(0,o.__)("Publication Date","wp-parsely"),value:"pub_date"}],onChange:function(e){return p({sort:e})}})}),(0,n.jsx)(E.PanelRow,{children:(0,n.jsx)(E.SelectControl,{label:(0,o.__)("Boost","wp-parsely"),value:t,options:[{label:(0,o.__)("Page views","wp-parsely"),value:"views"},{label:(0,o.__)("Page views on mobile devices","wp-parsely"),value:"mobile_views"},{label:(0,o.__)("Page views on tablet devices","wp-parsely"),value:"tablet_views"},{label:(0,o.__)("Page views on desktop devices","wp-parsely"),value:"desktop_views"},{label:(0,o.__)("Unique page visitors","wp-parsely"),value:"visitors"},{label:(0,o.__)("New visitors","wp-parsely"),value:"visitors_new"},{label:(0,o.__)("Returning visitors","wp-parsely"),value:"visitors_returning"},{label:(0,o.__)("Total engagement time in minutes","wp-parsely"),value:"engaged_minutes"},{label:(0,o.__)("Engaged minutes spent by total visitors","wp-parsely"),value:"avg_engaged"},{label:(0,o.__)("Average engaged minutes spent by new visitors","wp-parsely"),value:"avg_engaged_new"},{label:(0,o.__)("Average engaged minutes spent by returning visitors","wp-parsely"),value:"avg_engaged_returning"},{label:(0,o.__)("Total social interactions","wp-parsely"),value:"social_interactions"},{label:(0,o.__)("Count of Facebook shares, likes, and comments","wp-parsely"),value:"fb_interactions"},{label:(0,o.__)("Count of Twitter tweets and retweets","wp-parsely"),value:"tw_interactions"},{label:(0,o.__)("Count of Pinterest pins","wp-parsely"),value:"pi_interactions"},{label:(0,o.__)("Page views where the referrer was any social network","wp-parsely"),value:"social_referrals"},{label:(0,o.__)("Page views where the referrer was facebook.com","wp-parsely"),value:"fb_referrals"},{label:(0,o.__)("Page views where the referrer was twitter.com","wp-parsely"),value:"tw_referrals"},{label:(0,o.__)("Page views where the referrer was pinterest.com","wp-parsely"),value:"pi_referrals"}],onChange:function(e){return p({boost:e})}})})]}))})},q=function(){return q=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},q.apply(this,arguments)},Y=JSON.parse('{"u2":"wp-parsely/recommendations","Y4":{"boost":{"type":"string","default":"views"},"imagestyle":{"type":"string","default":"original"},"limit":{"type":"number","default":3},"showimages":{"type":"boolean","default":true},"sort":{"type":"string","default":"score"},"title":{"type":"string","default":"Related Content"}}}'),U=function(){return U=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},U.apply(this,arguments)},K=Y.u2,$=Y.Y4;(0,a.registerBlockType)(K,{apiVersion:2,icon:function(){return(0,n.jsxs)(E.SVG,q({height:24,viewBox:"0 0 60 65",width:24,xmlns:"http://www.w3.org/2000/svg"},{children:[(0,n.jsx)(E.Path,{fill:"#5ba745",d:"M23.72,51.53c0-.18,0-.34-.06-.52a13.11,13.11,0,0,0-2.1-5.53A14.74,14.74,0,0,0,19.12,43c-.27-.21-.5-.11-.51.22l-.24,3.42c0,.33-.38.35-.49,0l-1.5-4.8a1.4,1.4,0,0,0-.77-.78,23.91,23.91,0,0,0-3.1-.84c-1.38-.24-3.39-.39-3.39-.39-.34,0-.45.21-.25.49l2.06,3.76c.2.27,0,.54-.29.33l-4.51-3.6a3.68,3.68,0,0,0-2.86-.48c-1,.16-2.44.46-2.44.46a.68.68,0,0,0-.39.25.73.73,0,0,0-.14.45S.41,43,.54,44a3.63,3.63,0,0,0,1.25,2.62L6.48,50c.28.2.09.49-.23.37l-4.18-.94c-.32-.12-.5,0-.4.37,0,0,.69,1.89,1.31,3.16a24,24,0,0,0,1.66,2.74,1.34,1.34,0,0,0,1,.52l5,.13c.33,0,.41.38.1.48L7.51,58c-.31.1-.34.35-.07.55a14.29,14.29,0,0,0,3.05,1.66,13.09,13.09,0,0,0,5.9.5,25.13,25.13,0,0,0,4.34-1,9.55,9.55,0,0,1-.08-1.2,9.32,9.32,0,0,1,3.07-6.91"}),(0,n.jsx)(E.Path,{fill:"#5ba745",d:"M59.7,41.53a.73.73,0,0,0-.14-.45.68.68,0,0,0-.39-.25s-1.43-.3-2.44-.46a3.64,3.64,0,0,0-2.86.48l-4.51,3.6c-.26.21-.49-.06-.29-.33l2.06-3.76c.2-.28.09-.49-.25-.49,0,0-2,.15-3.39.39a23.91,23.91,0,0,0-3.1.84,1.4,1.4,0,0,0-.77.78l-1.5,4.8c-.11.32-.48.3-.49,0l-.24-3.42c0-.33-.24-.43-.51-.22a14.74,14.74,0,0,0-2.44,2.47A13.11,13.11,0,0,0,36.34,51c0,.18,0,.34-.06.52a9.26,9.26,0,0,1,3,8.1,24.1,24.1,0,0,0,4.34,1,13.09,13.09,0,0,0,5.9-.5,14.29,14.29,0,0,0,3.05-1.66c.27-.2.24-.45-.07-.55l-3.22-1.17c-.31-.1-.23-.47.1-.48l5-.13a1.38,1.38,0,0,0,1-.52A24.6,24.6,0,0,0,57,52.92c.61-1.27,1.31-3.16,1.31-3.16.1-.33-.08-.49-.4-.37l-4.18.94c-.32.12-.51-.17-.23-.37l4.69-3.34A3.63,3.63,0,0,0,59.46,44c.13-1,.24-2.47.24-2.47"}),(0,n.jsx)(E.Path,{fill:"#5ba745",d:"M46.5,25.61c0-.53-.35-.72-.8-.43l-4.86,2.66c-.45.28-.56-.27-.23-.69l4.66-6.23a2,2,0,0,0,.28-1.68,36.51,36.51,0,0,0-2.19-4.89,34,34,0,0,0-2.81-3.94c-.33-.41-.74-.35-.91.16l-2.28,5.68c-.16.5-.6.48-.59-.05l.28-8.93a2.54,2.54,0,0,0-.66-1.64S35,4.27,33.88,3.27,30.78.69,30.78.69a1.29,1.29,0,0,0-1.54,0s-1.88,1.49-3.12,2.59-2.48,2.35-2.48,2.35A2.5,2.5,0,0,0,23,7.27l.27,8.93c0,.53-.41.55-.58.05l-2.29-5.69c-.17-.5-.57-.56-.91-.14a35.77,35.77,0,0,0-3,4.2,35.55,35.55,0,0,0-2,4.62,2,2,0,0,0,.27,1.67l4.67,6.24c.33.42.23,1-.22.69l-4.87-2.66c-.45-.29-.82-.1-.82.43a18.6,18.6,0,0,0,.83,5.07,20.16,20.16,0,0,0,5.37,7.77c3.19,3,5.93,7.8,7.45,11.08A9.6,9.6,0,0,1,30,49.09a9.31,9.31,0,0,1,2.86.45c1.52-3.28,4.26-8.11,7.44-11.09a20.46,20.46,0,0,0,5.09-7,19,19,0,0,0,1.11-5.82"}),(0,n.jsx)(E.Path,{fill:"#5ba745",d:"M36.12,58.44A6.12,6.12,0,1,1,30,52.32a6.11,6.11,0,0,1,6.12,6.12"})]}))},category:"widgets",edit:function(e){return(0,n.jsx)("div",U({},(0,i.useBlockProps)(),{children:(0,n.jsxs)(j,U({clientId:e.clientId},{children:[(0,n.jsx)(F,U({},e)),(0,n.jsx)(D,U({},e.attributes,{isEditMode:!0}))]}))}))},example:{attributes:{preview:!0}},attributes:U(U({},$),{title:{type:"string",default:(0,o.__)("Related Content","wp-parsely")}}),transforms:{from:[{type:"block",blocks:["core/legacy-widget"],isMatch:function(e){var r=e.idBase,t=e.instance;return!!(null==t?void 0:t.raw)&&"Parsely_Recommended_Widget"===r},transform:function(e){var r=e.instance;return(0,a.createBlock)("wp-parsely/recommendations",{name:r.raw.name})}}]}})},418:function(e){var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var i,l,s=o(e),c=1;c<arguments.length;c++){for(var u in i=Object(arguments[c]))t.call(i,u)&&(s[u]=i[u]);if(r){l=r(i);for(var p=0;p<l.length;p++)n.call(i,l[p])&&(s[l[p]]=i[l[p]])}}return s}},251:function(e,r,t){t(418);var n=t(196),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),r.Fragment=a("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var n,a={},c=null,u=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(u=r.ref),r)l.call(r,n)&&!s.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:o,type:e,key:c,ref:u,props:a,_owner:i.current}}r.jsx=c,r.jsxs=c},893:function(e,r,t){e.exports=t(251)},196:function(e){e.exports=window.React}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var a=t[e]={exports:{}};return r[e](a,a.exports,n),a.exports}n.m=r,e=[],n.O=function(r,t,o,a){if(!t){var i=1/0;for(u=0;u<e.length;u++){t=e[u][0],o=e[u][1],a=e[u][2];for(var l=!0,s=0;s<t.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](t[s])}))?t.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(u--,1);var c=o();void 0!==c&&(r=c)}}return r}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[t,o,a]},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,{a:r}),r},n.d=function(e,r){for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},function(){var e={878:0,570:0};n.O.j=function(r){return 0===e[r]};var r=function(r,t){var o,a,i=t[0],l=t[1],s=t[2],c=0;if(i.some((function(r){return 0!==e[r]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(s)var u=s(n)}for(r&&r(t);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},t=self.webpackChunkwp_parsely=self.webpackChunkwp_parsely||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))}();var o=n.O(void 0,[570],(function(){return n(77)}));o=n.O(o)}();