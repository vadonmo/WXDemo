// pages/storage/storage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  setStorage: function () {
    wx.setStorage({
      key: 'key1',
      data: 'data1',
    })
  },
  setStorageSync: function () {
    wx.setStorageSync("key2", "data2");
  },
  getStorage: function () {
    wx.getStorage({
      key: 'key1',
      success: function (res) {
        console.log(res);
      },
    })
  },
  getStorageSync: function () {
    var value = wx.getStorageSync("key2");
    console.log(value);
  },
  getStorageInfo: function () {
    wx.getStorageInfo({
      success: function (res) {
        console.log(res);
      },
    })
  },
  getStorageInfoSync: function () {
    var res = wx.getStorageInfoSync();
    console.log(res);
  },
  removeStorage: function () {
    wx.removeStorage({
      key: 'key1',
      success: function (res) {
        console.log(res);
      },
    })
  },
  removeStorageSync: function () {
    wx.removeStorageSync("key2");//无返回值
  },
  clearStorage: function () {
    wx.clearStorage();
  },
  clearStorageSync: function () {
    try {
      wx.clearStorageSync();
    } catch (e) {
      console.log(e);
    }
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

  }
})