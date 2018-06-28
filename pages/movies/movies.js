// pages/movies/movies.js
var util = require('../../utils/util.js');
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inThreaters: {},
    comingSoon: {},
    top250: {},
    searchResult: {},
    containerShow: true,
    serachPanelShow: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var inTheatersUrl = "/v2/movie/in_theaters" + "&start=0&count=3";
    var comingSoonUrl = "/v2/movie/coming_soon" + "&start=0&count=3";
    var top250Url = "/v2/movie/top250" + "&start=0&count=3";
    that.getMovieListData(inTheatersUrl, "inThreaters", '正在热映');
    that.getMovieListData(comingSoonUrl, "comingSoon", '即将上映');
    that.getMovieListData(top250Url, "top250", 'top250');
  },

  getMovieListData(url, settedKey, title) {
    var self = this
    wx.request({
      // url: 'http://localhost:5000' + url,
      url: app.globalData.service + '/getVideoList?url=' + url,
      method: 'GET',
      header: {
        'Content-type': 'application/xml'
      },
      success(res) {
        self.processDoubanData(res.data, settedKey, title)
      }
    })
  },

  processDoubanData (moviesDouban, settedKey, title) {
    var readyData = {};
    var temp = moviesDouban.result.subjects.map(item => ({
      title: (item.title.length > 6) ? (item.title.substring(0, 6) + '...') : (item.title),
      average: item.rating.average,
      coverageUrl: item.images.large,
      movieId: item.id,
      stars: util.convertToStarsArray(item.rating.stars)
    }))
    readyData[settedKey] = {
      movies: temp,
      categoryTitle: title
    }
    this.setData(readyData)
  },

  onBindFocus (event) {
    this.setData({
      serachPanelShow: true,
      containerShow: false
    })
  },

  onCanceImageTap (event) {
    this.setData({
      serachPanelShow: false,
      containerShow: true,
      searchResult: ''
    })
  },

  onBindChange (event) {
    var text = event.detail.value
    var searchUrl = '/v2/movie/search&q=' + text;
    this.getMovieListData(searchUrl, "searchResult", "")
  },

  toDetail (event) {
    var movieId = event.currentTarget.dataset.movieid
    wx.navigateTo({
      url: '/pages/movies/movie-detail/movie-detail?id=' + movieId,
    })
  },

  onMoreTap (event) {
    var category = event.currentTarget.dataset.category
    wx.navigateTo({
      url: '/pages/movies/more-movie/more-movie?category=' + category
    })
  }
})