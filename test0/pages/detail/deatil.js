// pages/detail/deatil.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 视频详情
    videoINfo: {
      bvid: "BV1cs41197x4",
      aid: 3832147,
      tname: "MV",
      pic: "http://i0.hdslb.com/bfs/archive/d6ac4c4c281f3aba307a324248e8632f02cd874e.jpg",
      title: "【周杰伦】洗脑神曲《一口气全念对》官方版MV【1080P】",
      pubdate: 1455403649,
      ctime: 1497432940,
      desc: "音扑台 《一口气全念对》是周杰伦全新创作专辑中的歌。由周杰伦作曲编曲制作。\r\n这首非常杰伦式的嘻哈舞曲，如一开场的OS，就是要大家高举手，一起动起来开趴！",
      owner: {
        mid: 14291715,
        name: "欧皇少爷",
        face: "http://i2.hdslb.com/bfs/face/e93d7b9270612cb3d11527fe44c1c4b7b1c1627a.jpg"
      }
    },
    // 评论数据
    commentList: [{
        "userIconSrc": "https://i2.hdslb.com/bfs/face/fe81d93c5beb92557474f48551d3b4966eadeeef.jpg@60w_60h.webp",
        "username": "峰岛达裕",
        "commentInfo": "什么？居然不是某些网站的澳门皇家赌场？"
      },
      {
        "userIconSrc": "https://i2.hdslb.com/bfs/face/3e1997d2d018b7c973eb7203c574e448e6d9c491.jpg@60w_60h.webp",
        "username": "黑狌白鸾",
        "commentInfo": "鲁迅说过，如果你有一个苹果，我有一个苹果，我们交换，一人还是一个苹果，如果你有一个网站，我有一个网站，我们交换那我们双方就有两个网站"
      },
      {
        "userIconSrc": "https://i1.hdslb.com/bfs/face/d2fa6637d952d176a13c706f5efd179f52a12367.jpg@60w_60h.webp",
        "username": "马猴烧酒柊筱娅",
        "commentInfo": "等等，那这样的话，牧草君岂不是一个视频打了1w多个广告[小电视_吃惊]"
      },
      {
        "userIconSrc": "https://i1.hdslb.com/bfs/face/c605ce1a2f47b049ab7f271aa228bb8e96a43bf0.jpg@60w_60h.webp",
        "username": "NAN某",
        "commentInfo": "我经常逛的那些网站也有很多广告(｀・ω・´)"
      },
      {
        "userIconSrc": "https://i0.hdslb.com/bfs/face/54923922eea6532c2dff95e45743b6a1203c0230.jpg@60w_60h.webp",
        "username": "牧草君",
        "commentInfo": "你们赶快去这个王网站了里面找找好玩的，我已经找到好几个(✪▽✪)好康的网站了[小电视_赞]"
      }
    ],
    goodstxt: '',
    userInfo: null,
  },
  goodstxt: function(e) {
    this.setData({
      goodstxt: e.detail.value
    })
  },
  clickButton: function() {
    var commentList = this.data.commentList
    if (this.data.goodstxt) {
      // console.log(this.data.goodstxt);
      var txtData = {
        userIconSrc: this.data.userInfo.avatarUrl,
        username: this.data.userInfo.nickName,
        commentInfo: this.data.goodstxt
      }
      commentList.push(txtData);
      console.log(commentList)
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 获取用户数据
    wx.getUserInfo({
      withCredentials: true,
      lang: '',
      success: (res) => {
        // 读取数据
        console.log(res.userInfo)
        // 设置状态
        this.setData({
          userInfo: res.userInfo
        })
        // console.log(this.data.userInfo)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
});