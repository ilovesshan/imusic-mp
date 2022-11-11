const BASE_URL: string = "https://imusic-17670-5-1314961027.sh.run.tcloudbase.com";

type ALLOW_METHODS = "OPTIONS" | "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT";
type ALLOW_DATA = string | Map<String, any> | ArrayBuffer;


const get = (uri: string, query?: ALLOW_DATA) => {
    return baseRequest(uri, "GET", query);
}

const post = (uri: string, data?: ALLOW_DATA) => {
    return baseRequest(uri, "POST", data);
}

const baseRequest = (uri: string, method: ALLOW_METHODS, data?: ALLOW_DATA) => {
    return new Promise((resolve, reject) => {
        wx.showLoading({ title: "加载中..." })
        wx.request({
            url: `${BASE_URL}${uri}`,
            method,
            data,
            success: res => resolve(res),
            fail: err => {
                console.log(err);
                reject(err);
            },
            complete: () => wx.hideLoading()
        })
    });
}

export {
    get, post
}