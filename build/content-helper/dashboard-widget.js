!function(){"use strict";var e={418:function(e){var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function s(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var a,i,c=s(e),l=1;l<arguments.length;l++){for(var p in a=Object(arguments[l]))r.call(a,p)&&(c[p]=a[p]);if(t){i=t(a);for(var u=0;u<i.length;u++)n.call(a,i[u])&&(c[i[u]]=a[i[u]])}}return c}},251:function(e,t,r){r(418);var n=r(196),s=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;s=o("react.element"),t.Fragment=o("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,o={},l=null,p=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(p=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:s,type:e,key:l,ref:p,props:o,_owner:a.current}}t.jsx=l,t.jsxs=l},893:function(e,t,r){e.exports=r(251)},196:function(e){e.exports=window.React}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e,t,n=r(893),s=window.wp.element,o=window.wp.components,a=window.wp.i18n,i=window.wp.url,c=window.wp.apiFetch,l=r.n(c),p=(e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},e(t,r)},function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function __(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(__.prototype=r.prototype,new __)}),u=function(){return u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},u.apply(this,arguments)};!function(e){e.CannotFormulateApiQuery="ch_cannot_formulate_api_query",e.FetchError="fetch_error",e.ParselyApiForbidden="403",e.ParselyApiResponseContainsError="ch_response_contains_error",e.ParselyApiReturnedNoData="ch_parsely_api_returned_no_data",e.ParselyApiReturnedTooManyResults="ch_parsely_api_returned_too_many_results",e.PluginSettingsApiSecretNotSet="parsely_api_secret_not_set",e.PluginSettingsSiteIdNotSet="parsely_site_id_not_set",e.PostIsNotPublished="ch_post_not_published"}(t||(t={}));var d=function(e){function r(t,n,s){void 0===s&&(s=(0,a.__)("Error: ","wp-parsely"));var o=e.call(this,s+t)||this;return o.hint=null,o.name=o.constructor.name,o.code=n,Object.setPrototypeOf(o,r.prototype),o}return p(r,e),r.prototype.ProcessedMessage=function(e){return void 0===e&&(e=""),[t.PluginSettingsSiteIdNotSet,t.PluginSettingsApiSecretNotSet].includes(this.code)?this.ContactUsMessage():(this.code===t.FetchError&&(this.hint=this.Hint((0,a.__)("This error can sometimes be caused by ad-blockers or browser tracking protections. Please add this site to any applicable allow lists and try again.","wp-parsely"))),this.code===t.ParselyApiForbidden&&(this.hint=this.Hint((0,a.__)("Please ensure that the Site ID within the plugin's settings is correct.","wp-parsely"))),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",u({className:e,"data-testid":"error"},{children:this.message})),this.hint]}))},r.prototype.ContactUsMessage=function(){return(0,n.jsxs)("div",u({className:"parsely-contact-us parsely-top-posts-descr","data-testid":"parsely-contact-us"},{children:[(0,n.jsxs)("p",{children:[(0,n.jsx)("a",u({href:"https://www.parse.ly/contact",target:"_blank",rel:"noopener"},{children:(0,a.__)("Contact us","wp-parsely")+" "})),(0,a.__)("about advanced plugin features and the Parse.ly dashboard.","wp-parsely")]}),(0,n.jsxs)("p",{children:[(0,a.__)("Existing Parse.ly customers can enable this feature by setting their Site ID and API Secret in","wp-parsely")+" ",(0,n.jsx)("a",u({href:"/wp-admin/options-general.php?page=parsely",target:"_blank",rel:"noopener"},{children:(0,a.__)("wp-parsely options.","wp-parsely")}))]})]}))},r.prototype.Hint=function(e){return(0,n.jsxs)("p",u({className:"parsely-error-hint","data-testid":"parsely-error-hint"},{children:[(0,n.jsx)("strong",{children:(0,a.__)("Hint:","wp-parsely")})," ",e]}))},r}(Error),f={month:"short",day:"numeric",year:"numeric"},h={month:"short",day:"numeric"};function y(e){return e.toISOString().substring(0,10)}var w=function(e,t,r,n){return new(r||(r=Promise))((function(s,o){function a(e){try{c(n.next(e))}catch(e){o(e)}}function i(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,i)}c((n=n.apply(e,t||[])).next())}))},v=function(e,t){var r,n,s,o,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(a=0)),a;)try{if(r=1,n&&(s=2&i[0]?n.return:i[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,i[1])).done)return s;switch(n=0,s&&(i=[2&i[0],s.value]),i[0]){case 0:case 1:s=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((s=(s=a.trys).length>0&&s[s.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!s||i[1]>s[0]&&i[1]<s[3])){a.label=i[1];break}if(6===i[0]&&a.label<s[1]){a.label=s[1],s=i;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(i);break}s[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=s=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},m=function(){function e(){var e,t;this.dataPeriodEnd=y(new Date)+"T23:59",this.dataPeriodStart=(e=this.dataPeriodEnd,6,(t=new Date(e)).setDate(t.getDate()-6),y(t)+"T00:00")}return e.prototype.getTopPosts=function(){return w(this,void 0,void 0,(function(){var e,r;return v(this,(function(n){switch(n.label){case 0:e=[],n.label=1;case 1:return n.trys.push([1,3,,4]),[4,this.fetchTopPostsFromWpEndpoint()];case 2:return e=n.sent(),[3,4];case 3:return r=n.sent(),[2,Promise.reject(r)];case 4:return 0===e.length?[2,Promise.reject(new d((0,a.__)("No Top Posts data is available.","wp-parsely"),t.ParselyApiReturnedNoData,""))]:[2,e]}}))}))},e.prototype.fetchTopPostsFromWpEndpoint=function(){return w(this,void 0,void 0,(function(){var e,r;return v(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,l()({path:(0,i.addQueryArgs)("/wp-parsely/v1/stats/posts",{limit:3,period_start:this.dataPeriodStart,period_end:this.dataPeriodEnd})})];case 1:return e=n.sent(),[3,3];case 2:return r=n.sent(),[2,Promise.reject(new d(r.message,r.code))];case 3:return(null==e?void 0:e.error)?[2,Promise.reject(new d(e.error.message,t.ParselyApiResponseContainsError))]:[2,(null==e?void 0:e.data)||[]]}}))}))},e}();function b(e,t,r){void 0===t&&(t=1),void 0===r&&(r="");var n=parseInt(e.replace(/\D/g,""),10);if(n<1e3)return e;n<1e4&&(t=1);var s=n,o=n.toString(),a="",i=0;return Object.entries({1e3:"k","1,000,000":"M","1,000,000,000":"B","1,000,000,000,000":"T","1,000,000,000,000,000":"Q"}).forEach((function(e){var r=e[0],c=e[1],l=parseInt(r.replace(/\D/g,""),10);if(n>=l){var p=t;(s=n/l)%1>1/i&&(p=s>10?1:2),p=parseFloat(s.toFixed(2))===parseFloat(s.toFixed(0))?0:p,o=s.toFixed(p),a=c}i=l})),o+r+a}var _=function(){return _=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},_.apply(this,arguments)},g=function(){return(0,n.jsxs)(o.SVG,_({"aria-hidden":"true",version:"1.1",viewBox:"0 0 16 16",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg"},{children:[(0,n.jsx)(o.Path,{d:"M0 3.29592C0 2.73237 0.456853 2.27551 1.02041 2.27551H4.08165C4.50432 2.27551 4.84696 2.61815 4.84696 3.04082C4.84696 3.46349 4.50432 3.80613 4.08165 3.80613H1.53062V11.9694H9.69391V9.6735C9.69391 9.25083 10.0366 8.90819 10.4592 8.90819C10.8819 8.90819 11.2245 9.25083 11.2245 9.6735V12.4796C11.2245 13.0432 10.7677 13.5 10.2041 13.5H1.02041C0.456854 13.5 0 13.0432 0 12.4796V3.29592Z"}),(0,n.jsx)(o.Path,{d:"M12.531 1.22415C12.8299 1.52303 12.8299 2.00759 12.531 2.30646L6.15342 8.68404C5.85455 8.98291 5.36998 8.98291 5.07111 8.68404C4.77224 8.38517 4.77224 7.9006 5.07111 7.60173L11.4487 1.22415C11.7476 0.925282 12.2321 0.925282 12.531 1.22415Z"}),(0,n.jsx)(o.Path,{d:"M6.63268 1.51012C6.63268 1.08745 6.97532 0.744812 7.39799 0.744812H12.2449C12.6676 0.744812 13.0103 1.08745 13.0103 1.51012V6.35708C13.0103 6.77975 12.6676 7.12239 12.2449 7.12239C11.8223 7.12239 11.4796 6.77975 11.4796 6.35708V2.27543H7.39799C6.97532 2.27543 6.63268 1.93279 6.63268 1.51012Z"})]}))},j=function(){return j=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},j.apply(this,arguments)};function x(e){var t=e.post,r="/wp-admin/post.php?post=".concat(t.postId,"&action=edit"),s=(0,n.jsxs)("a",j({className:"parsely-top-post-title",href:r,target:"_blank",rel:"noreferrer"},{children:[(0,n.jsx)("span",j({className:"screen-reader-text"},{children:(0,a.__)("View in Parse.ly (opens in new tab)","wp-parsely")})),t.title]}));return 0===t.postId&&(s=(0,n.jsx)("div",j({className:"parsely-top-post-title"},{children:t.title}))),s}var P=function(e){var t,r,s=e.post;return(0,n.jsx)("li",j({className:"parsely-top-post"},{children:(0,n.jsxs)("div",j({className:"parsely-top-post-wrapper"},{children:[(0,n.jsxs)("div",j({className:"parsely-top-post-thumbnail"},{children:[(0,n.jsx)("span",j({className:"screen-reader-text"},{children:"Thumbnail"})),(0,n.jsx)("img",{src:s.thumbUrlMedium,alt:(0,a.__)("Post thumbnail","wp-parsely")})]})),(0,n.jsxs)("div",j({className:"parsely-top-post-data"},{children:[(0,n.jsxs)("span",j({className:"parsely-top-post-views"},{children:[(0,n.jsx)("span",j({className:"screen-reader-text"},{children:"Number of Views"})),b(s.views.toString())]})),x({post:s}),(0,n.jsxs)("a",j({className:"parsely-top-post-icon-link",href:s.url,target:"_blank",rel:"noreferrer"},{children:[(0,n.jsx)("span",j({className:"screen-reader-text"},{children:(0,a.__)("View Published Post (opens in new tab)","wp-parsely")})),(0,n.jsx)(g,{})]})),(0,n.jsxs)("div",j({className:"parsely-top-post-metadata"},{children:[(0,n.jsxs)("span",j({className:"parsely-top-post-date"},{children:[(0,n.jsx)("span",j({className:"screen-reader-text"},{children:"Date"})),(t=new Date(s.date),r=f,t.getUTCFullYear()===(new Date).getUTCFullYear()&&(r=h),Intl.DateTimeFormat(document.documentElement.lang||"en",r).format(t))]})),(0,n.jsxs)("span",j({className:"parsely-top-post-author"},{children:[(0,n.jsx)("span",j({className:"screen-reader-text"},{children:"Author"})),s.author]}))]}))]}))]}))}))},O=function(){return O=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},O.apply(this,arguments)},S=function(e,t,r,n){return new(r||(r=Promise))((function(s,o){function a(e){try{c(n.next(e))}catch(e){o(e)}}function i(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,i)}c((n=n.apply(e,t||[])).next())}))},N=function(e,t){var r,n,s,o,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(a=0)),a;)try{if(r=1,n&&(s=2&i[0]?n.return:i[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,i[1])).done)return s;switch(n=0,s&&(i=[2&i[0],s.value]),i[0]){case 0:case 1:s=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((s=(s=a.trys).length>0&&s[s.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!s||i[1]>s[0]&&i[1]<s[3])){a.label=i[1];break}if(6===i[0]&&a.label<s[1]){a.label=s[1],s=i;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(i);break}s[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=s=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},C=function(){var e=this,t=(0,s.useState)(!0),r=t[0],a=t[1],i=(0,s.useState)(),c=i[0],l=i[1],p=(0,s.useState)([]),u=p[0],d=p[1],h=new m;if((0,s.useEffect)((function(){var t=function(r){return S(e,void 0,void 0,(function(){var e=this;return N(this,(function(n){return h.getTopPosts().then((function(e){var t=e.map((function(e){return O(O({},e),{date:(t=new Date(e.date),r=f,Intl.DateTimeFormat(document.documentElement.lang||"en",r).format(t))});var t,r}));d(t),a(!1)})).catch((function(n){return S(e,void 0,void 0,(function(){return N(this,(function(e){switch(e.label){case 0:return r>0?[4,new Promise((function(e){return setTimeout(e,500)}))]:[3,3];case 1:return e.sent(),[4,t(r-1)];case 2:return e.sent(),[3,4];case 3:a(!1),l(n),e.label=4;case 4:return[2]}}))}))})),[2]}))}))};return a(!0),t(3),function(){a(!1),d([]),l(void 0)}}),[]),c)return c.ProcessedMessage("parsely-top-posts-descr");var y=(0,n.jsx)("ol",O({className:"parsely-top-posts"},{children:u.map((function(e){return(0,n.jsx)(P,{post:e},e.id)}))}));return r?(0,n.jsx)("div",O({className:"parsely-spinner-wrapper"},{children:(0,n.jsx)(o.Spinner,{})})):(0,n.jsxs)("div",O({className:"parsely-top-posts-wrapper"},{children:[(0,n.jsx)("div",O({className:"page-views-title"},{children:"Page Views"})),y]}))};window.addEventListener("load",(function(){(0,s.render)((0,n.jsx)(C,{}),document.querySelector("#wp-parsely-dashboard-widget > .inside"))}),!1)}()}();