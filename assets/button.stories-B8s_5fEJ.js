import{j as u}from"./jsx-runtime-DWbWqHZ-.js";import{v as S}from"./v4-CQkTLCs1.js";import{T as A}from"./title-Dx3e2aUH.js";import"./index-l2PZgWEW.js";const{addons:D}=__STORYBOOK_MODULE_PREVIEW_API__,{global:f}=__STORYBOOK_MODULE_GLOBAL__,{ImplicitActionsDuringRendering:j}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;var w="storybook/actions",B=`${w}/action-event`,T={depth:10,clearOnStoryChange:!0,limit:50},v=(e,t)=>{let n=Object.getPrototypeOf(e);return!n||t(n)?n:v(n,t)},x=e=>!!(typeof e=="object"&&e&&v(e,t=>/^Synthetic(?:Base)?Event$/.test(t.constructor.name))&&typeof e.persist=="function"),I=e=>{if(x(e)){let t=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));t.persist();let n=Object.getOwnPropertyDescriptor(t,"view"),r=n==null?void 0:n.value;return typeof r=="object"&&(r==null?void 0:r.constructor.name)==="Window"&&Object.defineProperty(t,"view",{...n,value:Object.create(r.constructor.prototype)}),t}return e},P=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?S():Date.now().toString(36)+Math.random().toString(36).substring(2);function E(e,t={}){let n={...T,...t},r=function(...i){var d,m;if(t.implicit){let y=(d="__STORYBOOK_PREVIEW__"in f?f.__STORYBOOK_PREVIEW__:void 0)==null?void 0:d.storyRenders.find(o=>o.phase==="playing"||o.phase==="rendering");if(y){let o=!((m=window==null?void 0:window.FEATURES)!=null&&m.disallowImplicitActionsInRenderV8),_=new j({phase:y.phase,name:e,deprecated:o});if(o)console.warn(_);else throw _}}let s=D.getChannel(),l=P(),C=5,p=i.map(I),R=i.length>1?p:p[0],b={id:l,count:0,data:{name:e,args:R},options:{...n,maxDepth:C+(n.depth||3),allowFunction:n.allowFunction||!1}};s.emit(B,b)};return r.isAction=!0,r.implicit=t.implicit,r}const V=(e,t)=>`button-${e} button-${e}-${t}`;function c(e){const{variant:t,themeColor:n="",children:r,className:i,onClick:s,...l}=e;return u.jsx("button",{...l,className:`button ${i||V(t,n)}`,onClick:s,children:r})}try{c.displayName="Button",c.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"contained"'},{value:'"outlined"'},{value:'"text"'}]}},themeColor:{defaultValue:null,description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const L={title:"Design System/Atoms/Button",component:c,tags:["autodocs"],argTypes:{variant:{description:"按鈕樣式",control:{type:"select",options:["contained","outlined","text"]}},themeColor:{description:"按鈕顏色",control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]}},children:{description:"按鈕內容",control:{type:"text"}},onClick:{description:"點擊事件",action:"clicked"}},args:{onClick:E("onClick")},parameters:{docs:{title:"按鈕",description:{component:"按鈕組件的呈現及說明。"}}}},a={name:"標準按鈕",args:{variant:"outlined",themeColor:"primary",children:u.jsx(A,{level:3,children:"標題按鈕"}),onClick:()=>E("onClick")("點擊事件"),className:""},render(e){return u.jsx(c,{...e,children:e.children})}};var g,O,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '標準按鈕',
  args: {
    variant: 'outlined',
    themeColor: 'primary',
    children: <Title level={3}>標題按鈕</Title>,
    // suffix: <Account />,
    onClick: () => action('onClick')('點擊事件'),
    className: ''
  },
  render(args) {
    return <Button {...args}>{args.children}</Button>;
  }
}`,...(h=(O=a.parameters)==null?void 0:O.docs)==null?void 0:h.source}}};const W=["Primary"];export{a as Primary,W as __namedExportsOrder,L as default};