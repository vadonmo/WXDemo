// pages/system/system.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Accelerometer: "",
    Compass: ""
  },
  getSystemInfo: function () {
    wx.getSystemInfo({
      success: function (res) {
        console.log(res);
        wx.showModal({
          title: '系统信息',
          content: JSON.stringify(res),
        })
      },
    })
  },
  getNetworkType: function () {
    wx.getNetworkType({
      success: function (res) {
        console.log(res);
        wx.showModal({
          title: '网络信息',
          content: res.networkType,
        })
      },
    })
  },
  startAccelerometer: function () {
    wx.startAccelerometer()
  },
  stopAccelerometer: function () {
    wx.stopAccelerometer()
  },
  startCompass: function () {
    wx.startCompass()
  },
  stopCompass: function () {
    wx.stopCompass()
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var _this = this;
    wx.onNetworkStatusChange(function (res) {
      console.log(res.isConnected)
      console.log(res.networkType)
      wx.showModal({
        title: '网络信息',
        content: res.isConnected + '\n' + res.networkType,
      })
    }),
      wx.onAccelerometerChange(function (res) {
        console.log(res.x)
        console.log(res.y)
        console.log(res.z)
        _this.setData({
          Accelerometer: 'x:' + res.x + " y:" + res.y + " z:" + res.z
        })
      }),
      wx.onCompassChange(function (res) {
        _this.setData({
          Compass: res.direction
        })
      })

  },
  makePhoneCall: function () {
    wx.makePhoneCall({
      phoneNumber: '15621891913',
    })
  },
  scanCode: function () {
    wx.scanCode({
      success(res) {
        wx.showModal({
          title: '扫码结果',
          content: JSON.stringify(res),
        })
      },
      fail(res) {
        console.log(res);
      }
    })
  },
  setClipboardData: function (e) {
    console.log(e)
    wx.setClipboardData({
      data: e.currentTarget.dataset.text,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  getClipboardData: function () {
    wx.getClipboardData({
      success(res) {
        wx.showModal({
          title: '剪切板内容',
          content: res.data,
        })
      }
    })
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
    console.log("页面隐藏")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("页面卸载")
    wx.stopAccelerometer();//停止监听
    wx.stopCompass()
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