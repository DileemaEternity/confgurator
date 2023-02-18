import { createApp } from 'vue'
import App from './App.vue'
import cod from "./assets/cod.jpg";
import cyber from "./assets/cyber.jpg";
import dot from "./assets/dot.jpg";
let imgCnt = 0;
var imagesArray = ['./assets/cod.jpg,', './assets/dot.jpg', './assets/cyber.jpg'];
let lmnts = document.getElementById("app")
setInterval(() => {
    imgCnt += 1;
    if (imgCnt > imagesArray) {
        imgCnt = 0
    }
    lmnts.style.background = imagesArray[imgCnt]
}, 5000);
createApp(App).mount('#app')
