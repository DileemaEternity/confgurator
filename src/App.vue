<template>
  <div id="app">
    <h1>Все компоненты прямо перед тобой</h1>
    <div class="contac">
      <div class="arrow"></div>
      <img src="./assets/komp.jpg" alt="" class="centralimg">
      <div class="osnovi">
        <div class="itemos blokp">
          <blokpitan />
        </div>
        <br />
        <div class="itemos kopr">
          <korpus />
        </div>
        <br />
        <div class="itemos mati">
          <matplat />
        </div>
        <br />
        <div class="itemos opera">
          <operativka />
        </div>
        <br />
        <div class="itemos proccc">
          <procc />
        </div>
        <br />
        <div class="itemos video">
          <videocarta />
        </div>
        <br />
        <div class="itemos vneshka">
          <vneshnak />
        </div>
        <br />
        <div class="itemos ohlad">
          <vnutohl />
        </div>
        <br />
      </div>
    </div>
  </div>
</template>
<script>
import blokpitan from "./components/blokpitan.vue";
import korpus from "./components/korpus.vue";
import matplat from "./components/matplat.vue";
import operativka from "./components/operativka.vue";
import procc from "./components/procc.vue";
import videocarta from "./components/videocarta.vue";
import vneshnak from "./components/vneshnak.vue";
import vnutohl from "./components/vnutohl.vue";
export default {
  components: {
    blokpitan,
    korpus,
    matplat,
    operativka,
    procc,
    videocarta,
    vneshnak,
    vnutohl,
  },
  data() {
    return {};
  },
};
</script>

<style>
@media screen and (min-width: 900px) {
  article {
    padding: 1rem 3rem;
  }
}

body {
  overflow-x: hidden;
  overflow-y: inherit;
  background: url(./assets/cod.jpg);
}

h1 {
  color: #020202;
  font-size: 40px;
  text-align: center;
  border: 1px solid black;
  padding: 10px;
  color: white;
}


.centralimg {
  position: absolute;
  width: 600px;
  height: 520px;
  left: 416px;
  top: 258px;
  background: url(./assets/komp.jpg);
}

.backimg {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 70%;
  background: url(./assets/cod.jpg);
}

.app {
  max-width: 100%;
  max-height: 100%;
}

.osnovi {
  font-size: 30px;
  color: white;
  position: absolute;
  display: grid;
  grid-template: repeat(4, 1fr) / repeat(4, 1fr);
  column-gap: 500px;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

.arrow {
  width: 60px;
  height: 60px;
  border-bottom: 10px solid greenyellow;
  border-right: 10px solid greenyellow;
}
</style>
