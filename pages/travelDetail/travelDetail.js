const app = getApp()

Page({

  data: {
    detailInfo: {},
    list: []
  },

  onLoad: function (options) {
    this.data.index = options.id
    this.getDetail()
  },

  getDetail: function () {
    var self = this
    wx.request({
      url: app.globalData.service + '/travelDetail/' + this.data.index,
      method: 'GET',
      success: function (res) {
        self.setData({
          detailInfo: res.data.result,
          list: JSON.parse(res.data.result.list).map(item => ({
            ...item,
            images: JSON.parse(item.imgs)
          }))
        })
        console.log(self.data.list)
      } 
    })
  }

})