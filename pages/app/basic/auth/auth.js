// pages/app/basic/auth/auth.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },

  /**
   * 获取用户录音权限
   */
  authRecord: function (e) {
    wx.getSetting({
      success: function (res) {
        const authSetting = res.authSetting
        if (!authSetting['scope.record']) {
          wx.authorize({
            scope: 'scope.record',
            success: function (res) {
              // wx.startRecord()
              console.log('成功获取录音权限')
            }
          })
        } else {
          console.log('用户已授予录音权限')
        }
      }
    })
  }
})