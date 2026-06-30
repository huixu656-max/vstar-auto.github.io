# 全站文字与图片逐项修改清单

用途：任何页面上看到的文字或图片，都可以从这里找到修改入口。

## 修改优先级

1. 日常改图文：先用 `admin.html`
2. 车型资料：改 `assets/js/vehicle-data.js`，或用 `admin.html > 车型资料`
3. 中文 / 阿拉伯语切换文字：改 `assets/js/main.js` 的 `languageCopy`
4. 静态页面文字：改对应 `.html`
5. 图片下拉库：改 `assets/js/image-library.js`
6. 样式、间距、手机版：改 `assets/css/styles.css`

## 后台页面图文分组

现在 `admin.html > 页面图文` 已经给每个二级页面建立了入口：

- 车型展示页：`vehicles.html`
- 出口服务页：`services.html`
- 港口物流页：`port-logistics.html`
- 售后服务页：`after-sales.html`
- 零件支持页：`parts-support.html`
- 保修协调页：`warranty-coordination.html`
- 技术指导页：`technical-guidance.html`
- 关于我们页：`about.html`
- 新闻活动页：`news.html`
- 联系方式页：`contact.html`
- 车型详情模板：`vehicle-detail.html`

车型本身的重复内容不在页面图文里分散维护，统一在 `admin.html > 车型资料` 修改。

## 首页 index.html

文字修改：
- 首页 Banner 小标题、主标题、副标题：`admin.html > 页面图文 > 首页`，源码字段在 `assets/js/content-overrides.js`
- 首页精选车型卡片：直接改 `admin.html > 页面图文 > 首页 > 首页车型展示卡片`。这里可以改图片、分类、标题、简介、详情链接和按钮文字。
- 首页活动卡片：`admin.html > 页面图文 > 首页 > 首页活动卡片`
- 首页按钮文字、资质卡片文字、港口优势、车型区、服务优势、活动区、CTA：`index.html`
- 首页中文/阿拉伯语显示：`assets/js/main.js` 的 `languageCopy`

图片修改：
- 首页 Banner 轮播列表：`admin.html > 页面图文 > 首页 > 首页 Banner 轮播图片列表`
- 首页 Banner 轮播源码默认值：`assets/js/content-overrides.js` 的 `home.hero.slides`
- 当前首页黑色车头图：`https://images.pexels.com/photos/3457780/pexels-photo-3457780.jpeg`
- 当前首页第二张车图：`https://images.pexels.com/photos/3122809/pexels-photo-3122809.jpeg`
- 首页资质图片：`assets/img/credentials/automobile-import-export-license.jpg`
- 首页资质图片：`assets/img/credentials/manufacturer-code-certificate.jpg`
- 首页资质图片：`assets/img/credentials/wmi-code-certificate.jpg`
- 首页资质图片：`assets/img/credentials/business-license.jpg`
- 首页资质图片：`assets/img/credentials/quality-management-certificate.jpg`
- 首页港口地图备用图：`assets/img/map-ports.jpg`
- 首页车型图：`assets/img/vehicles/home-toyota-corolla-exterior.jpg`
- 首页车型图：`assets/img/vehicles/home-mazda-ez-60-exterior.jpg`
- 首页车型图：`assets/img/vehicles/home-changan-hunter-exterior.jpg`
- 首页精选车型实际显示图：优先读取 `admin.html > 页面图文 > 首页 > 首页车型展示卡片`；如果没有保存后台覆盖，则默认 HTML 会被车型资料同步。
- 首页活动图：`assets/img/expo-booth.jpg`
- 首页活动图：`assets/img/client-visit.jpg`
- 首页活动图：`assets/img/press-event.jpg`
- 首页弹窗默认资质图：`assets/img/credentials/manufacturer-code-certificate.jpg`

## 车型展示页 vehicles.html

文字修改：
- Banner 文字、服务优势标题：`admin.html > 页面图文 > 车型展示页`
- 页面静态标题、筛选、说明、CTA：`vehicles.html`
- 车型卡片标题/简介/标签：`assets/js/vehicle-data.js`，或 `admin.html > 车型资料`
- 中文/阿拉伯语切换：`assets/js/main.js` 的 `languageCopy`

图片修改：
- 页面 Banner：`assets/img/factory-vehicles.jpg`
- Toyota Corolla Premium 卡片：`assets/img/vehicles/banners/toyota-corolla-hybrid-premium.jpg`
- Toyota Corolla Elite 卡片：`assets/img/vehicles/banners/toyota-corolla-hybrid-elite.jpg`
- Toyota Corolla Pioneer 卡片：`assets/img/vehicles/banners/toyota-corolla-hybrid-pioneer.jpg`
- Kia K3 卡片：`assets/img/vehicles/banners/kia-k3-comfort.jpg`
- Changan Hunter Warrior 卡片：`assets/img/vehicles/banners/changan-hunter-warrior.jpg`
- BYD Destroyer 05 卡片：`assets/img/vehicles/banners/byd-destroyer-05.jpg`
- Toyota Corolla Cross 卡片：`assets/img/vehicles/banners/toyota-corolla-cross.jpg`
- Hyundai Elantra 卡片：`assets/img/vehicles/banners/hyundai-elantra.jpg`
- Geely Bin Yue L 卡片：`assets/img/vehicles/banners/geely-bin-yue-l.jpg`
- Mazda EZ-60 卡片：`assets/img/vehicles/banners/mazda-ez-60.jpg`
- 下方验车图：`assets/img/inspection.jpg`

## 车型详情页 vehicle-detail.html

文字修改：
- 页面模板文字：`vehicle-detail.html`
- 所有车型详情内容：`assets/js/vehicle-data.js`
- 后台入口：`admin.html > 车型资料`
- 核心亮点卡片：`admin.html > 车型资料 > 核心亮点卡片`
- 详情页 Banner 图片：`admin.html > 车型资料 > 详情页 Banner 图片`

图片修改：
- 车型详情主图：`assets/js/vehicle-data.js` 的 `bannerImage`
- 车型参数图：`assets/js/vehicle-data.js` 的 `specImage`
- 详情页分段 Banner：`assets/js/vehicle-data.js` 的 `gallery`
- 详情页分段 Banner 后台入口：`admin.html > 车型资料 > 详情页 Banner 图片`
- 车型卡片图文件夹：`assets/img/vehicles/banners/`
- 车型参数图文件夹：`assets/img/vehicles/`
- 车型详情大图文件夹：`assets/img/vehicles/banners/detail/`

## 出口服务页 services.html

文字修改：
- Banner 和采购流程标题/说明：`admin.html > 页面图文 > 出口服务页`
- 流程步骤、卡片、CTA：`services.html`
- 中文/阿拉伯语切换：`assets/js/main.js` 的 `languageCopy`

图片修改：
- 页面 Banner：`assets/img/expo-meeting.jpg`
- 验车图：`assets/img/inspection.jpg`
- 单证图：`assets/img/customs-doc.jpg`
- 港口路线图：`assets/img/map-ports.jpg`
- 定制图：`assets/img/customization-sketch.jpg`

## 港口物流页 port-logistics.html

文字修改：
- 后台入口：`admin.html > 页面图文 > 港口物流页`
- 页面标题、查询框、说明卡片、状态文案：`port-logistics.html`
- 查询交互文字：`assets/js/main.js`
- 中文/阿拉伯语切换：`assets/js/main.js` 的 `languageCopy`

图片修改：
- 页面 Banner/地图图：`assets/img/map-ports.jpg`
- 下方单证图：`assets/img/customs-doc.jpg`
- 动态地图如果显示为 Leaflet 地图，位置和标注逻辑在 `assets/js/main.js`

## 售后服务页 after-sales.html

文字修改：
- Banner 文字：`admin.html > 页面图文 > 售后服务页`
- 售后流程步骤、证据说明、CTA：`after-sales.html`
- 流程交互文字：`assets/js/main.js`
- 中文/阿拉伯语切换：`assets/js/main.js` 的 `languageCopy`

图片修改：
- 页面 Banner：`assets/img/inspection.jpg`
- 01 客户联系：`assets/img/after-sales/case-flow-01-contact.jpg`
- 02 案件登记：`assets/img/after-sales/case-flow-02-registration.jpg`
- 03 证据收集：`assets/img/after-sales/case-flow-03-evidence.jpg`
- 04 技术分流：`assets/img/after-sales/case-flow-04-triage.jpg`
- 05 方案确认：`assets/img/after-sales/case-flow-05-approval.jpg`
- 06 零件与物流：`assets/img/after-sales/case-flow-06-logistics.jpg`
- 07 维修跟进：`assets/img/after-sales/case-flow-07-follow-up.jpg`
- 08 案件关闭：`assets/img/after-sales/case-flow-08-closure.jpg`
- 底部售后联系图：`assets/img/after-sales/case-flow-01-contact.jpg`

## 零件支持页 parts-support.html

文字修改：
- 后台入口：`admin.html > 页面图文 > 零件支持页`
- 页面静态文字、标题、搜索说明：`parts-support.html`
- 零件数据和搜索结果：`assets/js/parts-data.js` 和 `assets/js/main.js`
- 中文/阿拉伯语切换：`assets/js/main.js` 的 `languageCopy`

图片修改：
- 页面 Banner：`assets/img/factory-vehicles.jpg`

## 保修协调页 warranty-coordination.html

文字修改：
- 后台入口：`admin.html > 页面图文 > 保修协调页`
- 保修协议全文、标题、条款：`warranty-coordination.html`
- 保修协议条款列表：`admin.html > 页面图文 > 保修协调页 > 保修协议条款`
- 中文/阿拉伯语切换：`assets/js/main.js` 的 `languageCopy`

图片修改：
- 页面 Banner：`assets/img/customs-doc.jpg`

## 技术指导页 technical-guidance.html

文字修改：
- 后台入口：`admin.html > 页面图文 > 技术指导页`
- 页面标题、联系方式、说明文字：`technical-guidance.html`
- 中文/阿拉伯语切换：`assets/js/main.js` 的 `languageCopy`

图片修改：
- 页面 Banner：`assets/img/inspection.jpg`

## 关于我们页 about.html

文字修改：
- Banner 文字：`admin.html > 页面图文 > 关于我们页`
- 企业介绍、基地、服务优势、合作动态：`about.html`
- 中文/阿拉伯语切换：`assets/js/main.js` 的 `languageCopy`

图片修改：
- About Hero：`assets/img/about/about-fujian-aerial-hero.jpg`
- 港口地图备用图：`assets/img/about/about-port-map-clean.jpg`
- 厂门：`assets/img/about/about-base-gate.jpg`
- 验车：`assets/img/about/about-vehicle-inspection.jpg`
- 展会活动：`assets/img/about/about-expo-activity.jpg`
- 合规资料：`assets/img/about/about-compliance-records.jpg`
- 证书合集：`assets/img/about/about-certificates.jpg`
- 定制升级：`assets/img/about/about-customization-upgrade.jpg`
- Leaflet 动态地图逻辑：`assets/js/main.js`

## 新闻页 news.html

文字修改：
- 后台入口：`admin.html > 页面图文 > 新闻活动页`
- 页面标题、新闻卡片、活动描述：`news.html`
- 新闻活动卡片列表：`admin.html > 页面图文 > 新闻活动页 > 新闻活动卡片`
- 中文/阿拉伯语切换：`assets/js/main.js` 的 `languageCopy`

图片修改：
- 页面 Banner：`assets/img/expo-booth.jpg`
- 新闻图：`assets/img/expo-booth.jpg`
- 新闻图：`assets/img/client-visit.jpg`
- 新闻图：`assets/img/press-event.jpg`
- 新闻图：`assets/img/event-award.jpg`

## 联系页 contact.html

文字修改：
- 联系页主标题、说明、电话、邮箱、地址：`admin.html > 页面图文 > 联系方式页`
- 询盘清单和回复说明图文：`admin.html > 页面图文 > 联系方式页`
- 表单字段、按钮、地图说明：`contact.html`
- 中文/阿拉伯语切换：`assets/js/main.js` 的 `languageCopy`

图片修改：
- 表单旁单证图：`assets/img/customs-doc.jpg`
- Google 地图 iframe 地址：`contact.html` 的 `iframe src`

## 全站 Logo / 导航 / 底部

文字修改：
- 顶部导航文字：`assets/js/main.js` 的 `topNavItems`
- 侧边栏二级菜单：`assets/js/main.js` 的 `sidebarSections`
- 底部文字和链接：各页面 HTML，通用行为在 `assets/js/main.js`
- 中文/阿拉伯语导航翻译：`assets/js/main.js` 的 `languageCopy`

图片修改：
- 导航 Logo：`assets/css/styles.css` 中 `.brand-mark` 的 `url("../img/vstar-logo-original.png")`
- Logo 文件：`assets/img/vstar-logo-original.png`
- Logo 标记文件：`assets/img/vstar-logo-mark.png`

## 后台自身 admin.html

文字修改：
- 后台页面结构文字：`admin.html`
- 后台表单生成和提示文字：`assets/js/admin.js`
- 后台图片库中文分组和名称：`assets/js/image-library.js`

图片修改：
- 后台不单独持有图片，所有下拉选项来自 `assets/js/image-library.js`
- 后台上传的本地图片保存在浏览器 `localStorage`，不会写入项目文件夹

## 动态数据文件

- 车型数据：`assets/js/vehicle-data.js`
- 零件数据：`assets/js/parts-data.js`
- 后台可编辑字段配置：`assets/js/content-overrides.js`
- 后台图片库配置：`assets/js/image-library.js`
- 全站交互、导航、翻译、地图、轮播、搜索：`assets/js/main.js`

## 图片文件夹总览

- 通用图：`assets/img/`
- 证书图：`assets/img/credentials/`
- 关于我们图：`assets/img/about/`
- 车型参数图：`assets/img/vehicles/`
- 车型卡片图：`assets/img/vehicles/banners/`
- 车型详情大图：`assets/img/vehicles/banners/detail/`
- 售后流程图：`assets/img/after-sales/`
