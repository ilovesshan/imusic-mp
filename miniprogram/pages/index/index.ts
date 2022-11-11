// index.ts
import { hello } from "../../api/hello"

Page({
    data: {},
    getData() {
        hello().then(res => {
            console.log(res);
        })
    }
})
