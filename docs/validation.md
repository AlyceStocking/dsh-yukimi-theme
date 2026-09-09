# 分阶段验证记录

## 阶段 1：阅读底板（2026-09-10）
- 使用官方 theme.overrideTokens，并显式依赖 theme、slots、timer。
- 移除编译类名透明背景、文字描边和全局透明代码块覆盖。
- 正文、次级文字在浅色/深色及背景图黑白极值下，对比度均 >= 4.5:1。
- node --check lib/client.js、node --test tests/theme.test.mjs（2/2）、git diff --check 通过。
- 本机 DSH 0.1.2-rc.1 实测：浅色/深色对话、内联代码和工具汇总可读；外观恢复“跟随系统”。
- 挂件遮挡留到阶段 2。

## 官方资料
- https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/subsystems/slots.md
- https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/ui-theme/README.md
- https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/web-styling.md
- https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/develop/basic/publish.md
- 兼容性以本机已安装包的类型声明为准；当前 master 的 rightbar 插槽尚不存在于本机版本。

## 阶段 2：装饰避让（2026-09-10）
- 三个自由浮动挂件合并为独立 248px 装饰栏，使用 shell.overlay 和 sidebar.footer.action 两个 additive 插槽。
- 通过稳定的 #root 挂载容器预留宽度；无宿主编译类名依赖；不替换原生对话或 details 插槽。
- 添加一键收起/显示，外观面板可直接展开；小人换装、翻转和背景选择保留，取消自由拖动。
- 实测 950px 窗口：rootRight = dockLeft = 702.4px，互不覆盖；隐藏后主区恢复 950.4px；无页面横向溢出。
- 实测小人互动、换装、外观展开及工具轨迹详情；参数/结果/计时区域未被装饰覆盖。
- node --check、3/3 单元测试、git diff --check 通过。
- 窄窗口自动收起留到阶段 3。
