# dsh-yukimi-theme

一个给 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)（`dsh`）Web 界面和 Windows 桌面版用的**佐城雪美（佐城雪美 / Yukimi Sajo）主题**。

把页面配色、背景、侧栏和几个可交互的小部件，换成《偶像大师 灰姑娘女孩》角色佐城雪美的风格。

## 功能

- **背景卡面**：背景插画清晰展示；仅消息和工具内容使用半透明阅读底板，保留浅色/深色适配。
- **聊天阅读与输入**：历史正文和代码块使用轻透底板；输入卡片独立遮挡滚动内容，聚焦时显示柔和蓝紫光晕。
- **浮动小人**：始终显示，不收进侧栏或弹窗；可拖动，单击翻转和台词，双击换装，长按打开小人/背景选择面板。
- **键盘互动**：聚焦小人后 Enter/空格互动，菜单键打开设置，Escape 关闭设置。
- **浮动卡片和签名**：保留原来的页面浮动展示；Mobamas 卡片默认关闭，可长按小人在选择面板中开启；开启后可拖动、自动轮播和点击切换。
- **按窗口空间自动隐藏**：宽度小于 1100px 或高度小于 640px 时，只自动隐藏 Mobamas 卡片和签名；恢复大小后按原显示偏好恢复。小人只缩小，不隐藏、不重置服装。
- **保持聊天宽度**：不再有装饰侧栏，不为组件预留额外列宽。
- **边界约束**：小人拖动和窗口缩放后保持在屏幕内，设置面板限制在视口内。

阈值位于客户端的媒体查询及匹配的 CSS 中。Web profile 的显示偏好保留在当前页面，刷新后恢复默认值；Windows 桌宠的偏好保存到本地，并同步到桌面版页面。

## 安装

### Windows 桌宠（1.2.0）

1.2.0 整合桌宠启动、提醒置顶、多显示器拖动、服装预加载及输入区域样式修复。npm 完整包包含 Windows x64 Electron 辅助运行时，安装包较大；GitHub 源码不包含该运行时，需按后面的流程构建。

```powershell
# npm 发布完成后使用；由 DSH Desktop 自带的 dsh 命令安装
dsh plugin --profile desktop add dsh-yukimi-theme@1.2.0
```

安装后启用主题，检查插件详情中的内部开关，再完全退出并重启 Desktop。其他系统可使用页面主题，独立桌宠目前仅支持 Windows x64。


桌宠由桌面 profile 的插件自动启动，使用独立透明置顶窗口。主窗口最小化或隐藏后继续显示；停用插件或退出 DSH 时关闭。启动成功后隐藏窗口内的小人，保留背景、签名和 Mobamas；辅助程序启动失败时保留窗口内的小人。

- 监听所有正在运行或保留等待状态的主会话，子代理不单独弹提醒。
- 正常完成、失败、取消按本轮结束分别提示；正常结束不表示整个项目已完成。
- 每个新提醒播放一次原单击翻转效果，使用模仿雪美语气的原创预设文案，没有声音。
- 会话提醒出现时自动将桌宠和气泡提升到其他窗口之上；气泡保留期间维护置顶，消失后恢复平时的层级，不抢键盘焦点。
- 询问和审批气泡直到相应请求处理完才消失；超时后仍可回答的问题继续保留。完成气泡显示约 5 秒，有等待气泡时排队，不重复播放动作。
- 点击气泡唤起 Harness 并通过 `uiWorkspace.openSession()` 定位对应会话；点击不会代替你作出回答或授权。
- 拖动可到达各显示器的四边和四角，按小人本身而非透明窗口计算边界；气泡和设置自动向有空间的一侧展开。记住小人的屏幕位置，双击换装，长按打开服装和主题设置；透明空白区域允许鼠标穿透。
- 启动后预加载全部小人服装，优先准备当前服装和下一套；换装前等待图片解码完成，加载慢或失败时保留原图，避免首次双击出现空白。

从本地源码构建，并通过 DSH 官方插件管理持久安装桌宠版：

```powershell
npm install
npm run build:client
npm run check
npm test
npm run desktop:package
# 在「插件」页先关闭 dsh-yukimi-theme，避免运行中的文件被占用。
npm run desktop:install
```

安装脚本会验证完整 Electron 运行时，生成包含 `lib/`、`desktop/` 及运行时的 `.tgz`，按内容哈希保存到 `$DSH_HOME/yukimi-desktop/packages/`，再调用 **Desktop 自带 CLI** 更新该 profile 的包依赖。请保留这个归档；后续依赖重装会从同一完整包恢复，而不是从 GitHub 默认分支恢复旧版。仅生成归档可运行 `npm run desktop:install -- --bundle-only`。整个过程不修改 Harness 程序文件。

CLI 更新同名包会保留包开关和内部条目状态，安装成功不代表条目已启用。安装后，在「插件」页开启包，并进入详情确认内部 `yukimi-theme` 条目也已启用。包总开关和内部条目开关相互独立；若内部条目被停用，反复切换包总开关不会解除它。随后在会话空闲时彻底退出并重新启动 DSH 桌面应用及其 Host 进程；Host 会缓存模块，关闭主窗口、切换插件开关或刷新页面可能仍使用旧版入口。

`desktop:sync` 保留为临时开发同步：停用插件后执行会备份并覆盖已安装文件，但不更新 profile 的依赖来源，因此后续包管理器重装可能覆盖这些修改。正式安装优先使用上面的 `desktop:install`。

源码安装不包含 Git 忽略的 Electron 二进制；需先打包，或使用包含 `desktop/runtime/win32-x64/` 的完整插件包。`npm run desktop:preview` 是不调用模型的本地合成状态预览。手动回滚可在停用插件后运行 `npm run desktop:sync -- --restore-backup <备份目录>`，随后同样彻底退出并重启 DSH，以加载恢复后的 Host 模块。

桌宠位置、服装及提醒去重标识保存在 `$DSH_HOME/yukimi-desktop/preferences.json`。插件与辅助程序通过带随机握手的本机 Windows 命名管道通信；页面使用 DSH 自带的认证 Connection RPC，没有额外网络监听端口。状态只包含会话标识、标题和预设文字，不向桌宠转发聊天正文。预览使用独立的 `build/preview-data/` 设置，不改变正式桌宠偏好。

### Web 主题

用 dsh 自带的插件管理命令安装（包装好后会出现在「设置 → 插件」管理界面里）：

```bash
dsh plugin --profile web add github:AlyceStocking/dsh-yukimi-theme
```

停止已运行的 Web 服务，再启动：

```bash
dsh web
```

或 `dsh --profile web`。

> 不要用手动复制到 `node_modules` + 编辑 `cordis.patch.yml` 的方式安装：那样插件能运行，但因为不是 profile 的 pnpm 依赖，插件管理 UI 不会列出它，也无法在 UI 里启停或移除。
> `DSH_HOME` 在 Windows 上默认是 `C:\Users\<你>\.dsh`。

## 开发与测试

仅迭代 Web profile 的页面样式时，可直接编辑 `lib/client.js`。共享素材在 `lib/assets.js`，编辑后运行 `npm run build:client` 同步客户端的生成区块。

`npm run check` 检查各入口语法及素材同步；`npm test` 检查阅读对比度、卸载清理、桌宠提醒队列、状态桥接、会话导航、偏好同步和窗口边界。

已安装的 Web profile 使用文件副本；仅更新浏览器样式和素材时，可将生成后的 `lib/client.js` 同步到该 profile 的插件目录，再刷新浏览器页面；若仍加载旧版客户端，停止并重启 `dsh web` 服务。

Windows 桌宠更新需按上面的「Windows 桌宠」流程重新构建、打包并同步完整插件。只复制 `lib/client.js` 不会更新 Host 状态桥接或辅助程序；同步后需要彻底退出并重启桌面应用及其 Host 进程。Web 与 Windows 桌宠的验证范围、结果及官方参考见 [验证记录](docs/validation.md)。

## 版权说明

- **代码**：本仓库代码以 [MIT License](LICENSE) 开源，版权归作者（AlyceStocking）。
- **素材**：佐城雪美这一角色、所有立绘 / 卡面 / 纸片小人 / 签名等美术素材，版权均归 **Bandai Namco Entertainment / Cygames**（《偶像大师 灰姑娘女孩》）所有。本主题**只在线引用** [imascg wiki](https://wiki.biligame.com/imascg) 镜像的图片 URL，**不打包、不分发**任何官方素材文件。
- 本项目仅供个人学习与同好交流，请勿用于商业用途。

## 致谢

- 角色与素材来源：[imascg wiki（萌娘百科镜像）](https://wiki.biligame.com/imascg/佐城雪美)
- 主题配色参考原 wiki 页面中标注的佐城雪美印象色 `#171C8F`。

## 分发与收录

维护者须先运行 `npm run desktop:package`、`npm run check`、`npm test`，再打包发布。npm 包必须包含完整的 `desktop/runtime/win32-x64/`，不能把只有 GitHub 源码的包当成完整桌宠版发布。`dsh-plugin` topic 用于 dshfind 自动收录，目录刷新前搜索结果可能尚未更新。
