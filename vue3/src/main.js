import {handler} from "./v1.js";
if(module.hot) {
    module.hot.accept('./v1.js',() => {
        console.log('更新了',handler)
    })
}