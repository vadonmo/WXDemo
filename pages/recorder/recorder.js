// pages/recorder/recorder.js
const recorderManager = wx.getRecorderManager();
const innerAudioContext = wx.createInnerAudioContext();
var src;
//innerAudioContext.src = filePath;
const options = {
  duration: 10000,
  sampleRate: 44100,
  numberOfChannels: 1,
  encodeBitRate: 192000,
  format: 'aac',
  frameSize: 50
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  startRecorder: function () {
    recorderManager.start(options);
  },
  stopRecorder: function () {
    recorderManager.stop();
  },
  pauseRecorder: function () {
    recorderManager.pause();
  },
  resumeRecorder: function () {
    recorderManager.resume();
  },
  playVoice: function (e) {
    console.log("播放");
    innerAudioContext.src = "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46";
    innerAudioContext.play();
    innerAudioContext.onPlay(() => {
      console.log('开始播放')
    })
  },
  pauseVoice: function () {
    console.log("暂停")
    innerAudioContext.pause();
  },
  stopVoice: function () {
    console.log("停止")

    innerAudioContext.stop();
  },
  playBackgroundAudio: function () {
    const backgroundAudioManager = wx.getBackgroundAudioManager()

    backgroundAudioManager.title = '此时此刻'
    backgroundAudioManager.epname = '此时此刻'
    backgroundAudioManager.singer = '许巍'
    backgroundAudioManager.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
    backgroundAudioManager.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46' // 设置了 src 之后会自动播放

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //进入页面先要权限
    wx.getSetting({
      success(res) {
        console.log("授权")
        if (!res.authSetting['scope.record']) {
          wx.authorize({
            scope: 'scope.record',
            success() {
              console.log("授权成功")
            },
            fail() {
              wx.showModal({
                title: '权限管理',
                content: '小程序需要授权录音功能',
                success: res => {
                  if (res.confirm) {
                    wx.openSetting({
                      success: (res) => {
                        console.log(res);
                        if (!res.authSetting['scope.record']) {
                          wx.switchTab({
                            url: '../demo/demo',
                            success: res => {
                              console.log("成功")
                            },
                            fail: res => {
                              console.log(res)
                            }
                          })
                        }
                      }
                    });
                  } else {
                    console.log('用户取消')
                    wx.switchTab({
                      url: '../demo/demo',
                      success: res => {
                        console.log("成功")
                      },
                      fail: res => {
                        console.log(res)
                      }
                    })
                  }
                }
              })
              console.log('用户拒绝')
            }
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    innerAudioContext.src = src;
    recorderManager.onStart(() => {
      console.log('recorder start')
    })
    recorderManager.onResume(() => {
      console.log('recorder resume')
    })
    recorderManager.onPause(() => {
      console.log('recorder pause')
    })
    recorderManager.onStop((res) => {
      console.log('recorder stop', res.tempFilePath)
      filePath = res.tempFilePath;
    })
    recorderManager.onFrameRecorded((res) => {
      console.log('frameBuffer.byteLength', res.byteLength)
    })

    innerAudioContext.onPause(() => {
      console.log('暂停播放')
    })
    innerAudioContext.onStop(() => {
      console.log('停止播放')
    })
    innerAudioContext.onEnded(() => {
      console.log('播放结束')
    })
    innerAudioContext.onTimeUpdate(() => {
      console.log('播放更新')
    })
    innerAudioContext.onError((res) => {
      console.log(res);
      console.log(res.errMsg)
      console.log(res.errCode)
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