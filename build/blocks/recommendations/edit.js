!function(){"use strict";var e,t={719:function(e,t,r){var n=r(893),o=window.wp.i18n,i=window.wp.blocks,s=window.wp.blockEditor;function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}var u=window.wp.apiFetch,l=r.n(u),c=window.wp.compose,w=window.wp.element,L=window.wp.url,M="RECOMMENDATIONS_BLOCK_ERROR",y="RECOMMENDATIONS_BLOCK_RECOMMENDATIONS";function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=(0,w.createContext)(),g=function(e,t){switch(t.type){case M:return m(m({},e),{},{isLoaded:!0,error:t.error,recommendations:void 0});case"RECOMMENDATIONS_BLOCK_LOADED":return m(m({},e),{},{isLoaded:!0});case y:var r=t.recommendations;if(!Array.isArray(r))return m(m({},e),{},{recommendations:void 0});var n=r.map((function(e){return{title:e.title,url:e.url,image_url:e.image_url,thumb_url_medium:e.thumb_url_medium}}));return m(m({},e),{},{isLoaded:!0,error:void 0,recommendations:n});default:return m({},e)}},v=function(){return(0,w.useContext)(b)},N=function(e){var t,r,n,o,i={isLoaded:!1,recommendations:void 0,uuid:null===(t=window.PARSELY)||void 0===t||null===(r=t.config)||void 0===r?void 0:r.uuid,clientId:e.clientId},s=(n=(0,w.useReducer)(g,i),o=2,function(e){if(Array.isArray(e))return e}(n)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],_n=!0,s=!1;try{for(r=r.call(e);!(_n=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);_n=!0);}catch(e){s=!0,o=e}finally{try{_n||null==r.return||r.return()}finally{if(s)throw o}}return i}}(n,o)||function(e,t){if(e){if("string"==typeof e)return j(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?j(e,t):void 0}}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=s[0],u=s[1];return(0,w.createElement)(b.Provider,p({value:{state:a,dispatch:u}},e))},h=function(){return h=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},h.apply(this,arguments)},S=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{u(n.next(e))}catch(e){i(e)}}function a(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}u((n=n.apply(e,t||[])).next())}))},O=function(e,t){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},_=function(e){var t=e.boost,r=e.limit,n=e.sort,o=e.isEditMode,i=v().dispatch,s={boost:t,limit:r,sort:n,url:window.location.href};function a(){return S(this,void 0,void 0,(function(){return O(this,(function(e){return[2,l()({path:(0,L.addQueryArgs)("/wp-parsely/v1/related",{query:s})})]}))}))}var u=function(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}([],Object.values(s),!0),p=(0,w.useCallback)((function(){return S(this,void 0,void 0,(function(){var e,t,r,n;return O(this,(function(s){switch(s.label){case 0:return s.trys.push([0,2,,3]),[4,a()];case 1:return e=s.sent(),[3,3];case 2:return r=s.sent(),t=r,[3,3];case 3:return(null==e?void 0:e.error)&&(t=e.error),t?(i(function(e){return{type:M,error:e.error}}({error:t})),[2]):(n=(null==e?void 0:e.data)||[],o&&(n=n.map((function(e){return h(h({},e),{url:"#"})}))),i(function(e){return{type:y,recommendations:e.recommendations}}({recommendations:n})),[2])}}))}))}),u),j=(0,c.useDebounce)(p,300);return(0,w.useEffect)((function(){j()}),u),null},D=window.wp.components,C=function(){return C=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},C.apply(this,arguments)},x=function(e,t,r){return"original"===e?t:r},z=function(e){var t=e.imageAlt,r=e.imagestyle,o=e.recommendation,i=o.title,s=o.url,a=o.image_url,u=o.thumb_url_medium,l=e.showimages;return(0,n.jsx)("li",{children:(0,n.jsx)("a",C({href:s,className:"parsely-recommendations-link"},{children:(0,n.jsxs)(D.Card,C({className:"parsely-recommendations-card"},{children:[l&&(0,n.jsx)(D.CardMedia,C({className:"parsely-recommendations-cardmedia"},{children:(0,n.jsx)("img",{className:"parsely-recommendations-image",src:x(r,a,u),alt:t})})),(0,n.jsx)(D.CardBody,C({className:"parsely-recommendations-cardbody"},{children:i}))]}))}))})},E=function(){return E=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},E.apply(this,arguments)},T=function(e){var t=e.imagestyle,r=e.recommendations,i=e.showimages;return(0,n.jsx)("ul",E({className:"parsely-recommendations-list"},{children:r.map((function(e,r){return(0,n.jsx)(z,{imagestyle:t,imageAlt:(0,o.__)("Image for link","wp-parsely"),recommendation:e,showimages:i},r)}))}))},A=function(){return A=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},A.apply(this,arguments)},I=function(e){var t=e.title;return t?(0,n.jsx)("p",A({className:"parsely-recommendations-list-title"},{children:t})):(0,n.jsx)(n.Fragment,{})},P=function(){return P=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},P.apply(this,arguments)};function k(e){var t,r,i=e.boost,s=e.limit,u=e.imagestyle,l=e.isEditMode,c=e.showimages,w=e.sort,L=e.title,M=v().state,y=M.error,p=M.isLoaded,j=M.recommendations;return p&&l&&(y?((r="".concat((0,o.__)("Error:","wp-parsely")," ").concat(JSON.stringify(y))).includes('"errors":{"http_request_failed"')||"object"===a(y)&&"fetch_error"===(null==y?void 0:y.code)?r=(0,o.__)("The Parse.ly Recommendations API is not accessible. You may be offline.","wp-parsely"):r.includes('{"errors":{"403":["Forbidden"]},"error_data":[]}')?r=(0,o.__)("Access denied. Please verify that your Site ID is valid.","wp-parsely"):"object"===a(y)&&"rest_no_route"===(null==y?void 0:y.code)&&(r=(0,o.__)("The REST route is unavailable. To use it, wp_parsely_enable_related_api_proxy should be true.","wp-parsely")),t=r):Array.isArray(j)&&!(null==j?void 0:j.length)&&(t=(0,o.__)("No recommendations found.","wp-parsely"))),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(_,{boost:i,limit:s,sort:w,isEditMode:l}),!p&&(0,n.jsx)("span",P({className:"parsely-recommendations-loading"},{children:(0,o.__)("Loading…","wp-parsely")})),t&&(0,n.jsx)("span",P({className:"parsely-recommendations-error"},{children:t})),p&&!!(null==j?void 0:j.length)&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(I,{title:L}),(0,n.jsx)(T,{imagestyle:u,recommendations:j,showimages:c})]})]})}var Q=function(){return Q=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Q.apply(this,arguments)},Y=function(e){var t=e.attributes,r=t.boost,i=t.imagestyle,a=t.limit,u=t.showimages,l=t.sort,c=t.title,w=e.setAttributes;return(0,n.jsx)(s.InspectorControls,{children:(0,n.jsxs)(D.PanelBody,Q({title:"Settings",initialOpen:!0},{children:[(0,n.jsx)(D.PanelRow,{children:(0,n.jsx)(D.TextControl,{label:(0,o.__)("Title","wp-parsely"),value:c,onChange:function(e){return w({title:e})}})}),(0,n.jsx)(D.PanelRow,{children:(0,n.jsx)(D.RangeControl,{label:(0,o.__)("Maximum Results","wp-parsely"),min:1,max:25,onChange:function(e){return w({limit:e})},value:a})}),(0,n.jsx)(D.PanelRow,{children:(0,n.jsx)(D.ToggleControl,{label:(0,o.__)("Show Images","wp-parsely"),help:u?(0,o.__)("Showing images","wp-parsely"):(0,o.__)("Not showing images","wp-parsely"),checked:u,onChange:function(){return w({showimages:!u})}})}),u&&(0,n.jsx)(D.PanelRow,{children:(0,n.jsx)(D.RadioControl,{label:(0,o.__)("Image style","wp-parsely"),selected:i,options:[{label:(0,o.__)("Original image","wp-parsely"),value:"original"},{label:(0,o.__)("Thumbnail from Parse.ly","wp-parsely"),value:"thumbnail"}],onChange:function(e){return w({imagestyle:"original"===e?"original":"thumbnail"})}})}),(0,n.jsx)(D.PanelRow,{children:(0,n.jsx)(D.SelectControl,{label:(0,o.__)("Sort Recommendations","wp-parsely"),value:l,options:[{label:(0,o.__)("Score","wp-parsely"),value:"score"},{label:(0,o.__)("Publication Date","wp-parsely"),value:"pub_date"}],onChange:function(e){return w({sort:e})}})}),(0,n.jsx)(D.PanelRow,{children:(0,n.jsx)(D.SelectControl,{label:(0,o.__)("Boost","wp-parsely"),value:r,options:[{label:(0,o.__)("Page views","wp-parsely"),value:"views"},{label:(0,o.__)("Page views on mobile devices","wp-parsely"),value:"mobile_views"},{label:(0,o.__)("Page views on tablet devices","wp-parsely"),value:"tablet_views"},{label:(0,o.__)("Page views on desktop devices","wp-parsely"),value:"desktop_views"},{label:(0,o.__)("Unique page visitors","wp-parsely"),value:"visitors"},{label:(0,o.__)("New visitors","wp-parsely"),value:"visitors_new"},{label:(0,o.__)("Returning visitors","wp-parsely"),value:"visitors_returning"},{label:(0,o.__)("Total engagement time in minutes","wp-parsely"),value:"engaged_minutes"},{label:(0,o.__)("Engaged minutes spent by total visitors","wp-parsely"),value:"avg_engaged"},{label:(0,o.__)("Average engaged minutes spent by new visitors","wp-parsely"),value:"avg_engaged_new"},{label:(0,o.__)("Average engaged minutes spent by returning visitors","wp-parsely"),value:"avg_engaged_returning"},{label:(0,o.__)("Total social interactions","wp-parsely"),value:"social_interactions"},{label:(0,o.__)("Count of Facebook shares, likes, and comments","wp-parsely"),value:"fb_interactions"},{label:(0,o.__)("Count of Twitter tweets and retweets","wp-parsely"),value:"tw_interactions"},{label:(0,o.__)("Count of Pinterest pins","wp-parsely"),value:"pi_interactions"},{label:(0,o.__)("Page views where the referrer was any social network","wp-parsely"),value:"social_referrals"},{label:(0,o.__)("Page views where the referrer was facebook.com","wp-parsely"),value:"fb_referrals"},{label:(0,o.__)("Page views where the referrer was twitter.com","wp-parsely"),value:"tw_referrals"},{label:(0,o.__)("Page views where the referrer was pinterest.com","wp-parsely"),value:"pi_referrals"}],onChange:function(e){return w({boost:e})}})})]}))})};r(196);var U=JSON.parse('{"u2":"wp-parsely/recommendations","Y4":{"boost":{"type":"string","default":"views"},"imagestyle":{"type":"string","default":"original"},"limit":{"type":"number","default":3},"showimages":{"type":"boolean","default":true},"sort":{"type":"string","default":"score"},"title":{"type":"string","default":"Related Content"}}}'),R=function(){return R=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},R.apply(this,arguments)},G=U.u2,B=U.Y4;(0,i.registerBlockType)(G,{apiVersion:2,icon:"data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCA2NSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM1YmE3NDU7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5QYXJzZS5seSBMb2dvPC90aXRsZT48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yMy43Miw1MS41M2MwLS4xOCwwLS4zNC0uMDYtLjUyYTEzLjExLDEzLjExLDAsMCwwLTIuMS01LjUzQTE0Ljc0LDE0Ljc0LDAsMCwwLDE5LjEyLDQzYy0uMjctLjIxLS41LS4xMS0uNTEuMjJsLS4yNCwzLjQyYzAsLjMzLS4zOC4zNS0uNDksMGwtMS41LTQuOGExLjQsMS40LDAsMCwwLS43Ny0uNzgsMjMuOTEsMjMuOTEsMCwwLDAtMy4xLS44NGMtMS4zOC0uMjQtMy4zOS0uMzktMy4zOS0uMzktLjM0LDAtLjQ1LjIxLS4yNS40OWwyLjA2LDMuNzZjLjIuMjcsMCwuNTQtLjI5LjMzbC00LjUxLTMuNmEzLjY4LDMuNjgsMCwwLDAtMi44Ni0uNDhjLTEsLjE2LTIuNDQuNDYtMi40NC40NmEuNjguNjgsMCwwLDAtLjM5LjI1LjczLjczLDAsMCwwLS4xNC40NVMuNDEsNDMsLjU0LDQ0YTMuNjMsMy42MywwLDAsMCwxLjI1LDIuNjJMNi40OCw1MGMuMjguMi4wOS40OS0uMjMuMzdsLTQuMTgtLjk0Yy0uMzItLjEyLS41LDAtLjQuMzcsMCwwLC42OSwxLjg5LDEuMzEsMy4xNmEyNCwyNCwwLDAsMCwxLjY2LDIuNzQsMS4zNCwxLjM0LDAsMCwwLDEsLjUybDUsLjEzYy4zMywwLC40MS4zOC4xLjQ4TDcuNTEsNThjLS4zMS4xLS4zNC4zNS0uMDcuNTVhMTQuMjksMTQuMjksMCwwLDAsMy4wNSwxLjY2LDEzLjA5LDEzLjA5LDAsMCwwLDUuOS41LDI1LjEzLDI1LjEzLDAsMCwwLDQuMzQtMSw5LjU1LDkuNTUsMCwwLDEtLjA4LTEuMiw5LjMyLDkuMzIsMCwwLDEsMy4wNy02LjkxIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNTkuNyw0MS41M2EuNzMuNzMsMCwwLDAtLjE0LS40NS42OC42OCwwLDAsMC0uMzktLjI1cy0xLjQzLS4zLTIuNDQtLjQ2YTMuNjQsMy42NCwwLDAsMC0yLjg2LjQ4bC00LjUxLDMuNmMtLjI2LjIxLS40OS0uMDYtLjI5LS4zM2wyLjA2LTMuNzZjLjItLjI4LjA5LS40OS0uMjUtLjQ5LDAsMC0yLC4xNS0zLjM5LjM5YTIzLjkxLDIzLjkxLDAsMCwwLTMuMS44NCwxLjQsMS40LDAsMCwwLS43Ny43OGwtMS41LDQuOGMtLjExLjMyLS40OC4zLS40OSwwbC0uMjQtMy40MmMwLS4zMy0uMjQtLjQzLS41MS0uMjJhMTQuNzQsMTQuNzQsMCwwLDAtMi40NCwyLjQ3QTEzLjExLDEzLjExLDAsMCwwLDM2LjM0LDUxYzAsLjE4LDAsLjM0LS4wNi41MmE5LjI2LDkuMjYsMCwwLDEsMyw4LjEsMjQuMSwyNC4xLDAsMCwwLDQuMzQsMSwxMy4wOSwxMy4wOSwwLDAsMCw1LjktLjUsMTQuMjksMTQuMjksMCwwLDAsMy4wNS0xLjY2Yy4yNy0uMi4yNC0uNDUtLjA3LS41NWwtMy4yMi0xLjE3Yy0uMzEtLjEtLjIzLS40Ny4xLS40OGw1LS4xM2ExLjM4LDEuMzgsMCwwLDAsMS0uNTJBMjQuNiwyNC42LDAsMCwwLDU3LDUyLjkyYy42MS0xLjI3LDEuMzEtMy4xNiwxLjMxLTMuMTYuMS0uMzMtLjA4LS40OS0uNC0uMzdsLTQuMTguOTRjLS4zMi4xMi0uNTEtLjE3LS4yMy0uMzdsNC42OS0zLjM0QTMuNjMsMy42MywwLDAsMCw1OS40Niw0NGMuMTMtMSwuMjQtMi40Ny4yNC0yLjQ3Ii8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDYuNSwyNS42MWMwLS41My0uMzUtLjcyLS44LS40M2wtNC44NiwyLjY2Yy0uNDUuMjgtLjU2LS4yNy0uMjMtLjY5bDQuNjYtNi4yM2EyLDIsMCwwLDAsLjI4LTEuNjgsMzYuNTEsMzYuNTEsMCwwLDAtMi4xOS00Ljg5LDM0LDM0LDAsMCwwLTIuODEtMy45NGMtLjMzLS40MS0uNzQtLjM1LS45MS4xNmwtMi4yOCw1LjY4Yy0uMTYuNS0uNi40OC0uNTktLjA1bC4yOC04LjkzYTIuNTQsMi41NCwwLDAsMC0uNjYtMS42NFMzNSw0LjI3LDMzLjg4LDMuMjcsMzAuNzguNjksMzAuNzguNjlhMS4yOSwxLjI5LDAsMCwwLTEuNTQsMHMtMS44OCwxLjQ5LTMuMTIsMi41OS0yLjQ4LDIuMzUtMi40OCwyLjM1QTIuNSwyLjUsMCwwLDAsMjMsNy4yN2wuMjcsOC45M2MwLC41My0uNDEuNTUtLjU4LjA1bC0yLjI5LTUuNjljLS4xNy0uNS0uNTctLjU2LS45MS0uMTRhMzUuNzcsMzUuNzcsMCwwLDAtMyw0LjIsMzUuNTUsMzUuNTUsMCwwLDAtMiw0LjYyLDIsMiwwLDAsMCwuMjcsMS42N2w0LjY3LDYuMjRjLjMzLjQyLjIzLDEtLjIyLjY5bC00Ljg3LTIuNjZjLS40NS0uMjktLjgyLS4xLS44Mi40M2ExOC42LDE4LjYsMCwwLDAsLjgzLDUuMDcsMjAuMTYsMjAuMTYsMCwwLDAsNS4zNyw3Ljc3YzMuMTksMyw1LjkzLDcuOCw3LjQ1LDExLjA4QTkuNiw5LjYsMCwwLDEsMzAsNDkuMDlhOS4zMSw5LjMxLDAsMCwxLDIuODYuNDVjMS41Mi0zLjI4LDQuMjYtOC4xMSw3LjQ0LTExLjA5YTIwLjQ2LDIwLjQ2LDAsMCwwLDUuMDktNywxOSwxOSwwLDAsMCwxLjExLTUuODIiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0zNi4xMiw1OC40NEE2LjEyLDYuMTIsMCwxLDEsMzAsNTIuMzJhNi4xMSw2LjExLDAsMCwxLDYuMTIsNi4xMiIvPjwvc3ZnPgo=",category:"widgets",edit:function(e){return(0,n.jsx)("div",R({},(0,s.useBlockProps)(),{children:(0,n.jsxs)(N,R({clientId:e.clientId},{children:[(0,n.jsx)(Y,R({},e)),(0,n.jsx)(k,R({},e.attributes,{isEditMode:!0}))]}))}))},attributes:R(R({},B),{title:{type:"string",default:(0,o.__)("Related Content","wp-parsely")}}),transforms:{from:[{type:"block",blocks:["core/legacy-widget"],isMatch:function(e){var t=e.idBase,r=e.instance;return!!(null==r?void 0:r.raw)&&"Parsely_Recommended_Widget"===t},transform:function(e){var t=e.instance;return(0,i.createBlock)("wp-parsely/recommendations",{name:t.raw.name})}}]}})},418:function(e){var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var s,a,u=o(e),l=1;l<arguments.length;l++){for(var c in s=Object(arguments[l]))r.call(s,c)&&(u[c]=s[c]);if(t){a=t(s);for(var w=0;w<a.length;w++)n.call(s,a[w])&&(u[a[w]]=s[a[w]])}}return u}},251:function(e,t,r){r(418);var n=r(196),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),t.Fragment=i("react.fragment")}var s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,i={},l=null,c=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,n)&&!u.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:c,props:i,_owner:s.current}}t.jsx=l,t.jsxs=l},893:function(e,t,r){e.exports=r(251)},196:function(e){e.exports=window.React}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=function(t,r,o,i){if(!r){var s=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],i=e[c][2];for(var a=!0,u=0;u<r.length;u++)(!1&i||s>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(a=!1,i<s&&(s=i));if(a){e.splice(c--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,o,i]},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={878:0,570:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,s=r[0],a=r[1],u=r[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(u)var c=u(n)}for(t&&t(r);l<s.length;l++)i=s[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},r=self.webpackChunkwp_parsely=self.webpackChunkwp_parsely||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var o=n.O(void 0,[570],(function(){return n(719)}));o=n.O(o)}();