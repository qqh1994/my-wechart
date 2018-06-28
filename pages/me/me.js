// pages/me/me.js
Page({
  data: {
    index: 0,
    isChecking: false,
    mySkill: [
      { content: '能够独立完成网站PC端、移动端的开发，响应式页面、兼容各主流浏览器，了解ES6、ES7、CSS4、HTML5新特性' },
      { content: '了解使用VUE、Angular、React等MV*框架，并有一年半VUE实际项目开发经验，熟练使用ElementUI提高开发效率' },
      { content: '有一定node经验，可以使用node完成项目后端开发' },
      { content: '熟练使用webpack，npm, git提高团队开发效率和进行代码管理' },
      { content: '熟练使用echarts, highcharts, d3实现数据可视化' },
      { content: '熟练使用微信开发者工具，独立完成小程序开发' },
      { content: '了解并使用数据库配合后端完成项目需求' },
      { content: '有良好的代码风格，严谨的编写代码习惯' }
    ],
    myExpList: [
      {
        name: '个人blog',
        time: '2018年2月至今',
        address: 'http://jsan.top',
        direction: 'blog前台页面，主要用作展示功能，总结了一些技术类的文章，以及想去的旅游景点，实现了用户留言与回复功能',
        list: [
          { content: '使用Vue nuxt搭建框架，完成模块化开发'},
          { content: '完成页面的交互效果' },
          { content: '使用mongo noSql数据库' },
          { content: '使用ssr进行服务器渲染' },
          { content: '使用element-ui' },
          { content: '对网站后期维护、更新和开发' }
        ]
      },
      {
        name: 'blog管理页面',
        time: '2018年2月至今',
        direction: 'blog后台页面，管理前台要展示的东西，例如：文章的上传、删除、编辑， 旅游景点的增删改查等',
        list: [
          { content: '使用nginx部署vue静态资源' },
          { content: '使用mongo进行数据处理' },
          { content: '使用nodejs完成后台接口项目' },
          { content: '利用scroll事件实现按需加载数据' }
        ]
      },
      {
        name: '成绩分析',
        time: '6周',
        address: 'http://www.meetyuu.com/achievement',
        direction: '对学校学生每次考试进行数据统计，帮助教师学生家长查看成绩及排名等,考试规则管理,涉及知识点及分数，				考试管理，学生信息录入，试卷信息录入，成绩录入，成绩分析及可视化，权限管理',
        list: [
          { content: '还原设计图，实现网页效果' },
          { content: '使用vue-router实现页面路由跳转' },
          { content: '使用vuex 进行状态管理' },
          { content: '配合后台开发，使用axios进行数据请求以及获取json数据展示与传递' },
          { content: '使用echarts数据可视化' },
          { content: '使用百分比实现页面的动态适应屏幕' },
          { content: '页面兼容和浏览器bug调试' },
          { content: '负责网站后期维护、更新和开发' }
        ]
      },
      {
        name: '问卷调查',
        time: '4周',
        address: 'http://www.meetyuu.com/naire',
        direction: '对教师学生家长发起问卷调查， 公开问卷，外部问卷，内部问卷，问卷审核，问卷设置，等',
        list: [
          { content: '登录用户的身份判断以及对应的功能展示，问卷的状态管理等' },
          { content: '实现问卷预览、下载、发布功能'},
          { content: '使用Element ui实现文件上传下载功能' },
          { content: '实现数据统计、作答人信息统计与展示功能等' }
        ]
      },
    ]
  },


  onLoad: function (options) {
    // wx.setNavigationBarTitle({
    //   title: '自我介绍'
    // })
  },

  toMyDic: function () {
    var self = this
    self.setData({
      index: 0,
      isChecking: true
    })
  },

  toWorkSkill: function () {
    var self = this
    self.setData({
      index: 1,
      isChecking: true
    })
  },

  toProjectExp: function () {
    var self = this
    self.setData({
      index: 2,
      isChecking: true
    })
  },

  toWorkExp: function () {
    var self = this
    self.setData({
      index: 3,
      isChecking: true
    })
  },
})