// app.ts
import Cache from "./utils/cache"


interface IMusic {
  id: string,
  username: string,
  token: string,
}

interface ImusicAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo,
    imusic: IMusic
  }
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}

App<ImusicAppOption>({
  globalData: {
    imusic: {
      id: Cache.get("id"),
      username: Cache.get("username"),
      token: Cache.get("token"),
    }
  },
  onLaunch() {
    if (!this.globalData.imusic.token) {
      // 不存在token就去登录页面
      wx.navigateTo({
        url: "/pages/login/index"
      });
    }

    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
  },
})

export {
  ImusicAppOption
}