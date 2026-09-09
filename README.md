# dsh-yukimi-theme

一个给 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)（`dsh`）Web 界面用的**佐城雪美（佐城雪美 / Yukimi Sajo）主题**。

把页面配色、背景、侧栏和几个可交互的小部件，换成《偶像大师 灰姑娘女孩》角色佐城雪美的风格。

## 功能

- **深蓝配色**：品牌色为雪美的印象色 `#171C8F`，支持浅色、深色和跟随系统。
- **稳定阅读底板**：淡化背景插画，正文、工具输出与代码使用高对比底色，不再依赖文字描边。
- **独立装饰栏**：卡片、小人和签名位于右侧预留的 248px 空间，不覆盖聊天、输入框或工具详情。
- **响应式显示**：窗口至少 1280×720 时展示装饰栏；更窄或更矮时自动收起，通过侧栏底部“雪”按钮打开装饰弹窗，支持 Escape 关闭。
- **一键隐藏**：侧栏底部的“显示／隐藏雪美装饰”按钮控制整栏；同一页面中记住桌面的显示选择。
- **小人互动**：点击翻转并显示台词，“换一套衣服”按钮循环换装；支持键盘操作，尊重系统减少动态效果的偏好。
- **Mobamas 卡片**：自动轮播、点击切换；隐藏装饰时停止轮播。
- **外观与装饰**：直接展开设置，分别显示／隐藏卡片、小人和签名，选择背景卡面。

为保证内容不被遮挡，挂件不再支持拖动到页面任意位置，长按、双击入口改成可见按钮。装饰偏好仅保留在当前页面，刷新后使用默认值。

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

`npm run check` 检查入口语法；`npm test` 检查阅读对比度、卸载清理、插槽共享状态和响应式切换。

当前安装方式使用的是文件副本。修改源码后，将 `lib/client.js` 同步到上面安装目录，再刷新 Web 页面；若未加载新版本，重启 `dsh web`。每阶段的浏览器实测及官方参考见 [验证记录](docs/validation.md)。

## 版权说明

- **代码**：本仓库代码以 [MIT License](LICENSE) 开源，版权归作者（AlyceStocking）。
- **素材**：佐城雪美这一角色、所有立绘 / 卡面 / 纸片小人 / 签名等美术素材，版权均归 **Bandai Namco Entertainment / Cygames**（《偶像大师 灰姑娘女孩》）所有。本主题**只在线引用** [imascg wiki](https://wiki.biligame.com/imascg) 镜像的图片 URL，**不打包、不分发**任何官方素材文件。
- 本项目仅供个人学习与同好交流，请勿用于商业用途。

## 致谢

- 角色与素材来源：[imascg wiki（萌娘百科镜像）](https://wiki.biligame.com/imascg/佐城雪美)
- 主题配色参考原 wiki 页面中标注的佐城雪美印象色 `#171C8F`。
