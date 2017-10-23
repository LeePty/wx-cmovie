// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cinemas1: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
      // 从api请求数据
      wx.request({
        url: 'http://m.maoyan.com/cinemas.json', 
        method: 'GET',
        success: function(res) {
         console.log(res.data.data);
         let obj1 = res.data.data.青山湖区;
          that.setData({
            cinemas1:obj1
          })
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