Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		// 被点击菜单索引
		currentIndexNav: 0,
		navList: [
			{
				text: "推荐",
				id: 0
			},
			{
				text: "动画",
				id: 1
			},
			{
				text: "番剧",
				id: 2
			},
			{
				text: "国创",
				id: 3
			},
			{
				text: "音乐",
				id: 4
			},
			{
				text: "纪录片",
				id: 5
			}
		],
		// 图片地址
		swiperList: [
			{
				imgSrc:
					"https://i0.hdslb.com/bfs/archive/8860d7a57a9b1992c112ee56a35444cfc445108b.jpg@480w_300h.webp"
			},
			{
				imgSrc:
					"https://i0.hdslb.com/bfs/archive/bf2aa1f18ccae9ecae4cb666417f75da951ee2f4.jpg@480w_300h.webp"
			},
			{
				imgSrc:
					"https://i0.hdslb.com/bfs/archive/82232bca677f06d69734159653cf29db82ff5d9c.png@480w_300h.webp"
			},
			{
				imgSrc:
					"https://i0.hdslb.com/bfs/archive/28d93d03968baa475a2c3982640736a66b4405c3.jpg@480w_300h.webp"
			}
		],
		// 视频信息
		videosList: [
			{
				id: "BV1cs41197x4",

				imgSrc:
					"http://i0.hdslb.com/bfs/archive/d6ac4c4c281f3aba307a324248e8632f02cd874e.jpg",
				desc: "【周杰伦】洗脑神曲《一口气全念对》官方版MV【1080P】",
				playCount: "28.9万",
				commentCount: "817"
			},
			{
				id: 1,

				imgSrc:
					"https://i1.hdslb.com/bfs/archive/54cd74a9bfd187fb795724c7bb51272e7c07a2e5.jpg@320w_200h.webp",
				desc: "【改革春风吹满地】【漫威/香港电影/赵本山】和斧头帮一起吹满地吧~",
				playCount: "30.4万",
				commentCount: "373"
			},
			{
				id: 2,

				imgSrc:
					"https://i0.hdslb.com/bfs/archive/02cf0e3a1fd52f80763fd51ee7fae69e51cf173c.jpg@320w_200h.webp",
				desc: "迈克尔杰克逊封神的12秒，无人能做到",
				playCount: "63.8万",
				commentCount: "7825"
			},
			{
				id: 3,

				imgSrc:
					"https://i0.hdslb.com/bfs/archive/dc7147ffa4e11a2fffa84b295b2f2bdbbfe3e6d7.jpg@320w_200h.webp",
				desc: "【2018】年度影视混剪 Ready Story 2018【混剪】",
				playCount: "40.0万",
				commentCount: "1066"
			},
			{
				id: 4,

				imgSrc:
					"https://i2.hdslb.com/bfs/archive/2cc604557cab1f6fd79591981891467f7b825010.jpg@320w_200h.webp",
				desc: "当你觉得扛不住的时候来看看这段视频",
				playCount: "82.7万",
				commentCount: "719"
			},
			{
				id: 5,

				imgSrc:
					"https://i0.hdslb.com/bfs/archive/0563c3df12637178e8b08858e5fd11e4a6906acc.jpg@320w_200h.webp",
				desc: "世界上广告最多的网站判定！真的有10000条广告！【暗物质#2】",
				playCount: "24.9万",
				commentCount: "1345"
			},
			{
				id: 6,

				imgSrc:
					"https://i0.hdslb.com/bfs/archive/0bf251d3f3b2cb589532aa24eaea140b312f7765.jpg@320w_200h.webp",
				desc: "【木鱼微剧场】诺兰作品《星际穿越》，严谨的科学精神与深刻人文关怀（Re:C）",
				playCount: "44.6万",
				commentCount: "7149"
			},
			{
				id: 7,

				imgSrc:
					"https://i1.hdslb.com/bfs/archive/4a4155cf25b38da958e64b531709bca37927c82b.jpg@320w_200h.webp",
				desc: "【嘻咦啊看】其实很多人一辈子都不懂得怎样道歉",
				playCount: "63.8万",
				commentCount: "7825"
			},
			{
				id: 8,

				imgSrc:
					"https://i0.hdslb.com/bfs/archive/b08463bc1257b6294bad1e1646a3203f9f3a0c60.jpg@320w_200h.webp",
				desc: "【圣地亚哥金曲】藏，超好听的中国风电音鬼畜！",
				playCount: "63.8万",
				commentCount: "7825"
			},
			{
				id: 9,

				imgSrc:
					"https://i0.hdslb.com/bfs/archive/9046c3db8d6cddf56287fa1ead4e406baf4747f3.jpg@320w_200h.webp",
				desc: "一家永远没有回头客的店《自杀专卖店》",
				playCount: "40.0万",
				commentCount: "1066"
			},
			{
				id: 10,

				imgSrc:
					"https://i1.hdslb.com/bfs/archive/67e474f4fa31d5a2a8a6241a28cdf67be898eed4.png@320w_200h.webp",
				desc: "【演技】吃饭同样是吃空气，为什么演技差距如此之大！",
				playCount: "65.7万",
				commentCount: "3083"
			},
			{
				id: 11,

				imgSrc:
					"https://i1.hdslb.com/bfs/archive/67be0fadbe5eec5b967132c38fba65913cac7f43.jpg@320w_200h.webp",
				desc:
					"【盘点火影真人版】我叫王大锤，是个忍者！这次参加了一个高成本火影忍者大电影！！",
				playCount: "46.1万",
				commentCount: "2090"
			},
			{
				id: 12,

				imgSrc:
					"https://i1.hdslb.com/bfs/archive/332b9cf87e30331277c84dcc47b1d53c2cb3fdfb.jpg@320w_200h.webp",
				desc: "女部落奇怪规定，女人怀孕后必须吃男人补身体，还好这只是电影",
				playCount: "56.6万",
				commentCount: "663"
			},
			{
				id: 13,

				imgSrc:
					"https://i2.hdslb.com/bfs/archive/2e30177ef42ea0a420cd9926870d1463ed0be11c.jpg@320w_200h.webp",
				desc: "《爱情公寓》令人窒息的骚操作！让人笑出猪叫声的神操作盘点！ 第十九弹",
				playCount: "53.9万",
				commentCount: "543"
			},
			{
				id: 14,

				imgSrc:
					"https://i0.hdslb.com/bfs/archive/cab6d4254e4b97a0edf4d2393f5e8aed4a90201c.jpg@320w_200h.webp",
				desc: "【全程高能】一个角色的三观到底能够正到什么地步【世间清流】",
				playCount: "32.6万",
				commentCount: "2425"
			},
			{
				id: 15,

				imgSrc:
					"https://i0.hdslb.com/bfs/archive/396dfc33b8c3f426606760f9614759d7cf29c28d.png@320w_200h.webp",
				desc: "明星20年后再次演绎自己的经典角色，谁变化最小",
				playCount: "46.6万",
				commentCount: "2770"
			}
		]
	},
	// 点击导航按钮
	colBtn(e) {
		console.log(e.target.dataset);
		this.setData({
			currentIndexNav: e.target.dataset.index
		});
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function() {},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function() {},

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
