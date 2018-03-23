// pages/image/image.js
Page({
  /**
     * 页面的初始数据
     */
  data: {
    imgSrc: "",
    tempFilePaths: []
  },
  chooseImg: function () {
    var _this = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        console.log(res);
        _this.setData({ tempFilePaths: res.tempFilePaths })
      },
    })
  },
  previewImage: function (e) {
    console.log(e.currentTarget.dataset.imgSrc);
    wx.previewImage({
      urls: [e.currentTarget.dataset.imgSrc]
    })
  },
  getImageInfo: function (e) {
    console.log(e.currentTarget.dataset.imgSrc);
    var _this = this;
    wx.getImageInfo({
      src: e.currentTarget.dataset.imgSrc,
      success: function (res) {
        console.log(res);
        var path = res.path;
        wx.showModal({
          title: "图片信息",
          content: JSON.stringify(res),
          showCancel: false,
          confirmText: "保存相册",
          success: function (res) {
            //if (res.confirm) {
            console.log('用户点击确定')
            _this.saveImageToPhotosAlbum(path);
            //}
          }
        })
      }
    })
  },
  saveImageToPhotosAlbum(path) {
    console.log("保存")
    wx.getSetting({
      success(res) {
        console.log("授权")
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success() {
              console.log("授权成功")
              wx.saveImageToPhotosAlbum({
                filePath: path,
              })
            },
            fail() {
              wx.openSetting({ success: (res) => { console.log(res); } });
              console.log('用户拒绝')
            }
          })
        } else {
          wx.saveImageToPhotosAlbum({
            filePath: path,
          })
        }
      }
    })

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