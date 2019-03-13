Page({
  data: {
    navigatorArray: [
      {
        url: '/pages/rmbCapital/rmbCapital',
        src: './icon-rmb.png',
        text: '人民币大写'
      },
      {
        url: '/pages/phoneNumber/phoneNumber',
        src: './icon-tel.png',
        text: '常用电话'
      },
      {
        url: '/pages/qrCode/qrCode',
        src: './icon-ewmsc.png',
        text: '二维码生成'
      },
      {
        url: '/pages/scanCode/scanCode',
        src: './icon-ewmsm.png',
        text: '二维码识别'
      },
      {
        url: '/pages/xfyunOcr/xfyunOcr',
        src: './icon-ocr.png',
        text: '图转文字'
      },
      {
        url: '/pages/xfyunTts/xfyunTts',
        src: './icon-tts.png',
        text: '文字转语音'
      },
      {
        url: '/pages/nopage/nopage',
        src: './icon-lhl.png',
        text: '老黄历'
      },
      {
        url: '/pages/nopage/nopage',
        src: './icon-glnl.png',
        text: '公历农历转换'
      },
      {
        url: '/pages/phoneQuery/phoneQuery',
        src: './icon-phone.png',
        text: '手机号归属'
      },
      {
        url: '/pages/nopage/nopage',
        src: './icon-ip.png',
        text: 'IP地址'
      },
      {
        url: '/pages/nopage/nopage',
        src: './icon-jt.png',
        text: '历史上的今天'
      },
      {
        url: '/pages/nopage/nopage',
        src: './icon-bmi.png',
        text: 'BMI指数'
      }
    ]
  },
  onLoad(query) {
    // this.$spliceData({"navigatorArray": this.navigatorArray })
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: '教师工具箱',
      desc: '实用的教师工具箱',
      path: 'pages/index/index',
    };
  },
});
