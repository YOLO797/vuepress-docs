import{_ as v,W as w,X as x,a0 as y,Y as e,Z as t,$ as n,a1 as o,a2 as c,C as s}from"./framework-6199cc12.js";const A={},V=e("p",null,"VuePress basically generate pages from Markdown files. So you can use it to generate documentation or blog sites easily.",-1),j=e("p",null,"You should create and write Markdown files, so that VuePress can convert them to different pages according to file structure.",-1),C=e("h2",{id:"markdown-introduction",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown-introduction","aria-hidden":"true"},"#"),t(" Markdown Introduction")],-1),D={href:"https://theme-hope.vuejs.press/cookbook/markdown/",target:"_blank",rel:"noopener noreferrer"},K={href:"https://theme-hope.vuejs.press/cookbook/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},I=e("h2",{id:"markdown-config",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown-config","aria-hidden":"true"},"#"),t(" Markdown Config")],-1),J=e("p",null,"VuePress introduce configuration for each Markdown page using Frontmatter.",-1),P={class:"hint-container info"},T=e("p",{class:"hint-container-title"},"相关信息",-1),B={href:"https://theme-hope.vuejs.press/cookbook/vuepress/page.html#front-matter",target:"_blank",rel:"noopener noreferrer"},M=e("h2",{id:"markdown-extension",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown-extension","aria-hidden":"true"},"#"),t(" Markdown Extension")],-1),Y={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},E={href:"https://github.com/markdown-it/markdown-it#syntax-extensions",target:"_blank",rel:"noopener noreferrer"},F=e("h3",{id:"vuepress-enhancement",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vuepress-enhancement","aria-hidden":"true"},"#"),t(" VuePress Enhancement")],-1),G=e("p",null,"To enrich document writing, VuePress has extended Markdown syntax.",-1),X={href:"https://theme-hope.vuejs.press/basic/vuepress/markdown.html",target:"_blank",rel:"noopener noreferrer"},Q=e("h3",{id:"theme-enhancement",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#theme-enhancement","aria-hidden":"true"},"#"),t(" Theme Enhancement")],-1),S={href:"https://theme-hope.vuejs.press/md-enhance/",target:"_blank",rel:"noopener noreferrer"},R=e("code",null,"vuepress-plugin-md-enhance",-1),z=c(`<h4 id="custom-container" tabindex="-1"><a class="header-anchor" href="#custom-container" aria-hidden="true">#</a> Custom Container</h4><div><p>Safely use {{ variable }} in Markdown.</p></div><div class="hint-container info"><p class="hint-container-title">Custom Title</p><p>A custom information container with <code>code</code>, <a href="#custom-container">link</a>.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="hint-container tip"><p class="hint-container-title">Custom Title</p><p>A custom tip container</p></div><div class="hint-container warning"><p class="hint-container-title">Custom Title</p><p>A custom warning container</p></div><div class="hint-container danger"><p class="hint-container-title">Custom Title</p><p>A custom danger container</p></div><details class="hint-container details"><summary>Custom Title</summary><p>A custom details container</p></details>`,7),U={href:"https://theme-hope.vuejs.press/guide/markdown/container.html",target:"_blank",rel:"noopener noreferrer"},q=e("h4",{id:"tabs",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tabs","aria-hidden":"true"},"#"),t(" Tabs")],-1),W=e("p",null,"Apple",-1),N=e("p",null,"Banana",-1),H=e("p",null,"Orange",-1),L={href:"https://theme-hope.vuejs.press/guide/markdown/tabs.html",target:"_blank",rel:"noopener noreferrer"},Z=e("h4",{id:"code-tabs",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#code-tabs","aria-hidden":"true"},"#"),t(" Code Tabs")],-1),O=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"pnpm"),t(),e("span",{class:"token function"},"add"),t(),e("span",{class:"token parameter variable"},"-D"),t(` vuepress-theme-hope
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),$=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),t(),e("span",{class:"token function"},"add"),t(),e("span",{class:"token parameter variable"},"-D"),t(` vuepress-theme-hope
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),ee=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"npm"),t(" i "),e("span",{class:"token parameter variable"},"-D"),t(` vuepress-theme-hope
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),te={href:"https://theme-hope.vuejs.press/guide/markdown/code-tabs.html",target:"_blank",rel:"noopener noreferrer"},ne=e("h4",{id:"superscript-and-subscript",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#superscript-and-subscript","aria-hidden":"true"},"#"),t(" Superscript and Subscript")],-1),ae=e("p",null,"19^th^ H~2~O",-1),se={href:"https://theme-hope.vuejs.press/guide/markdown/sup-sub.html",target:"_blank",rel:"noopener noreferrer"},oe=e("h4",{id:"align",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#align","aria-hidden":"true"},"#"),t(" Align")],-1),re=e("div",{style:{"text-align":"center"}},[e("p",null,"I am center")],-1),ie=e("div",{style:{"text-align":"right"}},[e("p",null,"I am right align")],-1),le={href:"https://theme-hope.vuejs.press/guide/markdown/align.html",target:"_blank",rel:"noopener noreferrer"},ce=e("h4",{id:"attrs",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#attrs","aria-hidden":"true"},"#"),t(" Attrs")],-1),de=e("p",null,[t("A "),e("strong",{id:"word"},"word"),t(" having id.")],-1),he={href:"https://theme-hope.vuejs.press/guide/markdown/attrs.html",target:"_blank",rel:"noopener noreferrer"},ue=c('<h4 id="footnote" tabindex="-1"><a class="header-anchor" href="#footnote" aria-hidden="true">#</a> Footnote</h4><p>This text has footnote<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>.</p>',2),pe={href:"https://theme-hope.vuejs.press/guide/markdown/footnote.html",target:"_blank",rel:"noopener noreferrer"},me=e("h4",{id:"mark",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mark","aria-hidden":"true"},"#"),t(" Mark")],-1),_e=e("p",null,[t("You can mark "),e("mark",null,"important words"),t(" .")],-1),ke={href:"https://theme-hope.vuejs.press/guide/markdown/mark.html",target:"_blank",rel:"noopener noreferrer"},ge=e("h4",{id:"tasklist",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tasklist","aria-hidden":"true"},"#"),t(" Tasklist")],-1),fe={class:"task-list-container"},be=c('<li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> Plan A</label></p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> Plan B</label></p></li>',2),ve={href:"https://theme-hope.vuejs.press/guide/markdown/tasklist.html",target:"_blank",rel:"noopener noreferrer"},we=e("h4",{id:"image-enhancement",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#image-enhancement","aria-hidden":"true"},"#"),t(" Image Enhancement")],-1),xe=e("p",null,"Support setting color scheme and size",-1),ye={href:"https://theme-hope.vuejs.press/guide/markdown/image.html",target:"_blank",rel:"noopener noreferrer"},Ae=e("h4",{id:"chart",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#chart","aria-hidden":"true"},"#"),t(" Chart")],-1),Ve={href:"https://theme-hope.vuejs.press/guide/markdown/chart.html",target:"_blank",rel:"noopener noreferrer"},je=e("h4",{id:"echarts",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#echarts","aria-hidden":"true"},"#"),t(" Echarts")],-1),Ce={href:"https://theme-hope.vuejs.press/guide/markdown/echarts.html",target:"_blank",rel:"noopener noreferrer"},De=e("h4",{id:"flowchart",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#flowchart","aria-hidden":"true"},"#"),t(" Flowchart")],-1),Ke={href:"https://theme-hope.vuejs.press/guide/markdown/flowchart.html",target:"_blank",rel:"noopener noreferrer"},Ie=e("h4",{id:"mermaid",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mermaid","aria-hidden":"true"},"#"),t(" Mermaid")],-1),Je={href:"https://theme-hope.vuejs.press/guide/markdown/mermaid.html",target:"_blank",rel:"noopener noreferrer"},Pe=e("h4",{id:"tex",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tex","aria-hidden":"true"},"#"),t(" Tex")],-1),Te=e("p",null,"$$ \\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right) = \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^i r \\cdots (r-i+1) (\\log y)^{r-i}} {\\omega^i} \\right} $$",-1),Be={href:"https://theme-hope.vuejs.press/guide/markdown/tex.html",target:"_blank",rel:"noopener noreferrer"},Me=e("h4",{id:"include-files",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#include-files","aria-hidden":"true"},"#"),t(" Include files")],-1),Ye=e("p",null,"@include(./README.md{11-17})",-1),Ee={href:"https://theme-hope.vuejs.press/guide/markdown/include.html",target:"_blank",rel:"noopener noreferrer"},Fe=e("h4",{id:"code-demo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#code-demo","aria-hidden":"true"},"#"),t(" Code Demo")],-1),Ge=e("div",{class:"language-html line-numbers-mode","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("h1")]),e("span",{class:"token punctuation"},">")]),t("VuePress Theme Hope"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),t("h1")]),e("span",{class:"token punctuation"},">")]),t(`
`),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("p")]),e("span",{class:"token punctuation"},">")]),t("Is "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("span")]),t(),e("span",{class:"token attr-name"},"id"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),t("very"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),t("very"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),t("span")]),e("span",{class:"token punctuation"},">")]),t(" powerful!"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),t("p")]),e("span",{class:"token punctuation"},">")]),t(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Xe=e("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[e("pre",{class:"language-javascript"},[e("code",null,[t("document"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"querySelector"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"#very"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"addEventListener"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"click"'),e("span",{class:"token punctuation"},","),t(),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),t(),e("span",{class:"token operator"},"=>"),t(),e("span",{class:"token punctuation"},"{"),t(`
  `),e("span",{class:"token function"},"alert"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Very powerful!"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),t(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),t(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Qe=e("div",{class:"language-css line-numbers-mode","data-ext":"css"},[e("pre",{class:"language-css"},[e("code",null,[e("span",{class:"token selector"},"span"),t(),e("span",{class:"token punctuation"},"{"),t(`
  `),e("span",{class:"token property"},"color"),e("span",{class:"token punctuation"},":"),t(" red"),e("span",{class:"token punctuation"},";"),t(`
`),e("span",{class:"token punctuation"},"}"),t(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Se={href:"https://theme-hope.vuejs.press/guide/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},Re=e("h4",{id:"stylize",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#stylize","aria-hidden":"true"},"#"),t(" Stylize")],-1),ze=e("p",null,[t("Donate Mr.Hope a cup of coffee. "),e("em",null,"Recommended")],-1),Ue={href:"https://theme-hope.vuejs.press/guide/markdown/stylize.html",target:"_blank",rel:"noopener noreferrer"},qe=e("h4",{id:"playground",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#playground","aria-hidden":"true"},"#"),t(" Playground")],-1),We={href:"https://theme-hope.vuejs.press/guide/markdown/playground.html",target:"_blank",rel:"noopener noreferrer"},Ne=e("h4",{id:"vue-playground",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vue-playground","aria-hidden":"true"},"#"),t(" Vue Playground")],-1),He={href:"https://theme-hope.vuejs.press/guide/markdown/vue-playground.html",target:"_blank",rel:"noopener noreferrer"},Le=e("h4",{id:"presentation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#presentation","aria-hidden":"true"},"#"),t(" Presentation")],-1),Ze={href:"https://theme-hope.vuejs.press/guide/markdown/presentation.html",target:"_blank",rel:"noopener noreferrer"},Oe=c('<hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>This is footnote content <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li></ol></section>',2);function $e(et,tt){const a=s("ExternalLinkIcon"),d=s("Tabs"),h=s("CodeTabs"),u=s("ChartJS"),p=s("ECharts"),m=s("FlowChart"),_=s("Mermaid"),k=s("CodeDemo"),g=s("Playground"),f=s("VuePlayground"),b=s("Presentation");return w(),x("div",null,[V,j,y(" more "),C,e("p",null,[t("If you are a new learner and don’t know how to write Markdown, please read "),e("a",D,[t("Markdown Intro"),n(a)]),t(" and "),e("a",K,[t("Markdown Demo"),n(a)]),t(".")]),I,J,e("div",P,[T,e("p",null,[t("Frontmatter is a important concept in VuePress. If you don’t know it, you need to read "),e("a",B,[t("Frontmatter Introduction"),n(a)]),t(".")])]),M,e("p",null,[t("The Markdown content in VuePress will be parsed by "),e("a",Y,[t("markdown-it"),n(a)]),t(", which supports "),e("a",E,[t("syntax extensions"),n(a)]),t(" via markdown-it plugins.")]),F,G,e("p",null,[t("For these extensions, please read "),e("a",X,[t("Markdown extensions in VuePress"),n(a)]),t(".")]),Q,e("p",null,[t("By using "),e("a",S,[R,n(a)]),t(", the theme extends more Markdown syntax and provides richer writing functions.")]),z,e("ul",null,[e("li",null,[e("a",U,[t("View Detail"),n(a)])])]),q,n(d,{id:"89",data:[{title:"apple"},{title:"banana"},{title:"orange"}],"tab-id":"fruit"},{tab0:o(({title:r,value:i,isActive:l})=>[W]),tab1:o(({title:r,value:i,isActive:l})=>[N]),tab2:o(({title:r,value:i,isActive:l})=>[H]),_:1}),e("ul",null,[e("li",null,[e("a",L,[t("View Detail"),n(a)])])]),Z,n(h,{id:"116",data:[{title:"pnpm"},{title:"yarn"},{title:"npm"}],active:2,"tab-id":"shell"},{tab0:o(({title:r,value:i,isActive:l})=>[O]),tab1:o(({title:r,value:i,isActive:l})=>[$]),tab2:o(({title:r,value:i,isActive:l})=>[ee]),_:1}),e("ul",null,[e("li",null,[e("a",te,[t("View Detail"),n(a)])])]),ne,ae,e("ul",null,[e("li",null,[e("a",se,[t("View Detail"),n(a)])])]),oe,re,ie,e("ul",null,[e("li",null,[e("a",le,[t("View Detail"),n(a)])])]),ce,de,e("ul",null,[e("li",null,[e("a",he,[t("View Detail"),n(a)])])]),ue,e("ul",null,[e("li",null,[e("a",pe,[t("View Detail"),n(a)])])]),me,_e,e("ul",null,[e("li",null,[e("a",ke,[t("View Detail"),n(a)])])]),ge,e("ul",fe,[be,e("li",null,[e("p",null,[e("a",ve,[t("View Detail"),n(a)])])])]),we,xe,e("ul",null,[e("li",null,[e("a",ye,[t("View Detail"),n(a)])])]),Ae,n(u,{id:"chart-242",config:"eJxtUEsKgzAQ3XuKIasWrKjFhd22N+iyuIgaRJoa0RQqxbt3Jh+14CYk7zeT9w0AmJ56wS7AxoprLQYWElhzzREkgXuNQo+IPAwCjjGs5KWQlHC3CXCzcpPkNC7Pu00CsA9CpyQOgU14i2FeHQvv2WSfXtzZvjvKPB+hYhEUm91KXj2bQb27+qqkGugnQ1Me0gyteR5Cck6PzMltQoGnmcZUr1vVUTGuKmxRivWNCK2xacvXLdtOcNu2Y3o1tpRGbKm0Vq//qXTOwRz8AH72Yfs=",title:"A%20Scatter%20Chart",type:"json"}),e("ul",null,[e("li",null,[e("a",Ve,[t("View Detail"),n(a)])])]),je,n(p,{id:"echarts-255",config:"eJyr5lJQUKpwrMgsVrJSAHGA3JLKglQgTyk5sSQ1Pb+oUkkHIp6SWJIIFI9W8s3PU9JRUAopTQVR4akpYF5GKYhyK8oEUcGJJWCqNE8pFqi7FmSEUiV2e8oSc4AmwVUVpxZlpoKURYOVQRQjWW9oaqCjYGQMIoxMgIShhY6CobEpkDAxB3LNDGIh7kWyISczD2wB0AogGctVywUA9j06jQ==",title:"A%20line%20chart"}),e("ul",null,[e("li",null,[e("a",Ce,[t("View Detail"),n(a)])])]),De,n(m,{id:"flowchart-268",code:"eJxLzs9LsbUDkZklmfl5VgoBRfnJqcXF9lwFEIatXX5BalEiiiRXqq1dal6KlYJrXgoXF0izRmVqsaauHVSPrl0qRDQvHyiYygUAPWgiyQ==",preset:"vue"}),e("ul",null,[e("li",null,[e("a",Ke,[t("View Detail"),n(a)])])]),Ie,n(_,{id:"mermaid-279",code:"eJzT1dXlKsksyUm1UnDLyS9PzkgsKuECCabBeAohTlwKQJBsqKtrl2gEZheXJqUXJRZkKOTnpYIFEpEkU/NSUBWVlOeDBZJAipJwKcooSoWYBbYoGVUZ0B4FoCjcKLBqVJHyfDAfqBEAuj83LQ=="}),e("ul",null,[e("li",null,[e("a",Je,[t("View Detail"),n(a)])])]),Pe,Te,e("ul",null,[e("li",null,[e("a",Be,[t("View Detail"),n(a)])])]),Me,Ye,e("ul",null,[e("li",null,[e("a",Ee,[t("View Detail"),n(a)])])]),Fe,n(k,{id:"code-demo-316",type:"normal",title:"A%20normal%20demo",code:"eJxFjjELAjEMhf9KjIuCeLhq7SYoOAiKU5ejjdxpr61tTxHxv5ueg0sCed97L29scmdxiaJZyHNPh0gpwamhjmDrA4mK78qJIHcJRAq1g9asFT4ovhTKskRVzhKCf1K89HYkqsAWnOE1cbDxuu/I5fm9Z/hIlnT2caJw/MuYzmtjNg8m9m3K5Kho2rb6pnAGkymsJbyVA6gtxczamW3/Mg5YKfcpgxt1KpXDm4NHe+vjEiKZAjHy+QJaqVDL"},{default:o(()=>[Ge,Xe,Qe]),_:1}),e("ul",null,[e("li",null,[e("a",Se,[t("View Detail"),n(a)])])]),Re,ze,e("ul",null,[e("li",null,[e("a",Ue,[t("View Detail"),n(a)])])]),qe,n(g,{key:"4438ca39",title:"TS%20demo",link:"https%3A%2F%2Fwww.typescriptlang.org%2Fplay%23code%2FMYewdgzgLgBAthA5jAvDARACwKYBtcgwDuIATrgCboDcAULaJLBAA7YCGA1qjABQKIAXDGikAlmEQBKVAD4YjCCFzYAdAUT8kUurVYdOW6XSA"}),e("ul",null,[e("li",null,[e("a",We,[t("View Detail"),n(a)])])]),Ne,n(f,{title:"Vue%20Playground",key:"14e14188",settings:"%7B%7D",files:"eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIjtcblxuY29uc3QgbXNnID0gcmVmKFwiSGVsbG8gV29ybGQhXCIpO1xuPC9zY3JpcHQ%2BXG5cbjx0ZW1wbGF0ZT5cbiAgPGgxPnt7IG1zZyB9fTwvaDE%2BXG4gIDxpbnB1dCB2LW1vZGVsPVwibXNnXCIgLz5cbjwvdGVtcGxhdGU%2BXG4ifQ%3D%3D"}),e("ul",null,[e("li",null,[e("a",He,[t("View Detail"),n(a)])])]),Le,n(b,{id:"presentation-374",code:"eJxVjc0KwjAQhO/7FAvtoQX7pzelB4969WilDXYx0aYNyYqC+O4mUJDeho9vZiCK8DSonrAC2KMRVtysMBJfiiW6SRMyvRnF2KPA86DGxyWRzMZti0JbORnKnWJKAbIsg//c2gM8MGk/PIeAFs4m96dd190dXKfR+RessdoFFNSF6ctxDMekYUks2nI1hyr1ncY9dftRdfkN0g8aMTop",theme:"auto"}),e("ul",null,[e("li",null,[e("a",Ze,[t("View Detail"),n(a)])])]),Oe])}const at=v(A,[["render",$e],["__file","markdown.html.vue"]]);export{at as default};
