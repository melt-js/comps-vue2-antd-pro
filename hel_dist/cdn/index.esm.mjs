import { exposeLib } from 'hel-lib-proxy';

/*
|--------------------------------------------------------------------------
|
| 对应 package.json/appGroupName
|
|--------------------------------------------------------------------------
*/

const LIB_NAME = 'comps-vue2-antd-pro';

/** 轻量代理与类型入口；宿主预加载实现后再动态导入业务模块。 */
/**
 * 将提供给用户的lib暴露出去（同时也暴露了类型）
 */
var dtlib = exposeLib(LIB_NAME);
var App = dtlib.App;
var ArticleListContent = dtlib.ArticleListContent;
var AvatarList = dtlib.AvatarList;
var AvatarListItem = dtlib.AvatarListItem;
var Bar = dtlib.Bar;
var ChartCard = dtlib.ChartCard;
var ChartTrend = dtlib.ChartTrend;
var Ellipsis = dtlib.Ellipsis;
var FooterToolbar = dtlib.FooterToolbar;
var GlobalSearch = dtlib.GlobalSearch;
var IconSelector = dtlib.IconSelector;
var LimitTextArea = dtlib.LimitTextArea;
var Liquid = dtlib.Liquid;
var MiniArea = dtlib.MiniArea;
var MiniBar = dtlib.MiniBar;
var MiniProgress = dtlib.MiniProgress;
var MiniSmoothArea = dtlib.MiniSmoothArea;
var NoticeIcon = dtlib.NoticeIcon;
var NumberInfo = dtlib.NumberInfo;
var PageLoading = dtlib.PageLoading;
var Radar = dtlib.Radar;
var RankList = dtlib.RankList;
var StandardFormRow = dtlib.StandardFormRow;
var TagCloud = dtlib.TagCloud;
var TagSelect = dtlib.TagSelect;
var TransferBar = dtlib.TransferBar;
var Tree = dtlib.Tree;
var Trend = dtlib.Trend;
var install = dtlib.install;
var pageLoadingPlugin = dtlib.pageLoadingPlugin;
var dialogPlugin = dtlib.dialogPlugin;

export { App, ArticleListContent, AvatarList, AvatarListItem, Bar, ChartCard, ChartTrend, Ellipsis, FooterToolbar, GlobalSearch, IconSelector, LimitTextArea, Liquid, MiniArea, MiniBar, MiniProgress, MiniSmoothArea, NoticeIcon, NumberInfo, PageLoading, Radar, RankList, StandardFormRow, TagCloud, TagSelect, TransferBar, Tree, Trend, dtlib as default, dialogPlugin, dtlib, install, pageLoadingPlugin };
