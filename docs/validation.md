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

## 阶段 3：响应式收起（2026-09-10）
- 1280×720 及以上使用装饰栏；较小窗口自动收起，用户主动打开时使用原生 dialog。
- 原生 modal 负责焦点约束与背景交互隔离；Escape/收起关闭后返回侧栏装饰按钮；装饰内容独立滚动。
- 宽屏选择在尺寸变化中保留；移除遗留的宿主编译类名媒体查询，添加 reduced-motion 样式。
- 浏览器实测矩阵：
  - 1440×900：主区与装饰栏边界同为 1192px，侧栏展开后不重叠。
  - 1280×720：主区与装饰栏边界同为 1032px。
  - 1279×720：自动收起，主区恢复全宽。
  - 1440×600：自动收起，主区恢复全宽。
  - 390×844：装饰默认隐藏；弹窗保持在视口内；Escape 关闭并恢复焦点。
  - 以上尺寸均无 document 横向溢出。
- 已恢复原始约 950×858 视口，对话页仍可继续使用；浏览器 error 日志为空。
- npm run check、npm test（4/4）、git diff --check 通过；无需新依赖。
- 同步更新中英文使用说明及展示页文案。

## 范围
修复主题的阅读对比度、装饰遮挡和窄窗口挤占。DSH 原生的工具状态一致性、折叠摘要及轨迹导航逻辑不在主题插件中修改。

## 用户反馈修正 A：恢复背景（2026-09-10）
- 全页底色透明度由 0.96 降为 0.08，阅读底色只作用于可见的消息/工具内容。
- 使用 data-chat-flow-kind 等语义标记；折叠行无新增 padding 和背景，不生成空白条。
- 浏览器截图验证背景清晰可见，消息可读；5/5 单元测试和语法检查通过。
- 此修正替代阶段 1 的整页底板方案。
