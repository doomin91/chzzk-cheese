import{r as y,p as We,X as $t,_ as m,h as It,g as yt,s as N,i as Ge,l as At,m as at,j as I,v as he,x as Ot,Y as ne,Z as gt,I as vt,c as Pt,k as ot,t as Lt,f as re}from"./index-8fbc9a42.js";import{i as nt,f as ge,A as kt}from"./Select-9bd5bba2.js";import{c as Tt}from"./Card-bc4c103e.js";import{c as wt}from"./index-effbbbea.js";import{P as St}from"./Popper-cc4f5994.js";import{u as Rt}from"./Menu-46b48fad.js";import{u as rt}from"./Popover-63046ab8.js";import{u as Dt}from"./usePreviousProps-59cecb96.js";import{C as Mt}from"./Chip-a1b5d407.js";function ht(o){return typeof o.normalize<"u"?o.normalize("NFD").replace(/[\u0300-\u036f]/g,""):o}function Nt(o={}){const{ignoreAccents:a=!0,ignoreCase:p=!0,limit:b,matchFrom:A="any",stringify:C,trim:v=!1}=o;return(g,{inputValue:G,getOptionLabel:z})=>{let L=v?G.trim():G;p&&(L=L.toLowerCase()),a&&(L=ht(L));const j=L?g.filter(X=>{let D=(C||z)(X);return p&&(D=D.toLowerCase()),a&&(D=ht(D)),A==="start"?D.indexOf(L)===0:D.indexOf(L)>-1}):g;return typeof b=="number"?j.slice(0,b):j}}function _e(o,a){for(let p=0;p<o.length;p+=1)if(a(o[p]))return p;return-1}const Ft=Nt(),mt=5,Et=o=>{var a;return o.current!==null&&((a=o.current.parentElement)==null?void 0:a.contains(document.activeElement))};function Ht(o){const{unstable_isActiveElementInListbox:a=Et,unstable_classNamePrefix:p="Mui",autoComplete:b=!1,autoHighlight:A=!1,autoSelect:C=!1,blurOnSelect:v=!1,clearOnBlur:g=!o.freeSolo,clearOnEscape:G=!1,componentName:z="useAutocomplete",defaultValue:L=o.multiple?[]:null,disableClearable:j=!1,disableCloseOnSelect:X=!1,disabled:D,disabledItemsFocusable:Be=!1,disableListWrap:Ue=!1,filterOptions:st=Ft,filterSelectedOptions:me=!1,freeSolo:Y=!1,getOptionDisabled:B,getOptionKey:Ke,getOptionLabel:$e=t=>{var e;return(e=t.label)!=null?e:t},groupBy:be,handleHomeEndKeys:J=!o.freeSolo,id:it,includeInputInList:qe=!1,inputValue:Ae,isOptionEqualToValue:ae=(t,e)=>t===e,multiple:d=!1,onChange:xe,onClose:Le,onHighlightChange:ke,onInputChange:U,onOpen:Te,open:lt,openOnFocus:pt=!1,options:Ie,readOnly:Q=!1,selectOnFocus:ye=!o.freeSolo,value:we}=o,w=Rt(it);let $=$e;$=t=>{const e=$e(t);return typeof e!="string"?String(e):e};const Oe=y.useRef(!1),Re=y.useRef(!0),x=y.useRef(null),R=y.useRef(null),[se,Ye]=y.useState(null),[k,ve]=y.useState(-1),De=A?0:-1,P=y.useRef(De),[s,ut]=rt({controlled:we,default:L,name:z}),[u,K]=rt({controlled:Ae,default:"",name:z,state:"inputValue"}),[ie,Me]=y.useState(!1),ee=y.useCallback((t,e)=>{if(!(d?s.length<e.length:e!==null)&&!g)return;let n;if(d)n="";else if(e==null)n="";else{const i=$(e);n=typeof i=="string"?i:""}u!==n&&(K(n),U&&U(t,n,"reset"))},[$,u,d,U,K,g,s]),[Z,Ne]=rt({controlled:lt,default:!1,name:z,state:"open"}),[Je,Fe]=y.useState(!0),Ee=!d&&s!=null&&u===$(s),T=Z&&!Q,f=T?st(Ie.filter(t=>!(me&&(d?s:[s]).some(e=>e!==null&&ae(t,e)))),{inputValue:Ee&&Je?"":u,getOptionLabel:$}):[],F=Dt({filteredOptions:f,value:s,inputValue:u});y.useEffect(()=>{const t=s!==F.value;ie&&!t||Y&&!t||ee(null,s)},[s,ee,ie,F.value,Y]);const Pe=Z&&f.length>0&&!Q,le=We(t=>{t===-1?x.current.focus():se.querySelector(`[data-tag-index="${t}"]`).focus()});y.useEffect(()=>{d&&k>s.length-1&&(ve(-1),le(-1))},[s,d,k,le]);function pe(t,e){if(!R.current||t<0||t>=f.length)return-1;let r=t;for(;;){const n=R.current.querySelector(`[data-option-index="${r}"]`),i=Be?!1:!n||n.disabled||n.getAttribute("aria-disabled")==="true";if(n&&n.hasAttribute("tabindex")&&!i)return r;if(e==="next"?r=(r+1)%f.length:r=(r-1+f.length)%f.length,r===t)return-1}}const V=We(({event:t,index:e,reason:r="auto"})=>{if(P.current=e,e===-1?x.current.removeAttribute("aria-activedescendant"):x.current.setAttribute("aria-activedescendant",`${w}-option-${e}`),ke&&ke(t,e===-1?null:f[e],r),!R.current)return;const n=R.current.querySelector(`[role="option"].${p}-focused`);n&&(n.classList.remove(`${p}-focused`),n.classList.remove(`${p}-focusVisible`));let i=R.current;if(R.current.getAttribute("role")!=="listbox"&&(i=R.current.parentElement.querySelector('[role="listbox"]')),!i)return;if(e===-1){i.scrollTop=0;return}const c=R.current.querySelector(`[data-option-index="${e}"]`);if(c&&(c.classList.add(`${p}-focused`),r==="keyboard"&&c.classList.add(`${p}-focusVisible`),i.scrollHeight>i.clientHeight&&r!=="mouse"&&r!=="touch")){const h=c,_=i.clientHeight+i.scrollTop,ft=h.offsetTop+h.offsetHeight;ft>_?i.scrollTop=ft-i.clientHeight:h.offsetTop-h.offsetHeight*(be?1.3:0)<i.scrollTop&&(i.scrollTop=h.offsetTop-h.offsetHeight*(be?1.3:0))}}),E=We(({event:t,diff:e,direction:r="next",reason:n="auto"})=>{if(!T)return;const c=pe((()=>{const h=f.length-1;if(e==="reset")return De;if(e==="start")return 0;if(e==="end")return h;const _=P.current+e;return _<0?_===-1&&qe?-1:Ue&&P.current!==-1||Math.abs(e)>1?0:h:_>h?_===h+1&&qe?-1:Ue||Math.abs(e)>1?h:0:_})(),r);if(V({index:c,reason:n,event:t}),b&&e!=="reset")if(c===-1)x.current.value=u;else{const h=$(f[c]);x.current.value=h,h.toLowerCase().indexOf(u.toLowerCase())===0&&u.length>0&&x.current.setSelectionRange(u.length,h.length)}}),ue=()=>{const t=(e,r)=>{const n=e?$(e):"",i=r?$(r):"";return n===i};if(P.current!==-1&&F.filteredOptions&&F.filteredOptions.length!==f.length&&F.inputValue===u&&(d?s.length===F.value.length&&F.value.every((e,r)=>$(s[r])===$(e)):t(F.value,s))){const e=F.filteredOptions[P.current];if(e)return _e(f,r=>$(r)===$(e))}return-1},Se=y.useCallback(()=>{if(!T)return;const t=ue();if(t!==-1){P.current=t;return}const e=d?s[0]:s;if(f.length===0||e==null){E({diff:"reset"});return}if(R.current){if(e!=null){const r=f[P.current];if(d&&r&&_e(s,i=>ae(r,i))!==-1)return;const n=_e(f,i=>ae(i,e));n===-1?E({diff:"reset"}):V({index:n});return}if(P.current>=f.length-1){V({index:f.length-1});return}V({index:P.current})}},[f.length,d?!1:s,me,E,V,T,u,d]),Ze=We(t=>{$t(R,t),t&&Se()});y.useEffect(()=>{Se()},[Se]);const M=t=>{Z||(Ne(!0),Fe(!0),Te&&Te(t))},q=(t,e)=>{Z&&(Ne(!1),Le&&Le(t,e))},W=(t,e,r,n)=>{if(d){if(s.length===e.length&&s.every((i,c)=>i===e[c]))return}else if(s===e)return;xe&&xe(t,e,r,n),ut(e)},ce=y.useRef(!1),te=(t,e,r="selectOption",n="options")=>{let i=r,c=e;if(d){c=Array.isArray(s)?s.slice():[];const h=_e(c,_=>ae(e,_));h===-1?c.push(e):n!=="freeSolo"&&(c.splice(h,1),i="removeOption")}ee(t,c),W(t,c,i,{option:e}),!X&&(!t||!t.ctrlKey&&!t.metaKey)&&q(t,i),(v===!0||v==="touch"&&ce.current||v==="mouse"&&!ce.current)&&x.current.blur()};function He(t,e){if(t===-1)return-1;let r=t;for(;;){if(e==="next"&&r===s.length||e==="previous"&&r===-1)return-1;const n=se.querySelector(`[data-tag-index="${r}"]`);if(!n||!n.hasAttribute("tabindex")||n.disabled||n.getAttribute("aria-disabled")==="true")r+=e==="next"?1:-1;else return r}}const ze=(t,e)=>{if(!d)return;u===""&&q(t,"toggleInput");let r=k;k===-1?u===""&&e==="previous"&&(r=s.length-1):(r+=e==="next"?1:-1,r<0&&(r=0),r===s.length&&(r=-1)),r=He(r,e),ve(r),le(r)},je=t=>{Oe.current=!0,K(""),U&&U(t,"","clear"),W(t,d?[]:null,"clear")},Xe=t=>e=>{if(t.onKeyDown&&t.onKeyDown(e),!e.defaultMuiPrevented&&(k!==-1&&["ArrowLeft","ArrowRight"].indexOf(e.key)===-1&&(ve(-1),le(-1)),e.which!==229))switch(e.key){case"Home":T&&J&&(e.preventDefault(),E({diff:"start",direction:"next",reason:"keyboard",event:e}));break;case"End":T&&J&&(e.preventDefault(),E({diff:"end",direction:"previous",reason:"keyboard",event:e}));break;case"PageUp":e.preventDefault(),E({diff:-mt,direction:"previous",reason:"keyboard",event:e}),M(e);break;case"PageDown":e.preventDefault(),E({diff:mt,direction:"next",reason:"keyboard",event:e}),M(e);break;case"ArrowDown":e.preventDefault(),E({diff:1,direction:"next",reason:"keyboard",event:e}),M(e);break;case"ArrowUp":e.preventDefault(),E({diff:-1,direction:"previous",reason:"keyboard",event:e}),M(e);break;case"ArrowLeft":ze(e,"previous");break;case"ArrowRight":ze(e,"next");break;case"Enter":if(P.current!==-1&&T){const r=f[P.current],n=B?B(r):!1;if(e.preventDefault(),n)return;te(e,r,"selectOption"),b&&x.current.setSelectionRange(x.current.value.length,x.current.value.length)}else Y&&u!==""&&Ee===!1&&(d&&e.preventDefault(),te(e,u,"createOption","freeSolo"));break;case"Escape":T?(e.preventDefault(),e.stopPropagation(),q(e,"escape")):G&&(u!==""||d&&s.length>0)&&(e.preventDefault(),e.stopPropagation(),je(e));break;case"Backspace":if(d&&!Q&&u===""&&s.length>0){const r=k===-1?s.length-1:k,n=s.slice();n.splice(r,1),W(e,n,"removeOption",{option:s[r]})}break;case"Delete":if(d&&!Q&&u===""&&s.length>0&&k!==-1){const r=k,n=s.slice();n.splice(r,1),W(e,n,"removeOption",{option:s[r]})}break}},ct=t=>{Me(!0),pt&&!Oe.current&&M(t)},de=t=>{if(a(R)){x.current.focus();return}Me(!1),Re.current=!0,Oe.current=!1,C&&P.current!==-1&&T?te(t,f[P.current],"blur"):C&&Y&&u!==""?te(t,u,"blur","freeSolo"):g&&ee(t,s),q(t,"blur")},S=t=>{const e=t.target.value;u!==e&&(K(e),Fe(!1),U&&U(t,e,"input")),e===""?!j&&!d&&W(t,null,"clear"):M(t)},O=t=>{const e=Number(t.currentTarget.getAttribute("data-option-index"));P.current!==e&&V({event:t,index:e,reason:"mouse"})},H=t=>{V({event:t,index:Number(t.currentTarget.getAttribute("data-option-index")),reason:"touch"}),ce.current=!0},dt=t=>{const e=Number(t.currentTarget.getAttribute("data-option-index"));te(t,f[e],"selectOption"),ce.current=!1},Qe=t=>e=>{const r=s.slice();r.splice(t,1),W(e,r,"removeOption",{option:s[t]})},et=t=>{Z?q(t,"toggleInput"):M(t)},tt=t=>{t.currentTarget.contains(t.target)&&t.target.getAttribute("id")!==w&&t.preventDefault()},Ve=t=>{t.currentTarget.contains(t.target)&&(x.current.focus(),ye&&Re.current&&x.current.selectionEnd-x.current.selectionStart===0&&x.current.select(),Re.current=!1)},Ce=t=>{!D&&(u===""||!Z)&&et(t)};let oe=Y&&u.length>0;oe=oe||(d?s.length>0:s!==null);let fe=f;return be&&(fe=f.reduce((t,e,r)=>{const n=be(e);return t.length>0&&t[t.length-1].group===n?t[t.length-1].options.push(e):t.push({key:r,index:r,group:n,options:[e]}),t},[])),D&&ie&&de(),{getRootProps:(t={})=>m({"aria-owns":Pe?`${w}-listbox`:null},t,{onKeyDown:Xe(t),onMouseDown:tt,onClick:Ve}),getInputLabelProps:()=>({id:`${w}-label`,htmlFor:w}),getInputProps:()=>({id:w,value:u,onBlur:de,onFocus:ct,onChange:S,onMouseDown:Ce,"aria-activedescendant":T?"":null,"aria-autocomplete":b?"both":"list","aria-controls":Pe?`${w}-listbox`:void 0,"aria-expanded":Pe,autoComplete:"off",ref:x,autoCapitalize:"none",spellCheck:"false",role:"combobox",disabled:D}),getClearProps:()=>({tabIndex:-1,type:"button",onClick:je}),getPopupIndicatorProps:()=>({tabIndex:-1,type:"button",onClick:et}),getTagProps:({index:t})=>m({key:t,"data-tag-index":t,tabIndex:-1},!Q&&{onDelete:Qe(t)}),getListboxProps:()=>({role:"listbox",id:`${w}-listbox`,"aria-labelledby":`${w}-label`,ref:Ze,onMouseDown:t=>{t.preventDefault()}}),getOptionProps:({index:t,option:e})=>{var r;const n=(d?s:[s]).some(c=>c!=null&&ae(e,c)),i=B?B(e):!1;return{key:(r=Ke==null?void 0:Ke(e))!=null?r:$(e),tabIndex:-1,role:"option",id:`${w}-option-${t}`,onMouseMove:O,onClick:dt,onTouchStart:H,"data-option-index":t,"aria-disabled":i,"aria-selected":n}},id:w,inputValue:u,value:s,dirty:oe,expanded:T&&se,popupOpen:T,focused:ie||k!==-1,anchorEl:se,setAnchorEl:Ye,focusedTag:k,groupedOptions:fe}}function zt(o){return It("MuiListSubheader",o)}yt("MuiListSubheader",["root","colorPrimary","colorInherit","gutters","inset","sticky"]);const jt=["className","color","component","disableGutters","disableSticky","inset"],Vt=o=>{const{classes:a,color:p,disableGutters:b,inset:A,disableSticky:C}=o,v={root:["root",p!=="default"&&`color${Ge(p)}`,!b&&"gutters",A&&"inset",!C&&"sticky"]};return Ot(v,zt,a)},Wt=N("li",{name:"MuiListSubheader",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:p}=o;return[a.root,p.color!=="default"&&a[`color${Ge(p.color)}`],!p.disableGutters&&a.gutters,p.inset&&a.inset,!p.disableSticky&&a.sticky]}})(({theme:o,ownerState:a})=>m({boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:(o.vars||o).palette.text.secondary,fontFamily:o.typography.fontFamily,fontWeight:o.typography.fontWeightMedium,fontSize:o.typography.pxToRem(14)},a.color==="primary"&&{color:(o.vars||o).palette.primary.main},a.color==="inherit"&&{color:"inherit"},!a.disableGutters&&{paddingLeft:16,paddingRight:16},a.inset&&{paddingLeft:72},!a.disableSticky&&{position:"sticky",top:0,zIndex:1,backgroundColor:(o.vars||o).palette.background.paper})),Ct=y.forwardRef(function(a,p){const b=At({props:a,name:"MuiListSubheader"}),{className:A,color:C="default",component:v="li",disableGutters:g=!1,disableSticky:G=!1,inset:z=!1}=b,L=at(b,jt),j=m({},b,{color:C,component:v,disableGutters:g,disableSticky:G,inset:z}),X=Vt(j);return I.jsx(Wt,m({as:v,className:he(X.root,A),ref:p,ownerState:j},L))});Ct.muiSkipListHighlight=!0;const _t=Ct,Gt=Tt(I.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");function Bt(o){return It("MuiAutocomplete",o)}const Ut=yt("MuiAutocomplete",["root","expanded","fullWidth","focused","focusVisible","tag","tagSizeSmall","tagSizeMedium","hasPopupIcon","hasClearIcon","inputRoot","input","inputFocused","endAdornment","clearIndicator","popupIndicator","popupIndicatorOpen","popper","popperDisablePortal","paper","listbox","loading","noOptions","option","groupLabel","groupUl"]),l=Ut;var bt,xt;const Kt=["autoComplete","autoHighlight","autoSelect","blurOnSelect","ChipProps","className","clearIcon","clearOnBlur","clearOnEscape","clearText","closeText","componentsProps","defaultValue","disableClearable","disableCloseOnSelect","disabled","disabledItemsFocusable","disableListWrap","disablePortal","filterOptions","filterSelectedOptions","forcePopupIcon","freeSolo","fullWidth","getLimitTagsText","getOptionDisabled","getOptionKey","getOptionLabel","isOptionEqualToValue","groupBy","handleHomeEndKeys","id","includeInputInList","inputValue","limitTags","ListboxComponent","ListboxProps","loading","loadingText","multiple","noOptionsText","onChange","onClose","onHighlightChange","onInputChange","onOpen","open","openOnFocus","openText","options","PaperComponent","PopperComponent","popupIcon","readOnly","renderGroup","renderInput","renderOption","renderTags","selectOnFocus","size","slotProps","value"],qt=["ref"],Yt=wt(),Jt=o=>{const{classes:a,disablePortal:p,expanded:b,focused:A,fullWidth:C,hasClearIcon:v,hasPopupIcon:g,inputFocused:G,popupOpen:z,size:L}=o,j={root:["root",b&&"expanded",A&&"focused",C&&"fullWidth",v&&"hasClearIcon",g&&"hasPopupIcon"],inputRoot:["inputRoot"],input:["input",G&&"inputFocused"],tag:["tag",`tagSize${Ge(L)}`],endAdornment:["endAdornment"],clearIndicator:["clearIndicator"],popupIndicator:["popupIndicator",z&&"popupIndicatorOpen"],popper:["popper",p&&"popperDisablePortal"],paper:["paper"],listbox:["listbox"],loading:["loading"],noOptions:["noOptions"],option:["option"],groupLabel:["groupLabel"],groupUl:["groupUl"]};return Ot(j,Bt,a)},Zt=N("div",{name:"MuiAutocomplete",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:p}=o,{fullWidth:b,hasClearIcon:A,hasPopupIcon:C,inputFocused:v,size:g}=p;return[{[`& .${l.tag}`]:a.tag},{[`& .${l.tag}`]:a[`tagSize${Ge(g)}`]},{[`& .${l.inputRoot}`]:a.inputRoot},{[`& .${l.input}`]:a.input},{[`& .${l.input}`]:v&&a.inputFocused},a.root,b&&a.fullWidth,C&&a.hasPopupIcon,A&&a.hasClearIcon]}})({[`&.${l.focused} .${l.clearIndicator}`]:{visibility:"visible"},"@media (pointer: fine)":{[`&:hover .${l.clearIndicator}`]:{visibility:"visible"}},[`& .${l.tag}`]:{margin:3,maxWidth:"calc(100% - 6px)"},[`& .${l.inputRoot}`]:{flexWrap:"wrap",[`.${l.hasPopupIcon}&, .${l.hasClearIcon}&`]:{paddingRight:26+4},[`.${l.hasPopupIcon}.${l.hasClearIcon}&`]:{paddingRight:52+4},[`& .${l.input}`]:{width:0,minWidth:30}},[`& .${nt.root}`]:{paddingBottom:1,"& .MuiInput-input":{padding:"4px 4px 4px 0px"}},[`& .${nt.root}.${ne.sizeSmall}`]:{[`& .${nt.input}`]:{padding:"2px 4px 3px 0"}},[`& .${gt.root}`]:{padding:9,[`.${l.hasPopupIcon}&, .${l.hasClearIcon}&`]:{paddingRight:26+4+9},[`.${l.hasPopupIcon}.${l.hasClearIcon}&`]:{paddingRight:52+4+9},[`& .${l.input}`]:{padding:"7.5px 4px 7.5px 5px"},[`& .${l.endAdornment}`]:{right:9}},[`& .${gt.root}.${ne.sizeSmall}`]:{paddingTop:6,paddingBottom:6,paddingLeft:6,[`& .${l.input}`]:{padding:"2.5px 4px 2.5px 8px"}},[`& .${ge.root}`]:{paddingTop:19,paddingLeft:8,[`.${l.hasPopupIcon}&, .${l.hasClearIcon}&`]:{paddingRight:26+4+9},[`.${l.hasPopupIcon}.${l.hasClearIcon}&`]:{paddingRight:52+4+9},[`& .${ge.input}`]:{padding:"7px 4px"},[`& .${l.endAdornment}`]:{right:9}},[`& .${ge.root}.${ne.sizeSmall}`]:{paddingBottom:1,[`& .${ge.input}`]:{padding:"2.5px 4px"}},[`& .${ne.hiddenLabel}`]:{paddingTop:8},[`& .${ge.root}.${ne.hiddenLabel}`]:{paddingTop:0,paddingBottom:0,[`& .${l.input}`]:{paddingTop:16,paddingBottom:17}},[`& .${ge.root}.${ne.hiddenLabel}.${ne.sizeSmall}`]:{[`& .${l.input}`]:{paddingTop:8,paddingBottom:9}},[`& .${l.input}`]:{flexGrow:1,textOverflow:"ellipsis",opacity:0},variants:[{props:{fullWidth:!0},style:{width:"100%"}},{props:{size:"small"},style:{[`& .${l.tag}`]:{margin:2,maxWidth:"calc(100% - 4px)"}}},{props:{inputFocused:!0},style:{[`& .${l.input}`]:{opacity:1}}}]}),Xt=N("div",{name:"MuiAutocomplete",slot:"EndAdornment",overridesResolver:(o,a)=>a.endAdornment})({position:"absolute",right:0,top:"50%",transform:"translate(0, -50%)"}),Qt=N(vt,{name:"MuiAutocomplete",slot:"ClearIndicator",overridesResolver:(o,a)=>a.clearIndicator})({marginRight:-2,padding:4,visibility:"hidden"}),eo=N(vt,{name:"MuiAutocomplete",slot:"PopupIndicator",overridesResolver:({ownerState:o},a)=>m({},a.popupIndicator,o.popupOpen&&a.popupIndicatorOpen)})({padding:2,marginRight:-2,variants:[{props:{popupOpen:!0},style:{transform:"rotate(180deg)"}}]}),to=N(St,{name:"MuiAutocomplete",slot:"Popper",overridesResolver:(o,a)=>{const{ownerState:p}=o;return[{[`& .${l.option}`]:a.option},a.popper,p.disablePortal&&a.popperDisablePortal]}})(({theme:o})=>({zIndex:(o.vars||o).zIndex.modal,variants:[{props:{disablePortal:!0},style:{position:"absolute"}}]})),oo=N(Pt,{name:"MuiAutocomplete",slot:"Paper",overridesResolver:(o,a)=>a.paper})(({theme:o})=>m({},o.typography.body1,{overflow:"auto"})),no=N("div",{name:"MuiAutocomplete",slot:"Loading",overridesResolver:(o,a)=>a.loading})(({theme:o})=>({color:(o.vars||o).palette.text.secondary,padding:"14px 16px"})),ro=N("div",{name:"MuiAutocomplete",slot:"NoOptions",overridesResolver:(o,a)=>a.noOptions})(({theme:o})=>({color:(o.vars||o).palette.text.secondary,padding:"14px 16px"})),ao=N("div",{name:"MuiAutocomplete",slot:"Listbox",overridesResolver:(o,a)=>a.listbox})(({theme:o})=>({listStyle:"none",margin:0,padding:"8px 0",maxHeight:"40vh",overflow:"auto",position:"relative",[`& .${l.option}`]:{minHeight:48,display:"flex",overflow:"hidden",justifyContent:"flex-start",alignItems:"center",cursor:"pointer",paddingTop:6,boxSizing:"border-box",outline:"0",WebkitTapHighlightColor:"transparent",paddingBottom:6,paddingLeft:16,paddingRight:16,[o.breakpoints.up("sm")]:{minHeight:"auto"},[`&.${l.focused}`]:{backgroundColor:(o.vars||o).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},'&[aria-disabled="true"]':{opacity:(o.vars||o).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${l.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},'&[aria-selected="true"]':{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / ${o.vars.palette.action.selectedOpacity})`:ot(o.palette.primary.main,o.palette.action.selectedOpacity),[`&.${l.focused}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.hoverOpacity}))`:ot(o.palette.primary.main,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(o.vars||o).palette.action.selected}},[`&.${l.focusVisible}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.focusOpacity}))`:ot(o.palette.primary.main,o.palette.action.selectedOpacity+o.palette.action.focusOpacity)}}}})),so=N(_t,{name:"MuiAutocomplete",slot:"GroupLabel",overridesResolver:(o,a)=>a.groupLabel})(({theme:o})=>({backgroundColor:(o.vars||o).palette.background.paper,top:-8})),io=N("ul",{name:"MuiAutocomplete",slot:"GroupUl",overridesResolver:(o,a)=>a.groupUl})({padding:0,[`& .${l.option}`]:{paddingLeft:24}}),lo=y.forwardRef(function(a,p){var b,A,C,v;const g=Yt({props:a,name:"MuiAutocomplete"}),{autoComplete:G=!1,autoHighlight:z=!1,autoSelect:L=!1,blurOnSelect:j=!1,ChipProps:X,className:D,clearIcon:Be=bt||(bt=I.jsx(Gt,{fontSize:"small"})),clearOnBlur:Ue=!g.freeSolo,clearOnEscape:st=!1,clearText:me="Clear",closeText:Y="Close",componentsProps:B={},defaultValue:Ke=g.multiple?[]:null,disableClearable:$e=!1,disableCloseOnSelect:be=!1,disabled:J=!1,disabledItemsFocusable:it=!1,disableListWrap:qe=!1,disablePortal:Ae=!1,filterSelectedOptions:ae=!1,forcePopupIcon:d="auto",freeSolo:xe=!1,fullWidth:Le=!1,getLimitTagsText:ke=n=>`+${n}`,getOptionLabel:U,groupBy:Te,handleHomeEndKeys:lt=!g.freeSolo,includeInputInList:pt=!1,limitTags:Ie=-1,ListboxComponent:Q="ul",ListboxProps:ye,loading:we=!1,loadingText:w="Loading…",multiple:$=!1,noOptionsText:Oe="No options",openOnFocus:Re=!1,openText:x="Open",PaperComponent:R=Pt,PopperComponent:se=St,popupIcon:Ye=xt||(xt=I.jsx(kt,{})),readOnly:k=!1,renderGroup:ve,renderInput:De,renderOption:P,renderTags:s,selectOnFocus:ut=!g.freeSolo,size:u="medium",slotProps:K={}}=g,ie=at(g,Kt),{getRootProps:Me,getInputProps:ee,getInputLabelProps:Z,getPopupIndicatorProps:Ne,getClearProps:Je,getTagProps:Fe,getListboxProps:Ee,getOptionProps:T,value:f,dirty:F,expanded:Pe,id:le,popupOpen:pe,focused:V,focusedTag:E,anchorEl:ue,setAnchorEl:Se,inputValue:Ze,groupedOptions:M}=Ht(m({},g,{componentName:"Autocomplete"})),q=!$e&&!J&&F&&!k,W=(!xe||d===!0)&&d!==!1,{onMouseDown:ce}=ee(),{ref:te}=ye??{},He=Ee(),{ref:ze}=He,je=at(He,qt),Xe=Lt(ze,te),de=U||(n=>{var i;return(i=n.label)!=null?i:n}),S=m({},g,{disablePortal:Ae,expanded:Pe,focused:V,fullWidth:Le,getOptionLabel:de,hasClearIcon:q,hasPopupIcon:W,inputFocused:E===-1,popupOpen:pe,size:u}),O=Jt(S);let H;if($&&f.length>0){const n=i=>m({className:O.tag,disabled:J},Fe(i));s?H=s(f,n,S):H=f.map((i,c)=>I.jsx(Mt,m({label:de(i),size:u},n({index:c}),X)))}if(Ie>-1&&Array.isArray(H)){const n=H.length-Ie;!V&&n>0&&(H=H.splice(0,Ie),H.push(I.jsx("span",{className:O.tag,children:ke(n)},H.length)))}const Qe=ve||(n=>I.jsxs("li",{children:[I.jsx(so,{className:O.groupLabel,ownerState:S,component:"div",children:n.group}),I.jsx(io,{className:O.groupUl,ownerState:S,children:n.children})]},n.key)),tt=P||((n,i)=>y.createElement("li",m({},n,{key:n.key}),de(i))),Ve=(n,i)=>{const c=T({option:n,index:i});return tt(m({},c,{className:O.option}),n,{selected:c["aria-selected"],index:i,inputValue:Ze},S)},Ce=(b=K.clearIndicator)!=null?b:B.clearIndicator,oe=(A=K.paper)!=null?A:B.paper,fe=(C=K.popper)!=null?C:B.popper,t=(v=K.popupIndicator)!=null?v:B.popupIndicator,e=n=>I.jsx(to,m({as:se,disablePortal:Ae,style:{width:ue?ue.clientWidth:null},ownerState:S,role:"presentation",anchorEl:ue,open:pe},fe,{className:he(O.popper,fe==null?void 0:fe.className),children:I.jsx(oo,m({ownerState:S,as:R},oe,{className:he(O.paper,oe==null?void 0:oe.className),children:n}))}));let r=null;return M.length>0?r=e(I.jsx(ao,m({as:Q,className:O.listbox,ownerState:S},je,ye,{ref:Xe,children:M.map((n,i)=>Te?Qe({key:n.key,group:n.group,children:n.options.map((c,h)=>Ve(c,n.index+h))}):Ve(n,i))}))):we&&M.length===0?r=e(I.jsx(no,{className:O.loading,ownerState:S,children:w})):M.length===0&&!xe&&!we&&(r=e(I.jsx(ro,{className:O.noOptions,ownerState:S,role:"presentation",onMouseDown:n=>{n.preventDefault()},children:Oe}))),I.jsxs(y.Fragment,{children:[I.jsx(Zt,m({ref:p,className:he(O.root,D),ownerState:S},Me(ie),{children:De({id:le,disabled:J,fullWidth:!0,size:u==="small"?"small":void 0,InputLabelProps:Z(),InputProps:m({ref:Se,className:O.inputRoot,startAdornment:H,onClick:n=>{n.target===n.currentTarget&&ce(n)}},(q||W)&&{endAdornment:I.jsxs(Xt,{className:O.endAdornment,ownerState:S,children:[q?I.jsx(Qt,m({},Je(),{"aria-label":me,title:me,ownerState:S},Ce,{className:he(O.clearIndicator,Ce==null?void 0:Ce.className),children:Be})):null,W?I.jsx(eo,m({},Ne(),{disabled:J,"aria-label":pe?Y:x,title:pe?Y:x,ownerState:S},t,{className:he(O.popupIndicator,t==null?void 0:t.className),children:Ye})):null]})}),inputProps:m({className:O.input,disabled:J,readOnly:k},ee())})})),ue?r:null]})}),yo=lo,po=["Whiteboard Templates By Industry Leaders","Tesla Cybertruck-inspired camper trailer for Tesla fans who can’t just wait for the truck!","Designify Agency Landing Page Design","✨What is Done is Done ✨","Fresh Prince","Six Socks Studio","vincenzo de cotiis’ crossing over showcases a research on contamination","Simple, Great Looking Animations in Your Project | Video Tutorial","40 Free Serif Fonts for Digital Designers","Examining the Evolution of the Typical Web Design Client","Katie Griffin loves making that homey art","The American Dream retold through mid-century railroad graphics","Illustration System Design","CarZio-Delivery Driver App SignIn/SignUp","How to create a client-serverless Jamstack app using Netlify, Gatsby and Fauna","Tylko Organise effortlessly -3D & Motion Design","RAYO ?? A expanded visual arts festival identity","Anthony Burrill and Wired mag’s Andrew Diprose discuss how they made January’s Change Everything cover","Inside the Mind of Samuel Day","Portfolio Review: Is This Portfolio Too Creative?","Akkers van Margraten","Gradient Ticket icon","Here’s a Dyson motorcycle concept that doesn’t ‘suck’!","How to Animate a SVG with border-image"],Oo=[...Array(23)].map((o,a)=>({id:re.string.uuid(),cover:`/assets/images/covers/cover_${a+1}.jpg`,title:po[a+1],createdAt:re.date.past(),view:re.number.int(99999),comment:re.number.int(99999),share:re.number.int(99999),favorite:re.number.int(99999),author:{name:re.person.fullName(),avatarUrl:`/assets/images/avatars/avatar_${a+1}.jpg`}}));export{yo as A,l as a,Oo as p};