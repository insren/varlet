import{_ as o,b as d,e as h,m as r,p as a,q as t,w as n,Q as s,Z as e}from"./index-95102025.js";const p={components:{}},i={class:"varlet-site-doc"},j=a("h1",null,"动作面板",-1),m={class:"card"},g={id:"介绍"},u=a("p",null,[s("弹出一个动作面板提供用户选择选项的能力。 "),a("code",null,"ActionSheet"),s(" 提供了函数式和组件式两种使用方式，两种使用效果和参数并没有本质区别。 函数返回一个 "),a("code",null,"Promise"),s("，选择时返回 "),a("code",null,"当前选择的 action"),s("，点击遮罩层关闭返回 "),a("code",null,"close"),s("。")],-1),_=a("h2",null,"函数调用",-1),k={class:"card"},f={id:"基本使用"},b=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar, ActionSheet } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"createBasic"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"const"),s(" action = "),a("span",{class:"hljs-keyword"},"await"),s(` ActionSheet({ 
    `),a("span",{class:"hljs-attr"},"actions"),s(`: [
      {
        `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 01'"),s(`,
        `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'account-circle'"),s(`,
      },
      {
        `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 02'"),s(`,
        `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'notebook'"),s(`,
      },
      {
        `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 03'"),s(`,
        `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'wifi'"),s(`,
      },
    ] 
  })
  
  action !== `),a("span",{class:"hljs-string"},"'close'"),s(" && Snackbar("),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${action.name}"),s("`")]),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"createBasic"'),s(">")]),s("基本使用"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),y={class:"card"},w={id:"修改标题"},v=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar, ActionSheet } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handleSelect"),s("("),a("span",{class:"hljs-params"}),s(")")]),s(`{
  `),a("span",{class:"hljs-keyword"},"const"),s(" action = "),a("span",{class:"hljs-keyword"},"await"),s(` ActionSheet({ 
    `),a("span",{class:"hljs-attr"},"actions"),s(`: [
      {
        `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 01'"),s(`,
        `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'account-circle'"),s(`,
      },
      {
        `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 02'"),s(`,
        `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'notebook'"),s(`,
      },
      {
        `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 03'"),s(`,
        `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'wifi'"),s(`,
      },
    ],
    `),a("span",{class:"hljs-attr"},"title"),s(": "),a("span",{class:"hljs-string"},"'选择一个你喜欢的吧'"),s(` 
  })
  
  action !== `),a("span",{class:"hljs-string"},"'close'"),s(" && Snackbar("),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${action.name}"),s("`")]),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handleSelect"'),s(">")]),s("修改标题"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),S={class:"card"},A={id:"禁用选项"},I=a("p",null,[s("选项传入 "),a("code",null,"disabled"),s(" 可以使选项处于禁用状态。")],-1),x=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar, ActionSheet } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handleSelect"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"const"),s(" action = "),a("span",{class:"hljs-keyword"},"await"),s(` ActionSheet({ 
    `),a("span",{class:"hljs-attr"},"actions"),s(`: [
      {
        `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 01'"),s(`,
        `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'account-circle'"),s(`,
      },
      {
        `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 02'"),s(`,
        `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'notebook'"),s(`,
      },
      {
        `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 03'"),s(`,
        `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'wifi'"),s(`,
        `),a("span",{class:"hljs-attr"},"disabled"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
      },
    ] 
  })
  
  action !== `),a("span",{class:"hljs-string"},"'close'"),s(" && Snackbar("),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${action.name}"),s("`")]),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handleSelect"'),s(">")]),s("禁用选项"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),$={class:"card"},O={id:"禁用点击选项时关闭动作面板"},C=a("p",null,[s("方法传入 "),a("code",null,"closeOnClickAction"),s(" 可以禁用在选择选项时 "),a("code",null,"ActionSheet"),s(" 自动关闭的行为，用户可以多次选择， 由于 "),a("code",null,"Promise"),s(" 只会被 "),a("code",null,"resolve"),s(" 一次，所以推荐使用 "),a("code",null,"onSelect"),s(" 监听用户选择行为。")],-1),N=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar, ActionSheet } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handleSelect"),s("("),a("span",{class:"hljs-params"}),s(")")]),s(`{
  `),a("span",{class:"hljs-keyword"},"await"),s(` ActionSheet({ 
    `),a("span",{class:"hljs-attr"},"actions"),s(`: [
      {
        `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 01'"),s(`,
        `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'account-circle'"),s(`,
      },
      {
        `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 02'"),s(`,
        `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'notebook'"),s(`,
      },
      {
        `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 03'"),s(`,
        `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'wifi'"),s(`,
      },
    ], 
    `),a("span",{class:"hljs-attr"},"closeOnClickAction"),s(": "),a("span",{class:"hljs-literal"},"false"),s(`,
    `),a("span",{class:"hljs-attr"},"onSelect"),s(": "),a("span",{class:"hljs-function"},[a("span",{class:"hljs-params"},"action"),s(" =>")]),s(" Snackbar("),a("span",{class:"hljs-string"},[s("`您选择的是:"),a("span",{class:"hljs-subst"},"${action.name}"),s("`")]),s(`), 
  })
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handleSelect"'),s(">")]),s("禁用关闭动作面板"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),z={class:"card"},B={id:"自定义选项样式"},P=a("p",null,[s("选项提供了可以配置样式的参数，具体选项的参数可选项见 "),a("code",null,"Action 的数据结构"),s("。")],-1),V=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar, ActionSheet } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handleSelect"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"const"),s(" action = "),a("span",{class:"hljs-keyword"},"await"),s(` ActionSheet({ 
    `),a("span",{class:"hljs-attr"},"actions"),s(`: [
      {
        `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 01'"),s(`,
        `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'account-circle'"),s(`,
        `),a("span",{class:"hljs-attr"},"color"),s(": "),a("span",{class:"hljs-string"},"'#00c48f'"),s(`,
      },
      {
        `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 02'"),s(`,
        `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'notebook'"),s(`,
        `),a("span",{class:"hljs-attr"},"color"),s(": "),a("span",{class:"hljs-string"},"'#ff9800'"),s(`,
      },
      {
        `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 03'"),s(`,
        `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'wifi'"),s(`,
        `),a("span",{class:"hljs-attr"},"color"),s(": "),a("span",{class:"hljs-string"},"'#00afef'"),s(`,
      },
    ] 
  })
  
  action !== `),a("span",{class:"hljs-string"},"'close'"),s(" && Snackbar("),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${action.name}"),s("`")]),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handleSelect"'),s(">")]),s("自定义选项样式"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),D=a("h2",null,"组件调用",-1),T={class:"card"},q={id:"基本使用"},E=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(` actions = ref([
  {
    `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 01'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'account-circle'"),s(`,
  },
  {
    `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 02'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'notebook'"),s(`,
  },
  {
    `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 03'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'wifi'"),s(`,
  },
])

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handleSelect"),s("("),a("span",{class:"hljs-params"},"action"),s(")")]),s(`{
  Snackbar(`),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${action.name}"),s("`")]),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("基本使用"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-action-sheet"),s(` 
    `),a("span",{class:"hljs-attr"},":actions"),s("="),a("span",{class:"hljs-string"},'"actions"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(`
    @`),a("span",{class:"hljs-attr"},"select"),s("="),a("span",{class:"hljs-string"},'"handleSelect"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),Q={class:"card"},Z={id:"修改标题"},F=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(` actions = ref([
  {
    `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 01'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'account-circle'"),s(`,
  },
  {
    `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 02'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'notebook'"),s(`,
  },
  {
    `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 03'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'wifi'"),s(`,
  },
])

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handleSelect"),s("("),a("span",{class:"hljs-params"},"action"),s(")")]),s(`{
  Snackbar(`),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${action.name}"),s("`")]),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("修改标题"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-action-sheet"),s(` 
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"选择一个你喜欢的吧"'),s(`
    `),a("span",{class:"hljs-attr"},":actions"),s("="),a("span",{class:"hljs-string"},'"actions"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(`
    @`),a("span",{class:"hljs-attr"},"select"),s("="),a("span",{class:"hljs-string"},'"handleSelect"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),G={class:"card"},H={id:"禁用选项"},J=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(` actions = ref([
  {
    `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 01'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'account-circle'"),s(`,
  },
  {
    `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 02'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'notebook'"),s(`,
  },
  {
    `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 03'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'wifi'"),s(`,
    `),a("span",{class:"hljs-attr"},"disabled"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
  },
])

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handleSelect"),s("("),a("span",{class:"hljs-params"},"action"),s(") ")]),s(`{
  Snackbar(`),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${action.name}"),s("`")]),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("禁用选项"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-action-sheet"),s(` 
    `),a("span",{class:"hljs-attr"},":actions"),s("="),a("span",{class:"hljs-string"},'"actions"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(`
    @`),a("span",{class:"hljs-attr"},"select"),s("="),a("span",{class:"hljs-string"},'"handleSelect"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),K={class:"card"},L={id:"禁用点击选项时关闭动作面板"},M=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(` actions = ref([
  {
    `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 01'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'account-circle'"),s(`,
  },
  {
    `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 02'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'notebook'"),s(`,
  },
  {
    `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 03'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'wifi'"),s(`,
  },
])

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handleSelect"),s("("),a("span",{class:"hljs-params"},"action"),s(") ")]),s(`{
  Snackbar(`),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${action.name}"),s("`")]),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("禁用点击选项时关闭动作面板"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-action-sheet"),s(` 
    `),a("span",{class:"hljs-attr"},":close-on-click-action"),s("="),a("span",{class:"hljs-string"},'"false"'),s(`
    `),a("span",{class:"hljs-attr"},":actions"),s("="),a("span",{class:"hljs-string"},'"actions"'),s(` 
    `),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(` 
    @`),a("span",{class:"hljs-attr"},"select"),s("="),a("span",{class:"hljs-string"},'"handleSelect"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),R={class:"card"},U={id:"自定义选项样式"},W=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(` actions = ref([
  {
    `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 01'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'account-circle'"),s(`,
    `),a("span",{class:"hljs-attr"},"color"),s(": "),a("span",{class:"hljs-string"},"'#00c48f'"),s(`,
  },
  {
    `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 02'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'notebook'"),s(`,
    `),a("span",{class:"hljs-attr"},"color"),s(": "),a("span",{class:"hljs-string"},"'#ff9800'"),s(`,
  },
  {
    `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'Item 03'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'wifi'"),s(`,
    `),a("span",{class:"hljs-attr"},"color"),s(": "),a("span",{class:"hljs-string"},"'#00afef'"),s(`,
  },
])

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handleSelect"),s("("),a("span",{class:"hljs-params"},"action"),s(") ")]),s(`{
  Snackbar(`),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${action.name}"),s("`")]),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("自定义选项样式"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-action-sheet"),s(` 
    `),a("span",{class:"hljs-attr"},":actions"),s("="),a("span",{class:"hljs-string"},'"actions"'),s(` 
    `),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(` 
    @`),a("span",{class:"hljs-attr"},"select"),s("="),a("span",{class:"hljs-string"},'"handleSelect"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),X=a("h2",null,"API",-1),Y={class:"card"},ss={id:"属性"},as=e("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>是否显示动作面板</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>actions</code></td><td>选项列表</td><td><em>Actions</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>动作面板标题</td><td><em>string</em></td><td><code>请选择</code></td></tr><tr><td><code>overlay</code></td><td>是否显示遮罩层</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlay-class</code></td><td>自定义遮罩层的 class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlay-style</code></td><td>自定义遮罩层的 style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>lock-scroll</code></td><td>是否禁止滚动穿透，禁止时滚动弹出层不会引发 body 的滚动</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-click-action</code></td><td>是否点击选项时关闭动作面板</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-click-overlay</code></td><td>是否点击遮罩层关闭动作面板</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>safe-area</code></td><td>是否开启底部安全区适配</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>teleport</code></td><td>动作面板挂载的位置</td><td><em>TeleportProps[&#39;to&#39;] | false</em></td><td><code>body</code></td></tr></tbody></table>",1),ts={class:"card"},ns={id:"事件"},ls=e("<table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>select</code></td><td>选择选项时出发</td><td><code>action: Action</code></td></tr><tr><td><code>open</code></td><td>打开动作面板时触发</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>打开动作面板动画结束时触发</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>关闭动作面板时触发</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>关闭动作面板动画结束时触发</td><td><code>-</code></td></tr><tr><td><code>click-overlay</code></td><td>点击遮罩层时触发</td><td><code>-</code></td></tr></tbody></table>",1),cs={class:"card"},es={id:"方法"},ds=e("<table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>ActionSheet</code></td><td>显示动作面板</td><td><em>options</em></td><td><code>-</code></td></tr><tr><td><code>ActionSheet.close</code></td><td>关闭动作面板</td><td><em>-</em></td><td><code>-</code></td></tr><tr><td><code>ActionSheet.setDefaultOptions</code></td><td>设置默认的选项配置</td><td><em>options</em></td><td><code>-</code></td></tr><tr><td><code>ActionSheet.resetDefaultOptions</code></td><td>重置默认的选项配置</td><td><em>-</em></td><td><code>-</code></td></tr></tbody></table>",1),os={class:"card"},hs={id:"ActionSheet Options"},rs=e("<h4>函数式调用时传入的选项</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>actions</code></td><td>选项列表</td><td><em>Actions</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>动作面板标题</td><td><em>string</em></td><td><code>请选择</code></td></tr><tr><td><code>overlay</code></td><td>是否显示遮罩层</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlayClass</code></td><td>自定义遮罩层的 class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlayStyle</code></td><td>自定义遮罩层的 style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>lockScroll</code></td><td>是否禁止滚动穿透，禁止时滚动弹出层不会引发 body 的滚动</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>closeOnClickOverlay</code></td><td>是否点击遮罩层关闭弹出层</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>safe-area</code></td><td>是否开启底部安全区适配</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>onOpen</code></td><td>动作面板开启回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>动作面板开启动画结束回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>动作面板关闭回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>动作面板关闭动画结束回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onSelect</code></td><td>选项选择时回调</td><td><em>(action: Action) =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClickOverlay</code></td><td>遮罩层点击回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table>",2),ps={class:"card"},is={id:"ActionSheet Action"},js=e("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>name</code></td><td>选项名称</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>color</code></td><td>选项文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>icon 图标，支持网络图片地址</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>iconSize</code></td><td>图标尺寸</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>className</code></td><td>选项附加类名</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用选项</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table>",1),ms={class:"card"},gs={id:"插槽"},us=e("<table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>actions</code></td><td>选项列表</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>动作面板标题</td><td><code>-</code></td></tr></tbody></table>",1),_s={class:"card"},ks={id:"样式变量"},fs=e('<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--action-sheet-border-radius</code></td><td><code>2px</code></td></tr><tr><td><code>--action-sheet-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--action-sheet-title-color</code></td><td><code>#888</code></td></tr><tr><td><code>--action-sheet-title-padding</code></td><td><code>10px 16px</code></td></tr><tr><td><code>--action-sheet-title-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--action-sheet-action-item-height</code></td><td><code>48px</code></td></tr><tr><td><code>--action-sheet-action-item-padding</code></td><td><code>0px 18px</code></td></tr><tr><td><code>--action-sheet-action-item-color</code></td><td><code>#333</code></td></tr><tr><td><code>--action-sheet-action-item-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--action-sheet-icon-margin</code></td><td><code>0 0 20px 0</code></td></tr><tr><td><code>--action-sheet-icon-size</code></td><td><code>24px</code></td></tr></tbody></table>',2);function bs(ys,ws,vs,Ss,As,Is){const l=d("router-link"),c=d("var-site-code-example");return h(),r("div",i,[j,a("div",m,[a("h3",g,[t(l,{to:"#介绍"},{default:n(()=>[s("#")]),_:1}),s("介绍")]),u]),_,a("div",k,[a("h3",f,[t(l,{to:"#基本使用"},{default:n(()=>[s("#")]),_:1}),s("基本使用")]),t(c,null,{default:n(()=>[b]),_:1})]),a("div",y,[a("h3",w,[t(l,{to:"#修改标题"},{default:n(()=>[s("#")]),_:1}),s("修改标题")]),t(c,null,{default:n(()=>[v]),_:1})]),a("div",S,[a("h3",A,[t(l,{to:"#禁用选项"},{default:n(()=>[s("#")]),_:1}),s("禁用选项")]),I,t(c,null,{default:n(()=>[x]),_:1})]),a("div",$,[a("h3",O,[t(l,{to:"#禁用点击选项时关闭动作面板"},{default:n(()=>[s("#")]),_:1}),s("禁用点击选项时关闭动作面板")]),C,t(c,null,{default:n(()=>[N]),_:1})]),a("div",z,[a("h3",B,[t(l,{to:"#自定义选项样式"},{default:n(()=>[s("#")]),_:1}),s("自定义选项样式")]),P,t(c,null,{default:n(()=>[V]),_:1})]),D,a("div",T,[a("h3",q,[t(l,{to:"#基本使用"},{default:n(()=>[s("#")]),_:1}),s("基本使用")]),t(c,null,{default:n(()=>[E]),_:1})]),a("div",Q,[a("h3",Z,[t(l,{to:"#修改标题"},{default:n(()=>[s("#")]),_:1}),s("修改标题")]),t(c,null,{default:n(()=>[F]),_:1})]),a("div",G,[a("h3",H,[t(l,{to:"#禁用选项"},{default:n(()=>[s("#")]),_:1}),s("禁用选项")]),t(c,null,{default:n(()=>[J]),_:1})]),a("div",K,[a("h3",L,[t(l,{to:"#禁用点击选项时关闭动作面板"},{default:n(()=>[s("#")]),_:1}),s("禁用点击选项时关闭动作面板")]),t(c,null,{default:n(()=>[M]),_:1})]),a("div",R,[a("h3",U,[t(l,{to:"#自定义选项样式"},{default:n(()=>[s("#")]),_:1}),s("自定义选项样式")]),t(c,null,{default:n(()=>[W]),_:1})]),X,a("div",Y,[a("h3",ss,[t(l,{to:"#属性"},{default:n(()=>[s("#")]),_:1}),s("属性")]),as]),a("div",ts,[a("h3",ns,[t(l,{to:"#事件"},{default:n(()=>[s("#")]),_:1}),s("事件")]),ls]),a("div",cs,[a("h3",es,[t(l,{to:"#方法"},{default:n(()=>[s("#")]),_:1}),s("方法")]),ds]),a("div",os,[a("h3",hs,[t(l,{to:"#ActionSheet Options"},{default:n(()=>[s("#")]),_:1}),s("ActionSheet Options")]),rs]),a("div",ps,[a("h3",is,[t(l,{to:"#ActionSheet Action"},{default:n(()=>[s("#")]),_:1}),s("ActionSheet Action")]),js]),a("div",ms,[a("h3",gs,[t(l,{to:"#插槽"},{default:n(()=>[s("#")]),_:1}),s("插槽")]),us]),a("div",_s,[a("h3",ks,[t(l,{to:"#样式变量"},{default:n(()=>[s("#")]),_:1}),s("样式变量")]),fs])])}const $s=o(p,[["render",bs]]);export{$s as default};
