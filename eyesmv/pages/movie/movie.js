// pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "movies":[],
    scrollHeigth: 0,
    scrollTop: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this;
      // 加载框
      wx.showToast({
        titlt: '加载中',
        icon: 'loading',
        duration: 1000
      })
      // 从api请求数据
      wx.request({
        url: 'http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=1000',
        method: 'GET',
        success: function(res) {
          let obj = res.data.data.movies;
          console.log(res.data.data.movies);
          that.setData({movies:obj});
        }       
      })
   },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
 

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})