// pages/movies/movie-detail/movie-detail.js
var app = getApp();
// var util = require('../../../utils/util.js');
import { Movie } from 'class/Movie.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var movieId = options.id
    var url = app.globalData.service + '/getVideoList?url=/v2/movie/subject/' + movieId
    // util.http(url, this.processDoubanData);
    var movie = new Movie(url);
    var that = this
    // movie.getMovieData(function (movie) {
    //   that.setData({
    //     movie: movie
    //   })
    // })
    movie.getMovieData((movie) => {
      this.setData({
        movie: movie
      })
    })
  },

  // processDoubanData (data) {
  //   if (!data) {
  //     return;
  //   }
  //   var director = {
  //     avatar: "",
  //     name: "",
  //     id: ""
  //   }
  //   // 豆瓣有的电影年代比较长，avator有可能会为空值，点击会报错
  //   if (data.result.directors[0] != null) {
  //     if (data.result.directors[0].avatars != null) {
  //       director.avatar = data.result.directors[0].avatars.large
  //     }
  //     director.name = data.result.directors[0].name
  //     director.id = data.result.directors[0].id
  //   }

  //   var movie = {
  //     movieImg: data.result.images ? data.result.images.large : '',
  //     country: data.result.countries[0],
  //     title: data.result.title,
  //     originalTitle: data.result.original_title,
  //     wishCount: data.result.wish_count,
  //     commentCount: data.result.comments_count,
  //     year: data.result.year,
  //     generes: data.result.genres.join("、"),
  //     stars: util.convertToStarsArray(data.result.rating.stars),
  //     score: data.result.rating.average,
  //     director: director,
  //     casts: util.converToCastString(data.result.casts),
  //     castsInfo: util.converToCastInfos(data.result.casts),
  //     summary: data.result.summary
  //   }
  //   this.setData({
  //     movie:movie
  //   })
  // },


  viewMoviePostImg (e) {
    var src = e.currentTarget.dataset.src;
    wx.previewImage({
      current: src,
      urls: [src]
    })
  }
})