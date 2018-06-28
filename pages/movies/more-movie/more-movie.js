var util = require('../../../utils/util.js');

var app = getApp()
// pages/movies/more-movie/more-movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navigateTitle: '',
    requestUrl: '',
    totalCount: 0,
    movies: {},
    isEmpty: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.navigateTitle = options.category
    var dataUrl = ''
    switch (this.data.navigateTitle) {
      case "正在热映": 
        dataUrl = app.globalData.service + '/getVideoList?url=/v2/movie/in_theaters';
        break;
      case "即将上映":
        dataUrl = app.globalData.service + '/getVideoList?url=/v2/movie/coming_soon';
        break;
      case "top250":
        dataUrl = app.globalData.service + '/getVideoList?url=/v2/movie/top250';
        break;
    }
    this.data.requestUrl = dataUrl
    util.http(dataUrl, this.processDoubanData)
  },
// 加载更多
  processDoubanData: function (moviesDouban) {
    var self = this
    var typeName = moviesDouban.title
    var temp = moviesDouban.result.subjects.map(item => ({
      title: (item.title.length > 6) ? (item.title.substring(0, 6) + '...') : (item.title),
      average: item.rating.average,
      coverageUrl: item.images.large,
      movieId: item.id,
      stars: util.convertToStarsArray(item.rating.stars)
    }))
    var totalMovies = {}
    if (!self.data.isEmpty) {
      totalMovies = self.data.movies.concat(temp);
    } else {
      totalMovies = temp;
      self.data.isEmpty = false;
    }
    this.setData({
      movies: totalMovies
    });
    self.data.totalCount += 20
    wx.hideNavigationBarLoading()
    wx.stopRe
  },

  onScrollLower (event) {
    var nextUrl = this.data.requestUrl + "?start=" + this.data.totalCount + "&count=20";
    util.http(nextUrl, this.processDoubanData)
    wx.showNavigationBarLoading()
    wx.stopPullDownRefresh()
  },

  onPullDownRefresh: function (event) {
    var that = this
    var refreshUrl = this.data.requestUrl + "?star=0&count=20";
    this.data.isEmpty = true
    this.data.movies = {}
    this.data.totalCount = 0
    util.http(refreshUrl, that.processDoubanData)
  },

  toDetail(event) {
    var movieId = event.currentTarget.dataset.movieid
    wx.navigateTo({
      url: '/pages/movies/movie-detail/movie-detail?id=' + movieId,
    })
  },
    
  onReady: function (event) {
    wx.setNavigationBarTitle({
      title: this.data.navigateTitle,
    })
  }
})