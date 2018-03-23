// pages/file/file.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: ""
  },
  deleteImg() {
    var _this = this;
    wx.getSavedFileList({
      success: function (res) {
        var len = res.fileList.length;
        for (var i = 0; i < len; i++) {
          wx.removeSavedFile({
            filePath: res.fileList[i].filePath,
            complete: function (res) {
              console.log(res)
              _this.getSavedFileList();
            }
          })
        }
      }
    })
  },
  chooseImg() {
    var _this = this;
    wx.chooseImage({
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        var len = tempFilePaths.length;
        for (var i = 0; i < len; i++) {
          wx.saveFile({
            tempFilePath: tempFilePaths[i],
            success: function (res) {
              var savedFilePath = res.savedFilePath
              _this.getSavedFileList()
            }
          })
        }
      }
    })
  },
  getSavedFileList() {
    var _this = this;
    wx.getSavedFileList({
      success: function (res) {
        console.log(res.fileList)
        _this.setData({
          list: JSON.stringify(res)
        })
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