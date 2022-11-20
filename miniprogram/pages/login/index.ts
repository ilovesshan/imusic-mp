import Cache from "../../utils/cache";
import { login } from "../../api/user";

Page({
  data: {
    username: "ilovesshan",
    password: "ilovesshan123456!@#",
  },
  onLoad() {

  },

  // 登录
  submit() {
    const { username, password } = this.data;
    login({ username, password }).then(res => {
      const { code, message, data } = res.data;
      if (code === 200) {
        const { id, username, token } = data;
        Cache.set("id", id);
        Cache.set("username", username);
        Cache.set("token", token);
        // 回到之前进来的界面
         const pageStack = getCurrentPages();
         console.log(pageStack);
        wx.navigateBack({ delta: 1 });
      } else {
        wx.showToast({ icon: "error", title: message })
      }
    })
  }
})