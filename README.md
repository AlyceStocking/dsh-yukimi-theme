# dsh-yukimi-theme

一个给 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)（`dsh`）Web 界面用的**佐城雪美（佐城雪美 / Yukimi Sajo）主题**。

把页面配色、背景、侧栏和几个可交互的小部件，换成《偶像大师 灰姑娘女孩》角色佐城雪美的风格。

## 功能

- **背景卡面**：背景插画清晰展示；仅消息和工具内容使用半透明阅读底板，保留浅色/深色适配。
- **浮动小人**：始终显示，不收进侧栏或弹窗；可拖动，单击翻转和台词，双击换装，长按打开小人/背景选择面板。
- **键盘互动**：聚焦小人后 Enter/空格互动，菜单键打开设置，Escape 关闭设置。
- **浮动卡片和签名**：保留原来的页面浮动展示；Mobamas 卡片默认关闭，可长按小人在选择面板中开启；开启后可拖动、自动轮播和点击切换。
- **按窗口空间自动隐藏**：宽度小于 1100px 或高度小于 640px 时，只自动隐藏 Mobamas 卡片和签名；恢复大小后按原显示偏好恢复。小人只缩小，不隐藏、不重置服装。
- **保持聊天宽度**：不再有装饰侧栏，不为组件预留额外列宽。
- **边界约束**：小人拖动和窗口缩放后保持在屏幕内，设置面板限制在视口内。

阈值位于客户端的媒体查询及匹配的 CSS 中。显示偏好保留在当前页面，刷新后恢复默认值。

## 安装

1. 把本仓库（`@local/dsh-yukimi-theme` 这个包目录）放到你的 `$DSH_HOME/profiles/node_modules/@local/` 下：

   ```
   $DSH_HOME/profiles/node_modules/@local/dsh-yukimi-theme/
   ├── package.json
   └── lib/
       ├── index.js
       └── client.js
   ```

2. 编辑 `$DSH_HOME/profiles/web/cordis.patch.yml`，加入：

   ```yaml
   - insert:
       - id: yukimi-theme
         name: '@local/dsh-yukimi-theme'
   ```

   （如果这个文件目前是空的 `[]`，把它改成上面这样，保留注释即可。）

3. 重启：

   ```bash
   dsh web
   ```

   或 `dsh --profile web`。

> `DSH_HOME` 在 Windows 上默认是 `C:\Users\<你>\.dsh`。

## 开发与测试

无需构建或安装测试依赖，直接编辑 `lib/client.js`。

`npm run check` 检查入口语法；`npm test` 检查阅读对比度、卸载清理、浮动小人常驻及卡片/签名的响应式切换。

当前安装方式使用的是文件副本。修改源码后，将 `lib/client.js` 同步到上面安装目录，再刷新 Web 页面；若未加载新版本，重启 `dsh web`。每阶段的浏览器实测及官方参考见 [验证记录](docs/validation.md)。

## 版权说明

- **代码**：本仓库代码以 [MIT License](LICENSE) 开源，版权归作者（AlyceStocking）。
- **素材**：佐城雪美这一角色、所有立绘 / 卡面 / 纸片小人 / 签名等美术素材，版权均归 **Bandai Namco Entertainment / Cygames**（《偶像大师 灰姑娘女孩》）所有。本主题**只在线引用** [imascg wiki](https://wiki.biligame.com/imascg) 镜像的图片 URL，**不打包、不分发**任何官方素材文件。
- 本项目仅供个人学习与同好交流，请勿用于商业用途。

## 致谢

- 角色与素材来源：[imascg wiki（萌娘百科镜像）](https://wiki.biligame.com/imascg/佐城雪美)
- 主题配色参考原 wiki 页面中标注的佐城雪美印象色 `#171C8F`。
