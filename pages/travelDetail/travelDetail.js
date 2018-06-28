const app = getApp()

Page({

  data: {
    detailInfo: {},
    list: [],
    // latitude: 39.92,
    // longitude: 116.46,
    markers: [
      {
        iconPath: "/images/location.png",
        id: 0,
        latitude: 39.92,
        longitude: 116.46,
        width: 50,
        height: 50
      }
    ]
  },

  onLoad: function (options) {
    this.data.index = options.id
    this.setData({
      latitude: options.latitude,
      longitude: options.longitude,
      markers: [{
        iconPath: "/images/location.png",
        id: 0,
        latitude: options.latitude,
        longitude: options.longitude,
        width: 50,
        height: 50
      }]
    })
    this.getDetail()
    this.mapCtx = wx.createMapContext('myMap')
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
      } 
    })
  },
  markertap (event) {
    console.log(event)
  }
})