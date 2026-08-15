# dsh-yukimi-theme

一个给 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)（`dsh`）Web 界面用的**佐城雪美（佐城雪美 / Yukimi Sajo）主题**。

把页面配色、背景、侧栏和几个可交互的小部件，换成《偶像大师 灰姑娘女孩》角色佐城雪美的风格。

## 功能

- **深蓝主题色**：以佐城雪美的印象色 `#171C8F` 为品牌色的蓝调配色（亮 / 暗自适应）。
- **卡面背景**：角色 SSR 觉醒立绘铺满页面背景，半透明透出。
- **磨砂玻璃侧栏**：淡蓝色半透明 + 毛玻璃模糊。
- **桌面宠物纸片小人**：可拖动，支持
  - 单击 → 翻转（本套 4 帧循环）+ 台词气泡
  - 双击 → 半圈翻转换下一套衣服
  - 长按 → 弹出切换面板（选择小人 / 切换背景卡面）
  - 页面活跃时随机自动触发一次"单击"效果
- **Mobamas 卡片轮播**：自动循环播放、点击跳下一张、可拖动。
- **签名铭牌**：右下角角色签名。
- **文字可读性优化**：助手文字描边 + 用户气泡半透明。

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

## 版权说明

- **代码**：本仓库代码以 [MIT License](LICENSE) 开源，版权归作者（AlyceStocking）。
- **素材**：佐城雪美这一角色、所有立绘 / 卡面 / 纸片小人 / 签名等美术素材，版权均归 **Bandai Namco Entertainment / Cygames**（《偶像大师 灰姑娘女孩》）所有。本主题**只在线引用** [imascg wiki](https://wiki.biligame.com/imascg) 镜像的图片 URL，**不打包、不分发**任何官方素材文件。
- 本项目仅供个人学习与同好交流，请勿用于商业用途。

## 致谢

- 角色与素材来源：[imascg wiki（萌娘百科镜像）](https://wiki.biligame.com/imascg/佐城雪美)
- 主题配色参考原 wiki 页面中标注的佐城雪美印象色 `#171C8F`。
