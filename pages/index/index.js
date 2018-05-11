//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    search: "/pages/images/search.png",
    logo: "/images/logo.png",
    articalList: [],
    condition: true,
    keyword: ''
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '首页'
    })
    this.getArticalList();
  },
  getArticalList: function () {
    var self = this
    self.data.condition = false
    wx.request({
      url: app.globalData.service + '/getArtList?keyword=' + self.data.keyword,
      method: 'GET',
      success: function (res) {
        self.setData({
          articalList: res.data.result.list.map(item => ({
            ...item,
            titles: (item.title.length > 17 )? (item.title.substring(0, 17) + '...') : (item.title),
            intro: item.content.substring(0, 50),
            publicTime: item.update_at.split("T", 1)
          }))
        })
        if (res.data.result.list && res.data.result.list.length > 0) {
          self.setData({
            condition: false
          })
        } else {
          self.setData({
            condition: true
          })
        }
      },
      fail: function () {
        self.data.condition = true
      }
    })
  },
  toDetail: function (e) {
    var index = e.currentTarget.dataset.index
    var artList = this.data.articalList
    var id = artList[index]._id
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + id
    })
  },
  bindKeyInput: function (e) {
    this.setData({
      keyword: e.detail.value
    })
    this.getArticalList()
  }
})
