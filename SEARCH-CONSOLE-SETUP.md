# Search Console / Bing 接入记录

检查日期：2026-10-11（Asia/Shanghai）。以下是当时后台和实时检查的结果，不代表将来的收录状态。

## 已完成

- Google Search Console：新增并验证 `https://psdworkbench.com/` URL-prefix 资源，使用 HTML meta 标记验证。该资源覆盖 HTTPS 主域名下的页面。
- Bing Webmaster Tools：手动添加并通过 `BingSiteAuth.xml` 验证此站。
- 两边均提交 `https://psdworkbench.com/sitemap.xml`，其中含 6 个规范网址。
- 验证文件和 Google meta 已部署到正式站；无需更改 DNS 或其他网站的配置。
- Bing sitemap 状态 **Success**，已发现 6 个网址，错误 0、警告 0。
- Bing 首页索引请求成功（后台显示 **Indexing requested**）。

## 当前收录和抓取状态

| 检查项 | 结果 |
|---|---|
| Google 首页索引 | 尚未收录，Google 无法识别此网址 |
| Google 首页实时检查 | 17:49 通过：网址可编入 Google 索引 |
| Google sitemap 实时检查 | 17:45 通过：允许抓取，网页抓取成功 |
| Google sitemap 报告 | 已提交并重新提交一次，报告仍显示“无法抓取”，发现 0；不能宣称已成功处理 |
| Google 首页索引请求 | 两次返回“提交您的索引编制请求时出现了问题，请稍后重试”；不能宣称请求已成功 |
| Bing 首页索引 | Not discovered，尚未收录 |
| Bing 首页实时检查 | 17:48 通过：URL can be indexed by Bing；No SEO/GEO issues found |

正式 sitemap HTTP 200，类型 application/xml，XML 校验通过，包含 6 个网址；Google 实时抓取成功与 sitemap 报告失败存在差异，报告未给出具体失败原因。目前没有证据支持随意修改有效的 sitemap 或 DNS。后续需要复查 Google sitemap 报告并重试首页索引请求；收录由搜索引擎决定。

## 保留配置

- 保留 `generate.mjs` 中的 `google-site-verification` meta；生成的所有页面均包含该标记。
- 保留 `public/googlef02093a8f4d704e0.html`、`public/BingSiteAuth.xml`，以后部署不得删除。
- 当前生产部署：`dpl_89iZvfj7g8knDP3YAktfTEkeKvvZ`，Ready；验证代码提交：`1a32316`。
- 当前账号可管理多个独立网站。本次仅添加 psdworkbench.com；没有修改其他站点、授权 Bing 读取其他 Google 资源或操作其他站点仓库。

## 方法和证据

- 哥飞 MCP：`load_guide`，专题 `gsc`，实际扣除 2 积分；请求号 `req_ad71fca4017baccf`。
- 本地截图保存在被 Git 忽略的 `.vercel/`：`gsc-sitemap-submitted.png`、`gsc-sitemap-live.png`、`gsc-home-live.png`、`gsc-index-request-error.png`、`bing-sitemap-success.png`、`bing-live-check.png`。
- [Google 多资源说明](https://support.google.com/webmasters/answer/34592?hl=en)
- [Google sitemap 报告说明](https://support.google.com/webmasters/answer/7451001?hl=en)
- [Bing 添加和验证网站说明](https://www2.bing.com/webmasters/help/add-and-verify-site-12184f8b)

