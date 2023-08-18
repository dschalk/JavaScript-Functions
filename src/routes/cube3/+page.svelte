
<script>
  // import Image from './Image.svelte'
  var log = console.log;
  var ERROR = "";

  import { onMount } from "svelte";

  import array from "$lib/OLL.png";
  import {
    fade,
    blur,
    fly,
    slide,
    scale,
    draw,
    crossfade,
  } from "svelte/transition";

  var Rf78d3s5 = () => {};

  var M = function M(x) {
    return function go(func) {
      if (func === Rf78d3s5) return x;
      else x = func(x);
      return go;
    };
  };
  
  var Mcode = `  var M = function M(x) {
    return function go(func) {
      if (func === Rf78d3s5) return x;
      else x = func(x);
      return go;
    };
  } where Rf78d3s5 = () => {};`;

  /*function M (x) {
  return function go (func) {
    if (func) {x = func(x); return go}
    else return x;
  }
}*/

  // var b0, b1, b2, b3, b4, b5, b6, b7, b8;
  // var g0, g1, g2, g3, g4, g5, g6, g7, g8;
  // var r0, r1, r2, r3, r4, r5, r6, r7, r8;
  // var o0, o1, o2, o3, o4, o5, o6, o7, o8;
  // var y0, y1, y2, y3, y4, y5, y6, y7, y8;
  // var w0, w1, w2, w3, w4, w5, w6, w7, w8;

  const b0 = 'blue';
  const b1 = 'blue';
  const b2 = 'blue';
  const b3 = 'blue';
  const b4 = 'blue';
  const b5 = 'blue';
  const b6 = 'blue';
  const b7 = 'blue';
  const b8 = "blue";

  const g0 = 'green';
  const g1 = 'green';
  const g2 = 'green';
  const g3 = 'green';
  const g4 = 'green';
  const g5 = 'green';
  const g6 = 'green';
  const g7 = 'green';
  const g8 = "green";

  const r0 = 'red';
  const r1 = 'red';
  const r2 = 'red';
  const r3 = 'red';
  const r4 = 'red';
  const r5 = 'red';
  const r6 = 'red';
  const r7 = 'red';
  const r8 = "red";

  const o0 = 'orange';
  const o1 = 'orange';
  const o2 = 'orange';
  const o3 = 'orange';
  const o4 = 'orange';
  const o5 = 'orange';
  const o6 = 'orange';
  const o7 = 'orange';
  const o8 = "orange";

  const y0 = 'yellow';
  const y1 = 'yellow';
  const y2 = 'yellow';
  const y3 = 'yellow';
  const y4 = 'yellow';
  const y5 = 'yellow';
  const y6 = 'yellow';
  const y7 = 'yellow';
  const y8 = "yellow";

  const w0 = 'white';
  const w1 = 'white';
  const w2 = 'white';
  const w3 = 'white';
  const w4 = 'white';
  const w5 = 'white';
  const w6 = 'white';
  const w7 = 'white';
  const w8 = "white";

  var bb = [b0, b1, b2, b3, b4, b5, b6, b7, b8];
  var gg = [g0, g1, g2, g3, g4, g5, g6, g7, g8];
  var rr = [r0, r1, r2, r3, r4, r5, r6, r7, r8];
  var oo = [o0, o1, o2, o3, o4, o5, o6, o7, o8];
  var yy = [y0, y1, y2, y3, y4, y5, y6, y7, y8];
  var ww = [w0, w1, w2, w3, w4, w5, w6, w7, w8];

  var m = M([bb, gg, rr, oo, yy, ww]);
  const cubeStart = JSON.parse(JSON.stringify([bb,gg,rr,oo,yy,ww]));

  function Xro(ar) {
    m(() => [
      [
        ar[0][6],
        ar[0][3],
        ar[0][0],
        ar[0][7],
        ar[0][4],
        ar[0][1],
        ar[0][8],
        ar[0][5],
        ar[0][2],
      ],
      [
        ar[1][2],
        ar[1][5],
        ar[1][8],
        ar[1][1],
        ar[1][4],
        ar[1][7],
        ar[1][0],
        ar[1][3],
        ar[1][6],
      ],
      [
        ar[4][8],
        ar[4][7],
        ar[4][6],
        ar[4][5],
        ar[4][4],
        ar[4][3],
        ar[4][2],
        ar[4][1],
        ar[4][0],
      ],
      ar[5],
      ar[3],
      [
        ar[2][8],
        ar[2][7],
        ar[2][6],
        ar[2][5],
        ar[2][4],
        ar[2][3],
        ar[2][2],
        ar[2][1],
        ar[2][0],
      ],
    ]);
    return m(Rf78d3s5);
  }

  function Yro(ar) {
    m(() => [
      ar[2],
      ar[3],
      ar[1],
      ar[0],
      [
        ar[4][6],
        ar[4][3],
        ar[4][0],
        ar[4][7],
        ar[4][4],
        ar[4][1],
        ar[4][8],
        ar[4][5],
        ar[4][2],
      ],
      [
        ar[5][2],
        ar[5][5],
        ar[5][8],
        ar[5][1],
        ar[5][4],
        ar[5][7],
        ar[5][0],
        ar[5][3],
        ar[5][6],
      ],
    ]);
    return m(Rf78d3s5);
  }

  function Zro(ar) {
    m(() => [
      [
        ar[4][6],
        ar[4][3],
        ar[4][0],
        ar[4][7],
        ar[4][4],
        ar[4][1],
        ar[4][8],
        ar[4][5],
        ar[4][2],
      ],
      [
        ar[5][6],
        ar[5][3],
        ar[5][0],
        ar[5][7],
        ar[5][4],
        ar[5][1],
        ar[5][8],
        ar[5][5],
        ar[5][2],
      ],
      [
        ar[2][2],
        ar[2][5],
        ar[2][8],
        ar[2][1],
        ar[2][4],
        ar[2][7],
        ar[2][0],
        ar[2][3],
        ar[2][6],
      ],
      [
        ar[3][6],
        ar[3][3],
        ar[3][0],
        ar[3][7],
        ar[3][4],
        ar[3][1],
        ar[3][8],
        ar[3][5],
        ar[3][2],
      ],
      [
        ar[1][6],
        ar[1][3],
        ar[1][0],
        ar[1][7],
        ar[1][4],
        ar[1][1],
        ar[1][8],
        ar[1][5],
        ar[1][2],
      ],
      [
        ar[0][6],
        ar[0][3],
        ar[0][0],
        ar[0][7],
        ar[0][4],
        ar[0][1],
        ar[0][8],
        ar[0][5],
        ar[0][2],
      ],
    ]);
    return m(Rf78d3s5);
  }

  $: m = m(() => m(Rf78d3s5));

  function Xrotate(ar) {
    m = m(Xro);
  }

  function Xback(ar) {
    m = m(Xro)(Xro)(Xro);
  }

  function Yrotate(ar) {
    m = m(Yro);
  }

  function Yback(ar) {
    m = m(Yro)(Yro)(Yro);
  }

  function Zrotate(ar) {
    m = m(Zro);
  }

  function Zback(ar) {
    m = m(Zro)(Zro)(Zro);
  }

  console.log("m(Rf78d3s5) is", m(Rf78d3s5));

  function Cz(ar) {
    let temp = [];

    temp[0] = [
      ar[0][0],
      ar[4][3],
      ar[0][2],
      ar[0][3],
      ar[4][4],
      ar[0][5],
      ar[0][6],
      ar[4][5],
      ar[0][8],
    ];

    temp[1] = [
      ar[1][0],
      ar[5][3],
      ar[1][2],
      ar[1][3],
      ar[5][4],
      ar[1][5],
      ar[1][6],
      ar[5][5],
      ar[1][8],
    ];

    temp[2] = ar[2];

    temp[3] = ar[3];

    temp[4] = [
      ar[4][0],
      ar[4][1],
      ar[4][2],
      ar[1][7],
      ar[1][4],
      ar[1][1],
      ar[4][6],
      ar[4][7],
      ar[4][8],
    ];

    temp[5] = [
      ar[5][0],
      ar[5][1],
      ar[5][2],
      ar[0][7],
      ar[0][4],
      ar[0][1],
      ar[5][6],
      ar[5][7],
      ar[5][8],
    ];
    m = M(temp);
    return temp;
  }

  function Cx(ar) {
    let temp = [];

    temp[0] = ar[0];

    temp[1] = ar[1];

    temp[2] = [
      ar[2][0],
      ar[5][7],
      ar[2][2],
      ar[2][3],
      ar[5][4],
      ar[2][5],
      ar[2][6],
      ar[5][1],
      ar[2][8],
    ];

    temp[3] = [
      ar[3][0],
      ar[4][1],
      ar[3][2],
      ar[3][3],
      ar[4][4],
      ar[3][5],
      ar[3][6],
      ar[4][7],
      ar[3][8],
    ];

    temp[4] = [
      ar[4][0],
      ar[2][7],
      ar[4][2],
      ar[4][3],
      ar[2][4],
      ar[4][5],
      ar[4][6],
      ar[2][1],
      ar[4][8],
    ];

    temp[5] = [
      ar[5][0],
      ar[3][1],
      ar[5][2],
      ar[5][3],
      ar[3][4],
      ar[5][5],
      ar[5][6],
      ar[3][7],
      ar[5][8],
    ];
    m = M(temp);
    return temp;
  }

  function Cy(ar) {
    let temp = [];

    temp[0] = [
      ar[0][0],
      ar[0][1],
      ar[0][2],
      ar[2][3],
      ar[2][4],
      ar[2][5],
      ar[0][6],
      ar[0][7],
      ar[0][8],
    ];

    temp[1] = [
      ar[1][0],
      ar[1][1],
      ar[1][2],
      ar[3][3],
      ar[3][4],
      ar[3][5],
      ar[1][6],
      ar[1][7],
      ar[1][8],
    ];

    temp[2] = [
      ar[2][0],
      ar[2][1],
      ar[2][2],
      ar[1][3],
      ar[1][4],
      ar[1][5],
      ar[2][6],
      ar[2][7],
      ar[2][8],
    ];

    temp[3] = [
      ar[3][0],
      ar[3][1],
      ar[3][2],
      ar[0][3],
      ar[0][4],
      ar[0][5],
      ar[3][6],
      ar[3][7],
      ar[3][8],
    ];

    temp[4] = ar[4];

    temp[5] = ar[5];

    m = M(temp);
    return temp;
  }
/*
  function Cxr(ar) {
    let temp = [];
    temp[0] = ar[0];
    temp[1] = ar[1];
    temp[2] = [
      ar[2][0],
      ar[4][1],
      ar[2][2],
      ar[2][3],
      ar[4][4],
      ar[2][5],
      ar[2][6],
      ar[4][7],
      ar[2][8],
    ];

    temp[3] = [
      ar[3][0],
      ar[5][7],
      ar[3][2],
      ar[3][3],
      ar[5][4],
      ar[3][5],
      ar[3][6],
      ar[5][1],
      ar[3][8],
    ];

    temp[4] = [
      ar[4][0],
      ar[3][1],
      ar[4][2],
      ar[4][3],
      ar[3][4],
      ar[4][5],
      ar[4][6],
      ar[3][7],
      ar[4][8],
    ];

    temp[5] = [
      ar[5][0],
      ar[2][7],
      ar[5][2],
      ar[5][3],
      ar[2][4],
      ar[5][5],
      ar[5][6],
      ar[2][1],
      ar[5][8],
    ];
    m = M(temp);
    return temp;
  }  */
  function B(ar) {
    let temp = [];

    temp[0] = [
      ar[0][0],
      ar[0][1],
      ar[5][8],
      ar[0][3],
      ar[0][4],
      ar[5][7],
      ar[0][6],
      ar[0][7],
      ar[5][6],
    ];

    temp[1] = [
      ar[4][2],
      ar[1][1],
      ar[1][2],
      ar[4][1],
      ar[1][4],
      ar[1][5],
      ar[4][0],
      ar[1][7],
      ar[1][8],
    ];

    temp[2] = [
      ar[2][6],
      ar[2][3],
      ar[2][0],
      ar[2][7],
      ar[2][4],
      ar[2][1],
      ar[2][8],
      ar[2][5],
      ar[2][2],
    ];

    temp[3] = ar[3];

    temp[4] = [
      ar[0][2],
      ar[0][5],
      ar[0][8],
      ar[4][3],
      ar[4][4],
      ar[4][5],
      ar[4][6],
      ar[4][7],
      ar[4][8],
    ];

    temp[5] = [
      ar[5][0],
      ar[5][1],
      ar[5][2],
      ar[5][3],
      ar[5][4],
      ar[5][5],
      ar[1][0],
      ar[1][3],
      ar[1][6],
    ];

    m = M(temp);
    return temp;
  }

  function Bz(ar) {
    let temp = [];

    temp[0] = [
      ar[0][0],
      ar[0][1],
      ar[4][0],
      ar[0][3],
      ar[0][4],
      ar[4][1],
      ar[0][6],
      ar[0][7],
      ar[4][2],
    ];

    temp[1] = [
      ar[5][6],
      ar[1][1],
      ar[1][2],
      ar[5][7],
      ar[1][4],
      ar[1][5],
      ar[5][8],
      ar[1][7],
      ar[1][8],
    ];

    temp[2] = [
      ar[2][2],
      ar[2][5],
      ar[2][8],
      ar[2][1],
      ar[2][4],
      ar[2][7],
      ar[2][0],
      ar[2][3],
      ar[2][6],
    ];

    temp[3] = ar[3];

    temp[4] = [
      ar[1][6],
      ar[1][3],
      ar[1][0],
      ar[4][3],
      ar[4][4],
      ar[4][5],
      ar[4][6],
      ar[4][7],
      ar[4][8],
    ];

    temp[5] = [
      ar[5][0],
      ar[5][1],
      ar[5][2],
      ar[5][3],
      ar[5][4],
      ar[5][5],
      ar[0][2],
      ar[0][5],
      ar[0][8],
    ];
    m = M(temp);
    return temp;
  }

  function D(ar) {
    let temp = [];

    temp[0] = [
      ar[0][0],
      ar[0][1],
      ar[0][2],
      ar[0][3],
      ar[0][4],
      ar[0][5],
      ar[3][6],
      ar[3][7],
      ar[3][8],
    ];

    temp[1] = [
      ar[1][0],
      ar[1][1],
      ar[1][2],
      ar[1][3],
      ar[1][4],
      ar[1][5],
      ar[2][6],
      ar[2][7],
      ar[2][8],
    ];

    temp[2] = [
      ar[2][0],
      ar[2][1],
      ar[2][2],
      ar[2][3],
      ar[2][4],
      ar[2][5],
      ar[0][6],
      ar[0][7],
      ar[0][8],
    ];

    temp[3] = [
      ar[3][0],
      ar[3][1],
      ar[3][2],
      ar[3][3],
      ar[3][4],
      ar[3][5],
      ar[1][6],
      ar[1][7],
      ar[1][8],
    ];

    temp[4] = ar[4];

    temp[5] = [
      ar[5][6],
      ar[5][3],
      ar[5][0],
      ar[5][7],
      ar[5][4],
      ar[5][1],
      ar[5][8],
      ar[5][5],
      ar[5][2],
    ];
    m = M(temp);
    return temp;
  }

  function Dz(ar) {
    let temp = [];

    temp[0] = [
      ar[0][0],
      ar[0][1],
      ar[0][2],
      ar[0][3],
      ar[0][4],
      ar[0][5],
      ar[2][6],
      ar[2][7],
      ar[2][8],
    ];

    temp[1] = [
      ar[1][0],
      ar[1][1],
      ar[1][2],
      ar[1][3],
      ar[1][4],
      ar[1][5],
      ar[3][6],
      ar[3][7],
      ar[3][8],
    ];

    temp[2] = [
      ar[2][0],
      ar[2][1],
      ar[2][2],
      ar[2][3],
      ar[2][4],
      ar[2][5],
      ar[1][6],
      ar[1][7],
      ar[1][8],
    ];

    temp[3] = [
      ar[3][0],
      ar[3][1],
      ar[3][2],
      ar[3][3],
      ar[3][4],
      ar[3][5],
      ar[0][6],
      ar[0][7],
      ar[0][8],
    ];

    temp[4] = ar[4];

    temp[5] = [
      ar[5][2],
      ar[5][5],
      ar[5][8],
      ar[5][1],
      ar[5][4],
      ar[5][7],
      ar[5][0],
      ar[5][3],
      ar[5][6],
    ];
    m = M(temp);
    return temp;
  }

  function L(ar) {
    let temp = [];
    temp[0] = ar[0];

    temp[1] = [
      ar[1][6],
      ar[1][3],
      ar[1][0],
      ar[1][7],
      ar[1][4],
      ar[1][1],
      ar[1][8],
      ar[1][5],
      ar[1][2],
    ];

    temp[2] = [
      ar[2][0],
      ar[2][1],
      ar[5][6],
      ar[2][3],
      ar[2][4],
      ar[5][3],
      ar[2][6],
      ar[2][7],
      ar[5][0],
    ];

    temp[3] = [
      ar[4][0],
      ar[3][1],
      ar[3][2],
      ar[4][3],
      ar[3][4],
      ar[3][5],
      ar[4][6],
      ar[3][7],
      ar[3][8],
    ];

    temp[4] = [
      ar[2][8],
      ar[4][1],
      ar[4][2],
      ar[2][5],
      ar[4][4],
      ar[4][5],
      ar[2][2],
      ar[4][7],
      ar[4][8],
    ];

    temp[5] = [
      ar[3][0],
      ar[5][1],
      ar[5][2],
      ar[3][3],
      ar[5][4],
      ar[5][5],
      ar[3][6],
      ar[5][7],
      ar[5][8],
    ];
    m = M(temp);
    return temp;
  }

  function Lz(ar) {
    let temp = [];
    temp[0] = ar[0];

    temp[1] = [
      ar[1][2],
      ar[1][5],
      ar[1][8],
      ar[1][1],
      ar[1][4],
      ar[1][7],
      ar[1][0],
      ar[1][3],
      ar[1][6],
    ];

    temp[2] = [
      ar[2][0],
      ar[2][1],
      ar[4][6],
      ar[2][3],
      ar[2][4],
      ar[4][3],
      ar[2][6],
      ar[2][7],
      ar[4][0],
    ];

    temp[3] = [
      ar[5][0],
      ar[3][1],
      ar[3][2],
      ar[5][3],
      ar[3][4],
      ar[3][5],
      ar[5][6],
      ar[3][7],
      ar[3][8],
    ];

    temp[4] = [
      ar[3][0],
      ar[4][1],
      ar[4][2],
      ar[3][3],
      ar[4][4],
      ar[4][5],
      ar[3][6],
      ar[4][7],
      ar[4][8],
    ];

    temp[5] = [
      ar[2][8],
      ar[5][1],
      ar[5][2],
      ar[2][5],
      ar[5][4],
      ar[5][5],
      ar[2][2],
      ar[5][7],
      ar[5][8],
    ];
    m = M(temp);
    return temp;
  }

  function F(ar) {
    let temp = [];
    temp[0] = [
      ar[4][6],
      ar[0][1],
      ar[0][2],
      ar[4][7],
      ar[0][4],
      ar[0][5],
      ar[4][8],
      ar[0][7],
      ar[0][8],
    ];

    temp[1] = [
      ar[1][0],
      ar[1][1],
      ar[5][0],
      ar[1][3],
      ar[1][4],
      ar[5][1],
      ar[1][6],
      ar[1][7],
      ar[5][2],
    ];

    temp[2] = ar[2];

    temp[3] = [
      ar[3][6],
      ar[3][3],
      ar[3][0],
      ar[3][7],
      ar[3][4],
      ar[3][1],
      ar[3][8],
      ar[3][5],
      ar[3][2],
    ];

    temp[4] = [
      ar[4][0],
      ar[4][1],
      ar[4][2],
      ar[4][3],
      ar[4][4],
      ar[4][5],
      ar[1][8],
      ar[1][5],
      ar[1][2],
    ];

    temp[5] = [
      ar[0][6],
      ar[0][3],
      ar[0][0],
      ar[5][3],
      ar[5][4],
      ar[5][5],
      ar[5][6],
      ar[5][7],
      ar[5][8],
    ];
    m = M(temp);
    return temp;
  }

  function Fz(ar) {
    let temp = [];
    temp[0] = [
      ar[5][2],
      ar[0][1],
      ar[0][2],
      ar[5][1],
      ar[0][4],
      ar[0][5],
      ar[5][0],
      ar[0][7],
      ar[0][8],
    ];

    temp[1] = [
      ar[1][0],
      ar[1][1],
      ar[4][8],
      ar[1][3],
      ar[1][4],
      ar[4][7],
      ar[1][6],
      ar[1][7],
      ar[4][6],
    ];

    temp[2] = ar[2];

    temp[3] = [
      ar[3][2],
      ar[3][5],
      ar[3][8],
      ar[3][1],
      ar[3][4],
      ar[3][7],
      ar[3][0],
      ar[3][3],
      ar[3][6],
    ];

    temp[4] = [
      ar[4][0],
      ar[4][1],
      ar[4][2],
      ar[4][3],
      ar[4][4],
      ar[4][5],
      ar[0][0],
      ar[0][3],
      ar[0][6],
    ];

    temp[5] = [
      ar[1][2],
      ar[1][5],
      ar[1][8],
      ar[5][3],
      ar[5][4],
      ar[5][5],
      ar[5][6],
      ar[5][7],
      ar[5][8],
    ];
    m = M(temp);
    return temp;
  }

  function R(ar) {
    let temp = [];
    temp[0] = [
      ar[0][6],
      ar[0][3],
      ar[0][0],
      ar[0][7],
      ar[0][4],
      ar[0][1],
      ar[0][8],
      ar[0][5],
      ar[0][2],
    ];

    temp[1] = ar[1];

    temp[2] = [
      ar[4][8],
      ar[2][1],
      ar[2][2],
      ar[4][5],
      ar[2][4],
      ar[2][5],
      ar[4][2],
      ar[2][7],
      ar[2][8],
    ];

    temp[3] = [
      ar[3][0],
      ar[3][1],
      ar[5][2],
      ar[3][3],
      ar[3][4],
      ar[5][5],
      ar[3][6],
      ar[3][7],
      ar[5][8],
    ];

    temp[4] = [
      ar[4][0],
      ar[4][1],
      ar[3][2],
      ar[4][3],
      ar[4][4],
      ar[3][5],
      ar[4][6],
      ar[4][7],
      ar[3][8],
    ];

    temp[5] = [
      ar[5][0],
      ar[5][1],
      ar[2][6],
      ar[5][3],
      ar[5][4],
      ar[2][3],
      ar[5][6],
      ar[5][7],
      ar[2][0],
    ];
    m = m(() => temp);
    return m(Rf78d3s5);
  }

var Rcode = ` function R(ar) {
    let temp = [];
    temp[0] = [
      ar[0][6],
      ar[0][3],
      ar[0][0],
      ar[0][7],
      ar[0][4],
      ar[0][1],
      ar[0][8],
      ar[0][5],
      ar[0][2],
    ];

    temp[1] = ar[1];

    temp[2] = [
      ar[4][8],
      ar[2][1],
      ar[2][2],
      ar[4][5],
      ar[2][4],
      ar[2][5],
      ar[4][2],
      ar[2][7],
      ar[2][8],
    ];

    temp[3] = [
      ar[3][0],
      ar[3][1],
      ar[5][2],
      ar[3][3],
      ar[3][4],
      ar[5][5],
      ar[3][6],
      ar[3][7],
      ar[5][8],
    ];

    temp[4] = [
      ar[4][0],
      ar[4][1],
      ar[3][2],
      ar[4][3],
      ar[4][4],
      ar[3][5],
      ar[4][6],
      ar[4][7],
      ar[3][8],
    ];

    temp[5] = [
      ar[5][0],
      ar[5][1],
      ar[2][6],
      ar[5][3],
      ar[5][4],
      ar[2][3],
      ar[5][6],
      ar[5][7],
      ar[2][0],
    ];

    m(() => temp);`
    var Rcode2 = `M(temp) also works. Reactivity 
    requires assignment, so merely updating
    the value in the m-M(x) closure by 
    calling "m(R)" does not trigger an 
    immediate DOM update.</div>` 
  var Rcode3 =`    return temp;
  }`;


  function Rz(ar) {
    let temp = [];
    temp[0] = [
      ar[0][2],
      ar[0][5],
      ar[0][8],
      ar[0][1],
      ar[0][4],
      ar[0][7],
      ar[0][0],
      ar[0][3],
      ar[0][6],
    ];

    temp[1] = ar[1];

    temp[2] = [
      ar[5][8],
      ar[2][1],
      ar[2][2],
      ar[5][5],
      ar[2][4],
      ar[2][5],
      ar[5][2],
      ar[2][7],
      ar[2][8],
    ];

    temp[3] = [
      ar[3][0],
      ar[3][1],
      ar[4][2],
      ar[3][3],
      ar[3][4],
      ar[4][5],
      ar[3][6],
      ar[3][7],
      ar[4][8],
    ];

    temp[4] = [
      ar[4][0],
      ar[4][1],
      ar[2][6],
      ar[4][3],
      ar[4][4],
      ar[2][3],
      ar[4][6],
      ar[4][7],
      ar[2][0],
    ];

    temp[5] = [
      ar[5][0],
      ar[5][1],
      ar[3][2],
      ar[5][3],
      ar[5][4],
      ar[3][5],
      ar[5][6],
      ar[5][7],
      ar[3][8],
    ];
    m = M(temp);
    return temp;
  }

  function U(ar) {
    let temp = [];

    temp[0] = [
      ar[2][0],
      ar[2][1],
      ar[2][2],
      ar[0][3],
      ar[0][4],
      ar[0][5],
      ar[0][6],
      ar[0][7],
      ar[0][8],
    ];

    temp[1] = [
      ar[3][0],
      ar[3][1],
      ar[3][2],
      ar[1][3],
      ar[1][4],
      ar[1][5],
      ar[1][6],
      ar[1][7],
      ar[1][8],
    ];

    temp[2] = [
      ar[1][0],
      ar[1][1],
      ar[1][2],
      ar[2][3],
      ar[2][4],
      ar[2][5],
      ar[2][6],
      ar[2][7],
      ar[2][8],
    ];

    temp[3] = [
      ar[0][0],
      ar[0][1],
      ar[0][2],
      ar[3][3],
      ar[3][4],
      ar[3][5],
      ar[3][6],
      ar[3][7],
      ar[3][8],
    ];

    temp[4] = [
      ar[4][6],
      ar[4][3],
      ar[4][0],
      ar[4][7],
      ar[4][4],
      ar[4][1],
      ar[4][8],
      ar[4][5],
      ar[4][2],
    ];

    temp[5] = ar[5];

    m = M(temp);
    return temp;
  }

  function Uz(ar) {
    let temp = [];

    temp[0] = [
      ar[3][0],
      ar[3][1],
      ar[3][2],
      ar[0][3],
      ar[0][4],
      ar[0][5],
      ar[0][6],
      ar[0][7],
      ar[0][8],
    ];

    temp[1] = [
      ar[2][0],
      ar[2][1],
      ar[2][2],
      ar[1][3],
      ar[1][4],
      ar[1][5],
      ar[1][6],
      ar[1][7],
      ar[1][8],
    ];

    temp[2] = [
      ar[0][0],
      ar[0][1],
      ar[0][2],
      ar[2][3],
      ar[2][4],
      ar[2][5],
      ar[2][6],
      ar[2][7],
      ar[2][8],
    ];

    temp[3] = [
      ar[1][0],
      ar[1][1],
      ar[1][2],
      ar[3][3],
      ar[3][4],
      ar[3][5],
      ar[3][6],
      ar[3][7],
      ar[3][8],
    ];

    temp[4] = [
      ar[4][2],
      ar[4][5],
      ar[4][8],
      ar[4][1],
      ar[4][4],
      ar[4][7],
      ar[4][0],
      ar[4][3],
      ar[4][6],
    ];

    temp[5] = ar[5];

    m = M(temp);
    return temp;
  }

  var Ufunc = () => {
    m(U);
  };

  var Dfunc = () => {
    m(D);
  };

  var Rfunc = () => {
    m(R);
  };

  var Lfunc = () => {
    m(L);
  };

  var Ffunc = () => {
    m(F);
  };

  var Bfunc = () => {
    m(B);
  };

  var Cxfunc = () => {
    m(Cx);
  };

  var Czfunc = () => {
    m(Cz);
  };

  var Cyfunc = () => {
    m(Cy);
  };

  var Uzfunc = () => {
    m(U)(U)(U);
  };

  var Dzfunc = () => {
    m(D)(D)(D);
  };

  var Rzfunc = () => {
    m(R)(R)(R);
  };

  var Lzfunc = () => {
    m(L)(L)(L);
  };

  var Fzfunc = () => {
    m(F)(F)(F);
  };

  var Bzfunc = () => {
    m(B)(B)(B);
  };

  var Cxrfunc = () => {
    m(Cx)(Cx)(Cx);
  };

  var Cyrfunc = () => {
    m(Cy)(Cy)(Cy);
  };

  var Czrfunc = () => {
    m(Cz)(Cz)(Cz);
  };

  var Start = () => {
    m(() => cubeStart);
    m=m(id);
  };

  var corners = () => {
    m(Rz)(F)(Rz)(B)(B)(R)(Fz)(Rz)(B)(B)(R)(R);
  };

  var triclock = () => {
    m(Cx)(Cx)(Uz)(Cx)(U)(U)(Cx)(Cx)(Cx)(Uz)(Cx)(Cx); 
  };

  var tricounterclock = () => {
    m(Cx)(Cx)(U)(Cx)(U)(U)(Cx)(Cx)(Cx)(U)(Cx)(Cx);
  };

  var edgesOpposite = () => {
    m(Cx)(Cx)(Uz)(Cx)(Cx)(U)(U)(Cx)(Cx)(Uz)(Cx)(Cx);
  };

  var oppositeHeadlights1 = () => {
    m(R)(U)(Rz)(U)(R)(Uz)(Rz)(U)(R)(U)(U)(Rz);
  };

  var oppositeHeadlights2 = () => {
    m(F)(R)(U)(Rz)(Uz)(R)(U)(Rz)(Uz)(R)(U)(Rz)(Uz)(Fz);
  };

  var oppositeHeadlights3 = () => {
    m(R)(U)(U)(Rz)(Uz)(R)(U)(Rz)(Uz)(R)(U)(Rz)(Uz);
  };

  /*<button on:click={oppositeHeadlights1}>oppositeHeadlights1: R U R' U R U' R' U R U U R'</button>
<button on:click={oppositeHeadlights2}>oppositeHeadlights2: R U U R' U' R U R' U' R U U' R'</button>
<button on:click={oppositeHeadlights3}>oppositeHeadlights3: F R U R' U' R U R' U' R U R' U' F'</button>
*/

  var edgesAdjacent = () => {
    console.log("In edgesAdjacent");
    m(Cx)(Cx)(U)(Cx)(Cx)(U)(Cx)(U)(U)(Cx)(Cx)(U)(U)(Cx)(U)(U);
  };

  var sune = () => {
    m(R)(U)(Rz)(U)(R)(U)(U)(Rz);
  };

  var antisune = () => {
    m(R)(U)(U)(Rz)(Uz)(R)(Uz)(Rz);
  };

  var sexy = () => {
    m(R)(U)(Rz)(Uz);
  };
  var reverse_sexy = () => {
    m(U)(R)(Uz)(Rz);
  };

  var orient_corners = () => {
    m(U)(R)(Uz)(Lz)(U)(Rz)(Uz)(L);
  };

  var reverse_orient_corners = () => {
    m(Lz)(U)(R)(Uz)(L)(U)(Rz)(Uz);
  };

  var sledgehammer = () => {
    m(Rz)(F)(R)(Fz);
  };

  var niklas = () => {
    m(R)(Uz)(Lz)(U)(Rz)(Uz)(L);
  };

  var reverse_niklas = () => {
    m(Lz)(U)(R)(Uz)(L)(U)(Rz);
  };

  var Jb_Perm = () => {
    m(R)(U)(Rz)(Fz)(R)(U)(Rz)(Uz)(Rz)(F)(R)(R)(Uz)(Rz)(Uz);
  };

  var niklas = () => {
    m(R)(Uz)(Lz)(U)(Rz)(Uz)(L);
  };

  var niklas = () => {
    m(R)(Uz)(Lz)(U)(Rz)(Uz)(L);
  };

  var cu;
  cu = "cube1";
  var moves = ["U","D","R","L","F","B","Dz","Lz","Fz","Bz","U","D","R","L","Dz","Lz","Fz","Bz","U","F","U","D","R","L","F","B","Dz","Lz","Fz","Bz","U","D","R","L","Dz","Lz","Fz","Bz","U","F" ];

  function rotate() {
    if (cu == "cube1") cu = "cube3";
    else if (cu == "cube2") cu = "cube4";
    else if (cu == "cube3") cu = "cube2";
    else if (cu == "cube4") cu = "cube1";
    else if (cu == "cube5") cu = "cube6";
    else if (cu == "cube6") cu = "cube7";
    else if (cu == "cube7") cu = "cube8";
    else if (cu == "cube8") cu = "cube5";
    else return "cube1";
    // dupCheck(m(Rf78d3s5));
  }

  function rotate2() {
    rotate();
    rotate();
    rotate();
  }

  var nums = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];
  function id(x) {
    return x;
  }
  
  function shu() {
    // Scrambles the cube
    console.log("1 m(Rf78d3s5) is", m(Rf78d3s5));
    let moves = [Cx,Cy,Cz,U,D,R,L,F,B,Cx,Cy,Cz,U,D,B,R,L,F,Cx,D,Cy,Cz,B,U,D,R,L,F,Cx,Cy,Cz,
      Cx,Cy,Cz,U,D,R,L,F,B,Cx,Cy,Cz,U,D,B,R,L,F,Cx,D,Cy,Cz,B,U,D,R,L,F,Cx,Cy,Cz];
    for (let n = 0; n < 62; n += 1) {
      m(moves[Math.floor(Math.random() * 62)]);
    } 
    console.log("2 m(Rf78d3s5) is", m(Rf78d3s5));
  }

  function dupCheck(ar) {
    var flat = ar.flat(1);
    const set = [...new Set(flat)];
    if (flat.length !== set.length) {
      //console.log(v, "is already in the array.");
      ERROR = "STOP";
    } else console.log(ar, "passed dupCheck");
  }

  function logit(e) {
    console.log(e);
  }
  function handleKey(e) {
    console.log(e.key, e.keyCode);
    if (e.keyCode === 38) console.log("cow");
    else if (e.keyCode === 85) m(U)(U)(U);
    else if (e.keyCode === 117) m(U);
    else if (e.keyCode === 68) Dzfunc();
    else if (e.keyCode === 100) Dfunc();
    else if (e.keyCode === 82) m(R)(R)(R);
    else if (e.keyCode === 114) m(R);
    else if (e.keyCode === 76) Lzfunc();
    else if (e.keyCode === 108) Lfunc();
    else if (e.keyCode === 70) Fzfunc();
    else if (e.keyCode === 102) Ffunc();
    else if (e.keyCode === 66) Bzfunc();
    else if (e.keyCode === 98) Bfunc();
    else if (e.keyCode === 77) Cxrfunc();
    else if (e.keyCode === 109) Cxfunc();
    else if (e.keyCode === 69) Cyrfunc();
    else if (e.keyCode === 101) Cyfunc();
    else if (e.keyCode === 83) Czrfunc();
    else if (e.keyCode === 115) Czfunc();
    else if (e.keyCode === 120) Xrotate();
    else if (e.keyCode === 88) Xback();
    else if (e.keyCode === 121) Yrotate();
    else if (e.keyCode === 89) Yback();
    else if (e.keyCode === 122) Zrotate();
    else if (e.keyCode === 90) Zback();
    else if (e.keyCode === 119) shu();
    else if (e.keyCode === 118) Start();
    // else if (e.keyCode === 116) rotate();

    m = m(id);
  }

  const constants = `  const b0 = 'blue';
  const b1 = 'blue';
  const b2 = 'blue';
  const b3 = 'blue';
  const b4 = 'blue';
  const b5 = 'blue';
  const b6 = 'blue';
  const b7 = 'blue';
  const b8 = "blue";

  const g0 = 'green';
  const g1 = 'green';
  const g2 = 'green';
  const g3 = 'green';
  const g4 = 'green';
  const g5 = 'green';
  const g6 = 'green';
  const g7 = 'green';
  const g8 = "green";

  const r0 = 'red';
  const r1 = 'red';
  const r2 = 'red';
  const r3 = 'red';
  const r4 = 'red';
  const r5 = 'red';
  const r6 = 'red';
  const r7 = 'red';
  const r8 = "red";

  const o0 = 'orange';
  const o1 = 'orange';
  const o2 = 'orange';
  const o3 = 'orange';
  const o4 = 'orange';
  const o5 = 'orange';
  const o6 = 'orange';
  const o7 = 'orange';
  const o8 = "orange";

  const y0 = 'yellow';
  const y1 = 'yellow';
  const y2 = 'yellow';
  const y3 = 'yellow';
  const y4 = 'yellow';
  const y5 = 'yellow';
  const y6 = 'yellow';
  const y7 = 'yellow';
  const y8 = "yellow";

  const w0 = 'yellow';
  const w1 = 'yellow';
  const w2 = 'yellow';
  const w3 = 'yellow';
  const w4 = 'yellow';
  const w5 = 'yellow';
  const w6 = 'yellow';
  const w7 = 'yellow';
  const w8 = "yellow";

  var bb = [b0, b1, b2, b3, b4, b5, b6, b7, b8];
  var gg = [g0, g1, g2, g3, g4, g5, g6, g7, g8];
  var rr = [r0, r1, r2, r3, r4, r5, r6, r7, r8];
  var oo = [o0, o1, o2, o3, o4, o5, o6, o7, o8];
  var yy = [y0, y1, y2, y3, y4, y5, y6, y7, y8];
  var ww = [w0, w1, w2, w3, w4, w5, w6, w7, w8];

  var m = M([bb, gg, rr, oo, yy, ww]);
  const cubeStart = [...[bb, gg, rr, oo, yy, ww]];`

var front = `      <div class="face front">
        <div class="grid" id="a3">
          <div class={m(Rf78d3s5)[3][0]} />
          <div class={m(Rf78d3s5)[3][1]} />
          <div class={m(Rf78d3s5)[3][2]} />
          <div class={m(Rf78d3s5)[3][3]} />
          <div class={m(Rf78d3s5)[3][4]} />
          <div class={m(Rf78d3s5)[3][5]} />
          <div class={m(Rf78d3s5)[3][6]} />
          <div class={m(Rf78d3s5)[3][7]} />
          <div class={m(Rf78d3s5)[3][8]} />
        </div>
      </div>`
      
      
var orange = `.orange {
    height: 60px;
    width: 60px;
    background-color: orange;
    border-radius: 10px;
  }`;


  /*
x 120 5.b2a1d8d2.js:1:44132
y 121 5.b2a1d8d2.js:1:44132
z 122 5.b2a1d8d2.js:1:44132
X 88 5.b2a1d8d2.js:1:44132
Y 89 5.b2a1d8d2.js:1:44132
Z 90

m 109 +page.svelte:728:12
e 101 +page.svelte:728:12
s 115 +page.svelte:728:12
M 77 +page.svelte:728:12
E 69 +page.svelte:728:12
S 83 +page.svelte:728:12

*/
</script>
<style>
  /* *,  
::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}  */

  .cell {
    /* center the cell content */
    justify-content: center;
    align-items: center;
    display: flex;
    font-family: Arial;
    font-size: 3rem;
    font-weight: bold;
    background: white;
  }

  .o0::before {
    width: 60px;
    font-size: 42px;
    font-weight: bold;
    background-color: orange;
    content: "o0";
  }

  .o1::before {
    font-size: 42px;
    font-weight: bold;
    background-color: orange;
    content: "o1";
  }

  .o2::before {
    font-size: 42px;
    font-weight: bold;
    background-color: orange;
    content: "o2";
  }

  .o3::before {
    font-size: 42px;
    font-weight: bold;
    background-color: orange;
    content: "o3";
  }

  .o4::before {
    font-size: 42px;
    font-weight: bold;
    background-color: orange;
    content: "o4";
  }

  .o5::before {
    font-size: 42px;
    font-weight: bold;
    background-color: orange;
    content: "o5";
  }

  .o6::before {
    font-size: 42px;
    font-weight: bold;
    background-color: orange;
    content: "o6";
  }

  .o7::before {
    font-size: 40px;
    font-weight: bold;
    background-color: orange;
    content: "o7";
  }

  .o8::before {
    font-size: 40px;
    font-weight: bold;
    background-color: orange;
    content: "o8";
  }

  .r0::before {
    font-size: 40px;
    font-weight: bold;
    background-color: red;
    content: "r0";
  }

  .r1::before {
    font-size: 40px;
    font-weight: bold;
    background-color: red;
    content: "r1";
  }

  .r2::before {
    font-size: 40px;
    font-weight: bold;
    background-color: red;
    content: "r2";
  }

  .r3::before {
    font-size: 40px;
    font-weight: bold;
    background-color: red;
    content: "r3";
  }

  .r4::before {
    font-size: 40px;
    font-weight: bold;
    background-color: red;
    content: "r4";
  }

  .r5::before {
    font-size: 40px;
    font-weight: bold;
    background-color: red;
    content: "r5";
  }

  .r6::before {
    font-size: 40px;
    font-weight: bold;
    background-color: red;
    content: "r6";
  }

  .r7::before {
    font-size: 40px;
    font-weight: bold;
    background-color: red;
    content: "r7";
  }

  .r8::before {
    font-size: 40px;
    font-weight: bold;
    background-color: red;
    content: "r8";
  }

  .g0::before {
    color: yellow;
    font-size: 40px;
    font-weight: bold;
    background-color: green;
    content: "g0";
  }

  .g1::before {
    color: yellow;
    font-size: 40px;
    font-weight: bold;
    background-color: green;
    content: "g1";
  }

  .g2::before {
    color: yellow;
    font-size: 40px;
    font-weight: bold;
    background-color: green;
    content: "g2";
  }

  .g3::before {
    color: yellow;
    font-size: 40px;
    font-weight: bold;
    background-color: green;
    content: "g3";
  }

  .g4::before {
    color: yellow;
    font-size: 40px;
    font-weight: bold;
    background-color: green;
    content: "g4";
  }

  .g5::before {
    color: yellow;
    font-size: 40px;
    font-weight: bold;
    background-color: green;
    content: "g5";
  }

  .g6::before {
    color: yellow;
    font-size: 40px;
    font-weight: bold;
    background-color: green;
    content: "g6";
  }

  .g7::before {
    color: yellow;
    font-size: 40px;
    font-weight: bold;
    background-color: green;
    content: "g7";
  }

  .g8::before {
    color: yellow;
    font-size: 40px;
    font-weight: bold;
    background-color: green;
    content: "g8";
  }

  .b0::before {
    color: yellow;
    font-size: 40px;
    font-weight: bold;
    background-color: blue;
    content: "b0";
  }

  .b1::before {
    color: yellow;
    font-size: 40px;
    font-weight: bold;
    background-color: blue;
    content: "b1";
  }

  .b2::before {
    color: yellow;
    font-size: 42px;
    font-weight: bold;
    background-color: blue;
    content: "b2";
  }

  .b3::before {
    color: yellow;
    font-size: 42px;
    font-weight: bold;
    background-color: blue;
    content: "b3";
  }

  .b4::before {
    color: yellow;
    font-size: 42px;
    font-weight: bold;
    background-color: blue;
    content: "b4";
  }

  .b5::before {
    color: yellow;
    font-size: 42px;
    font-weight: bold;
    background-color: blue;
    content: "b5";
  }

  .b6::before {
    color: yellow;
    font-size: 42px;
    font-weight: bold;
    background-color: blue;
    content: "b6";
  }

  .b7::before {
    color: yellow;
    font-size: 42px;
    font-weight: bold;
    background-color: blue;
    content: "b7";
  }

  .b8::before {
    color: yellow;
    font-size: 42px;
    font-weight: bold;
    background-color: blue;
    content: "b8";
  }

  .y0::before {
    color: blue;
    font-size: 42px;
    font-weight: bold;
    background-color: yellow;
    content: "y0";
  }

  .y1::before {
    color: blue;
    font-size: 42px;
    font-weight: bold;
    background-color: yellow;
    content: "y1";
  }

  .y2::before {
    color: blue;
    font-size: 42px;
    font-weight: bold;
    background-color: yellow;
    content: "y2";
  }

  .y3::before {
    color: blue;
    font-size: 42px;
    font-weight: bold;
    background-color: yellow;
    content: "y3";
  }

  .y4::before {
    color: blue;
    font-size: 42px;
    font-weight: bold;
    background-color: yellow;
    content: "y4";
  }

  .y5::before {
    color: blue;
    font-size: 42px;
    font-weight: bold;
    background-color: yellow;
    content: "y5";
  }

  .y6::before {
    color: blue;
    font-size: 42px;
    font-weight: bold;
    background-color: yellow;
    content: "y6";
  }

  .y7::before {
    color: blue;
    font-size: 42px;
    font-weight: bold;
    background-color: yellow;
    content: "y7";
  }

  .y8::before {
    color: blue;
    font-size: 42px;
    font-weight: bold;
    background-color: yellow;
    content: "y8";
  }

  .w0::before {
    color: black;
    font-size: 42px;
    font-weight: bold;
    background-color: white;
    content: "w0";
  }
  .w1::before {
    color: black;
    font-size: 42px;
    font-weight: bold;
    background-color: white;
    content: "w1";
  }

  .w2::before {
    color: black;
    font-size: 42px;
    font-weight: bold;
    background-color: white;
    content: "w2";
  }

  .w3::before {
    color: black;
    font-size: 42px;
    font-weight: bold;
    background-color: white;
    content: "w3";
  }

  .w4::before {
    color: black;
    font-size: 42px;
    font-weight: bold;
    background-color: white;
    content: "w4";
  }

  .w5::before {
    color: black;
    font-size: 42px;
    font-weight: bold;
    background-color: white;
    content: "w5";
  }

  .w6::before {
    color: black;
    font-size: 42px;
    font-weight: bold;
    background-color: white;
    content: "w6";
  }

  .w7::before {
    color: black;
    font-size: 42px;
    font-weight: bold;
    background-color: white;
    content: "w7";
  }

  .w8::before {
    color: black;
    font-size: 42px;
    font-weight: bold;
    background-color: white;
    content: "w8";
  }

  .red {
    height: 60px;
    width: 60px;
    background-color: rgb(230, 113, 113);
    border-radius: 10px;
  }
  .blue {
    height: 60px;
    width: 60px;
    background-color: lightblue;
    display: inline;
    border-radius: 10px;
  }
  .orange {
    height: 60px;
    width: 60px;
    background-color: orange;
    border-radius: 10px;
  }
  .green {
    height: 60px;
    width: 60px;
    background-color: lightgreen;
    display: inline;
    border-radius: 10px;
  }
  .white {
    height: 60px;
    width: 60px;
    background-color: white;
    border-radius: 10px;
  }
  .yellow {
    height: 60px;
    width: 60px;
    background-color: yellow;
    display: inline;
    border-radius: 10px;
  }

  /* body {
  background: turquoise
} */

  .container {
    width: 198px;
    height: 198px;
    perspective: 1000px;
    /*background-color: black; */
    /*float: right;*/
    margin-right: 7%;
    color: aqua;
    /*float: right;
  margin-right: 35%;
  margin-top: 15%; */
  }

  .container2 {
    float: right;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 60px);
    grid-template-rows: repeat(3, 60px);
    grid-gap: 7px;
    justify-content: center;
  }

  .grid2 {
    display: grid;
    grid-template-columns: repeat(3, 190px);
    grid-template-rows: repeat(3, 190px);
    grid-gap: 5px;
    justify-content: center;
  }
  .cube4 {
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    position: relative;
    transform: rotateX(-30deg) rotateY(60deg);
    /* animation: spin 5s infinite linear;*/
  }

  .cube2 {
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    position: relative;
    transform: rotateX(-30deg) rotateY(150deg);
    /*animation: spin 5s infinite linear; */
  }

  .cube3 {
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    position: relative;
    transform: rotateX(-30deg) rotateY(240deg);
    /*animation: spin 5s infinite linear; */
  }

  .cube1 {
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    position: relative;
    transform: rotateX(-30deg) rotateY(330deg);
    /*animation: spin 5s infinite linear;*/
  }

  .cube5 {
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    position: relative;
    transform: rotateX(-210deg) rotateY(30deg);
    /*animation: spin 5s infinite linear;*/
  }

  .cube6 {
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    position: relative;
    transform: rotateX(-210deg) rotateY(120deg);
    /*animation: spin 5s infinite linear;*/
  }

  .cube7 {
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    position: relative;
    transform: rotateX(-210deg) rotateY(210deg);
    /*animation: spin 5s infinite linear; */
  }

  .cube8 {
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    position: relative;
    transform: rotateX(-210deg) rotateY(300deg);
    /*animation: spin 5s infinite linear; */
  }
  .face {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: grey;
  }
  .top {
    transform: rotateX(90deg) translateZ(100px);
  }
  .bottom {
    transform: rotateX(-90deg) translateZ(100px);
  }

  .right {
    transform: rotateY(90deg) translateZ(100px);
  }
  .left {
    transform: rotateY(-90deg) translateZ(100px);
  }

  .front {
    transform: rotateX(0deg) translateZ(100px);
  }
  .back {
    transform: rotateX(-180deg) translateZ(100px);
  }

  @keyframes spin {
    from {
      transform: rotateX(0deg) rotateY(0deg);
    }
    to {
      transform: rotateX(360deg) rotateY(360deg);
    }
  }

  button {
    margin-left: 1%;
    background-color: lightblue;
    border-width: 2px;
    border-color: #e8f7c1;
    border-radius: 10px;
    color: blue;
    font-size: 26px;
    box-shadow: 0px 0px 15px 0px rgb(255, 215, 0);
    padding: 3px 10px 3px 10px;
  }

  button:hover {
    color: blue;
    background-color: gold;
    border-color: #e8f7c1;
    border-radius: 10px;
    box-shadow: 0px 0px 25px 0px rgb(255, 255, 0);
  }

  .rite {
    float: right;
    /* position: absolute;
  right: 25%;
  top: 12%; */
  }

  h1 {
    text-align: center;
    color: #bb00ff;
  }

  #col-1 {
    position: fixed;
    width: 50%;
    left: 5;
    height: 100%;
  }

  #col-2 {
    position: fixed;
    right: 30%;
    top: 400px;
  }

  .col-3 {
    position: fixed;
    right: 12%;
    top: 20%;
    width: 35%;
  }

  #steady {
    position: fixed;
    top: 30%;
    left: 45.5%;
  }

  h3 {
    color: #ffccff;
  }

  img {
    width: 44%;
    height: 44%;
  }
  div {
    color: blue;
  }
</style>

<svelte:window on:keypress={handleKey} />

<section class="columns">
  <div style="width: 40%">
    <br />
    <!--  <button on:click={state}>State</button>  // Diagnostic functions
  <button on:click={testRotate}>Test</button> -->
    <h1>{ERROR}</h1>

    <button on:click={Start}>Start</button> 
    <button on:click={shu}>Scramble</button>
    <br />
    <button on:click={Xrotate}>X rotate</button>
    <button on:click={Yrotate}>Y rotate</button>
    <button on:click={Zrotate}>Z rotate</button>
    <button on:click={Xback}>X back</button>
    <button on:click={Yback}>Y back</button>
    <button on:click={Zback}>Z back</button>

    <br />
    <button on:click={Ufunc}>U</button>
    <button on:click={Dfunc}>D</button>
    <button on:click={Rfunc}>R</button>
    <button on:click={Lfunc}>L</button>
    <button on:click={Ffunc}>F</button>
    <button on:click={Bfunc}>B</button>
    <button on:click={Cxfunc}>M</button>
    <button on:click={Cyfunc}>E</button>
    <button on:click={Czfunc}>S</button>
    <br />
    <button on:click={Uzfunc}>U'</button>
    <button on:click={Dzfunc}>D'</button>
    <button on:click={Rzfunc}>R'</button>
    <button on:click={Lzfunc}>L'</button>
    <button on:click={Fzfunc}>F'</button>
    <button on:click={Bzfunc}>B'</button>
    <button on:click={Cxrfunc}>M'</button>
    <button on:click={Cyrfunc}>E'</button>
    <button on:click={Czrfunc}>S'</button>
    <br /><br />
    <!--<button on:click={rotate}>Clockwise</button>
<br><br>
<button on:click={rotate2}>Counterclockwise</button> -->
    
    <h1>Demonstration 1</h1>
    <p>The keyboard and button controls are not affected by rotations, making the cube much easier to solve than many other online Rubik's cube simulators. For example, clicking "R" or pressing the 'r' key always turns the right face clockwise. To see this, press the 'y' key and then press 'r' keys. As always, pressing 'r' turns the right face. </p>
    
    <p>Now press 'v' to return the colors in their starting positions and click <button on:click={rotate}>Bad Clockwise</button>. The cube rotated, just as it did when you pressed 'y'. Press 'r' and notice that the front face turned, not the right.  and then 'r'. The front rotates instead of the right side. Now press 'v' and notice that the blue face is still in the front.
 <p>Pressing 'v' makes the sides uniformly colored, but the basic starting position of the cube seems to have changed. Someone looking at the cube from the left side would see the controls working just as expected. But from the front, pressing 'b' rotates the right face and pressing 'r' rotates the front. </p>

    <!-- <button type="button" on:click={document.reload()}> 
      Reload Page
   </button>-->
   

    <h1>Demonstration 2</h1>
    <h3 style="color: darkgreen">
      Keep scrolling down if the cube covers the text
    </h3>
    <p>
      Click <button  on:click={reverse_niklas}
        >Reverse Niklas '</button
      >
      (L' U R U' L U R) "Reverse Niklas" and observe that (1) the "fish" points
      toward the lower left and (2) the forward-facing lower-right sticker is
      yellow. Elementary tutorials say this configuration calls for the sune
      algorithm; and, indeed, sune turns the entire upper face yellow. Try
      it. <button  on:click={sune}>Sune</button> (R U R' U R U2
      R'). The cube has a way to go before being solved.
    </p>

    <p>
      Now click <button on:click={Start}>Start</button> and
      <button  on:click={reverse_niklas}
        >Reverse Niklas '</button
      >
      (L' U R U' L U R) again. Note that the upper corners have opposite colors,
      red and orange in this case (green and blue, and white and yellow are also considered
      opposite). The lower-right side sticker and the top left uppward-facing
      sticker match (both are red). These observations indicate that the cube
      can be quickly solved. All you need to do is click
      <button  on:click={Uzfunc}>U'</button>
      and <button  on:click={orient_corners}>Revolve</button>
      (U R U' L' U R' U' L), or click
      <button  on:click={niklas}>Niklas</button> (R U' L' U R'
      U' L).
    </p>
    <br /><br /><br />
    <br /><br /><br />
    <br /><br /><br />
    <br /><br /><br />
    <br /><br /><br />
    <br /><br /><br />
    <br /><br /><br />
  </div>
  <br /><br /><br />
  <div style = "width: 30%">
<h1>***You bet!***</h1>
<br>

<div id="steady">
  <div class="container">
    <div class={cu}>
      <div class="face front">
        <div class="grid" id="a3">
          <div class={m(Rf78d3s5)[3][0]} />
          <div class={m(Rf78d3s5)[3][1]} />
          <div class={m(Rf78d3s5)[3][2]} />
          <div class={m(Rf78d3s5)[3][3]} />
          <div class={m(Rf78d3s5)[3][4]} />
          <div class={m(Rf78d3s5)[3][5]} />
          <div class={m(Rf78d3s5)[3][6]} />
          <div class={m(Rf78d3s5)[3][7]} />
          <div class={m(Rf78d3s5)[3][8]} />
        </div>
      </div>

      <div class="face back">
        <div class="grid" id="a2">
          <div class={m(Rf78d3s5)[2][8]} />
          <div class={m(Rf78d3s5)[2][7]} />
          <div class={m(Rf78d3s5)[2][6]} />
          <div class={m(Rf78d3s5)[2][5]} />
          <div class={m(Rf78d3s5)[2][4]} />
          <div class={m(Rf78d3s5)[2][3]} />
          <div class={m(Rf78d3s5)[2][2]} />
          <div class={m(Rf78d3s5)[2][1]} />
          <div class={m(Rf78d3s5)[2][0]} />
        </div>
      </div>

      <div class="face right">
        <div class="grid" id="a0">
          <div class={m(Rf78d3s5)[0][0]} />
          <div class={m(Rf78d3s5)[0][1]} />
          <div class={m(Rf78d3s5)[0][2]} />
          <div class={m(Rf78d3s5)[0][3]} />
          <div class={m(Rf78d3s5)[0][4]} />
          <div class={m(Rf78d3s5)[0][5]} />
          <div class={m(Rf78d3s5)[0][6]} />
          <div class={m(Rf78d3s5)[0][7]} />
          <div class={m(Rf78d3s5)[0][8]} />
        </div>
      </div>

      <div class="face left">
        <div class="grid" id="a1">
          <div class={m(Rf78d3s5)[1][0]} />
          <div class={m(Rf78d3s5)[1][1]} />
          <div class={m(Rf78d3s5)[1][2]} />
          <div class={m(Rf78d3s5)[1][3]} />
          <div class={m(Rf78d3s5)[1][4]} />
          <div class={m(Rf78d3s5)[1][5]} />
          <div class={m(Rf78d3s5)[1][6]} />
          <div class={m(Rf78d3s5)[1][7]} />
          <div class={m(Rf78d3s5)[1][8]} />
        </div>
      </div>

      <div class="face top">
        <div class="grid" id="a4">
          <div class={m(Rf78d3s5)[4][0]} />
          <div class={m(Rf78d3s5)[4][1]} />
          <div class={m(Rf78d3s5)[4][2]} />
          <div class={m(Rf78d3s5)[4][3]} />
          <div class={m(Rf78d3s5)[4][4]} />
          <div class={m(Rf78d3s5)[4][5]} />
          <div class={m(Rf78d3s5)[4][6]} />
          <div class={m(Rf78d3s5)[4][7]} />
          <div class={m(Rf78d3s5)[4][8]} />
        </div>
      </div>

      <div class="face bottom">
        <div class="grid" id="b5">
          <div class={m(Rf78d3s5)[5][0]} />
          <div class={m(Rf78d3s5)[5][1]} />
          <div class={m(Rf78d3s5)[5][2]} />
          <div class={m(Rf78d3s5)[5][3]} />
          <div class={m(Rf78d3s5)[5][4]} />
          <div class={m(Rf78d3s5)[5][5]} />
          <div class={m(Rf78d3s5)[5][6]} />
          <div class={m(Rf78d3s5)[5][7]} />
          <div class={m(Rf78d3s5)[5][8]} />
        </div>
      </div>
    </div>
  </div>

  </div>
  </div>




  <div style="width: 35%;">
    <!-- Column 2 -->
    <div style="margin-left: 1px">
      <br /><br />
      <h1 style="color: blue">Using the Keypad</h1>
      <p style="color: blue; font-weight: bold"> Pressing u, d, r, l, f, and b (FACES); m, e, and s (MIDDLE SECTIONS)
and x, y, and z (ENTIRE CUBE) rotates faces clockwise as you face them. This widely-used convention can be confusing since, for example, the left and right sides turn in opposite direction when both turn clockwise.
      </p>

      <p style="color: blue; font-weight: bold">
        Holding shift while pressing u, d, r, l, f, b, m, e, s, x, y, and z
        rotates faces, middle layers, and the whole cube counterclockwise.
        Keeping capslock on reverses this behavior, as you would expect. With
        capslock on, holding down shift causes clockwise rotation.
      </p>

      <button on:click={corners}>PLL Corners: R' F R' B2 R F' R' B2 R2</button>
      <br /><span style="font-size: 26px; color: blue;">Solid front:</span>
      <button on:click={triclock}>Triangle Clockwise: M2 U' M U2 M' U' M2</button>
      <br /><span style="font-size: 26px; color: blue;">Solid front:</span>
      <button on:click={tricounterclock}>Triangle CounterClockwise: M2 U M U2 M' U M2</button
      >
      <br />
      <button on:click={edgesOpposite}
        >Edges Opposite: M M Uz M M U U M M Uz M M</button
      >
      <br />
      <button on:click={edgesAdjacent}
        >Edges Adjacent: M M U M M U M U U M M U U M U U</button
      >
      <br />
      <button on:click={sune}>Sune: R U R' U R U2 R'</button>
      <br />
      <button on:click={antisune}>Antisune: R U2 R' U' R U' R' </button>
      <br />
      <button on:click={sexy}>Sexy: R U R' U'</button>
      <br />
      <button on:click={reverse_sexy}>Reverse Sexy: U R U' R'</button>
      <br />
      <button on:click={orient_corners}>Revolve: U R U' L' U R' U' L</button>
      <br />
      <button on:click={reverse_orient_corners}
        >Reverse Revolve: L' U R U' L U R' U'</button
      >
      <br />
      <button on:click={sledgehammer}>Sledgehammer: R' F R F' </button>
      <br />

      <button on:click={oppositeHeadlights1}
        >oppositeHeadlights1: R U R' U R U' R' U R U U R'</button
      >
      <button on:click={oppositeHeadlights2}
        >oppositeHeadlights2: R U U R' U' R U R' U' R U U' R'</button>
      <button on:click={oppositeHeadlights3}
        >oppositeHeadlights3: F R U R' U' R U R' U' R U R' U' F'</button>
      <button on:click={niklas}>Niklas: R U' L' U R' U' L</button>
      <br />
      <button on:click={reverse_niklas}>Reverse Niklas: L' U R U' L U R'</button>

      <br />
      
<h1>Discussion</h1>
      <p> Rotation of the whole cube, its middle sections, and its faces is
        accomplished by JavaScript functions that rearrange the elements of an array of 6 arrays, each containing nine elements. These 54 elements are variables referring to either "orange", "blue", "red", "green", "yellow", or "white". There are 9 variables assigned to each of these strings. These strings designate CSS classes which determine the background colors of 54 HTML div elements. Press the "v" key or click "Start" to see each face of the cube with 9 identically colored divs. Press the 'x', 'y', and 'z' keys to rotate the cube on each axis. The operative code will help clarify this:</p>

<pre>{constants}</pre>

<p> The configuration of the cube is represented by an array of six nine-member arrays, which is encapsulated in the m-M(x) closure. As discussed in <a href="../">Home</a>, M is defined as:</p>
<pre>{Mcode}</pre>
  <p>
  Functions that update the cube's configuration are consumed by m. For example, clicking the "R" button or pressing "r" on the keyboard triggers m(R), where R is defined as follows:</p>
  
 <pre>{Rcode}</pre> 
 <span>{Rcode2}</span> 
 <pre>{Rcode3}</pre> 
<p> Click "Start", press the "v" key, solve the cube, or reload the page and you will see that each of the six faces of the cube have all nine of one of the six colors. When you press "w" or click "Scrample", 62 sudo random moves are performed. After that, there are still nine of each of the six colors, but their locations are scattered around the cube.</p>
<p>Here's how the "orange" CSS class is defined: </p>
<pre>{orange}</pre>
<p> DOM updates after m(func) followed automatically by func([]) for some array-manipulating  function "func()"  
  
The keyboard and button controls are not affected by rotations, making
        the cube much easier to solve than many other online
        Rubik's cube simulators. For example, clicking "R" always turns the
        right face clockwise. After rotating the entire cube 90 degrees, a button, key, or mouse move that previously rotated the right face rotates the front face instead. </p>
To see this in action, click <button on:click={rotate}>Bad Clockwise</button> then press "r" and "m".
      <br /><br />

      <div style="color:black; font-weight:bold">
        {m(Rf78d3s5)[0]}
        {m(Rf78d3s5)[1]}
        {m(Rf78d3s5)[2]}
        {m(Rf78d3s5)[3]}
        {m(Rf78d3s5)[4]}
        {m(Rf78d3s5)[5]}
      </div>
      <br /><br /><br />
    </div>
  </div>
</section>
<div id="steady">
  <div class="container">
    <div class={cu}>
      <div class="face front">
        <div class="grid" id="a3">
          <div class={m(Rf78d3s5)[3][0]} />
          <div class={m(Rf78d3s5)[3][1]} />
          <div class={m(Rf78d3s5)[3][2]} />
          <div class={m(Rf78d3s5)[3][3]} />
          <div class={m(Rf78d3s5)[3][4]} />
          <div class={m(Rf78d3s5)[3][5]} />
          <div class={m(Rf78d3s5)[3][6]} />
          <div class={m(Rf78d3s5)[3][7]} />
          <div class={m(Rf78d3s5)[3][8]} />
        </div>
      </div>

      <div class="face back">
        <div class="grid" id="a2">
          <div class={m(Rf78d3s5)[2][8]} />
          <div class={m(Rf78d3s5)[2][7]} />
          <div class={m(Rf78d3s5)[2][6]} />
          <div class={m(Rf78d3s5)[2][5]} />
          <div class={m(Rf78d3s5)[2][4]} />
          <div class={m(Rf78d3s5)[2][3]} />
          <div class={m(Rf78d3s5)[2][2]} />
          <div class={m(Rf78d3s5)[2][1]} />
          <div class={m(Rf78d3s5)[2][0]} />
        </div>
      </div>

      <div class="face right">
        <div class="grid" id="a0">
          <div class={m(Rf78d3s5)[0][0]} />
          <div class={m(Rf78d3s5)[0][1]} />
          <div class={m(Rf78d3s5)[0][2]} />
          <div class={m(Rf78d3s5)[0][3]} />
          <div class={m(Rf78d3s5)[0][4]} />
          <div class={m(Rf78d3s5)[0][5]} />
          <div class={m(Rf78d3s5)[0][6]} />
          <div class={m(Rf78d3s5)[0][7]} />
          <div class={m(Rf78d3s5)[0][8]} />
        </div>
      </div>

      <div class="face left">
        <div class="grid" id="a1">
          <div class={m(Rf78d3s5)[1][0]} />
          <div class={m(Rf78d3s5)[1][1]} />
          <div class={m(Rf78d3s5)[1][2]} />
          <div class={m(Rf78d3s5)[1][3]} />
          <div class={m(Rf78d3s5)[1][4]} />
          <div class={m(Rf78d3s5)[1][5]} />
          <div class={m(Rf78d3s5)[1][6]} />
          <div class={m(Rf78d3s5)[1][7]} />
          <div class={m(Rf78d3s5)[1][8]} />
        </div>
      </div>

      <div class="face top">
        <div class="grid" id="a4">
          <div class={m(Rf78d3s5)[4][0]} />
          <div class={m(Rf78d3s5)[4][1]} />
          <div class={m(Rf78d3s5)[4][2]} />
          <div class={m(Rf78d3s5)[4][3]} />
          <div class={m(Rf78d3s5)[4][4]} />
          <div class={m(Rf78d3s5)[4][5]} />
          <div class={m(Rf78d3s5)[4][6]} />
          <div class={m(Rf78d3s5)[4][7]} />
          <div class={m(Rf78d3s5)[4][8]} />
        </div>
      </div>

      <div class="face bottom">
        <div class="grid" id="b5">
          <div class={m(Rf78d3s5)[5][0]} />
          <div class={m(Rf78d3s5)[5][1]} />
          <div class={m(Rf78d3s5)[5][2]} />
          <div class={m(Rf78d3s5)[5][3]} />
          <div class={m(Rf78d3s5)[5][4]} />
          <div class={m(Rf78d3s5)[5][5]} />
          <div class={m(Rf78d3s5)[5][6]} />
          <div class={m(Rf78d3s5)[5][7]} />
          <div class={m(Rf78d3s5)[5][8]} />
        </div>
      </div>
    </div>
  </div>
</div>

<slot /> 



<!--
<style>
  /* *,  
::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}  */

  .cell {
    /* center the cell content */
    justify-content: center;
    align-items: center;
    display: flex;
    font-family: Arial;
    font-size: 3rem;
    font-weight: bold;
    background: white;
  }

  .o0::before {
    width: 60px;
    font-size: 42px;
    font-weight: bold;
    background-color: orange;
    content: "o0";
  }

  .o1::before {
    font-size: 42px;
    font-weight: bold;
    background-color: orange;
    content: "o1";
  }

  .o2::before {
    font-size: 42px;
    font-weight: bold;
    background-color: orange;
    content: "o2";
  }

  .o3::before {
    font-size: 42px;
    font-weight: bold;
    background-color: orange;
    content: "o3";
  }

  .o4::before {
    font-size: 42px;
    font-weight: bold;
    background-color: orange;
    content: "o4";
  }

  .o5::before {
    font-size: 42px;
    font-weight: bold;
    background-color: orange;
    content: "o5";
  }

  .o6::before {
    font-size: 42px;
    font-weight: bold;
    background-color: orange;
    content: "o6";
  }

  .o7::before {
    font-size: 40px;
    font-weight: bold;
    background-color: orange;
    content: "o7";
  }

  .o8::before {
    font-size: 40px;
    font-weight: bold;
    background-color: orange;
    content: "o8";
  }

  .r0::before {
    font-size: 40px;
    font-weight: bold;
    background-color: red;
    content: "r0";
  }

  .r1::before {
    font-size: 40px;
    font-weight: bold;
    background-color: red;
    content: "r1";
  }

  .r2::before {
    font-size: 40px;
    font-weight: bold;
    background-color: red;
    content: "r2";
  }

  .r3::before {
    font-size: 40px;
    font-weight: bold;
    background-color: red;
    content: "r3";
  }

  .r4::before {
    font-size: 40px;
    font-weight: bold;
    background-color: red;
    content: "r4";
  }

  .r5::before {
    font-size: 40px;
    font-weight: bold;
    background-color: red;
    content: "r5";
  }

  .r6::before {
    font-size: 40px;
    font-weight: bold;
    background-color: red;
    content: "r6";
  }

  .r7::before {
    font-size: 40px;
    font-weight: bold;
    background-color: red;
    content: "r7";
  }

  .r8::before {
    font-size: 40px;
    font-weight: bold;
    background-color: red;
    content: "r8";
  }

  .g0::before {
    color: yellow;
    font-size: 40px;
    font-weight: bold;
    background-color: green;
    content: "g0";
  }

  .g1::before {
    color: yellow;
    font-size: 40px;
    font-weight: bold;
    background-color: green;
    content: "g1";
  }

  .g2::before {
    color: yellow;
    font-size: 40px;
    font-weight: bold;
    background-color: green;
    content: "g2";
  }

  .g3::before {
    color: yellow;
    font-size: 40px;
    font-weight: bold;
    background-color: green;
    content: "g3";
  }

  .g4::before {
    color: yellow;
    font-size: 40px;
    font-weight: bold;
    background-color: green;
    content: "g4";
  }

  .g5::before {
    color: yellow;
    font-size: 40px;
    font-weight: bold;
    background-color: green;
    content: "g5";
  }

  .g6::before {
    color: yellow;
    font-size: 40px;
    font-weight: bold;
    background-color: green;
    content: "g6";
  }

  .g7::before {
    color: yellow;
    font-size: 40px;
    font-weight: bold;
    background-color: green;
    content: "g7";
  }

  .g8::before {
    color: yellow;
    font-size: 40px;
    font-weight: bold;
    background-color: green;
    content: "g8";
  }

  .b0::before {
    color: yellow;
    font-size: 40px;
    font-weight: bold;
    background-color: blue;
    content: "b0";
  }

  .b1::before {
    color: yellow;
    font-size: 40px;
    font-weight: bold;
    background-color: blue;
    content: "b1";
  }

  .b2::before {
    color: yellow;
    font-size: 42px;
    font-weight: bold;
    background-color: blue;
    content: "b2";
  }

  .b3::before {
    color: yellow;
    font-size: 42px;
    font-weight: bold;
    background-color: blue;
    content: "b3";
  }

  .b4::before {
    color: yellow;
    font-size: 42px;
    font-weight: bold;
    background-color: blue;
    content: "b4";
  }

  .b5::before {
    color: yellow;
    font-size: 42px;
    font-weight: bold;
    background-color: blue;
    content: "b5";
  }

  .b6::before {
    color: yellow;
    font-size: 42px;
    font-weight: bold;
    background-color: blue;
    content: "b6";
  }

  .b7::before {
    color: yellow;
    font-size: 42px;
    font-weight: bold;
    background-color: blue;
    content: "b7";
  }

  .b8::before {
    color: yellow;
    font-size: 42px;
    font-weight: bold;
    background-color: blue;
    content: "b8";
  }

  .y0::before {
    color: blue;
    font-size: 42px;
    font-weight: bold;
    background-color: yellow;
    content: "y0";
  }

  .y1::before {
    color: blue;
    font-size: 42px;
    font-weight: bold;
    background-color: yellow;
    content: "y1";
  }

  .y2::before {
    color: blue;
    font-size: 42px;
    font-weight: bold;
    background-color: yellow;
    content: "y2";
  }

  .y3::before {
    color: blue;
    font-size: 42px;
    font-weight: bold;
    background-color: yellow;
    content: "y3";
  }

  .y4::before {
    color: blue;
    font-size: 42px;
    font-weight: bold;
    background-color: yellow;
    content: "y4";
  }

  .y5::before {
    color: blue;
    font-size: 42px;
    font-weight: bold;
    background-color: yellow;
    content: "y5";
  }

  .y6::before {
    color: blue;
    font-size: 42px;
    font-weight: bold;
    background-color: yellow;
    content: "y6";
  }

  .y7::before {
    color: blue;
    font-size: 42px;
    font-weight: bold;
    background-color: yellow;
    content: "y7";
  }

  .y8::before {
    color: blue;
    font-size: 42px;
    font-weight: bold;
    background-color: yellow;
    content: "y8";
  }

  .w0::before {
    color: black;
    font-size: 42px;
    font-weight: bold;
    background-color: white;
    content: "w0";
  }
  .w1::before {
    color: black;
    font-size: 42px;
    font-weight: bold;
    background-color: white;
    content: "w1";
  }

  .w2::before {
    color: black;
    font-size: 42px;
    font-weight: bold;
    background-color: white;
    content: "w2";
  }

  .w3::before {
    color: black;
    font-size: 42px;
    font-weight: bold;
    background-color: white;
    content: "w3";
  }

  .w4::before {
    color: black;
    font-size: 42px;
    font-weight: bold;
    background-color: white;
    content: "w4";
  }

  .w5::before {
    color: black;
    font-size: 42px;
    font-weight: bold;
    background-color: white;
    content: "w5";
  }

  .w6::before {
    color: black;
    font-size: 42px;
    font-weight: bold;
    background-color: white;
    content: "w6";
  }

  .w7::before {
    color: black;
    font-size: 42px;
    font-weight: bold;
    background-color: white;
    content: "w7";
  }

  .w8::before {
    color: black;
    font-size: 42px;
    font-weight: bold;
    background-color: white;
    content: "w8";
  }

  .red {
    height: 60px;
    width: 60px;
    background-color: rgb(230, 113, 113);
    border-radius: 10px;
  }
  .blue {
    height: 60px;
    width: 60px;
    background-color: lightblue;
    display: inline;
    border-radius: 10px;
  }
  .orange {
    height: 60px;
    width: 60px;
    background-color: orange;
    border-radius: 10px;
  }

  .green {
    height: 60px;
    width: 60px;
    background-color: lightgreen;
    display: inline;
    border-radius: 10px;
  }
  .white {
    height: 60px;
    width: 60px;
    background-color: white;
    border-radius: 10px;
  }
  .yellow {
    height: 60px;
    width: 60px;
    background-color: yellow;
    display: inline;
    border-radius: 10px;
  }

  /* body {
  background: turquoise
} */

  .container {
    width: 198px;
    height: 198px;
    perspective: 1000px;
    /*background-color: black; */
    float: right;
    margin-right: 7%;
    color: aqua;
    /*float: right;
  margin-right: 35%;
  margin-top: 15%; */
  }

  .container2 {
    float: right;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 60px);
    grid-template-rows: repeat(3, 60px);
    grid-gap: 7px;
    justify-content: center;
  }

  .grid2 {
    display: grid;
    grid-template-columns: repeat(3, 190px);
    grid-template-rows: repeat(3, 190px);
    grid-gap: 5px;
    justify-content: center;
  }
  .cube4 {
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    position: relative;
    transform: rotateX(-30deg) rotateY(60deg);
    /* animation: spin 5s infinite linear;*/
  }

  .cube2 {
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    position: relative;
    transform: rotateX(-30deg) rotateY(150deg);
    /*animation: spin 5s infinite linear; */
  }

  .cube3 {
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    position: relative;
    transform: rotateX(-30deg) rotateY(240deg);
    /animation: spin 5s infinite linear; */
  }

  .cube1 {
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    position: relative;
    transform: rotateX(-30deg) rotateY(330deg);
    /*animation: spin 5s infinite linear;*/
  }

  .cube5 {
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    position: relative;
    transform: rotateX(-210deg) rotateY(30deg);
    /*animation: spin 5s infinite linear;*/
  }

  .cube6 {
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    position: relative;
    transform: rotateX(-210deg) rotateY(120deg);
    /*animation: spin 5s infinite linear;*/
  }

  .cube7 {
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    position: relative;
    transform: rotateX(-210deg) rotateY(210deg);
    /*animation: spin 5s infinite linear; */
  }

  .cube8 {
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    position: relative;
    transform: rotateX(-210deg) rotateY(300deg);
    /*animation: spin 5s infinite linear; */
  }
  .face {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: grey;
  }
  .top {
    transform: rotateX(90deg) translateZ(100px);
  }
  .bottom {
    transform: rotateX(-90deg) translateZ(100px);
  }

  .right {
    transform: rotateY(90deg) translateZ(100px);
  }
  .left {
    transform: rotateY(-90deg) translateZ(100px);
  }

  .front {
    transform: rotateX(0deg) translateZ(100px);
  }
  .back {
    transform: rotateX(-180deg) translateZ(100px);
  }

  @keyframes spin {
    from {
      transform: rotateX(0deg) rotateY(0deg);
    }
    to {
      transform: rotateX(360deg) rotateY(360deg);
    }
  }

  button {
    margin-left: 1%;
    background-color: lightblue;
    border-width: 2px;
    border-color: #e8f7c1;
    border-radius: 10px;
    color: blue;
    font-size: 26px;
    box-shadow: 0px 0px 15px 0px rgb(255, 215, 0);
    padding: 3px 10px 3px 10px;
  }

  button:hover {
    color: blue;
    background-color: gold;
    border-color: #e8f7c1;
    border-radius: 10px;
    box-shadow: 0px 0px 25px 0px rgb(255, 255, 0);
  }

  .rite {
    float: right;
    /* position: absolute;
  right: 25%;
  top: 12%; */
  }

  h1 {
    text-align: center;
    color: #bb00ff;
  }

  #col-1 {
    position: fixed;
    width: 50%;
    left: 5;
    height: 100%;
  }

  #col-2 {
    position: fixed;
    right: 30%;
    top: 400px;
  }

  .col-3 {
    position: fixed;
    right: 12%;
    top: 20%;
    width: 35%;
  }

  #steady {
    position: fixed;
    top: 52%;
    left: 25%;
  }

  h3 {
    color: #ffccff;
  }

  img {
    width: 44%;
    height: 44%;
  }
  div {
    color: blue;
  }
</style>

<slot /> 

-->
