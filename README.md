##### 待处理事项

- 路由封装提取 finished
- fetch 封装完善 finished
- 页面跳转后滚动条位置被记忆问题 finished -问题原因： 实际上是因为 mapbox 的文本框会自动聚焦导致的
- 工具目录路径别名配置 finished
- 头像上传展示优化问题 finished
- 从github上的图片请求会花费很长的时间
- GPT: 输出展示处理，一个一个字出现
- 适配移动端端展示

##### git 提交规范

- feat: 新功能
- fix: 修复 bug
- chore: 构建过程或辅助工具的变动
- docs: 文档的变动
- style: 代码风格的变动（不影响代码的运行）
- refactor: 代码重构
- test: 添加或修改测试

##### 引用问题

- react 中 webpack 做了以下处理，导致无法访问 src 外的资源

```
webpack.config.js [ModuleScopePlugin]
//禁止用户从src/(或node_modules/)外部导入文件。
//这通常会引起混淆，因为我们只使用babel处理src/中的文件。
//为了解决这个问题，我们阻止你从src/导入文件——如果你愿意的话，
//请将这些文件链接到node_modules/中，然后让模块解析生效。
//确保源文件已编译，因为它们不会以任何方式被处理。

```

- 解决方式

```
需要修改webpack.config.js文件，注释掉ModuleScopePlugin命令，这样就可以允许导入src/目录之外的文件。
```

- 结果

```
未进行处理，保持访问的资源只能在src下
```