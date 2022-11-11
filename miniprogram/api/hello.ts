import { get } from "./request"

export const hello = () => {
    return get("/");
}