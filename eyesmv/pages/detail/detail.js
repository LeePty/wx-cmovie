// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    details:{},
    detailS:[],
    hideText: true,
    hideClass: 'up',
    localover: './xiala.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    var url = 'http://m.maoyan.com/movie';
    url += '/' + id + '.json';
    console.log(url);
    var that = this;
      // 从api请求数据
      wx.request({
        url: url,
        method: 'GET',
        success: function(res) {
          let obj1 = res.data.data.MovieDetailModel;
         that.setData({
          details:obj1
        })
        }       
      });
      wx.request({
        url: url,
        method: 'GET',
        success: function(res) {
          let obj2 = res.data.data.CommentResponseModel.hcmts;
         console.log(res.data.data.CommentResponseModel);
         that.setData({
          detailS:obj2
        })
        }       
      })
  },
  showall: function () {
      var that = this;
      var hide = that.data.hideText;
      var hideClass = that.data.hideClass == 'up' ? 'down' : 'up';
      that.setData({
          hideText: !hide,
          hideClass: hideClass
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