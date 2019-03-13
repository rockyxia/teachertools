Page({
  data: {
    nickName: '',
    avatar: ''
  },
  onLoad() {
    my.getAuthCode({
      scopes: 'auth_user',
      success: (res) => {
        my.getAuthUserInfo({
          success: (userInfo) => {
            this.setData({
              nickName: userInfo.nickName,
              avatar: userInfo.avatar
            })
          }
        });
      },
    });
  },
});
