import{j as t}from"./jsx-runtime-DWbWqHZ-.js";import{r as k}from"./index-l2PZgWEW.js";const i=e=>`switch-${e} `,o=e=>e?"switch-on":"switch-off",l=e=>e?"switch-label-on":"switch-label-off";try{i.displayName="getThemeClass",i.__docgenInfo={description:"",displayName:"getThemeClass",props:{}}}catch{}try{o.displayName="getPositionClass",o.__docgenInfo={description:"",displayName:"getPositionClass",props:{}}}catch{}try{l.displayName="getLabelPositionClass",l.__docgenInfo={description:"",displayName:"getLabelPositionClass",props:{}}}catch{}function n(e){const{themeColor:m="",isChecked:u=!1,isDisabled:s=!1,checkChildren:C="on",unCheckChildren:y="off",onChange:c,className:f,..._}=e,[a,g]=k.useState(u);return t.jsxs("div",{..._,className:`switch ${f||i(m)} ${o(a)} ${s?"switch-disable":""}`,onClick:w=>{g(b=>!b),c&&c(!a)},children:[t.jsx("div",{className:`switch-thumb ${s?"switch-label-disable":""}`}),t.jsx("label",{className:`switch-label ${l(a)} ${s?"switch-label-disable":""}`,children:s?"":a?C:y})]})}try{n.displayName="Switch",n.__docgenInfo={description:"",displayName:"Switch",props:{themeColor:{defaultValue:null,description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},checkChildren:{defaultValue:null,description:"",name:"checkChildren",required:!1,type:{name:"ReactNode"}},unCheckChildren:{defaultValue:null,description:"",name:"unCheckChildren",required:!1,type:{name:"ReactNode"}},isChecked:{defaultValue:null,description:"",name:"isChecked",required:!0,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((checked: boolean) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const v={title:"Design System/Atoms/Switch",component:n,tags:["autodocs"],argTypes:{themeColor:{description:"標題顏色",control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]}},checkChildren:{description:"開啟文字",control:{type:"text"}},unCheckChildren:{description:"關閉文字",control:{type:"text"}},isChecked:{description:"是否開啟",control:{type:"boolean"}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},onChange:{description:"開關事件",action:"onChange"},className:{description:"標題樣式",control:{type:"text"}}},parameters:{docs:{title:"按鈕",description:{component:"按鈕組件的呈現及說明。"}}}},r={name:"標題",args:{themeColor:"primary",isChecked:!1,isDisabled:!1,checkChildren:"on",unCheckChildren:"off",className:""},render(e){return t.jsx(n,{...e})}};var d,p,h;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '標題',
  args: {
    themeColor: 'primary',
    isChecked: false,
    isDisabled: false,
    checkChildren: 'on',
    unCheckChildren: 'off',
    className: ''
  },
  render(args) {
    return <Switch {...args} />;
  }
}`,...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const P=["Primary"];export{r as Primary,P as __namedExportsOrder,v as default};
