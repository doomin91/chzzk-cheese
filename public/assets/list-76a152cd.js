import{j as e,S as a,a as c,T as d,B as x,s as R,L as V,e as E,P as p,r as j,V as F,W as D}from"./index-8fbc9a42.js";import{A as M,a as q}from"./blog-018762da.js";import{a as O,G as b}from"./format-number-be3ff4c2.js";import{u as $}from"./use-router-4e42b1c5.js";import{C as G}from"./Card-bc4c103e.js";import{C as g}from"./Chip-a1b5d407.js";import{B as N}from"./Badge-55dc094c.js";import{A as U}from"./Avatar-e1aec164.js";import{B as m}from"./Button-4501d5c3.js";import{T as v}from"./TextField-9272f96c.js";import{M as H}from"./MenuItem-297a6ed0.js";import{I as J}from"./Select-9bd5bba2.js";import{C as K}from"./Container-da827457.js";import"./index-effbbbea.js";import"./Popper-cc4f5994.js";import"./Menu-46b48fad.js";import"./Popover-63046ab8.js";import"./List-a8fc5471.js";import"./usePreviousProps-59cecb96.js";import"./isMuiElement-00848f19.js";const Q=R(N)(({theme:r})=>({position:"absolute","& .MuiBadge-badge":{position:"absolute",width:30,fontSize:10,fontWeight:600,top:15,left:19,padding:0,backgroundColor:"#FF0000",color:"#fff",borderRadius:4,zIndex:10}}));function w({post:r}){const t=$(),{channelDescription:o,uuid:s,channelImageUrl:h,channelName:u,follower:I,openLive:l,channelLive:i}=r,S=()=>{window.location.href=`https://chzzk.naver.com/live/${s}`},z=()=>{t.push(`/streamer-detail/${s}`)},f=e.jsx(U,{alt:u,src:h,sx:{zIndex:9,width:50,height:50,position:"absolute",left:n=>n.spacing(3),bottom:n=>n.spacing(-2),backgroundColor:"#111",color:"#00ffa3",...l?{boxShadow:"0 0 0 2px #00ffa3","&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%"}}:{filter:"grayscale(1)"}}}),k=e.jsx(V,{color:"inherit",variant:"subtitle2",underline:"hover",sx:{height:44,overflow:"hidden",WebkitLineClamp:2,display:"-webkit-box",WebkitBoxOrient:"vertical"},children:o}),B=e.jsx(a,{direction:"row",flexWrap:"wrap",spacing:1.5,justifyContent:"flex-end",sx:{mt:3,color:"text.disabled"},children:[{number:I,icon:"mdi:person-star"}].map((n,A)=>e.jsxs(a,{direction:"row",children:[e.jsx(c,{width:16,icon:n.icon,sx:{mr:.5}}),e.jsx(d,{variant:"caption",children:O(n.number)})]},A))}),T=e.jsx(x,{component:"img",alt:h,src:h,sx:{top:0,width:1,height:1,objectFit:"cover",position:"absolute"}}),L=e.jsxs(d,{variant:"overline",component:"div",sx:{p:1,mb:2,color:"text.disabled"},children:[i?i.liveTitle:null,i&&i.liveCategory?i.liveCategory.liveCategoryValue:null]}),P=e.jsx(E,{color:"paper",sx:{width:80,height:36,zIndex:9,bottom:-15,position:"absolute"}}),W=e.jsxs(a,{direction:"row","justify-content":"space-between",sx:{pt:2},children:[e.jsx(m,{variant:"outlined",startIcon:e.jsx(c,{width:16,icon:"mdi:tv"}),sx:{fontSize:12,fontWeight:600,border:"2px solid"},onClick:S,children:"바로가기"}),e.jsx(m,{variant:"outlined",endIcon:e.jsx(c,{width:16,icon:"mdi:arrow-right"}),sx:{ml:1,fontSize:12,fontWeight:600,border:"2px solid"},onClick:z,children:"방송현황"})]});return e.jsx(b,{xs:12,sm:6,md:3,children:e.jsxs(G,{children:[e.jsxs(x,{sx:{position:"relative",pt:"calc(100% * 3 / 4)"},children:[P,l?e.jsx(Q,{badgeContent:"LIVE",children:f}):f,T]}),e.jsxs(x,{sx:{p:n=>n.spacing(4,3,3,3)},children:[e.jsxs(a,{children:[e.jsx(d,{variant:"h6",sx:{p:1},children:u}),i?e.jsx(g,{label:l&&i&&i.liveCategory?i.liveCategory.liveCategoryValue:"오프라인",size:"small",variant:"outlined",sx:l&&{border:"2px solid #00ffa3",color:"#00ffa3",fontWeight:600}}):e.jsx(g,{label:"오프라인",size:"small",variant:"outlined",sx:l&&{border:"2px solid #00ffa3",color:"#00ffa3",fontWeight:600}})]}),L,k,B,W]})]})})}w.propTypes={post:p.object.isRequired};C.propTypes={options:p.array,onSort:p.func};function C({options:r,onSort:t}){return e.jsx(v,{select:!0,size:"small",value:"latest",onChange:t,children:r.map(o=>e.jsx(H,{value:o.value,children:o.label},o.value))})}y.propTypes={posts:p.array.isRequired};function y({posts:r}){return e.jsx(M,{sx:{width:280},autoHighlight:!0,popupIcon:null,slotProps:{paper:{sx:{width:320,[`& .${q.option}`]:{typography:"body2"}}}},options:r,getOptionLabel:t=>t.title,isOptionEqualToValue:(t,o)=>t.id===o.id,renderInput:t=>e.jsx(v,{...t,placeholder:"Search post...",InputProps:{...t.InputProps,startAdornment:e.jsx(J,{position:"start",children:e.jsx(c,{icon:"eva:search-fill",sx:{ml:1,width:20,height:20,color:"text.disabled"}})})}})})}function X(){const[r,t]=j.useState([]);return j.useEffect(()=>{(async()=>{await F.get("http://localhost:3000/channel").then(s=>s.data).then(s=>t(s))})()},[]),e.jsxs(K,{children:[e.jsxs(a,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:5,children:[e.jsx(d,{variant:"h4",children:"채널"}),e.jsx(m,{variant:"contained",color:"inherit",startIcon:e.jsx(c,{icon:"eva:plus-fill"}),children:"스트리머 등록"})]}),e.jsxs(a,{mb:3,direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsx(y,{posts:r}),e.jsx(C,{options:[{value:"latest",label:"팔로워순"},{value:"popular",label:"인기순"}]})]}),e.jsx(b,{container:!0,spacing:3,children:r.map((o,s)=>e.jsx(w,{post:o,index:s},o.id))})]})}function je(){return e.jsxs(e.Fragment,{children:[e.jsx(D,{children:e.jsx("title",{children:" Streamer | Minimal UI "})}),e.jsx(X,{})]})}export{je as default};