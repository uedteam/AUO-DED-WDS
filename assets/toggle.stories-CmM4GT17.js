import{j as o}from"./jsx-runtime-DEdD30eg.js";import{r as N}from"./index-RYns6xqu.js";const t=e=>`toggle-${e}`,s=e=>e?"toggle-on":"toggle-off",i=e=>e?"toggle-label-on":"toggle-label-off",c=e=>e?"toggle-thumb-on":"toggle-thumb-off";try{t.displayName="getThemeClass",t.__docgenInfo={description:"",displayName:"getThemeClass",props:{}}}catch{}try{s.displayName="getPositionClass",s.__docgenInfo={description:"",displayName:"getPositionClass",props:{}}}catch{}try{i.displayName="getLabelPositionClass",i.__docgenInfo={description:"",displayName:"getLabelPositionClass",props:{}}}catch{}try{c.displayName="getThumbPositionClass",c.__docgenInfo={description:"",displayName:"getThumbPositionClass",props:{}}}catch{}const n=e=>{const{themeColor:g="",isChecked:h=!1,isDisabled:l=!1,checkChildren:C="on",unCheckChildren:y="off",onChange:d,className:f,..._}=e,[a,b]=N.useState(h);return o.jsxs("div",{..._,className:`toggle ${f||t(g)} ${s(a)} ${l?"toggle-disable":""}`,onClick:v=>{b(k=>!k),d&&d(!a)},children:[o.jsx("div",{className:`toggle-thumb 
          ${l?"toggle-label-disable":c(a)}`}),o.jsx("label",{className:`toggle-label ${i(a)} ${l?"toggle-label-disable":""}`,children:l?"":a?C:y})]})};try{n.displayName="Toggle",n.__docgenInfo={description:"",displayName:"Toggle",props:{themeColor:{defaultValue:null,description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},checkChildren:{defaultValue:null,description:"",name:"checkChildren",required:!1,type:{name:"ReactNode"}},unCheckChildren:{defaultValue:null,description:"",name:"unCheckChildren",required:!1,type:{name:"ReactNode"}},isChecked:{defaultValue:null,description:"",name:"isChecked",required:!0,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((checked: boolean) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{toggle.displayName="toggle",toggle.__docgenInfo={description:"",displayName:"toggle",props:{themeColor:{defaultValue:null,description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},checkChildren:{defaultValue:null,description:"",name:"checkChildren",required:!1,type:{name:"ReactNode"}},unCheckChildren:{defaultValue:null,description:"",name:"unCheckChildren",required:!1,type:{name:"ReactNode"}},isChecked:{defaultValue:null,description:"",name:"isChecked",required:!0,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((checked: boolean) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const x={title:"Design System/Element/Toggle",component:n,tags:["autodocs"],argTypes:{themeColor:{description:"標題顏色",control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]}},checkChildren:{description:"開啟文字",control:{type:"text"}},unCheckChildren:{description:"關閉文字",control:{type:"text"}},isChecked:{description:"是否開啟",control:{type:"boolean"}},isDisabled:{description:"是否禁用",control:{type:"boolean"}},onChange:{description:"開關事件",action:"onChange"},className:{description:"標題樣式",control:{type:"text"}}},parameters:{docs:{title:"按鈕",description:{component:"按鈕組件的呈現及說明。"}}}},r={name:"切換按鈕",args:{themeColor:"primary",isChecked:!1,isDisabled:!1,checkChildren:"on",unCheckChildren:"off",className:""},render(e){return o.jsx(n,{...e})}};var u,p,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '切換按鈕',
  args: {
    themeColor: 'primary',
    isChecked: false,
    isDisabled: false,
    checkChildren: 'on',
    unCheckChildren: 'off',
    className: ''
  },
  render(args) {
    return <Toggle {...args} />;
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const T=["Primary"];export{r as Primary,T as __namedExportsOrder,x as default};