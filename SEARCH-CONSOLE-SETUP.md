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


## 2026-10-12 17:30 定时复查（北京时间）

本次检查约 17:30–17:40；以下是实际索引记录，不是实时测试的可索引结论。

| 规范网址路径 | Google 实际索引 | Bing 实际索引 |
|---|---|---|
| `/` | Submitted and indexed / PASS，已收录 | Discovered but not crawled，未收录 |
| `/psd-to-png/` | URL is unknown to Google，未收录 | Discovered but not crawled，未收录 |
| `/photocraft-guide/` | URL is unknown to Google，未收录 | Discovered but not crawled，未收录 |
| `/privacy/` | URL is unknown to Google，未收录 | Discovered but not crawled，未收录 |
| `/terms/` | URL is unknown to Google，未收录 | Discovered but not crawled，未收录 |
| `/licenses/` | URL is unknown to Google，未收录 | Discovered but not crawled，未收录 |

- Google 首页最近实际抓取：2026-10-11 18:01:12 北京时间（API `2026-10-11T10:01:12Z`），移动代理，抓取 SUCCESSFUL，robots ALLOWED，INDEXING_ALLOWED。Google 选择与用户声明的 canonical 均为 `https://psdworkbench.com/`。
- Google 其余 5 页没有最近抓取时间，索引记录的用户声明/Google 选择 canonical 均为 null。不能用正式网页中的 canonical 替代搜索引擎未报告的字段。
- Bing 的 6 页均显示发现日期 11 Oct 2026，没有实际抓取时间，也未提供搜索引擎选择的 canonical。后台只给出泛化说明，没有具体 HTTP/robots/内容拒绝错误；不能据此推断内容违规。
- 相比基线：Google 首页由未收录变为已收录；Bing 首页由 Not discovered 变为已发现但未抓取。

### Sitemap 和本次提交

- Bing：Success，发现 6，错误 0、警告 0；Last submit / Last crawl 均为 10/11/2026，列表未显示具体时分。无需重复提交成功的 Bing sitemap。
- Google 页面：类型未知，无法抓取，发现 0；列表上次读取时间为空，详情页显示 2026/10/11。“无法读取此站点地图”是唯一错误说明，没有具体响应码或解析错误。
- Google API（重新提交前）：`isPending: true`，errors/warnings 均 0，无 lastDownloaded、type、contents 字段；lastSubmitted 为 `2026-10-11T09:49:55.816Z`。该 pending/0 errors 不等于成功，保留与页面显示差异。
- 今日 17:36:13 的 Google sitemap 实时测试：允许抓取、网页抓取成功、允许索引。此结果只确认 Google 检查工具当前能获取 XML，不代表 sitemap 后台已处理成功，也不需要把 XML 当内容页申请索引。
- Google 首页按授权重试 1 次索引请求，仍显示“提交您的索引编制请求时出现了问题。请稍后重试。”未出现验证码挑战，未绕过任何保护，也未扩展 GSC Wizard 的只读权限。本次请求不能记为成功；首页现有已收录状态独立成立。
- 经检查后，Google sitemap 今日重新提交 1 次，弹窗确认“已成功提交站点地图”，提交日期变为 2026年10月12日；列表仍显示无法抓取、发现 0。只确认提交受理，尚未确认处理成功。
- Bing 首页 17:38 实时测试：URL can be indexed by Bing，No SEO/GEO issues found；与实际未收录状态明确分开。

### 正式站排查与部署结论

- 用 Googlebot User-Agent 请求六页：均直接 HTTP 200、HTML，无 X-Robots-Tag 限制，robots meta 均 index/follow，页面 canonical 均指向自身 HTTPS 主域名路径；Google 验证 meta 保留。
- 正式 sitemap 直接 HTTP 200、application/xml，XML 解析成功，准确包含上述六个网址。robots.txt 200、Allow: /，Sitemap 指向正式地址。
- HTTP 和 www sitemap 均以 308 跳至 HTTPS 主域名 sitemap；规范 sitemap 本身不重定向。
- DNS 解析得到 216.198.79.1、64.29.17.1；HTTPS 可访问正式站，没有发现停车页、TLS、DNS 或权限阻断证据。
- BingSiteAuth.xml 200。备用 Google HTML 文件保留，受既有 cleanUrls/trailingSlash 配置影响，`.html` 308 到无扩展名带斜杠地址，后者 200、53 字节。当前所有权使用已验证的 meta 方法；该备用文件重定向不构成 sitemap 抓取错误的证据。
- Vercel inspect 确认既有生产部署 `dpl_J3JSvhWcMvKHDyqhHV9hAjc2tW2L` 为 Ready，aliases 含 psdworkbench.com、www.psdworkbench.com。
- 未找到可证实的站点故障，未为报告延迟猜测修改 XML、DNS 或网站代码，因此本次没有新部署；保留现有生产版本和 GA4/Clarity 配置。后续等待搜索引擎抓取处理，未创建持续轮询。

### 工具、费用和证据

复用已有哥飞 gsc 指南（原请求 `req_ad71fca4017baccf`）；本次没有新哥飞调用或付费查询，新增积分 0。使用 GSC Wizard `list_sites`、`list_sitemaps`、`get_inspection_quota`、6 次 `inspect_url`，以及 Google/Bing 已登录后台、公开 HTTP/DNS 请求和 Vercel inspect。检查前 GSC Wizard 报告额度剩余 2000；6 次检查均返回结果。工具没有返回请求号或扣费字段。

本地忽略目录 `.vercel/` 保存截图：`gsc-request-oct12.png`、`gsc-sitemap-live-oct12.png`、`gsc-sitemap-submit-oct12.png`、`gsc-home-indexed-oct12.png`、`bing-home-live-oct12.png`；Bing 检查快照 `bing-inspections-oct12.json`。只读原始 Google 检查结果另存 `gsc-inspections-oct12.json`。未操作其他站点。
