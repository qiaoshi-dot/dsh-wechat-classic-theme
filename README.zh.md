# 微信经典绿 · WeChat Classic

DeepSeek Harness Desktop 的微信风格浅色主题：深色图标栏、灰色会话列表、浅绿色用户气泡和绿色发送按钮。

A WeChat-inspired light theme for DeepSeek Harness Desktop, with a dark icon rail, grey conversation list, green user bubbles and compact assistant replies.

## 功能

- 默认 72px 图标栏和 288px 会话列表，保留原生按钮、菜单、搜索和侧栏拖动。
- 淡绿会话选中态；兼容已有助手筛选栏，标题与时间对齐。
- 浅灰助手卡片，收紧段落间距；代码和表格保留各自滚动，尊重用户字号和阅读宽度设置。
- 绿色发送按钮与对话标签，输入框保留原生编辑和附件功能。
- 如已安装费用插件，完整费用卡放在会话列表底部，保留原有橙绿峰谷条、状态提示和警示样式。
- 如已安装在场感动效插件，已有动效开关移至桌面图标栏，原开关状态与操作由该插件维护。
- 设置中可随时恢复原主题；选择会在本地保存。

## 安装

仓库包含预构建的 `lib/`，安装不需要执行构建脚本。使用 **DSH Desktop 自带终端**：

```powershell
dsh plugin --profile desktop add "https://github.com/qiaoshi-dot/dsh-wechat-classic-theme/releases/download/v1.1.4/dsh-wechat-classic-theme.tgz"
```

安装后，在 **设置 → 顶部“重启”下拉菜单 → 重新加载界面** 刷新客户端。
在 **设置 → 通用 → 微信经典绿** 启用主题或恢复原主题。首次加载默认启用。

移除：

```powershell
dsh plugin --profile desktop remove dsh-wechat-classic-theme
```

桌面终端使用应用管理的 DSH / pnpm 环境。全局 CLI 不应直接修改 Electron 管理的 desktop 配置。

## 兼容性与可选插件

已在 Windows 上的 **DSH Desktop 2.0.17 / Harness UI 0.2.0-rc.2** 验证。兼容模式支持上游侧栏布局；其他桌面壳和后续版本尚未验证。

主题本身不安装或启用费用、助手筛选、动效等插件，只为现有组件补充样式。对应样式已适配 `dsh-cost-meter 1.8.0` 和 `dsh-im-companion 0.1.17`；没有这些插件时，基础主题仍可使用。

首次启用时，将展开的侧栏调整为默认 360px。关闭主题时，若侧栏仍处于主题默认宽度且展开，则恢复之前的宽度；用户拖动过的宽度与已经折叠的状态会保留。宽窗口收起后再展开会记住收起前的宽度，窄窗口沿用原生行为。

配色通过官方主题接口注册，CSS 仅在主题启用时生效。少量局部类名对应已测试的 UI 版本，应用升级后需复核消息、工具卡片与输入区外观。

主题没有额外网络请求、后台任务或更新检查。源码和构建产物均可阅读。

## 开发

```sh
node build.mjs
node --check lib/client.js
npm pack --ignore-scripts
```

- `src/theme-tokens.json`：主题颜色与字体 token。
- `src/theme.css`：消息、工具卡片、输入区与底部统计。
- `src/sidebar.css`：图标栏、会话列表与费用卡布局。
- `src/client.js`：主题注册、设置切换、持久化与生命周期清理。
- `lib/`：可直接安装的预构建模块。

## 版本

`1.1.4` 修复助手筛选栏和工具按钮出现原生方框、收起按钮换行的问题，保留键盘焦点提示。费用卡沿用之前的橙绿峰谷条与提示样式。

`1.1.3` 保留筛选栏、文本间距、底部统计和动效开关位置的打磨，恢复费用卡之前的橙绿峰谷条与提示样式。

## License

MIT.
