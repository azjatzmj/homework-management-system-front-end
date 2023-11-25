<!-- 这是一个Vue模板，它是定义Vue应用的一部分，用于结构化HTML代码 -->  
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<!-- 这是用于定义样式的部分，lang='scss'表示使用的是SCSS预处理器语言 -->  
<style lang="scss">
  html,
  body,
  #app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

 /*#app 是一个 CSS 选择器，它选择了 id 为 app 的 HTML 元素。然后，在大括号 {} 中定义了这个元素的样式*/  
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

 /*使用了 @import 指令来引入一个外部的 CSS 文件*/ 
  @import "./assets/css/style.css";

  [class^="el-icon-fa"],
  [class*=" el-icon-fa"] {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome !important;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @import "../node_modules/font-awesome/css/font-awesome.css";

  $fa-css-prefix: el-icon-fa;
</style>
