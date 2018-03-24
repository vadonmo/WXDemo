// pages/device/bluetooth/bluetooth.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    available: false,
    discovering: false,
    connectedDeviceId: ""
  },
  openBluetoothAdapter: function () {
    var _this = this;
    wx.openBluetoothAdapter({
      success: function (res) {
        console.log(res);
        // _this.setData({
        //   discovering: res.discovering ? "在搜索" : "未搜索",
        //   available: res.available ? "可用" : "不可用",
        // })
        _this.getBluetoothAdapterState();
      }, fail(res) {
        console.log(res);
        wx.showModal({
          title: '蓝牙',
          content: '初始化失败，请打开蓝牙',
        })
      }
    })
  },
  closeBluetoothAdapter: function () {
    var _this = this;
    wx.closeBluetoothAdapter({
      success: function (res) {
        console.log(res);
        _this.setData({
          discovering: "未搜索",
          available: "不可用",
        })
      },
      fail(res) {
        console.log(res);
      }
    })
  },
  getBluetoothAdapterState: function () {
    var _this = this;
    wx.getBluetoothAdapterState({
      success: function (res) {
        console.log(res);
        _this.setData({
          discovering: res.discovering ? "在搜索" : "未搜索",
          available: res.available ? "可用" : "不可用",
        })
      }, fail(res) {
        console.log(res);
        wx.showModal({
          title: '蓝牙状态',
          content: "蓝牙未初始化",
        })
      }
    })
  },
  startBluetoothDevicesDiscovery: function () {
    var _this = this;
    wx.startBluetoothDevicesDiscovery({
      success: function (res) {
        console.log(res);
        _this.setData({
          discovering: res.isDiscovering ? "在搜索" : "未搜索"
        })
      },
    })
  },
  stopBluetoothDevicesDiscovery: function () {
    var _this = this;
    wx.stopBluetoothDevicesDiscovery({
      success: function (res) {
        console.log(res);
        _this.setData({
          discovering: res.isDiscovering ? "在搜索" : "未搜索"
        })
      },
    })
  },
  getBluetoothDevices: function () {
    var _this = this;
    wx.getBluetoothDevices({
      success: function (res) {
        console.log(res);
        wx.getConnectedBluetoothDevices({
          success: function (res) {
            console.log(res);
            // _this.setData({
            //   connectedDeviceId: res.deviceId
            // })
          }
        })
      }
    })
  },
  getConnectedBluetoothDevices: function () {
    wx.getConnectedBluetoothDevices({
      success: function (res) {
        console.table(res);
      },
      fail(res) {
        console.table(res);
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.openBluetoothAdapter();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var _this = this;
    wx.onBluetoothAdapterStateChange(function (res) {
      console.table(res);
      _this.setData({
        discovering: res.discovering ? "在搜索" : "未搜索",
        available: res.available ? "可用" : "不可用",
      })
    }),
      wx.onBluetoothDeviceFound(function (devices) {
        console.table(devices);
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
// ArrayBuffer转16进度字符串示例
function ab2hex(buffer) {
  var hexArr = Array.prototype.map.call(
    new Uint8Array(buffer),
    function (bit) {
      return ('00' + bit.toString(16)).slice(-2)
    }
  )
  return hexArr.join('');
}