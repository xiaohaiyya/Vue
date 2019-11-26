import Vue from 'vue'
import Router from 'vue-router'
import Address from '@/components/jh/address'
import AddressDetail from '@/components/jh/addressDetail'
import Shouye from '@/components/jh/shouye'
import Login from '@/components/jh/login'
import Jihewenjian from '@/components/jh/jihewenjian'
import ImgsDetails from '@/components/cdy/imgs_detail'
import ShopsDetail from '@/components/jh/shopsDetail'
import Shangpin from '@/components/jh/shangpin'
import Pingjia from  '@/components/jh/pingjia'
import ShangpinDetail from '@/components/jh/shangpinDetail'
import Shangjiaxiangqing from '@/components/jh/shangjiaxiangqing'
import Safegongshi from '@/components/jh/safegongshi'
import SureShopping from '@/components/jh/sureShopping'
import Taste from '@/components/jh/taste'
import AddAddress from '@/components/jh/addAddress'
import ChooseAddress from '@/components/jh/chooseAddress'
import SearchSchool from '@/components/jh/searchSchool'
import Order from '@/components/cdy/order'
import Search from '@/components/cdy/search'
import Reset from '@/components/cdy/reset'
import DYhome from '@/components/dy/home'
// 杜岩
import Daijinquan from '@/components/dy/daijinquan'
import Duihongbao from '@/components/dy/duihongbao'
import Duihuan from '@/components/dy/duihuan'
import Fuwu from '@/components/dy/fuwu'
import Goumai from '@/components/dy/goumai'
import Home from '@/components/dy/home'
import Huiyuan from '@/components/dy/huiyuan'
import Huiyuanshuoming from '@/components/dy/huiyuanshuoming'
import Jifen from '@/components/dy/jifen'
import Jifenshangcheng from '@/components/dy/jifenshangcheng'
import Jifenshuoming from '@/components/dy/jifenshuoming'
import Jilu from '@/components/dy/jilu'
import Lishi from '@/components/dy/lishi'
import Popel from '@/components/dy/popel'
import Shuoming from '@/components/dy/shuoming'
import Site from '@/components/dy/site'
import Sming from '@/components/dy/sming'
import Tuijian from '@/components/dy/tuijian'
import Xiazai from '@/components/dy/xiazai'
import Xinzeng from '@/components/dy/xinzeng'
import Youhui from '@/components/dy/youhui'
import Yue from '@/components/dy/yue'
import Zhxx from '@/components/dy/zhxx'
import Ziyemian from '@/components/dy/ziyemian'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'address',
      component: Address
    },
    {
      path: '/reset',
      name: 'reset',
      component: Reset
    },
    {
      path: '/sureShopping',
      name: 'sureShopping',
      component: SureShopping
    },
    {
      path: '/addAddress',
      name: 'addAddress',
      component: AddAddress
    },
    {
      path: '/chooseAddress',
      name: 'chooseAddress',
      component: ChooseAddress
    },
    {
      path: '/searchSchool',
      name: 'searchSchool',
      component: SearchSchool
    },
    {
      path: '/taste',
      name: 'taste',
      component: Taste
    },
    {
      path: '/safegongshi',
      name: 'safegongshi',
      component: Safegongshi
    },
    {
      path:'/address',
      name: 'address',
      component: Address
    },
    {
      path:'/addressDetail',
      name: 'addressDetail',
      component: AddressDetail
    },
    {
      path:"/imgsdetails",
      name:'imgsdetails',
      component:ImgsDetails

    },
    {
      path:"/shangjiaxiangqing",
      name:'shangjiaxiangqing',
      component:Shangjiaxiangqing

    },
    {
      path:'/shopsDetail',
      name:'shopsDetail',
      component:ShopsDetail,
      redirect:"/shangpin",
      children:[{
        path:'/shangpin',
        name:'shangpin',
        component:Shangpin,
      },{
        path:'/pingjia',
        name:'pingjia',
        component:Pingjia,
      }]
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/shangpinDetail',
      name:'shangpinDetail',
      component:ShangpinDetail

    },
    {
      path:"/jihewenjian",
      name:'jihewenjian',
      component:Jihewenjian,
      redirect:'/shouye',
      children:[{
          path:'/shouye',
          name: 'shouye',
          component: Shouye
      },
      {
        path: '/order',
        name: 'order',
        component: Order
      },
      {
        path: '/search',
        name: 'search',
        component: Search
      },
      {
        path: '/dyhome',
        name: 'dyhome',
        component: DYhome
      },
    ]
    },
    {
      path: '/daijinquan',
      name: 'daijinquan',
      component: Daijinquan
    },
    {
      path: '/duihongbao',
      name: 'duihongbao',
      component: Duihongbao
    },
    {
      path: '/duihuan',
      name: 'duihuan',
      component: Duihuan
    },
    {
      path: '/fuwu',
      name: 'fuwu',
      component: Fuwu
    },
    {
      path: '/goumai',
      name: 'goumai',
      component: Goumai
    },
    {
      path: '/huiyuan',
      name: 'huiyuan',
      component: Huiyuan
    },
    {
      path: '/huiyuanshuoming',
      name: 'huiyuanshuoming',
      component: Huiyuanshuoming
    },
    {
      path: '/jifen',
      name: 'jifen',
      component: Jifen
    },
    {
      path: '/jifenshangcheng',
      name: 'jifenshangcheng',
      component: Jifenshangcheng
    },
    {
      path: '/jifenshuoming',
      name: 'jifenshuoming',
      component: Jifenshuoming
    },
    {
      path: '/jilu',
      name: 'jilu',
      component: Jilu
    },
    {
      path: '/lishi',
      name: 'lishi',
      component: Lishi
    },
    {
      path: '/popel',
      name: 'popel',
      component: Popel
    },
    {
      path: '/shuoming',
      name: 'shuoming',
      component: Shuoming
    },
    {
      path: '/site',
      name: 'site',
      component: Site
    },
    {
      path: '/sming',
      name: 'sming',
      component: Sming
    },
    {
      path: '/tuijian',
      name: 'tuijian',
      component: Tuijian
    },
    {
      path: '/xiazai',
      name: 'xiazai',
      component: Xiazai
    },
    {
      path: '/xinzeng',
      name: 'xinzeng',
      component: Xinzeng
    },
    {
      path: '/youhui',
      name: 'youhui',
      component: Youhui
    },
    {
      path: '/yue',
      name: 'yue',
      component: Yue
    },
    {
      path: '/zhxx',
      name: 'zhxx',
      component: Zhxx
    },
    {
      path: '/ziyemian',
      name: 'ziyemian',
      component: Ziyemian
    },
  ]
})
