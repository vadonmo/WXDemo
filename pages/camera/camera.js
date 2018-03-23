// pages/camera/camera.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: "",
    videoSrc: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  startRecord: function () {
    this.cameraContext.startRecord()
  },
  stopRecord: function () {
    this.cameraContext.stopRecord({
      success: res => {
        console.log(res);
        this.setData({
          videoSrc: res.tempVideoPath,
          src: res.tempThumbPath
        })
      }
    })
  },
  takePhoto: function () {
    this.cameraContext.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.cameraContext = wx.createCameraContext(this);
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