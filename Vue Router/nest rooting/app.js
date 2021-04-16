//ユーザー詳細ページのコンポーネント定義
var User = {
  template:
  '<div class="user">'+
  '<h2>ユーザーIDは{{$route.params.userId}}です。</h2>'+
  '<router-link :to"\'/user/\' + $route.params.userId + \'/profile\'">ユーザーの投稿ページを見る</router-link>' +
  '<router-view></router-view>'+
  '</div>'
}

//ユーザー詳細ページ内で部分的に表示されるユーザーのプロフィールページ
var UserProfile = {
  template:
  '<div class="user-profile">'+
    '<h3>こちらはユーザー{{$route.params.userId}}のプロフィールページです。</h3>'+
  '</div>'
}

//ユーザー詳細ページ内で部分的に表示されるユーザーの投稿ページ
var UserPosts = {
  template:
  '<div class="user-posts">'+
    '<h3>こちらはユーザー{{$route.params.userId}}の投稿ページです。</h3>'+
  '</div>'
}
var router = new VueRouter({
  routes:[
    {
      path: '/user/:userId',
      name: 'user',
      component: User,
      children:[
        {
          // /user/:userId/profileがマッチしたときに
          // UserProfileコンポーネントはUserコンポーネントの<router-view>内部でレンダリングされます
          path: 'profile',
          component: UserProfile
        },
        {
          path: 'posts',
          component: UserPosts
        }
      ]
    }
  ]
})