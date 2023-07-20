
<script>
// https://github.com/livebloggerofficial/3D-Rotating-Cube

import { onMount } from 'svelte';

onMount(() => {

const cube = document.querySelector(".cube");
let mouseX = 0;
let mouseY = 0;
const rotationValue = 270;

const handleMouseMove = (event) => {
  let mouseX = event.clientX;
  let mouseY = event.clientY;
  let rotateX = -(mouseY / window.innerHeight - 0.5) * rotationValue;
  let rotateY = (mouseX / window.innerWidth - 0.5) * rotationValue;
  cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
};
var add = () => {window.addEventListener("mousemove", handleMouseMove);};
var remove = () => {window.removeEventListener("mousemove", handleMouseMove);}

addEventListener("mousedown", (event) => {add()});
addEventListener("mouseup", (event) => {remove()});

});

</script>

<style>

:root {
  --cube-width: 300px;
  --translateZ: 150px;
}

body {
  margin: 0;
  padding: 0;
  height: 100vh;
  font-family: "Poppins", sans-serif;
  background: #000;
}

header {
  color: #eee;
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: space-between;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

header h1 {
  margin: 0;
  font-size: 100px;
}

header .sub-heading {
  font-size: 24px;
  margin: 0;
}

.cube-container {
  perspective: 1000px;
}

.cube-container .cube {
  width: var(--cube-width);
  height: var(--cube-width);
  transform-style: preserve-3d;
}

.cube-container .cube-face {
  width: var(--cube-width);
  height: var(--cube-width);
  position: absolute;
  font-size: 30px;
  background: yellow;
  color: #000;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cube-container .front {
  background: #d63946;
  transform: translateZ(var(--translateZ));
}

.cube-container .back {
  background: #06d6a0;
  transform: rotateY(180deg) translateZ(var(--translateZ));
}

.cube-container .left {
  background: #023047;
  color: #fff;
  transform: rotateY(-90deg) translateZ(var(--translateZ));
}

.cube-container .right {
  background: #3d348b;
  color: #fff;
  transform: rotateY(90deg) translateZ(var(--translateZ));
}

.cube-container .top {
  background: #a8dadc;
  transform: rotateX(90deg) translateZ(var(--translateZ));
}

.cube-container .bottom {
  background: #ffd166;
  transform: rotateX(-90deg) translateZ(var(--translateZ));
}
</style>

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
<div></div>
   <!-- <div class="container">

        <div class="cube-container">
          <div class="cube">
            <div class="cube-face front">Cow</div>
            <div class="cube-face back">App Development</div>
            <div class="cube-face left">SEO</div>
            <div class="cube-face right">WordPress</div>
            <div class="cube-face top">Blogger</div>
            <div class="cube-face bottom">WooCommerce</div>
          </div>
        </div>
    </div>
    <br><br><br> -->

    <br><br><br><br><br>
    <div class="container">
        <div class="cube-container">
          <div class="cube">
            <div class="cube-face front">Orange</div>
            <div class="cube-face back">Red</div>
            <div class="cube-face left">Green</div>
            <div class="cube-face right">Blue</div>
            <div class="cube-face top">Yellow</div>
            <div class="cube-face bottom">White</div>
          </div>
        </div>
    </div>




