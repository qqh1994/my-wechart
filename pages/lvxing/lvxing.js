// pages/lvxing/lvxing.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    travelList: []
  },

  onLoad: function (options) {
    // wx.setNavigationBarTitle({
    //   title: '一起去旅行'
    // })
    this.getList()
  },

  getList: function () {
    var self = this
    wx.request({
      url: app.globalData.service + '/travelList',
      method: 'GET',
      success: function (res) {
        self.setData({
          travelList: (res.data.result || []).map(item => ({
            ...item,
            content: (item.other.length > 50) ? (item.other.substring(0, 49) + '...') : (item.other)
          }))
        })
      }
    })
  },

  // 查看详情
  toDetail: function (e) {
    var index = e.currentTarget.dataset.index
    wx.navigateTo({
      url: '/pages/travelDetail/travelDetail?id=' + index
    })
  }

  // 显示模态窗口
  // getModel: function () {
  //   wx.showModal({
  //     title: '提示',
  //     content: '这是一个模态弹窗',
  //     success: function (res) {
  //       if (res.confirm) {
  //         console.log('用户点击确定')
  //       } else if (res.cancel) {
  //         console.log('用户点击取消')
  //       }
  //     }
  //   })
  // }
})