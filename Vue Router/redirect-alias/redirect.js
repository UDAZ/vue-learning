var router = new VueRouter({
  routes:[
    {path:'/a',redirect: '/b'},
    {path:'/b',component: B},
    {path:'/notfound',component:NotFound},
    {path:'*',redirect:'/notfound'}
  ]
})