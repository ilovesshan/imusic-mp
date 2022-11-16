import { ImusicAppOption } from "miniprogram/app";
import { getUserInfo } from "../../api/user"

Page({
  data: {

  },
  onLoad() {
   
  },

  loadUserInfo(){
    const App: ImusicAppOption = getApp();
    getUserInfo(App.globalData.imusic.id).then(res => {
      console.log(res.data);
    })
  }
})