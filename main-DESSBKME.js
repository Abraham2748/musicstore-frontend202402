import{a as ge,b as pe}from"./chunk-TL6PMWL3.js";import{b as oe,c as ie,d as re,e as ae,g as se,h as ce,k as le,m as me,n as de,o as w,p as C}from"./chunk-YRMQQWEH.js";import{d as W,h as $,j as J,k as K,l as Q,m as q,n as ee,o as te,q as ne}from"./chunk-PZLP2VNW.js";import{Db as d,Ea as I,K as O,Pb as V,Qb as a,Rb as H,Sb as U,Ua as r,V as S,Va as L,W as F,Wa as R,Ya as Y,Z as y,_ as T,_a as z,ab as E,bb as j,ca as A,da as p,ga as k,ha as N,ka as B,kb as _,la as D,mb as o,ub as u,vb as h,wb as m,xb as X,yb as G,zb as Z}from"./chunk-3CCYGFLX.js";var x=n=>{let e=p(C),t=!0;return n.url[0].path==="admin"?t=e.loggedIn()&&e.isAdministrator():n.url[0].path==="customer"&&(t=e.loggedIn()&&!e.isAdministrator()),t||(p(me).error("Acceso denegado","No tienes permisos para acceder a esta p\xE1gina"),p(ce).navigate(["/home"])),t};var ue=[{path:"",pathMatch:"full",redirectTo:"home"},{path:"home",pathMatch:"full",loadComponent:()=>import("./chunk-2YSRPGPE.js").then(n=>n.HomeComponent)},{path:"login",pathMatch:"full",loadComponent:()=>import("./chunk-MVOU35WY.js").then(n=>n.LoginComponent)},{path:"register",pathMatch:"full",loadComponent:()=>import("./chunk-YRN4YY45.js").then(n=>n.RegisterComponent)},{path:"forgot-password",pathMatch:"full",loadComponent:()=>import("./chunk-KGJMB3KS.js").then(n=>n.ForgotPasswordComponent)},{path:"event-detail/:id",pathMatch:"full",loadComponent:()=>import("./chunk-3KM2M2E2.js").then(n=>n.EventDetailComponent)},{path:"event-detail",pathMatch:"full",redirectTo:"home"},{path:"admin",pathMatch:"prefix",canActivate:[x],loadComponent:()=>import("./chunk-CYWTPTSY.js").then(n=>n.AdminComponent),children:[{path:"",pathMatch:"full",redirectTo:"sales"},{path:"sales",pathMatch:"full",loadComponent:()=>import("./chunk-3OB4DLZH.js").then(n=>n.SalesComponent)},{path:"events",pathMatch:"full",loadComponent:()=>import("./chunk-T4YCBAQ2.js").then(n=>n.EventsComponent)},{path:"genres",pathMatch:"full",loadComponent:()=>import("./chunk-INHBYVR3.js").then(n=>n.GenresComponent)},{path:"reports",pathMatch:"full",loadComponent:()=>import("./chunk-QLLHMSNO.js").then(n=>n.ReportsComponent)}]},{path:"customer",pathMatch:"prefix",canActivate:[x],loadComponent:()=>import("./chunk-5EA3CYRQ.js").then(n=>n.CustomerComponent),children:[{path:"",pathMatch:"full",redirectTo:"my-purchases"},{path:"my-purchases",pathMatch:"full",loadComponent:()=>import("./chunk-PRILZ4P3.js").then(n=>n.MyPurchasesComponent)},{path:"change-password",pathMatch:"full",loadComponent:()=>import("./chunk-FO372VLD.js").then(n=>n.ChangePasswordComponent)}]}];var ve="@",xe=(()=>{let e=class e{constructor(i,s,l,f,b){this.doc=i,this.delegate=s,this.zone=l,this.animationType=f,this.moduleImpl=b,this._rendererFactoryPromise=null,this.scheduler=p(Y,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-L5DIES5T.js")).catch(s=>{throw new F(5300,!1)}).then(({\u0275createEngine:s,\u0275AnimationRendererFactory:l})=>{this._engine=s(this.animationType,this.doc,this.scheduler);let f=new l(this.delegate,this._engine,this.zone);return this.delegate=f,f})}createRenderer(i,s){let l=this.delegate.createRenderer(i,s);if(l.\u0275type===0)return l;typeof l.throwOnSyntheticProps=="boolean"&&(l.throwOnSyntheticProps=!1);let f=new P(l);return s?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(b=>{let Me=b.createRenderer(i,s);f.use(Me)}).catch(b=>{f.use(l)}),f}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(s){R()},e.\u0275prov=y({token:e,factory:e.\u0275fac});let n=e;return n})(),P=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,i,s){this.delegate.insertBefore(e,t,i,s)}removeChild(e,t,i){this.delegate.removeChild(e,t,i)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,i,s){this.delegate.setAttribute(e,t,i,s)}removeAttribute(e,t,i){this.delegate.removeAttribute(e,t,i)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,i,s){this.delegate.setStyle(e,t,i,s)}removeStyle(e,t,i){this.delegate.removeStyle(e,t,i)}setProperty(e,t,i){this.shouldReplay(t)&&this.replay.push(s=>s.setProperty(e,t,i)),this.delegate.setProperty(e,t,i)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,i){return this.shouldReplay(t)&&this.replay.push(s=>s.listen(e,t,i)),this.delegate.listen(e,t,i)}shouldReplay(e){return this.replay!==null&&e.startsWith(ve)}};function he(n="animations"){return E("NgAsyncAnimations"),B([{provide:z,useFactory:(e,t,i)=>new xe(e,t,i,n),deps:[W,re,j]},{provide:I,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Ce=(n,e)=>{console.log("jwtInterceptor");let t=localStorage.getItem("token"),i=n;return t&&(i=n.clone({headers:n.headers.set("Authorization",`Bearer ${t}`)})),e(i)},be=(n,e)=>{let t=p(C);return e(n).pipe(S(()=>{t.loading.set(!0)}),O(()=>{t.loading.set(!1)}))};var g=n=>({"full-screen":n}),Pe=(n,e)=>({"border-radius":n,"background-color":e}),Oe=(n,e,t,i)=>({"border-top-color":n,"border-right-color":e,"border-bottom-color":t,"border-left-color":i}),c=n=>({"background-color":n}),Se=n=>({color:n});function Fe(n,e){if(n&1&&m(0,"div",14),n&2){let t=d(2);o("ngClass",a(2,g,t.config.fullScreenBackdrop===!0))("ngStyle",U(4,Oe,t.config.secondaryColour,t.config.secondaryColour,t.config.secondaryColour,t.config.primaryColour))}}function Te(n,e){if(n&1&&(u(0,"div",15),m(1,"div",16)(2,"div",17)(3,"div",18)(4,"div",19)(5,"div",20)(6,"div",21)(7,"div",22)(8,"div",23)(9,"div",24),h()),n&2){let t=d(2);o("ngClass",a(10,g,t.config.fullScreenBackdrop===!0)),r(),o("ngStyle",a(12,c,t.config.primaryColour)),r(),o("ngStyle",a(14,c,t.config.primaryColour)),r(),o("ngStyle",a(16,c,t.config.primaryColour)),r(),o("ngStyle",a(18,c,t.config.primaryColour)),r(),o("ngStyle",a(20,c,t.config.primaryColour)),r(),o("ngStyle",a(22,c,t.config.primaryColour)),r(),o("ngStyle",a(24,c,t.config.primaryColour)),r(),o("ngStyle",a(26,c,t.config.primaryColour)),r(),o("ngStyle",a(28,c,t.config.primaryColour))}}function Ae(n,e){if(n&1&&m(0,"div",25),n&2){let t=d(2);o("ngStyle",a(2,c,t.config.primaryColour))("ngClass",a(4,g,t.config.fullScreenBackdrop===!0))}}function Ne(n,e){if(n&1&&(u(0,"div",26),m(1,"div",27)(2,"div",28)(3,"div",29)(4,"div",30)(5,"div",31),h()),n&2){let t=d(2);o("ngClass",a(6,g,t.config.fullScreenBackdrop===!0)),r(),o("ngStyle",a(8,c,t.config.primaryColour)),r(),o("ngStyle",a(10,c,t.config.primaryColour)),r(),o("ngStyle",a(12,c,t.config.primaryColour)),r(),o("ngStyle",a(14,c,t.config.primaryColour)),r(),o("ngStyle",a(16,c,t.config.primaryColour))}}function Be(n,e){if(n&1&&(u(0,"div",32),m(1,"div",33)(2,"div",34),h()),n&2){let t=d(2);o("ngClass",a(3,g,t.config.fullScreenBackdrop===!0)),r(),o("ngStyle",a(5,c,t.config.primaryColour)),r(),o("ngStyle",a(7,c,t.config.secondaryColour))}}function De(n,e){if(n&1&&(u(0,"div",35),m(1,"div",36)(2,"div",37),h()),n&2){let t=d(2);o("ngClass",a(3,g,t.config.fullScreenBackdrop===!0)),r(),o("ngStyle",a(5,c,t.config.primaryColour)),r(),o("ngStyle",a(7,c,t.config.secondaryColour))}}function Ie(n,e){if(n&1&&m(0,"div",38),n&2){let t=d(2);o("ngClass",a(2,g,t.config.fullScreenBackdrop===!0))("ngStyle",a(4,c,t.config.primaryColour))}}function Le(n,e){if(n&1&&(u(0,"div",39),m(1,"div",40)(2,"div",41),h()),n&2){let t=d(2);o("ngClass",a(3,g,t.config.fullScreenBackdrop===!0)),r(),o("ngStyle",a(5,c,t.config.primaryColour)),r(),o("ngStyle",a(7,c,t.config.secondaryColour))}}function Re(n,e){if(n&1&&m(0,"div",42),n&2){let t=d(2);o("ngClass",a(2,g,t.config.fullScreenBackdrop===!0))("ngStyle",a(4,Se,t.config.primaryColour))}}function Ye(n,e){if(n&1&&m(0,"div",43),n&2){let t=d(2);o("ngClass",a(1,g,t.config.fullScreenBackdrop===!0))}}function ze(n,e){if(n&1&&(u(0,"div",44),m(1,"div",45)(2,"div",46)(3,"div",47),h()),n&2){let t=d(2);o("ngClass",a(4,g,t.config.fullScreenBackdrop===!0)),r(),o("ngStyle",a(6,c,t.config.primaryColour)),r(),o("ngStyle",a(8,c,t.config.secondaryColour)),r(),o("ngStyle",a(10,c,t.config.tertiaryColour))}}function Ee(n,e){n&1&&Z(0)}function je(n,e){if(n&1&&(X(0),_(1,Ee,1,0,"ng-container",48),G()),n&2){let t=d(2);r(),o("ngTemplateOutlet",t.template)}}function Xe(n,e){if(n&1&&(u(0,"div"),m(1,"div",1),u(2,"div",2),_(3,Fe,1,9,"div",3)(4,Te,10,30,"div",4)(5,Ae,1,6,"div",5)(6,Ne,6,18,"div",6)(7,Be,3,9,"div",7)(8,De,3,9,"div",8)(9,Ie,1,6,"div",9)(10,Le,3,9,"div",10)(11,Re,1,6,"div",11)(12,Ye,1,3,"div",12)(13,ze,4,12,"div",13)(14,je,2,1,"ng-container",0),h()()),n&2){let t=d();r(),o("ngClass",a(14,g,t.config.fullScreenBackdrop===!0))("ngStyle",H(16,Pe,t.config.backdropBorderRadius,t.config.backdropBackgroundColour)),r(),o("ngSwitch",t.config.animationType),r(),o("ngSwitchCase",t.ngxLoadingAnimationTypes.circle),r(),o("ngSwitchCase",t.ngxLoadingAnimationTypes.cubeGrid),r(),o("ngSwitchCase",t.ngxLoadingAnimationTypes.rotatingPlane),r(),o("ngSwitchCase",t.ngxLoadingAnimationTypes.rectangleBounce),r(),o("ngSwitchCase",t.ngxLoadingAnimationTypes.wanderingCubes),r(),o("ngSwitchCase",t.ngxLoadingAnimationTypes.doubleBounce),r(),o("ngSwitchCase",t.ngxLoadingAnimationTypes.pulse),r(),o("ngSwitchCase",t.ngxLoadingAnimationTypes.chasingDots),r(),o("ngSwitchCase",t.ngxLoadingAnimationTypes.circleSwish),r(),o("ngSwitchCase",t.ngxLoadingAnimationTypes.none),r(2),o("ngIf",t.template)}}var M=class{constructor(e={}){this.backdropBorderRadius=e.backdropBorderRadius,this.backdropBackgroundColour=e.backdropBackgroundColour,this.fullScreenBackdrop=e.fullScreenBackdrop,this.animationType=e.animationType,this.primaryColour=e.primaryColour,this.secondaryColour=e.secondaryColour,this.tertiaryColour=e.tertiaryColour}},ye={chasingDots:"chasing-dots",circle:"sk-circle",circleSwish:"circleSwish",cubeGrid:"sk-cube-grid",doubleBounce:"double-bounce",none:"none",pulse:"pulse",rectangleBounce:"rectangle-bounce",rotatingPlane:"rotating-plane",threeBounce:"three-bounce",wanderingCubes:"wandering-cubes"},Ge=(()=>{let e=class e{constructor(i){this.config=i,this.loadingConfig=this.config||new M}};e.\u0275fac=function(s){return new(s||e)(A("loadingConfig",8))},e.\u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),ke=(()=>{let e=class e{constructor(i){this.LoadingService=i,this.show=!1,this.config=new M,this.defaultConfig={animationType:ye.threeBounce,backdropBackgroundColour:"rgba(0, 0, 0, 0.3)",backdropBorderRadius:"0px",fullScreenBackdrop:!1,primaryColour:"#ffffff",secondaryColour:"#ffffff",tertiaryColour:"#ffffff"},this.ngxLoadingAnimationTypes=ye}ngOnInit(){this.setupConfig()}setupConfig(){for(let i in this.defaultConfig)this.config[i]==null&&(this.config[i]=this.LoadingService.loadingConfig[i]!=null?this.LoadingService.loadingConfig[i]:this.defaultConfig[i])}};e.\u0275fac=function(s){return new(s||e)(L(Ge))},e.\u0275cmp=k({type:e,selectors:[["ngx-loading"]],inputs:{show:"show",config:"config",template:"template"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"backdrop",3,"ngClass","ngStyle"],[3,"ngSwitch"],["class","spinner-circle",3,"ngClass","ngStyle",4,"ngSwitchCase"],["class","sk-cube-grid",3,"ngClass",4,"ngSwitchCase"],["class","spinner-sk-rotateplane",3,"ngStyle","ngClass",4,"ngSwitchCase"],["class","spinner-rectangle-bounce",3,"ngClass",4,"ngSwitchCase"],["class","spinner-wandering-cubes",3,"ngClass",4,"ngSwitchCase"],["class","spinner-double-bounce",3,"ngClass",4,"ngSwitchCase"],["class","spinner-pulse",3,"ngClass","ngStyle",4,"ngSwitchCase"],["class","spinner-chasing-dots",3,"ngClass",4,"ngSwitchCase"],["class","spinner-circle-swish",3,"ngClass","ngStyle",4,"ngSwitchCase"],[3,"ngClass",4,"ngSwitchCase"],["class","spinner-three-bounce",3,"ngClass",4,"ngSwitchDefault"],[1,"spinner-circle",3,"ngClass","ngStyle"],[1,"sk-cube-grid",3,"ngClass"],[1,"sk-cube","sk-cube1",3,"ngStyle"],[1,"sk-cube","sk-cube2",3,"ngStyle"],[1,"sk-cube","sk-cube3",3,"ngStyle"],[1,"sk-cube","sk-cube4",3,"ngStyle"],[1,"sk-cube","sk-cube5",3,"ngStyle"],[1,"sk-cube","sk-cube6",3,"ngStyle"],[1,"sk-cube","sk-cube7",3,"ngStyle"],[1,"sk-cube","sk-cube8",3,"ngStyle"],[1,"sk-cube","sk-cube9",3,"ngStyle"],[1,"spinner-sk-rotateplane",3,"ngStyle","ngClass"],[1,"spinner-rectangle-bounce",3,"ngClass"],[1,"rect1",3,"ngStyle"],[1,"rect2",3,"ngStyle"],[1,"rect3",3,"ngStyle"],[1,"rect4",3,"ngStyle"],[1,"rect5",3,"ngStyle"],[1,"spinner-wandering-cubes",3,"ngClass"],[1,"cube1",3,"ngStyle"],[1,"cube2",3,"ngStyle"],[1,"spinner-double-bounce",3,"ngClass"],[1,"double-bounce1",3,"ngStyle"],[1,"double-bounce2",3,"ngStyle"],[1,"spinner-pulse",3,"ngClass","ngStyle"],[1,"spinner-chasing-dots",3,"ngClass"],[1,"dot1",3,"ngStyle"],[1,"dot2",3,"ngStyle"],[1,"spinner-circle-swish",3,"ngClass","ngStyle"],[3,"ngClass"],[1,"spinner-three-bounce",3,"ngClass"],[1,"bounce1",3,"ngStyle"],[1,"bounce2",3,"ngStyle"],[1,"bounce3",3,"ngStyle"],[4,"ngTemplateOutlet"]],template:function(s,l){s&1&&_(0,Xe,15,19,"div",0),s&2&&o("ngIf",l.show)},dependencies:[$,J,te,ee,K,Q,q],styles:['.backdrop[_ngcontent-%COMP%]{z-index:1999;position:absolute;inset:0;background-color:#0000004d}.spinner-circle[_ngcontent-%COMP%], .spinner-circle[_ngcontent-%COMP%]:after{border-radius:50%;width:10em;height:10em}.spinner-circle[_ngcontent-%COMP%]{font-size:6px;border-top:1.1em solid rgba(255,255,255,.2);border-right:1.1em solid rgba(255,255,255,.2);border-bottom:1.1em solid rgba(255,255,255,.2);border-left:1.1em solid #ffffff;position:absolute;inset:0;margin:auto;z-index:2000;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);-webkit-animation:_ngcontent-%COMP%_load8 1.1s infinite linear;animation:_ngcontent-%COMP%_load8 1.1s infinite linear}@-webkit-keyframes _ngcontent-%COMP%_load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes _ngcontent-%COMP%_load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.spinner-circle-swish[_ngcontent-%COMP%]{font-size:60px;overflow:hidden;width:1em;height:1em;border-radius:50%;position:absolute;inset:0;margin:auto;z-index:2000;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);-webkit-animation:_ngcontent-%COMP%_load6 1.7s infinite ease;animation:_ngcontent-%COMP%_load6 1.7s infinite ease}@-webkit-keyframes _ngcontent-%COMP%_load6{0%{box-shadow:0 -.83em 0 -.4em,0 -.83em 0 -.42em,0 -.83em 0 -.44em,0 -.83em 0 -.46em,0 -.83em 0 -.477em;-webkit-transform:rotate(0deg)}5%,95%{box-shadow:0 -.83em 0 -.4em,0 -.83em 0 -.42em,0 -.83em 0 -.44em,0 -.83em 0 -.46em,0 -.83em 0 -.477em}10%,59%{box-shadow:0 -.83em 0 -.4em,-.087em -.825em 0 -.42em,-.173em -.812em 0 -.44em,-.256em -.789em 0 -.46em,-.297em -.775em 0 -.477em}20%{box-shadow:0 -.83em 0 -.4em,-.338em -.758em 0 -.42em,-.555em -.617em 0 -.44em,-.671em -.488em 0 -.46em,-.749em -.34em 0 -.477em}38%{box-shadow:0 -.83em 0 -.4em,-.377em -.74em 0 -.42em,-.645em -.522em 0 -.44em,-.775em -.297em 0 -.46em,-.82em -.09em 0 -.477em}to{box-shadow:0 -.83em 0 -.4em,0 -.83em 0 -.42em,0 -.83em 0 -.44em,0 -.83em 0 -.46em,0 -.83em 0 -.477em;-webkit-transform:rotate(360deg)}}@keyframes _ngcontent-%COMP%_load6{0%{box-shadow:0 -.83em 0 -.4em,0 -.83em 0 -.42em,0 -.83em 0 -.44em,0 -.83em 0 -.46em,0 -.83em 0 -.477em;transform:rotate(0)}5%,95%{box-shadow:0 -.83em 0 -.4em,0 -.83em 0 -.42em,0 -.83em 0 -.44em,0 -.83em 0 -.46em,0 -.83em 0 -.477em}10%,59%{box-shadow:0 -.83em 0 -.4em,-.087em -.825em 0 -.42em,-.173em -.812em 0 -.44em,-.256em -.789em 0 -.46em,-.297em -.775em 0 -.477em}20%{box-shadow:0 -.83em 0 -.4em,-.338em -.758em 0 -.42em,-.555em -.617em 0 -.44em,-.671em -.488em 0 -.46em,-.749em -.34em 0 -.477em}38%{box-shadow:0 -.83em 0 -.4em,-.377em -.74em 0 -.42em,-.645em -.522em 0 -.44em,-.775em -.297em 0 -.46em,-.82em -.09em 0 -.477em}to{box-shadow:0 -.83em 0 -.4em,0 -.83em 0 -.42em,0 -.83em 0 -.44em,0 -.83em 0 -.46em,0 -.83em 0 -.477em;transform:rotate(360deg)}}.sk-cube-grid[_ngcontent-%COMP%]{width:40px;height:40px;position:absolute;inset:0;margin:auto;z-index:2000}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube[_ngcontent-%COMP%]{width:33%;height:33%;background-color:#333;float:left;-webkit-animation:_ngcontent-%COMP%_sk-cubeGridScaleDelay 1.3s infinite ease-in-out;animation:_ngcontent-%COMP%_sk-cubeGridScaleDelay 1.3s infinite ease-in-out}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube1[_ngcontent-%COMP%]{-webkit-animation-delay:.2s;animation-delay:.2s}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube2[_ngcontent-%COMP%]{-webkit-animation-delay:.3s;animation-delay:.3s}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube3[_ngcontent-%COMP%]{-webkit-animation-delay:.4s;animation-delay:.4s}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube4[_ngcontent-%COMP%]{-webkit-animation-delay:.1s;animation-delay:.1s}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube5[_ngcontent-%COMP%]{-webkit-animation-delay:.2s;animation-delay:.2s}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube6[_ngcontent-%COMP%]{-webkit-animation-delay:.3s;animation-delay:.3s}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube7[_ngcontent-%COMP%]{-webkit-animation-delay:0s;animation-delay:0s}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube8[_ngcontent-%COMP%]{-webkit-animation-delay:.1s;animation-delay:.1s}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube9[_ngcontent-%COMP%]{-webkit-animation-delay:.2s;animation-delay:.2s}@-webkit-keyframes _ngcontent-%COMP%_sk-cubeGridScaleDelay{0%,70%,to{-webkit-transform:scale3D(1,1,1);transform:scaleZ(1)}35%{-webkit-transform:scale3D(0,0,1);transform:scale3D(0,0,1)}}@keyframes _ngcontent-%COMP%_sk-cubeGridScaleDelay{0%,70%,to{-webkit-transform:scale3D(1,1,1);transform:scaleZ(1)}35%{-webkit-transform:scale3D(0,0,1);transform:scale3D(0,0,1)}}.spinner-double-bounce[_ngcontent-%COMP%]{width:40px;height:40px;position:absolute;inset:0;margin:auto;z-index:2000}.double-bounce1[_ngcontent-%COMP%], .double-bounce2[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:50%;background-color:#333;opacity:.6;position:absolute;top:0;left:0;-webkit-animation:_ngcontent-%COMP%_sk-bounce 2s infinite ease-in-out;animation:_ngcontent-%COMP%_sk-bounce 2s infinite ease-in-out}.double-bounce2[_ngcontent-%COMP%]{-webkit-animation-delay:-1s;animation-delay:-1s}.spinner-pulse[_ngcontent-%COMP%]{width:40px;height:40px;background-color:#333;position:absolute;inset:0;margin:auto;z-index:2000;border-radius:100%;-webkit-animation:_ngcontent-%COMP%_sk-scaleout 1s infinite ease-in-out;animation:_ngcontent-%COMP%_sk-scaleout 1s infinite ease-in-out}@-webkit-keyframes _ngcontent-%COMP%_sk-scaleout{0%{-webkit-transform:scale(0)}to{-webkit-transform:scale(1);opacity:0}}@keyframes _ngcontent-%COMP%_sk-scaleout{0%{-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform:scale(1);transform:scale(1);opacity:0}}.spinner-three-bounce[_ngcontent-%COMP%]{width:70px;text-align:center;position:absolute;inset:0;height:20px;margin:auto;z-index:2000}.spinner-three-bounce[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:18px;height:18px;background-color:#fff;border-radius:100%;display:inline-block;-webkit-animation:_ngcontent-%COMP%_sk-bouncedelay 1.4s infinite ease-in-out both;animation:_ngcontent-%COMP%_sk-bouncedelay 1.4s infinite ease-in-out both}.spinner-three-bounce[_ngcontent-%COMP%]   .bounce1[_ngcontent-%COMP%]{-webkit-animation-delay:-.32s;animation-delay:-.32s}.spinner-three-bounce[_ngcontent-%COMP%]   .bounce2[_ngcontent-%COMP%]{-webkit-animation-delay:-.16s;animation-delay:-.16s}@-webkit-keyframes _ngcontent-%COMP%_sk-bouncedelay{0%,80%,to{-webkit-transform:scale(0)}40%{-webkit-transform:scale(1)}}@keyframes _ngcontent-%COMP%_sk-bouncedelay{0%,80%,to{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}.spinner-sk-rotateplane[_ngcontent-%COMP%]{width:40px;height:40px;background-color:#fff;text-align:center;position:absolute;inset:0;margin:auto;z-index:2000;-webkit-animation:_ngcontent-%COMP%_sk-rotateplane 1.2s infinite ease-in-out;animation:_ngcontent-%COMP%_sk-rotateplane 1.2s infinite ease-in-out}@-webkit-keyframes _ngcontent-%COMP%_sk-rotateplane{0%{-webkit-transform:perspective(120px)}50%{-webkit-transform:perspective(120px) rotateY(180deg)}to{-webkit-transform:perspective(120px) rotateY(180deg) rotateX(180deg)}}@keyframes _ngcontent-%COMP%_sk-rotateplane{0%{transform:perspective(120px) rotateX(0) rotateY(0);-webkit-transform:perspective(120px) rotateX(0deg) rotateY(0deg)}50%{transform:perspective(120px) rotateX(-180.1deg) rotateY(0);-webkit-transform:perspective(120px) rotateX(-180.1deg) rotateY(0deg)}to{transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg);-webkit-transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}.spinner-rectangle-bounce[_ngcontent-%COMP%]{width:50px;height:40px;font-size:10px;text-align:center;position:absolute;inset:0;margin:auto;z-index:2000}.spinner-rectangle-bounce[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:#fff;height:100%;width:6px;display:inline-block;-webkit-animation:_ngcontent-%COMP%_sk-stretchdelay 1.2s infinite ease-in-out;animation:_ngcontent-%COMP%_sk-stretchdelay 1.2s infinite ease-in-out}.spinner-rectangle-bounce[_ngcontent-%COMP%]   .rect2[_ngcontent-%COMP%]{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.spinner-rectangle-bounce[_ngcontent-%COMP%]   .rect3[_ngcontent-%COMP%]{-webkit-animation-delay:-1s;animation-delay:-1s}.spinner-rectangle-bounce[_ngcontent-%COMP%]   .rect4[_ngcontent-%COMP%]{-webkit-animation-delay:-.9s;animation-delay:-.9s}.spinner-rectangle-bounce[_ngcontent-%COMP%]   .rect5[_ngcontent-%COMP%]{-webkit-animation-delay:-.8s;animation-delay:-.8s}@-webkit-keyframes _ngcontent-%COMP%_sk-stretchdelay{0%,40%,to{-webkit-transform:scaleY(.4)}20%{-webkit-transform:scaleY(1)}}@keyframes _ngcontent-%COMP%_sk-stretchdelay{0%,40%,to{transform:scaleY(.4);-webkit-transform:scaleY(.4)}20%{transform:scaleY(1);-webkit-transform:scaleY(1)}}.spinner-wandering-cubes[_ngcontent-%COMP%]{width:60px;height:58px;font-size:10px;text-align:center;position:absolute;inset:0;margin:auto;z-index:2000}.cube1[_ngcontent-%COMP%], .cube2[_ngcontent-%COMP%]{background-color:#fff;width:15px;height:15px;position:absolute;top:0;left:0;-webkit-animation:_ngcontent-%COMP%_sk-cubemove 1.8s infinite ease-in-out;animation:_ngcontent-%COMP%_sk-cubemove 1.8s infinite ease-in-out}.cube2[_ngcontent-%COMP%]{-webkit-animation-delay:-.9s;animation-delay:-.9s}@-webkit-keyframes _ngcontent-%COMP%_sk-cubemove{25%{-webkit-transform:translateX(42px) rotate(-90deg) scale(.5)}50%{-webkit-transform:translateX(42px) translateY(42px) rotate(-180deg)}75%{-webkit-transform:translateX(0px) translateY(42px) rotate(-270deg) scale(.5)}to{-webkit-transform:rotate(-360deg)}}@keyframes _ngcontent-%COMP%_sk-cubemove{25%{transform:translate(42px) rotate(-90deg) scale(.5);-webkit-transform:translateX(42px) rotate(-90deg) scale(.5)}50%{transform:translate(42px) translateY(42px) rotate(-179deg);-webkit-transform:translateX(42px) translateY(42px) rotate(-179deg)}50.1%{transform:translate(42px) translateY(42px) rotate(-180deg);-webkit-transform:translateX(42px) translateY(42px) rotate(-180deg)}75%{transform:translate(0) translateY(42px) rotate(-270deg) scale(.5);-webkit-transform:translateX(0px) translateY(42px) rotate(-270deg) scale(.5)}to{transform:rotate(-360deg);-webkit-transform:rotate(-360deg)}}.sk-circle[_ngcontent-%COMP%]{width:40px;height:40px;position:absolute;inset:0;margin:auto;z-index:2000}.sk-circle[_ngcontent-%COMP%]   .sk-child[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;left:0;top:0}.sk-circle[_ngcontent-%COMP%]   .sk-child[_ngcontent-%COMP%]:before{content:"";display:block;margin:0 auto;width:15%;height:15%;background-color:#333;border-radius:100%;-webkit-animation:_ngcontent-%COMP%_sk-circleBounceDelay 1.2s infinite ease-in-out both;animation:_ngcontent-%COMP%_sk-circleBounceDelay 1.2s infinite ease-in-out both}.sk-circle[_ngcontent-%COMP%]   .sk-circle2[_ngcontent-%COMP%]{-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg)}.sk-circle[_ngcontent-%COMP%]   .sk-circle3[_ngcontent-%COMP%]{-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg)}.sk-circle[_ngcontent-%COMP%]   .sk-circle4[_ngcontent-%COMP%]{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.sk-circle[_ngcontent-%COMP%]   .sk-circle5[_ngcontent-%COMP%]{-webkit-transform:rotate(120deg);-ms-transform:rotate(120deg);transform:rotate(120deg)}.sk-circle[_ngcontent-%COMP%]   .sk-circle6[_ngcontent-%COMP%]{-webkit-transform:rotate(150deg);-ms-transform:rotate(150deg);transform:rotate(150deg)}.sk-circle[_ngcontent-%COMP%]   .sk-circle7[_ngcontent-%COMP%]{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.sk-circle[_ngcontent-%COMP%]   .sk-circle8[_ngcontent-%COMP%]{-webkit-transform:rotate(210deg);-ms-transform:rotate(210deg);transform:rotate(210deg)}.sk-circle[_ngcontent-%COMP%]   .sk-circle9[_ngcontent-%COMP%]{-webkit-transform:rotate(240deg);-ms-transform:rotate(240deg);transform:rotate(240deg)}.sk-circle[_ngcontent-%COMP%]   .sk-circle10[_ngcontent-%COMP%]{-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.sk-circle[_ngcontent-%COMP%]   .sk-circle11[_ngcontent-%COMP%]{-webkit-transform:rotate(300deg);-ms-transform:rotate(300deg);transform:rotate(300deg)}.sk-circle[_ngcontent-%COMP%]   .sk-circle12[_ngcontent-%COMP%]{-webkit-transform:rotate(330deg);-ms-transform:rotate(330deg);transform:rotate(330deg)}.sk-circle[_ngcontent-%COMP%]   .sk-circle2[_ngcontent-%COMP%]:before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-circle[_ngcontent-%COMP%]   .sk-circle3[_ngcontent-%COMP%]:before{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-circle[_ngcontent-%COMP%]   .sk-circle4[_ngcontent-%COMP%]:before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-circle[_ngcontent-%COMP%]   .sk-circle5[_ngcontent-%COMP%]:before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.sk-circle[_ngcontent-%COMP%]   .sk-circle6[_ngcontent-%COMP%]:before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.sk-circle[_ngcontent-%COMP%]   .sk-circle7[_ngcontent-%COMP%]:before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.sk-circle[_ngcontent-%COMP%]   .sk-circle8[_ngcontent-%COMP%]:before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-circle[_ngcontent-%COMP%]   .sk-circle9[_ngcontent-%COMP%]:before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.sk-circle[_ngcontent-%COMP%]   .sk-circle10[_ngcontent-%COMP%]:before{-webkit-animation-delay:-.3s;animation-delay:-.3s}.sk-circle[_ngcontent-%COMP%]   .sk-circle11[_ngcontent-%COMP%]:before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.sk-circle[_ngcontent-%COMP%]   .sk-circle12[_ngcontent-%COMP%]:before{-webkit-animation-delay:-.1s;animation-delay:-.1s}@-webkit-keyframes _ngcontent-%COMP%_sk-circleBounceDelay{0%,80%,to{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes _ngcontent-%COMP%_sk-circleBounceDelay{0%,80%,to{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}.spinner-chasing-dots[_ngcontent-%COMP%]{width:40px;height:40px;position:absolute;inset:0;margin:auto;z-index:2000;text-align:center;-webkit-animation:_ngcontent-%COMP%_sk-rotate 2s infinite linear;animation:_ngcontent-%COMP%_sk-rotate 2s infinite linear}.dot1[_ngcontent-%COMP%], .dot2[_ngcontent-%COMP%]{width:60%;height:60%;display:inline-block;position:absolute;top:0;background-color:#333;border-radius:100%;-webkit-animation:_ngcontent-%COMP%_sk-bounce 2s infinite ease-in-out;animation:_ngcontent-%COMP%_sk-bounce 2s infinite ease-in-out}.dot2[_ngcontent-%COMP%]{top:auto;bottom:0;-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes _ngcontent-%COMP%_sk-rotate{to{-webkit-transform:rotate(360deg)}}@keyframes _ngcontent-%COMP%_sk-rotate{to{transform:rotate(360deg);-webkit-transform:rotate(360deg)}}@-webkit-keyframes _ngcontent-%COMP%_sk-bounce{0%,to{-webkit-transform:scale(0)}50%{-webkit-transform:scale(1)}}@keyframes _ngcontent-%COMP%_sk-bounce{0%,to{transform:scale(0);-webkit-transform:scale(0)}50%{transform:scale(1);-webkit-transform:scale(1)}}.full-screen[_ngcontent-%COMP%]{position:fixed;position:-ms-page}']});let n=e;return n})(),v=(()=>{let e=class e{static forRoot(i){return{ngModule:e,providers:[{provide:"loadingConfig",useValue:i}]}}};e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=N({type:e}),e.\u0275inj=T({imports:[ne]});let n=e;return n})();var _e={providers:[le(ue),he(),oe(ie([Ce,be])),pe(ge()),D(w.forRoot(),v.forRoot({}))]};var we=(()=>{let e=class e{constructor(){this.title="musical-events",this.notificationsOptions={position:["top","right"],timeOut:3e3},this.authService=p(C)}};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=k({type:e,selectors:[["app-root"]],standalone:!0,features:[V],decls:3,vars:2,consts:[[3,"options"],[3,"show"]],template:function(s,l){s&1&&m(0,"router-outlet")(1,"simple-notifications",0)(2,"ngx-loading",1),s&2&&(r(),o("options",l.notificationsOptions),r(),o("show",l.authService.loading()))},dependencies:[se,w,de,v,ke]});let n=e;return n})();ae(we,_e).catch(n=>console.error(n));
