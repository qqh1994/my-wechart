const app = getApp()

// pages/detail/detail.js
Page({

  data: {
    title: '',
    content: '',
    detailId: ''
  },

  onLoad: function (options) {
    this.detailId = options.id
    this.getDetail()
  },

  getDetail: function () {
    var self = this
    wx.request({
      url: app.globalData.service + '/getArtShow/' + self.detailId,
      method: 'GET',
      success: function (res) {
        self.setData({
          title: res.data.result.title,
          content: res.data.result.content
        })

        wx.setNavigationBarTitle({
          title: (res.data.result.title.length > 15) ? (res.data.result.title.substring(0, 15) + '...') : (res.data.result.title)
        })
      }
    })
  },

  onShareAppMessage: function () {
    return {
      title: '自定义分享标题',
      desc: '自定义分享描述',
      path: '/page/index?id=123',
      success: function (res) {
        // kk
      }
    }
  }
})