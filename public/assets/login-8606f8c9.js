import{h as w,g as U,F as N,s as v,i as g,_ as e,G as T,r as R,l as G,m as A,j as t,v as V,x as K,u as H,B as J,H as O,d as j,J as Z,S as b,T as B,L as E,a as C,I as q,W as Q}from"./index-8fbc9a42.js";import{u as X}from"./use-router-4e42b1c5.js";import{C as Y}from"./Card-bc4c103e.js";import{B as L}from"./Button-4501d5c3.js";import{D as oo}from"./Divider-59fe7d54.js";import{T as D}from"./TextField-9272f96c.js";import{I as io}from"./Select-9bd5bba2.js";import{u as to}from"./Menu-46b48fad.js";import"./Popover-63046ab8.js";import"./isMuiElement-00848f19.js";import"./List-a8fc5471.js";function ro(i){return w("MuiCircularProgress",i)}U("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const no=["className","color","disableShrink","size","style","thickness","value","variant"];let k=i=>i,F,W,_,z;const c=44,so=N(F||(F=k`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),ao=N(W||(W=k`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),eo=i=>{const{classes:o,variant:r,color:n,disableShrink:s}=i,a={root:["root",r,`color${g(n)}`],svg:["svg"],circle:["circle",`circle${g(r)}`,s&&"circleDisableShrink"]};return K(a,ro,o)},lo=v("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(i,o)=>{const{ownerState:r}=i;return[o.root,o[r.variant],o[`color${g(r.color)}`]]}})(({ownerState:i,theme:o})=>e({display:"inline-block"},i.variant==="determinate"&&{transition:o.transitions.create("transform")},i.color!=="inherit"&&{color:(o.vars||o).palette[i.color].main}),({ownerState:i})=>i.variant==="indeterminate"&&T(_||(_=k`
      animation: ${0} 1.4s linear infinite;
    `),so)),co=v("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(i,o)=>o.svg})({display:"block"}),go=v("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(i,o)=>{const{ownerState:r}=i;return[o.circle,o[`circle${g(r.variant)}`],r.disableShrink&&o.circleDisableShrink]}})(({ownerState:i,theme:o})=>e({stroke:"currentColor"},i.variant==="determinate"&&{transition:o.transitions.create("stroke-dashoffset")},i.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:i})=>i.variant==="indeterminate"&&!i.disableShrink&&T(z||(z=k`
      animation: ${0} 1.4s ease-in-out infinite;
    `),ao)),uo=R.forwardRef(function(o,r){const n=G({props:o,name:"MuiCircularProgress"}),{className:s,color:a="primary",disableShrink:$=!1,size:u=40,style:I,thickness:x=3.6,value:m=0,variant:y="indeterminate"}=n,P=A(n,no),h=e({},n,{color:a,disableShrink:$,size:u,thickness:x,value:m,variant:y}),l=eo(h),f={},p={},M={};if(y==="determinate"){const S=2*Math.PI*((c-x)/2);f.strokeDasharray=S.toFixed(3),M["aria-valuenow"]=Math.round(m),f.strokeDashoffset=`${((100-m)/100*S).toFixed(3)}px`,p.transform="rotate(-90deg)"}return t.jsx(lo,e({className:V(l.root,s),style:e({width:u,height:u},p,I),ownerState:h,ref:r,role:"progressbar"},M,P,{children:t.jsx(co,{className:l.svg,ownerState:h,viewBox:`${c/2} ${c/2} ${c} ${c}`,children:t.jsx(go,{className:l.circle,style:f,ownerState:h,cx:c,cy:c,r:(c-x)/2,fill:"none",strokeWidth:x})})}))}),ho=uo;function xo(i){return w("MuiLoadingButton",i)}const mo=U("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),d=mo,fo=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],po=i=>{const{loading:o,loadingPosition:r,classes:n}=i,s={root:["root",o&&"loading"],startIcon:[o&&`startIconLoading${g(r)}`],endIcon:[o&&`endIconLoading${g(r)}`],loadingIndicator:["loadingIndicator",o&&`loadingIndicator${g(r)}`]},a=K(s,xo,n);return e({},n,a)},vo=i=>i!=="ownerState"&&i!=="theme"&&i!=="sx"&&i!=="as"&&i!=="classes",Io=v(L,{shouldForwardProp:i=>vo(i)||i==="classes",name:"MuiLoadingButton",slot:"Root",overridesResolver:(i,o)=>[o.root,o.startIconLoadingStart&&{[`& .${d.startIconLoadingStart}`]:o.startIconLoadingStart},o.endIconLoadingEnd&&{[`& .${d.endIconLoadingEnd}`]:o.endIconLoadingEnd}]})(({ownerState:i,theme:o})=>e({[`& .${d.startIconLoadingStart}, & .${d.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0}},i.loadingPosition==="center"&&{transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),[`&.${d.loading}`]:{color:"transparent"}},i.loadingPosition==="start"&&i.fullWidth&&{[`& .${d.startIconLoadingStart}, & .${d.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginRight:-8}},i.loadingPosition==="end"&&i.fullWidth&&{[`& .${d.startIconLoadingStart}, & .${d.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginLeft:-8}})),yo=v("span",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(i,o)=>{const{ownerState:r}=i;return[o.loadingIndicator,o[`loadingIndicator${g(r.loadingPosition)}`]]}})(({theme:i,ownerState:o})=>e({position:"absolute",visibility:"visible",display:"flex"},o.loadingPosition==="start"&&(o.variant==="outlined"||o.variant==="contained")&&{left:o.size==="small"?10:14},o.loadingPosition==="start"&&o.variant==="text"&&{left:6},o.loadingPosition==="center"&&{left:"50%",transform:"translate(-50%)",color:(i.vars||i).palette.action.disabled},o.loadingPosition==="end"&&(o.variant==="outlined"||o.variant==="contained")&&{right:o.size==="small"?10:14},o.loadingPosition==="end"&&o.variant==="text"&&{right:6},o.loadingPosition==="start"&&o.fullWidth&&{position:"relative",left:-10},o.loadingPosition==="end"&&o.fullWidth&&{position:"relative",right:-10})),Po=R.forwardRef(function(o,r){const n=G({props:o,name:"MuiLoadingButton"}),{children:s,disabled:a=!1,id:$,loading:u=!1,loadingIndicator:I,loadingPosition:x="center",variant:m="text"}=n,y=A(n,fo),P=to($),h=I??t.jsx(ho,{"aria-labelledby":P,color:"inherit",size:16}),l=e({},n,{disabled:a,loading:u,loadingIndicator:h,loadingPosition:x,variant:m}),f=po(l),p=u?t.jsx(yo,{className:f.loadingIndicator,ownerState:l,children:h}):null;return t.jsxs(Io,e({disabled:a||u,id:P,ref:r},y,{variant:m,classes:f,ownerState:l,children:[l.loadingPosition==="end"?s:p,l.loadingPosition==="end"?p:s]}))}),jo=Po;function bo(){const i=H(),o=X(),[r,n]=R.useState(!1),s=()=>{o.push("/dashboard")},a=t.jsxs(t.Fragment,{children:[t.jsxs(b,{spacing:3,children:[t.jsx(D,{name:"email",label:"Email address"}),t.jsx(D,{name:"password",label:"Password",type:r?"text":"password",InputProps:{endAdornment:t.jsx(io,{position:"end",children:t.jsx(q,{onClick:()=>n(!r),edge:"end",children:t.jsx(C,{icon:r?"eva:eye-fill":"eva:eye-off-fill"})})})}})]}),t.jsx(b,{direction:"row",alignItems:"center",justifyContent:"flex-end",sx:{my:3},children:t.jsx(E,{variant:"subtitle2",underline:"hover",children:"Forgot password?"})}),t.jsx(jo,{fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"inherit",onClick:s,children:"Login"})]});return t.jsxs(J,{sx:{...O({color:j(i.palette.background.default,.9),imgUrl:"/assets/background/overlay_4.jpg"}),height:1},children:[t.jsx(Z,{sx:{position:"fixed",top:{xs:16,md:24},left:{xs:16,md:24}}}),t.jsx(b,{alignItems:"center",justifyContent:"center",sx:{height:1},children:t.jsxs(Y,{sx:{p:5,width:1,maxWidth:420},children:[t.jsx(B,{variant:"h4",children:"Sign in to Minimal"}),t.jsxs(B,{variant:"body2",sx:{mt:2,mb:5},children:["Don’t have an account?",t.jsx(E,{variant:"subtitle2",sx:{ml:.5},children:"Get started"})]}),t.jsxs(b,{direction:"row",spacing:2,children:[t.jsx(L,{fullWidth:!0,size:"large",color:"inherit",variant:"outlined",sx:{borderColor:j(i.palette.grey[500],.16)},children:t.jsx(C,{icon:"eva:google-fill",color:"#DF3E30"})}),t.jsx(L,{fullWidth:!0,size:"large",color:"inherit",variant:"outlined",sx:{borderColor:j(i.palette.grey[500],.16)},children:t.jsx(C,{icon:"eva:facebook-fill",color:"#1877F2"})}),t.jsx(L,{fullWidth:!0,size:"large",color:"inherit",variant:"outlined",sx:{borderColor:j(i.palette.grey[500],.16)},children:t.jsx(C,{icon:"eva:twitter-fill",color:"#1C9CEA"})})]}),t.jsx(oo,{sx:{my:3},children:t.jsx(B,{variant:"body2",sx:{color:"text.secondary"},children:"OR"})}),a]})})]})}function Wo(){return t.jsxs(t.Fragment,{children:[t.jsx(Q,{children:t.jsx("title",{children:" Login | Minimal UI "})}),t.jsx(bo,{})]})}export{Wo as default};