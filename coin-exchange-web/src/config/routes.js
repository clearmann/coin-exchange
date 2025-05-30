//import membercenter from '../pages/uc/MemberCenter'
//import tradeInfo from '../pages/otc/TradeInfo'
//import checkuser from '../pages/otc/CheckUser'
//import chat from '../pages/otc/Chat'
//import notice from '../pages/cms/Notice'
//import noticeitem from '../pages/cms/NoticeItem'

//import aboutus from '../pages/cms/AboutUs' /*关于我们*/
//import moneyindex from '../components/uc/MoneyIndex'
//import record from '../components/uc/Record'
//import trade from '../components/uc/MinTrade'
//import paydividends from '../components/uc/PayDividends'
//import invitingmining from '../components/uc/InvitingMin'
//import recharge from '../components/uc/Recharge'
//import withdraw from '../components/uc/Withdraw'
//import safe from '../components/uc/Safe'
//import account from '../components/uc/Account'
//import withdrawAddr from '../components/uc/WithdrawAddress'

//import Index from '../pages/index/index'
//import Login from '../pages/uc/login'
//import Register from '../pages/uc/register'
//import FindPwd from '../pages/uc/findpwd'
//import Exchange from '../pages/exchange/exchange'
//import Help from '../pages/cms/help'
//import HelpList from '../pages/cms/HelpList' //帮助分类列表
//import HelpDetail from '../pages/cms/HelpDetail' //帮助详情
//import OTCMain from '../pages/otc/Main'
//import OtcTrade from '../pages/otc/Trade'
//import OtcOrder from '../components/uc/myorder'
//import EntrustCurrent from '../components/uc/EntrustCurrent' //当前委托记录
//import EntrustHistory from '../components/uc/EntrustHistory' //历史委托记录
//import OtcAd from '../components/otc/MyAd'
//import adPublish from '../pages/otc/AdPublish'
//import identbusiness from '../pages/uc/IdentBusiness'

//import Partner from '../pages/activity/Partner'
//import Bzb from '../pages/activity/Bzb'

export default [
    { path: '/', component: resolve=>(require(["../pages/index/Index"],resolve)) },
    { path: '/index', component: resolve=>(require(["../pages/index/Index"],resolve)) },
    { path: '/login', component: resolve=>(require(["../pages/uc/Login"],resolve)) },
    { path: '/login/returnUrl/:returnUrl', component: resolve=>(require(["../pages/uc/Login"],resolve)) },
    { path: '/register', component: resolve=>(require(["../pages/uc/Register"],resolve)) },
    { path: '/reg', component: resolve=>(require(["../pages/uc/MobileRegister"],resolve)) },
    { path: '/app', component: resolve=>(require(["../pages/uc/AppDownload"],resolve)) },
    { path: '/findPwd', component: resolve=>(require(["../pages/uc/FindPwd"],resolve)) },
    { path: '/exchange', component: resolve=>(require(["../pages/exchange/Exchange"],resolve)) },
    { path: '/exchange/:pair', component: resolve=>(require(["../pages/exchange/Exchange"],resolve)), name: "ExchangePair"},
    { path: '/swapindex', component: resolve=>(require(["../pages/swapindex/Swapindex"],resolve)) },
    { path: '/swapindex/:pair', component: resolve=>(require(["../pages/swapindex/Swapindex"],resolve)), name: "SwapPair"},
    { path: '/kline/:pair', component: resolve=>(require(["../pages/swapindex/Kline"],resolve)), name: "kline"},
    { path: '/help', component: resolve=>(require(["../pages/cms/Help"],resolve)) },
    { path: '/helplist', component: resolve=>(require(["../pages/cms/HelpList"],resolve)) },
    { path: '/helpdetail', component: resolve=>(require(["../pages/cms/HelpDetail"],resolve)) },
    { path: '/notice', component: resolve=>(require(["../pages/cms/Notice"],resolve)) },
    { path: '/lab', component: resolve=>(require(["../pages/activity/Activity"],resolve)) },
    { path: '/mining', component: resolve=>(require(["../pages/mining/Mining"],resolve)) },
    { path: '/crowdfunding', component: resolve=>(require(["../pages/crowdfunding/index"],resolve)) },
    { path: '/ctc', component: resolve=>(require(["../pages/ctc/Ctc"],resolve)) },
    { path: '/lab/detail/:id', component: resolve=>(require(["../pages/activity/ActivityDetail"],resolve)) },
    { path: '/mining/detail/:id', component: resolve=>(require(["../pages/mining/MiningDetail"],resolve)) },
    { path: '/partner', component: resolve=>(require(["../pages/activity/Partner"],resolve)) },
    { path: '/bzb', component: resolve=>(require(["../pages/activity/Bzb"],resolve)) },
    { path: '*', component: resolve=>(require(["../pages/index/Index"],resolve)) },
    { path: '/envelope/:eno', component: resolve=>(require(["../pages/envelope/Envelope"],resolve)) },
    {
        path: '/otc',
        component: resolve=>(require(["../pages/otc/Main"],resolve)),
        children: [{
                path: 'trade/*',
                component: resolve=>(require(["../pages/otc/Trade"],resolve))
            }
        ]
    },
    {
        path: '/uc',
        component: resolve=>(require(["../pages/uc/MemberCenter"],resolve)),
        children: [{
                path: '',
                component: resolve=>(require(["../components/uc/Safe"],resolve))
            },
            {
                path: 'safe',
                component: resolve=>(require(["../components/uc/Safe"],resolve))
            },
            {
                path: 'account',
                component: resolve=>(require(["../components/uc/Account"],resolve))
            },
            {
                path: 'money',
                component: resolve=>(require(["../components/uc/MoneyIndex"],resolve))
            },
            {
                path: 'contract-money',
                component: resolve=>(require(["../components/uc/ContractMoneyIndex"],resolve))
            },
            {
                path: 'record',
                component: resolve=>(require(["../components/uc/Record"],resolve))
            },
            {
                path: 'contract-record',
                component: resolve=>(require(["../components/uc/ContractRecord"],resolve))
            },
            {
                path: 'recharge',
                component: resolve=>(require(["../components/uc/Recharge"],resolve))
            },
            {
                path: 'withdraw',
                component: resolve=>(require(["../components/uc/Withdraw"],resolve))
            },
            {
                path: 'withdraw/address',
                component: resolve=>(require(["../components/uc/WithdrawAddress"],resolve))
            },
            {
                path: 'ad',
                component: resolve=>(require(["../components/otc/MyAd"],resolve))
            },
            {
                path: 'ad/create',
                component: resolve=>(require(["../pages/otc/AdPublish"],resolve))
            },
            {
                path: 'ad/update',
                component: resolve=>(require(["../pages/otc/AdPublish"],resolve))
            },
            {
                path: 'order',
                component: resolve=>(require(["../components/uc/myorder"],resolve))
            },
            {
                path: 'entrust/current',
                component: resolve=>(require(["../components/uc/EntrustCurrent"],resolve))
            },
            {
                path: 'entrust/history',
                component: resolve=>(require(["../components/uc/EntrustHistory"],resolve))
            }, 
            {
                path: 'contract/entrust/current',
                component: resolve=>(require(["../components/uc/contract/EntrustCurrent"],resolve))
            },
            {
                path: 'contract/entrust/history',
                component: resolve=>(require(["../components/uc/contract/EntrustHistory"],resolve))
            }, 
            {
                path: 'crowdfunding/list',
                component: resolve=>(require(["../components/uc/crowdfunding/list"],resolve))
            }, 
            {
                path: 'trade',
                component: resolve=>(require(["../components/uc/MinTrade"],resolve))
            },
            {
                path: 'invitingmining',
                component: resolve=>(require(["../components/uc/InvitingMin"],resolve))
            },
            {
                path: 'paydividends',
                component: resolve=>(require(["../components/uc/PayDividends"],resolve))
            },
            {
                path: 'innovation/myorders',
                component: resolve=>(require(["../components/uc/InnovationOrders"],resolve))
            },
            {
                path: 'innovation/myminings',
                component: resolve=>(require(["../components/uc/InnovationMinings"],resolve))
            }
        ]
    },
    {
        name: 'tradeInfo',
        path: '/otc/tradeInfo',
        component: resolve=>(require(["../pages/otc/TradeInfo"],resolve))
    },
    {
        path: '/checkuser',
        component: resolve=>(require(["../pages/otc/CheckUser"],resolve))
    },
    {
        path: '/chat',
        component: resolve=>(require(["../pages/otc/Chat"],resolve))
    },
    {
        path: '/identbusiness',
        component: resolve=>(require(["../pages/uc/IdentBusiness"],resolve))
    },
    {
        path: '/about-us',
        component: resolve=>(require(["../pages/cms/AboutUs"],resolve))
    },
];
