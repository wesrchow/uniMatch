(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{282:function(e,t){},347:function(e,t,c){"use strict";c.r(t);var n=c(266),o=c(271),r=c(182),l=Object(n.a)({apiKey:"AIzaSyATmp3Xr0BUxoWEuJRttMN6u7-AMvQXOmo",authDomain:"college-match-ffdb8.firebaseapp.com",projectId:"college-match-ffdb8",storageBucket:"college-match-ffdb8.appspot.com",messagingSenderId:"49669029688",appId:"1:49669029688:web:da85c13df4a57b36228bcd",measurementId:"G-P20WKV0RHS"}),f={name:"LoginPage",methods:{authLogin:function(){var e=this,t=new o.a(l),c=Object(o.c)(l);Object(o.d)(c,o.b).then((function(){Object(o.e)(c,t).then((function(t){var c=t.user;localStorage.setItem(r.a,c),e.$router.push("/preferences")})).catch((function(e){e.code,e.message,e.customData.email,o.a.credentialFromError(e)}))})).catch((function(e){e.code,e.message}))}}},d=c(40),m=c(282),h=c.n(m),component=Object(d.a)(f,(function(){var e=this,t=e._self._c;return t("v-container",{attrs:{"fill-height":""}},[t("v-row",[t("v-spacer"),e._v(" "),t("v-col",{staticStyle:{display:"flex","justify-content":"center","align-items":"center"},attrs:{cols:"12"}},[t("GoogleButton",{nativeOn:{click:function(t){return e.authLogin()}}})],1),e._v(" "),t("v-spacer")],1)],1)}),[],!1,null,null,null);"function"==typeof h.a&&h()(component);t.default=component.exports}}]);