# 花哪公开发布页合同

状态：Android 已发布；iPhone App Store 上架中

`https://products.holic.work/huana/` 是「花哪」iPhone 与 Android
版本的正式公开入口。App Store 元数据、GitHub Release 和国内镜像必须从这里形成可核对的单一发布面。

## 正式名称与定位

- 产品名：花哪
- 一句话：说一句或写一句，就能记下一笔账。
- 平台：iPhone 与 Android
- 数据边界：账本保存在本机；语音识别在本机完成；AI 仅处理用户主动提交的一次记录。

## 稳定 URL

- 产品页：`/huana/`
- 产品支持：`/huana/support/`
- 产品隐私政策：`/huana/privacy/`
- App Store：`https://apps.apple.com/app/id6803532419`
- Android 国内镜像：`/huana/download/huana-1.0.0.apk`
- Android 原始发布源：GitHub Release `willkan/ho-bookkeeping` 的 `v1.0.0`
- Android 安装包：仅支持 64 位 ARM（`arm64-v8a`），SHA-256 为
  `322c40d5e2802e9f95adc2ab97de745788fedb4e9664cb6ef1e0d8e2a8faa83e`

App Store 链接使用 App Store Connect 生成的真实 Apple ID `6803532419`。

## 验收用例

1. 产品页使用「花哪」正式名称，不再展示旧工作名「清简账本」。
2. 产品页同时提供真实 App Store 入口、Android 国内镜像和 GitHub 原始发布源。
3. Android 两个下载源指向同一版本，并公开 SHA-256 校验值。
4. 支持页提供实际受监控的联系邮箱和基本排障说明。
5. 隐私政策准确披露本地账本、设备端语音、BYOK、限期托管 AI 内测、导出与删除方式。
6. Docker 生产镜像包含官网页面与经校验的 APK 镜像；GitHub Pages 页面仍链接到生产镜像。
7. 所有页面无需登录即可访问，不包含占位 URL、测试包或第三方 GitHub 加速代理。
