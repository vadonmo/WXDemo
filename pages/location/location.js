// pages/location/location.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      iconPath: "../resources/liftonline.png",
      id: 0,
      latitude: 36.66645,
      longitude: 117.07641,
      width: 50,
      height: 50
    }],
  },
  getLocation: function () {
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        console.log(res)
        wx.showModal({
          title: '位置信息',
          content: JSON.stringify(res),
        })
      },
    })
  },
  chooseLocation: function () {
    wx.chooseLocation({
      success: function (res) {
        console.log(res)
        wx.showModal({
          title: '位置信息',
          content: (res.name ? '名称：' + res.name + '\n' : "") + '地址：' + (res.address ? res.address : res.latitude + "," + res.longitude),
        })
      },
    })
  },
  openLocation: function () {
    wx.openLocation({
      latitude: 36.66645,
      longitude: 117.07641,
    })
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function (res) {
        wx.showModal({
          title: '位置信息',
          content: JSON.stringify(res),
        })
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation();
  },
  translateMarker: function () {
    var mapCtx = this.mapCtx;
    this.mapCtx.translateMarker({
      markerId: 0,
      destination: {
        latitude: 36.66645,
        longitude: 117.09741,
      },
      autoRotate: false,
      rotate: 90,
      duration: 10000,//单位ms
      fail(res) {
        console.log(res);
      }
    })
  },
  includePoints: function () {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 36.66645,
        longitude: 117.09741,
      }, {
        latitude: 36.66645,
        longitude: 117.19741,
      }, {
        latitude: 36.66645,
        longitude: 116.99741,
      }]
    })
  },
  getRegion: function () {
    this.mapCtx.getRegion({
      success(res) {
        console.log(res);
        wx.showModal({
          title: '视野范围',
          content: JSON.stringify(res),
        })
      }
    })
  },
  getScale: function () {
    this.mapCtx.getScale({
      success(res) {
        console.log(res);
        wx.showModal({
          title: '缩放级别',
          content: JSON.stringify(res),
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
    this.mapCtx = wx.createMapContext('myMap');
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