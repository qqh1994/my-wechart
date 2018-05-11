// pages/liuyan/liuyan.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    more: '/images/more.png',
    messageList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.setNavigationBarTitle({
    //   title: '留言板'
    // }),
    this.getLiuyanList()
  },
  getLiuyanList: function () {
    var self = this
    wx.request({
      url: app.globalData.service + '/getMessageList',
      method: 'GET',
      success: function (res) {
        self.setData({
          messageList: (res.data.result.list || []).map(item  => ({
            ...item,
            publichDate: item.create_at.split('T', 1)
          }))
        })
      }
    })
  }
})