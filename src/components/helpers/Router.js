const LayoutUser = () => import('../layout/user/Layout.vue');
const LayoutNoneUser = () => import('../layout/user/LayoutNone.vue');
const LayoutAdmin = () => import('../layout/admin/Layout.vue');
const PagePost = () => import('../pages/PagePost.vue');
const PageLogin = () => import('../pages/PageLogin.vue');
const PageHome = () => import('../pages/PageHome.vue');
const PageWelcome = () => import('../pages/PageWelcome.vue');
const PageSearch = () => import('../pages/PageSearch.vue');
const PageNewPost = () => import('../pages/PageNewPost.vue');
const PageSettings = () => import('../pages/PageSettings.vue');
const PagePassword = () => import('../pages/PagePassword.vue');
const PageEmail = () => import('../pages/PageEmail.vue');
const PageSignup = () => import('../pages/PageSignup.vue');
const PagePasswordReset = () => import('../pages/PagePasswordReset.vue');
const PageForgot = () => import('../pages/PageForgot.vue');
const PageUser = () => import('../pages/PageUser.vue');
const PageBookmarks = () => import('../pages/PageBookmarks.vue');
const PageLists = () => import('../pages/PageLists.vue');
const PageList = () => import('../pages/PageList.vue');
const PageMessages = () => import('../pages/PageMessages.vue');
const PagePrice = () => import('../pages/PagePrice.vue');
const PagePaymentSuccess = () => import('../pages/PagePaymentSuccess.vue');
const PagePaymentFailure = () => import('../pages/PagePaymentFailure.vue');
const PageSubscriptions = () => import('../pages/PageSubscriptions.vue');
const PageNotifications = () => import('../pages/PageNotifications.vue');
const PagePayouts = () => import('../pages/PagePayouts.vue');
const PagePayments = () => import('../pages/PagePayments.vue');
const AppSide = () => import('../layout/AppSide.vue');
// const AppSideProfile = () => import('../layout/AppSideProfile.vue');
const PageLoginAdmin = () => import('../pages/admin/PageLogin');
const PageDashboardAdmin = () => import('../pages/admin/PageDashboard');
const PageUsersAdmin = () => import('../pages/admin/PageUsers');
const PageUsersEditAdmin = () => import('../pages/admin/PageUsersEdit');
const PageSubscriptionsAdmin = () => import('../pages/admin/PageSubscriptions');
const PagePaymentsAdmin = () => import('../pages/admin/PagePayments');
const PagePayoutsAdmin = () => import('../pages/admin/PagePayouts');
const PagePostsAdmin = () => import('../pages/admin/PagePosts');
const PageArchive = () => import('../pages/PageArchive.vue');
import Store from './Store';

export default [
  {
    path: '/admin',
    component: LayoutAdmin,
    children: [
      {
        path: '/admin',
        components: {
          default: PageDashboardAdmin,
          login: PageLoginAdmin,
        },
      },
      {
        path: '/admin/users/:type?',
        component: PageUsersAdmin,
      },
      {
        path: '/admin/users/edit/:id',
        component: PageUsersEditAdmin,
      },
      {
        path: '/admin/subscriptions/:type?',
        component: PageSubscriptionsAdmin,
      },
      {
        path: '/admin/payments/:type?',
        component: PagePaymentsAdmin,
      },
      {
        path: '/admin/payouts/:type?',
        component: PagePayoutsAdmin,
      },
      {
        path: '/admin/posts',
        component: PagePostsAdmin,
      },
    ],
  },
  {
    path: '/',
    component: LayoutUser,
    children: [
      {
        path: '/payments/:attach?',
        component: PagePayments,
      },
      {
        path: '/payouts',
        component: PagePayouts,
      },
      {
        path: '/notifications',
        component: PageNotifications,
        name: 'notifications',
      },
      {
        path: '/subscriptions',
        component: PageSubscriptions,
        name: 'subscriptions',
      },
      {
        path: '/payment/failure',
        component: PagePaymentFailure,
      },
      {
        path: '/payment/success/:gateway',
        component: PagePaymentSuccess,
      },
      {
        path: '/messages/:id',
        component: PageMessages,
        name: 'messages',
      },
      {
        path: '/messages',
        component: PageMessages,
        name: 'messages',
      },
      {
        path: '/lists',
        component: PageLists,
      },
      {
        path: '/lists/:id',
        component: PageList,
        name: 'list',
      },
      {
        path: '/bookmarks',
        component: PageBookmarks,
      },
      {
        path: '/archive',
        component: PageArchive,
      },
      {
        path: '/forgot',
        components: {
          default: PageForgot,
          login: PageForgot,
        },
      },
      {
        path: '/password-reset',
        components: {
          default: PagePasswordReset,
          login: PagePasswordReset,
        },
      },
      {
        path: '/signup',
        components: {
          default: PageSignup,
          login: PageSignup,
        },
      },
      {
        path: '/settings/price',
        component: PagePrice,
      },
      {
        path: '/settings/email',
        component: PageEmail,
      },
      {
        path: '/settings/password',
        component: PagePassword,
      },
      {
        path: '/settings',
        component: PageSettings,
      },
      {
        path: '/posts/create',
        component: PageNewPost,
      },
      {
        path: '/posts/edit/:id',
        component: PageNewPost,
      },
      {
        path: '/search',
        components: {
          default: PageSearch,
          side: AppSide,
        },
        name: 'search',
      },
      {
        path: '/:id/:username',
        component: PagePost,
      },
      {
        path: '/',
        components: {
          default: PageHome,
          login: PageLogin,
          side: AppSide,
        },
      },
      {
        path: '/welcome',
        components: {
          default: PageHome,
          login: PageWelcome,
          side: AppSide,
        },
      },
      {
        path: '/auth/:provider/callback',
        component: {
          template: '<div class="auth-component"></div>',
        },
      },
    ],
  },
  {
    path: '/:username',
    get component() {
      if (Store.state.token == null) {
        return LayoutNoneUser
      } else {
        return LayoutUser
      }
    },
    children: [
      {
        path: '/:username',
        component: PageUser,
      },
    ],
  },
]