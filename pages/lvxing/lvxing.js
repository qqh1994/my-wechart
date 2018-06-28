// pages/lvxing/lvxing.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    travelList: []
    // isPlayingMusic: false
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
    var index = e.currentTarget.dataset.index._id
    var latitude = e.currentTarget.dataset.index.position[1]
    var longitude = e.currentTarget.dataset.index.position[0]
    wx.navigateTo({
      url: '/pages/travelDetail/travelDetail?id=' + index + '&latitude=' + latitude + '&longitude=' + longitude
    })
  }
  // 音乐播放软件
  // onMusicTap: function () {
  //   var self = this
  //   var isPlayingMusic = this.data.isPlayingMusic

  //   if (isPlayingMusic) {
  //     wx.pauseBackgroundAudio()
  //     self.setData({
  //       isPlayingMusic: false
  //     })
  //   } else {
  //     wx.playBackgroundAudio({
  //       dataUrl: 'http://ws.stream.qqmusic.qq.com/C100002mWVx72p8Ugp.m4a?fromtag=38',
  //       title: '带你去旅行--校长',
  //       coverImgUrl: 'http://qukufile2.qianqian.com/data2/pic/51677db1f7b51f1f1bacd1a2498665ff/190892/190892.jpg@s_1,w_150,h_150'
  //     })
  //     self.setData({
  //       isPlayingMusic: true
  //     })
  //   }
  // }

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