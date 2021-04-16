var userData = [
  {
    id: 1,
    name: 'Takuya Tejima',
    description: '東南アジアで働くエンジニアです。'
  },
  {
    id: 2,
    name: 'Yohei Noda',
    description: 'アウトドア・フットサルが趣味のエンジニアです。'
  }
]

var getUser = function(userId,callback){
  setTimeout(function(){
    var filteredUsers = userData.filter(function (user){
      return user.id === parseInt(userId,10)
    })
    callback(null, filteredUsers && filteredUsers[0])
  },1000)
}

var UserDetail = {
  template: '#user-detail',
  data: function(){
    return{
      loading: false,
      user: null,
      error: null
    }
  },
  created: function(){
    this.fetchData()
  },
  watch:{
    '$route': 'fetchData'
  },
  methods:{
    fetchData: function(){
      this.loading = true
      getUser(this.$route.params.userId,(function(err,user){
        this.loading = false
        if (err){
          this.error = err.toString()
        } else {
          this.user = user
        }
      }).bind(this))
    }
  }
}

var getUsers = function(callback){
  setTimeout(function(){
    callback(null,[
      {
        id: 1,
        name: 'Takuya Tejima'
      },
      {
        id: 2,
        name: 'Yohei Noda'
      }
    ])
  },1000)
}
var UserList = {
  template: '#user-list',
  data: function(){
    return {
      loading: false,
      users: function(){return[]},
      error: null
    }
  },
  created: function(){
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods:{
    fetchData:function(){
      this.loading = true
      getUsers((function(err,users){
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.users = users
        }
      }).bind(this))
    }
  }
}

var router = new VueRouter({
  routes:[
    {
      path: '/top',
      component:{
        template: '<div>トップページです。</div>'
      }
    },
    {
      path: '/users',
      component: UserList
    },
    {//ルート定義の追加
      path: '/users/:userId',
      component: UserDetail
    }
  ]
})

var app = new Vue({
  router: router
}).$mount('#app')
