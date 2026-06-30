# V-Star 网站图片与文字修改路径

这份文件用于快速找到网站里所有常用图片、文字、车型资料和设置项的修改位置。

## 最推荐的修改入口

- 后台页面：`admin.html`
- 后台脚本：`assets/js/admin.js`
- 后台样式：`assets/css/admin.css`
- 后台可编辑字段配置：`assets/js/content-overrides.js`
- 后台图片下拉库：`assets/js/image-library.js`
- 全站逐项清单：`CONTENT_INVENTORY.md`

后台修改会先保存在当前浏览器的 `localStorage`，适合本机预览。确认后可以在后台“导入 / 导出”里导出 JSON，再让我合并进源码。

后台上传本地图片不会真正写入 `assets/img` 文件夹；它会压缩成浏览器本地图片数据。正式上线时，建议把最终图片放入对应 `assets/img/...` 文件夹，再把字段改成文件路径。

## 后台页面分组总览

`admin.html > 页面图文` 现在覆盖这些页面：

- 首页：Banner、轮播图、资质区、港口优势、首页车型标题、首页活动卡片
- 车型展示页：Banner、服务优势标题
- 出口服务页：Banner、采购流程标题与说明
- 关于我们页：Banner
- 售后服务页：Banner
- 港口物流页：Banner、查询区、底部数据说明图文
- 零件支持页：Banner、零件库标题说明、流程标题
- 保修协调页：Banner、协议说明、保修协议条款列表
- 技术指导页：Banner、联系区、电话和邮箱
- 新闻活动页：Banner、活动区标题说明、新闻活动卡片列表
- 车型详情模板：核心亮点标题、参数区、图片区、底部 CTA
- 联系方式页：联系信息、询盘清单、回复说明图文

`admin.html > 车型资料` 统一覆盖车型相关重复内容：

- 首页精选车型卡片
- 车型展示页卡片
- 车型详情页主图、参数图、核心亮点、详情 Banner 图片

## 全站文字与导航

- 顶部导航、侧边栏菜单、语言切换、底部链接：`assets/js/main.js`
- 中文 / 阿拉伯语翻译词典：`assets/js/main.js` 里的 `languageCopy`
- 全站布局和响应式样式：`assets/css/styles.css`
- 全站内容本地覆盖逻辑：`assets/js/content-overrides.js`

如果英文源文字改了，并且需要中文/阿拉伯语同步切换，也要同步修改 `assets/js/main.js` 的 `languageCopy`。

## 首页 index.html

后台路径：
- 页面图文 > 首页
- 首页 Banner 轮播图片列表：可新增、删除、选择图片库、上传本地图片
- 首页活动卡片：页面图文 > 首页 > 首页活动卡片
- 首页精选车型卡片：页面图文 > 首页 > 首页车型展示卡片，可直接改图片、分类、标题、简介、详情链接和按钮文字
- 网站设置 > 首页 Banner 轮播时间

主要源码：
- 页面结构文字：`index.html`
- 后台可编辑字段：`assets/js/content-overrides.js` 的 `id: "home"`
- 首页轮播时间逻辑：`assets/js/main.js` 的 `initHeroSlides()`
- 首页轮播动态生成逻辑：`assets/js/content-overrides.js` 的 `renderHomeHeroSlides()`

主要图片：
- 首页当前黑色车头 Banner：`https://images.pexels.com/photos/3457780/pexels-photo-3457780.jpeg`
- 首页当前车辆细节 Banner：`https://images.pexels.com/photos/3122809/pexels-photo-3122809.jpeg`
- 首页本地备用 Banner 图 1：`assets/img/hero-factory.jpg`
- 首页本地备用 Banner 图 2：`assets/img/hero-expo.jpg`
- Logo：`assets/img/vstar-logo-original.png`
- Logo 标记：`assets/img/vstar-logo-mark.png`
- 首页车型展示图：`assets/img/vehicles/home-toyota-corolla-exterior.jpg`
- 首页车型展示图：`assets/img/vehicles/home-mazda-ez-60-exterior.jpg`
- 首页车型展示图：`assets/img/vehicles/home-changan-hunter-exterior.jpg`
- 资质证书：`assets/img/credentials/automobile-import-export-license.jpg`
- 资质证书：`assets/img/credentials/manufacturer-code-certificate.jpg`
- 资质证书：`assets/img/credentials/wmi-code-certificate.jpg`
- 资质证书：`assets/img/credentials/business-license.jpg`
- 资质证书：`assets/img/credentials/quality-management-certificate.jpg`
- 活动展位：`assets/img/expo-booth.jpg`
- 客户验车：`assets/img/client-visit.jpg`
- 活动领奖：`assets/img/press-event.jpg`
- 港口地图：`assets/img/map-ports.jpg`

## 车型展示页 vehicles.html

后台路径：
- 页面图文 > 车型展示页
- 车型资料 > 选择车型

主要源码：
- 页面结构文字：`vehicles.html`
- 车型数据：`assets/js/vehicle-data.js`
- 车型卡片渲染：`assets/js/main.js`
- 后台车型编辑逻辑：`assets/js/admin.js`
- 首页精选车型卡片也读取同一份车型资料；修改 `车型资料` 会同步影响首页同名车型卡片、车型列表卡片、车型详情页。

主要图片：
- 车型页 Banner：`assets/img/vehicles/home-toyota-corolla-exterior.jpg`
- 车型卡片图：`assets/img/vehicles/banners/*.jpg`
- 车型参数参考图：`assets/img/vehicles/*.jpg`

常用车型卡片图片：
- Toyota Corolla Premium：`assets/img/vehicles/banners/toyota-corolla-hybrid-premium.jpg`
- Toyota Corolla Elite：`assets/img/vehicles/banners/toyota-corolla-hybrid-elite.jpg`
- Toyota Corolla Pioneer：`assets/img/vehicles/banners/toyota-corolla-hybrid-pioneer.jpg`
- Toyota Corolla Cross：`assets/img/vehicles/banners/toyota-corolla-cross.jpg`
- Kia K3：`assets/img/vehicles/banners/kia-k3-comfort.jpg`
- Hyundai Elantra：`assets/img/vehicles/banners/hyundai-elantra.jpg`
- BYD Destroyer 05：`assets/img/vehicles/banners/byd-destroyer-05.jpg`
- Changan Hunter Warrior：`assets/img/vehicles/banners/changan-hunter-warrior.jpg`
- Geely Bin Yue L：`assets/img/vehicles/banners/geely-bin-yue-l.jpg`
- Mazda EZ-60：`assets/img/vehicles/banners/mazda-ez-60.jpg`

## 车型详情页 vehicle-detail.html

后台路径：
- 车型资料 > 选择车型

主要源码：
- 页面模板：`vehicle-detail.html`
- 所有车型详情文字、参数、亮点、配置说明、详情图：`assets/js/vehicle-data.js`
- 详情页渲染逻辑：`assets/js/main.js`

每台车型常改字段：
- `name`：车型短名称
- `fullName`：详情页完整标题
- `brand` / `category` / `energy` / `type` / `use`：标签信息
- `summary`：详情页副标题
- `highlights`：核心亮点
- `featureCards`：核心亮点卡片标题与内容
- `specs`：关键参数
- `parameterSections`：参数列表
- `configuration`：配置说明
- `gallery`：详情页 Banner / 展示图
- `specImage`：车型主参考图
- `bannerImage`：车型卡片或详情页主图

详情页图片文件夹：
- 详情 Banner 和分段图：`assets/img/vehicles/banners/detail/`
- 车型参数参考图：`assets/img/vehicles/`
- 车型列表/卡片图：`assets/img/vehicles/banners/`

后台里 `核心亮点卡片` 和 `详情页 Banner 图片` 已经是可视化列表，不需要手写 JSON。

## 出口服务页 services.html

后台路径：
- 页面图文 > 出口服务页

主要源码：
- 页面结构文字：`services.html`
- 后台字段：`assets/js/content-overrides.js` 的 `id: "services"`

主要图片：
- 页面 Banner：`assets/img/expo-meeting.jpg`
- 港口路线图：`assets/img/map-ports.jpg`
- 单证/报关图片：`assets/img/customs-doc.jpg`
- 验车图片：`assets/img/inspection.jpg`

## 港口物流页 port-logistics.html

主要源码：
- 页面结构、查询区域、说明文字：`port-logistics.html`
- 地图/物流交互逻辑：`assets/js/main.js`
- 地图样式：`assets/css/styles.css`

常用图片：
- 静态港口路线图备用：`assets/img/map-ports.jpg`

如果使用动态地图，通常不改图片文件，而是改页面里的地图容器和 `assets/js/main.js` 里的初始化逻辑。

## 售后服务页 after-sales.html

后台路径：
- 页面图文 > 售后服务页

主要源码：
- 页面结构文字：`after-sales.html`
- 售后流程交互逻辑：`assets/js/main.js`
- 后台字段：`assets/js/content-overrides.js` 的 `id: "afterSales"`

主要图片：
- 页面 Banner：`assets/img/client-visit.jpg`
- 01 客户联系：`assets/img/after-sales/case-flow-01-contact.jpg`
- 02 案件登记：`assets/img/after-sales/case-flow-02-registration.jpg`
- 03 证据收集：`assets/img/after-sales/case-flow-03-evidence.jpg`
- 04 技术分流：`assets/img/after-sales/case-flow-04-triage.jpg`
- 05 方案确认：`assets/img/after-sales/case-flow-05-approval.jpg`
- 06 零件与物流：`assets/img/after-sales/case-flow-06-logistics.jpg`
- 07 维修跟进：`assets/img/after-sales/case-flow-07-follow-up.jpg`
- 08 案件关闭：`assets/img/after-sales/case-flow-08-closure.jpg`

## 零件支持页 parts-support.html

主要源码：
- 页面结构文字：`parts-support.html`
- 零件搜索/筛选逻辑：`assets/js/main.js`

目前零件数据主要写在页面和脚本逻辑里；如果要扩展为完整配件库，建议后续单独拆成 `assets/js/parts-data.js`。

## 保修协调页 warranty-coordination.html

主要源码：
- 保修协议正文：`warranty-coordination.html`
- 页面样式：`assets/css/styles.css`

这页是法律/商务文案草案，修改时优先直接改 `warranty-coordination.html`。

## 技术指导页 technical-guidance.html

主要源码：
- 页面结构文字和联系方式：`technical-guidance.html`

常见修改：
- WhatsApp 链接
- 电话
- 技术支持说明文字

## 关于我们页 about.html

后台路径：
- 页面图文 > 关于我们页

主要源码：
- 页面结构文字：`about.html`
- 后台字段：`assets/js/content-overrides.js` 的 `id: "about"`

主要图片：
- About Hero：`assets/img/about/about-fujian-aerial-hero.jpg`
- 福建基地航拍宽图：`assets/img/about/about-fujian-aerial-wide.jpg`
- 福建基地航拍：`assets/img/about/about-fujian-aerial.jpg`
- 厂区外观：`assets/img/about/about-factory-exterior.jpg`
- 厂门：`assets/img/about/about-base-gate.jpg`
- 展会活动：`assets/img/about/about-expo-activity.jpg`
- 定制升级：`assets/img/about/about-customization-upgrade.jpg`
- 合规记录：`assets/img/about/about-compliance-records.jpg`
- 证书合集：`assets/img/about/about-certificates.jpg`
- 港口地图：`assets/img/about/about-port-map.jpg`
- 干净版港口地图：`assets/img/about/about-port-map-clean.jpg`
- 验车图片：`assets/img/about/about-vehicle-inspection.jpg`

## 新闻页 news.html

主要源码：
- 页面结构文字和新闻卡片：`news.html`

常用图片：
- 展会展位：`assets/img/expo-booth.jpg`
- 客户访问：`assets/img/client-visit.jpg`
- 活动奖项：`assets/img/event-award.jpg`
- 新闻/活动图：`assets/img/press-event.jpg`

## 联系页 contact.html

后台路径：
- 页面图文 > 联系方式页

主要源码：
- 页面结构文字、表单、联系信息：`contact.html`
- 后台字段：`assets/js/content-overrides.js` 的 `id: "contact"`

常改内容：
- 电话
- 邮箱
- 地址
- WhatsApp 链接
- 表单字段文案

## 资质证书图片

证书集中放在：
- `assets/img/credentials/`

当前证书：
- 汽车进出口许可证：`assets/img/credentials/automobile-import-export-license.jpg`
- 企业名称代码证书：`assets/img/credentials/manufacturer-code-certificate.jpg`
- WMI 证书：`assets/img/credentials/wmi-code-certificate.jpg`
- 营业执照：`assets/img/credentials/business-license.jpg`
- 质量管理体系证书：`assets/img/credentials/quality-management-certificate.jpg`

首页资质区域文字主要在：
- `index.html`
- `assets/js/content-overrides.js` 的 `home.credentials.*`

## 后台图片库维护

后台图片下拉列表来自：
- `assets/js/image-library.js`

如果新增图片并希望后台下拉里能选到，需要在这个文件里添加：

```js
{ group: "分组名称", label: "后台显示名称", path: "assets/img/xxx.jpg" }
```

## 新增图片推荐放置规则

- 首页、通用图片：`assets/img/`
- 证书：`assets/img/credentials/`
- 关于我们：`assets/img/about/`
- 车型卡片图：`assets/img/vehicles/banners/`
- 车型参数参考图：`assets/img/vehicles/`
- 车型详情页大图：`assets/img/vehicles/banners/detail/`
- 售后流程图片：`assets/img/after-sales/`

## 后台保存后的永久合并方式

1. 打开 `admin.html`
2. 修改文字或图片
3. 保存
4. 在“导入 / 导出”里下载 JSON
5. 让我把 JSON 合并进源码

如果是图片：
- 本地上传适合预览
- 正式版本建议把图片文件放进上面的对应文件夹
- 然后把后台字段或源码字段改成 `assets/img/...` 路径
