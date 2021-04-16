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
    }
  ]
})

//ルーターのインスタンスをrootとなるVueインスタンスに渡す
var app = new Vue({
  router:router
}).$mount('#app')