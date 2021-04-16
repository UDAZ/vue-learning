//ルートオプションを渡してルータインスタンスを生成します。
var router = new VueRouter({
  //コンポーネントをマッピングしたルート定義を配列で渡す
  routes: [
    {
      path: '/top',
      component: {
        template: '<div>トップページです。</div>'
      }
    },
    {
      path: '/users',
      component: {
        template: '<div>ユーザー一覧ページです。</div>'
      }
    },
    {
      //コロンで始まるパターンマッチング
      path: '/user/:userId',
      name: 'user',
      component: {
        template: '<div>ユーザーIDは{{ $route.params.userId }}です。</div>'
      }
    }
  ]
})
//グローバルのフック関数
router.beforeEach(function (to,from,next){
  //ユーザー一覧ページへアクセスしたときに/topへリダイレクトする例
  if (to.path === '/users'){
    next('/top')
  } else {
    //因数なしでnextを呼び出すと通常通りの遷移が行われる
    next()
  }
})
//ルーターのインスタンスをrootとなるVueインスタンスに渡す
var app = new Vue({
  router:router
}).$mount('#app')