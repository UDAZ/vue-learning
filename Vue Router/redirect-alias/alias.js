var router = new VueRouter({
  routes:[
    // /bにアクセスしたとき、URL上は/bのままだけど/aの振る舞いをする
    {path:'/a',component:A,alias:'/b'},
    {path:'/c',component:C,alias:['/d','/e']}
  ]
})