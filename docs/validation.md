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
