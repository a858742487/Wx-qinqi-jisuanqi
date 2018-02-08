//index.js
//获取应用实例
var app = getApp()

Page({
  data: {
    motto: '新年快乐!',
    welcome:'开始体验',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    nickName:'',
    avatarUrl:''
  },
  //事件处理函数
  bindViewTap: function() {
  
    wx.navigateTo({
      url: '../welcome/welcome'
    })
   
  },
  //一进来就加载执行
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })



    if (app.globalData.userInfo) {
      console.log("1")
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
     
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      //console.log("2")
      app.userInfoReadyCallback = res => {
        
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
       //console.log(res.userInfo)
      }
    } else {
      console.log("3")
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
  
})
