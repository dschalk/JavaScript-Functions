<script>
  import Firefox_1 from "$lib/Firefox_test.png";
  import Firefox_2 from "$lib/Firefox_test_2.png";
  import Firefox_3 from "$lib/Composition.png";
  import passBy from "$lib/passBy.png";
  import object from "$lib/object.png";

  var Mdisplay = `    function M (x) {
      return function</span> go (func) {
        if (func === dF3x) return x;
        else x = func(x);
        return go;
      }
    }
    Where dF3x = () => {}; `;

  var Mdis = `    function M (x) {
      return function` 
                             
  var Mplay = `              go (func) {
        if (func === dF3x) return x;
        else x = func(x);
        return go;
      }`
  var Mend =     
    `    }
    Where dF3x = () => {}; `; // Triggers return of x;


  var MMdisplay = "    function M (x) { \
      return function go (func) { \
        if (func === dF3x) return x; \
        else x = func(x); \
        return go; \
      } \
    } \
    Where dF3x = () => {}; "

  var empty = `log("cow is", M()(()=>3)(v=>v**3)(v=>v*4)(v=>v-8)(Math.sqrt)(dF3x)); // 10`;

  var dF3x = () => {};

  function M(x) {
    return function go(func) {
      if (func === dF3x) return x;
      else x = func(x);
      return go;
    };
  }

  var log = console.log;

  var test_0 = `var m = M('peaches');
log('m(ret) is', m(ret)); // m(ret) is peaches

m(x => x + ' and pears')
log('m(ret) is', m(ret)); // m(ret) is peaches and pears

m(()=>3);  // Equivalent to m = M(3) whenever m is mutable.
log('m(ret) is', m(ret)); // m(ret) is 3

log(m(v=>v**3)(v=>v+v)(v=>v-12)(ret)) // m(ret) is 42

var Pyth = a => b => Math.sqrt(a*a + b*b); 
log(M(Pyth(3)(4))(ret)); // This anonymous computation returns 5`;

  var test_1 = `var arr = m = M([1,2,3]);

var add = x => a => a.concat(x + a.slice(-1)[0]);
var mult = x => a => a.concat(x * a[a.length-1]);
m(add(4)); // 4 + 3 is concatenated to a.
log("1. m(ret)", m(ret)); // [ 1, 2, 3, 7 ]
m(mult(6));  // 6 * 7 is concatenated to a.
log("2. m(ret)", m(ret)); // [ 1, 2, 3, 7, 42 ]

// Next, we append the three stages of Math.sqrt(7 + 42) * 6  // 49, 7, 42 
log(m(x => x.concat(x[3] + x[4]))(x=>x.concat(Math.sqrt(x[x.length - 1])))(mult(6))(ret))
// [ 1, 2, 3, 7, 42, 49, 7, 42 ]`;

  var table = `function R (ar) {
  let temp = []
  temp[0] = [ar[0][6], ar[0][3], ar[0][0],
            ar[0][7], ar[0][4], ar[0][1],
            ar[0][8], ar[0][5], ar[0][2]];

  temp[1] = ar[1];

  temp[2] = [ar[4][8], ar[2][1], ar[2][2],
            ar[4][5], ar[2][4], ar[2][5],
            ar[4][2], ar[2][7], ar[2][8]];

  temp[3] = [ar[3][0], ar[3][1], ar[5][2],
            ar[3][3], ar[3][4], ar[5][5],
            ar[3][6], ar[3][7], ar[5][8]];

  temp[4] = [ar[4][0], ar[4][1], ar[3][2],
            ar[4][3], ar[4][4], ar[3][5],
            ar[4][6], ar[4][7], ar[3][8]];

            temp[5] = [ar[5][0], ar[5][1], ar[2][6],
            ar[5][3], ar[5][4], ar[2][3],
            ar[5][6], ar[5][7], ar[2][0]];
return temp;
}`;

  var score = `m2 = M(
    [ 
      [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 20) + 1], 
      [], ['+'], [], [0], [], [0], [] 
    ]);`;

  var fuDem = `function fu (a) {                                    // fu
  a[5].push(clone(a));
  a[7].push(clone(a)); // All game states for use in "Back" and "Forward."
  a[6][0] += 1;
    // a[1].push(a[0].pop());
  var result;
  SCORE = a[4];
  var a1;
  if (a[1].length === 2 && a[2].length === 1)   {
    a1 = a[1];
    result = calc(a[1][0], a[1][1],a[2][0]);
    a[0].push(result);
    a[3].push(result);
    a[1] = [];
    m2 = M(a);
  }
   
  if (a[1].length === 3) {
    a[0].push(a[1].pop());
  }

  if (result == 20 && intersection(a1, a[3]).length > 0) {
      if (SCORE === 4) {
          ZWIN = "You win! "
          a[4][0] = 0;
          runRoll(0);
      }
      else {
          var aint = parseInt(a[4][0], 10);
          aint += 1;
          Z = "           Your score increased to " + aint;
          runRoll(aint);
      }
      setTimeout(() => Z = ZWIN = "", 3000);
  }
  update();
  sfunc();
  return m2(s);
};

var update = () => { // The button displays will correspond to the values in m2.
  AA = m2(s)[0][0];
  BB = m2(s)[0][1];
  CC = m2(s)[0][2];
  DD = m2(s)[0][3];
  EE = m2(s)[2];
  FF = m2(s)[3];
  SCORE = m2(s)[4];
  WW = m2(s)[1][0];
  XX = m2(s)[1][1];
  YY = m2(s)[1][2];
  ZZ = m2(s)[1][3];
}`;

  var Rf = `var Rfunc = () => {
  cube = m(R)();
};`;

  var Zdemo = `function Zrotate (ar) {
      cube = m(Zro)();
  }
  
  function Zro (ar) {
    m(() => [ [ ar[4][6], ar[4][3], ar[4][0], ar[4][7], ar[4][4], ar[4][1],ar[4][8], ar[4][5], ar[4][2] ], [ ar[5][6],
    ar[5][3], ar[5][0], ar[5][7], ar[5][4], ar[5][1],ar[5][8], ar[5][5], ar[5][2] ], [ar[2][2], ar[2][5], ar[2][8], 
    ar[2][1], ar[2][4], ar[2][7],ar[2][0], ar[2][3], ar[2][6] ], [ ar[3][6], ar[3][3], ar[3][0], ar[3][7], ar[3][4], 
    ar[3][1],ar[3][8], ar[3][5], ar[3][2] ], [ ar[1][6], ar[1][3], ar[1][0], ar[1][7], ar[1][4], ar[1][1],ar[1][8], 
    ar[1][5], ar[1][2] ], [ ar[0][6], ar[0][3], ar[0][0], ar[0][7], ar[0][4], ar[0][1],ar[0][8], ar[0][5], ar[0][2] ] ] ); 
    // cube = m(); 
    return m();
  };`;

  var ZbackDemo = `function Zback (ar) {
      cube = m(Zro)(Zro)(Zro)();
  };`;

  var mona = `function M (x) {
  return function go (func) {
    if (func === dF3x) return x;
    else x = func(x);
    return go;
  }
}
Where dF3x = () => {}; // This flag is a function in order to
                              accommodate future type checking.`;
  var orthoganal = `var demo1 = M(3);
var demo2 = M(3);
demo1(v=>v**3);
demo2(v=>v - 1);
console.log(demo1(dF3x)); // 27
console.log(demo2(dF3x)); // 2`;

  var compose1 = `var m = M(3);
log(M(3)(v=>v**3)(v=>v*3)(Math.sqrt)(dF3x)); // 9`;

  var compose2 = `m(()=>4);  // Sets x in the m-M(x) closure to 4.
m(v=>v**4)(v=>v**(1/2))(v=>v-7)
log(m(dF3x))                             // 42

var add = a => b => a + b;
var mult = a => b => a * b;
var exp = a => b => b**a;

m(()=>3)(add(4))(exp(4))(Math.sqrt)(add(-7));
log(m(dF3x))                             // 42

// NOTE: ()=>3 (above) resets the value in the m-M(x) closure to 3.

log(M(2)(add(4))(mult(7))(dF3x))`;
  var mean = `function meaning (ar) {return ar.reduce((a, 
  currentValue) => a**3 + currentValue, 0) - 2*13};

var m = M([1,3,4]);
m(meaning);
m(dF3x);     // 42`;

  var M4 = `function M(x) {
    let ar = [];
    return function go(func) {
      if (func === dF3x) return x;
      if (func === dF3ar) return ar;
      else x = func(x);
      ar.push(func);
      return go;
    };
  };`;
  var Rcode = `  const R = function R(ar) {
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
    return temp;
  }

`;
  var reverseShow = `function reverse () { 
  let fu = m(dF3ar).pop(); 
  // discards the function being reversed.
    
  let foo = x => fu(fu(fu(x))); 
  // Three more turns reverses the first one.
    
  m(foo)(dF3ar).pop();     
  // uses foo, then discards it, returning the cube to where it was.
}; `;

  var reduceCode = `const m = M([3,4,5,6,7,8,9]);
const rd = x => x.reduce((a, b) => a + b);
m(rd)(dF3x);   // 42 `;

  const Mcode = `function M(x, ar = []) {
    return function go(func) {
      if (func === dF3x) return x;
      if (func === dF3ar) return ar;
      else x = func(x);
      ar.push(func);
      return go;
    };
  };
    Where const dF3x = () => {}
          const dF3ar = () => {};`;

  var classCode2 = `const b0 = 'blue';
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
  const w8 = 'white';

  var bb = [b0, b1, b2, b3, b4, b5, b6, b7, b8];
  var gg = [g0, g1, g2, g3, g4, g5, g6, g7, g8];
  var rr = [r0, r1, r2, r3, r4, r5, r6, r7, r8];
  var oo = [o0, o1, o2, o3, o4, o5, o6, o7, o8];
  var yy = [y0, y1, y2, y3, y4, y5, y6, y7, y8];
  var ww = [w0, w1, w2, w3, w4, w5, w6, w7, w8];

  var m = M([bb, gg, rr, oo, yy, ww]);`;

  const DOMright = `<div class="face right">
        <div class="grid">
          <div class={m(dF3x)[0][0]} />
          <div class={m(dF3x)[0][1]} />
          <div class={m(dF3x)[0][2]} />
          <div class={m(dF3x)[0][3]} />
          <div class={m(dF3x)[0][4]} />
          <div class={m(dF3x)[0][5]} />
          <div class={m(dF3x)[0][6]} />
          <div class={m(dF3x)[0][7]} />
          <div class={m(dF3x)[0][8]} />
        </div>
      </div>`;

  var classCode2 = `const b0 = 'blue';
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
  const w8 = 'white';

  var bb = [b0, b1, b2, b3, b4, b5, b6, b7, b8];
  var gg = [g0, g1, g2, g3, g4, g5, g6, g7, g8];
  var rr = [r0, r1, r2, r3, r4, r5, r6, r7, r8];
  var oo = [o0, o1, o2, o3, o4, o5, o6, o7, o8];
  var yy = [y0, y1, y2, y3, y4, y5, y6, y7, y8];
  var ww = [w0, w1, w2, w3, w4, w5, w6, w7, w8];

  var m = M([bb, gg, rr, oo, yy, ww]);`;
  var v1 = ` var  m = M(3)`;

  var v2 = `M()(()=>3)(v=>v**3)(v=>v*4)(v=>v-8)(Math.sqrt)(dF3x) // 10`;
  var v3 = `M(3)(v=>v**3)(v=>v*4)(v=>v-8)(Math.sqrt)(dF3x) // 10`;
  var v4 = `m = M(3)`;
  var v5 = 'm(dF3x)  // 3'
  var v6 = `m(v=>v**3)(v=>v*4)(v=>v-8)(Math.sqrt)`;
  var v7 = `m(dF3x)  // 10`
  var v8 = `m(v=>v+4)(v=>v*3)  // Now x in the m-M(x) closure is 42`
  var v9 = `m(dF3x) // 42`
    
      var showBlue = `      .blue {
          height: 60px;
          width: 60px;
          background-color: lightblue;
          display: inline;
          border-radius: 10px;
      }`;

var dom = `<div id="steady">
  <div class="container">
    <div class={cu}>
      <div class="face front">
        <div class="grid">
          <div class={m(dF3x)[3][0]} />
          <div class={m(dF3x)[3][1]} />
          <div class={m(dF3x)[3][2]} />
          <div class={m(dF3x)[3][3]} />
          <div class={m(dF3x)[3][4]} />
          <div class={m(dF3x)[3][5]} />
          <div class={m(dF3x)[3][6]} />
          <div class={m(dF3x)[3][7]} />
          <div class={m(dF3x)[3][8]} />
        </div>
      </div>

      <div class="face back">
        <div class="grid">
          <div class={m(dF3x)[2][8]} />
          <div class={m(dF3x)[2][7]} />
          <div class={m(dF3x)[2][6]} />
          <div class={m(dF3x)[2][5]} />
          <div class={m(dF3x)[2][4]} />
          <div class={m(dF3x)[2][3]} />
          <div class={m(dF3x)[2][2]} />
          <div class={m(dF3x)[2][1]} />
          <div class={m(dF3x)[2][0]} />
        </div>
      </div>

      <div class="face right">
        <div class="grid">
          <div class={m(dF3x)[0][0]} />
          <div class={m(dF3x)[0][1]} />
          <div class={m(dF3x)[0][2]} />
          <div class={m(dF3x)[0][3]} />
          <div class={m(dF3x)[0][4]} />
          <div class={m(dF3x)[0][5]} />
          <div class={m(dF3x)[0][6]} />
          <div class={m(dF3x)[0][7]} />
          <div class={m(dF3x)[0][8]} />
        </div>
      </div>

      <div class="face left">
        <div class="grid">
          <div class={m(dF3x)[1][0]} />
          <div class={m(dF3x)[1][1]} />
          <div class={m(dF3x)[1][2]} />
          <div class={m(dF3x)[1][3]} />
          <div class={m(dF3x)[1][4]} />
          <div class={m(dF3x)[1][5]} />
          <div class={m(dF3x)[1][6]} />
          <div class={m(dF3x)[1][7]} />
          <div class={m(dF3x)[1][8]} />
        </div>
      </div>

      <div class="face top">
        <div class="grid">
          <div class={m(dF3x)[4][0]} />
          <div class={m(dF3x)[4][1]} />
          <div class={m(dF3x)[4][2]} />
          <div class={m(dF3x)[4][3]} />
          <div class={m(dF3x)[4][4]} />
          <div class={m(dF3x)[4][5]} />
          <div class={m(dF3x)[4][6]} />
          <div class={m(dF3x)[4][7]} />
          <div class={m(dF3x)[4][8]} />
        </div>
      </div>

      <div class="face bottom">
        <div class="grid">
          <div class={m(dF3x)[5][0]} />
          <div class={m(dF3x)[5][1]} />
          <div class={m(dF3x)[5][2]} />
          <div class={m(dF3x)[5][3]} />
          <div class={m(dF3x)[5][4]} />
          <div class={m(dF3x)[5][5]} />
          <div class={m(dF3x)[5][6]} />
          <div class={m(dF3x)[5][7]} />
          <div class={m(dF3x)[5][8]} />
        </div>
      </div>
    </div>
  </div>
</div>`;

  
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
    return temp;
  }`;


</script>

<pre class = "dis">{Mdis}</pre>
<pre class = "play">{Mplay}</pre>
<pre class = "dis">{Mend}</pre>

<dist class = "light">Anonymous Computation:</dist>
<pre>{v3}</pre>
<br>
<div class = "light">
<span>Encapsulated State:</span>
<pre>{v4}</pre>
<pre>{v5}</pre>
<span>Sometime later (the garbage collector ignores closures):</span>
<pre>{v6}</pre>
<pre>{v7}</pre>
<pre>{v8}</pre>
<pre>{v9}</pre>
<p> An array is added  </p>
</div> 

<p>m-M(x) closures that listen for DOM events, and whose only side effects are modifications of the DOM, encapsulate state transformations in a manner reminiscent of the Haskel IO monad. &nbsp; <a href = "./cube7">Here</a> , &nbsp; x in the m-M(x) (M is slightly modified) is an array of six nine-member arrays.</p>

<h1 style='text-align:center;' >Dynamic Closures</h1>
<div class = "background">
  <p style = "color: lightgreen; font-size: 28px; font-weight: bold ">Background:</p>
<p style = "color: lightgreen;">Indiana University awarded me a bachelor of science degree in chemistry, a master's degree in mathematics, and a doctor of jurisprudence degree in law. Sun Microsysystems certified me as a Java Programmer and Java Website Developer, which qualified me for a job I took at Indiana University, working on a project as a Programmer/Systems Analyst. I had been told I needed the insurance I.U. provided to cover an expensive operation. I didn't know about Indiana's high risk insurance program, which I could afford and which provided, essentially, universal health care for the middle class and people with benefactors to pay the premiums.</p>
<p  style = "color: lightgreen;"> I'll never again get involved in a Java project and I can't imagine ever again needing React. After developing an elaborate online multi-player game in the Haskel programming language, still using React for the user interface, I decided to stick with JavaScript and simple frameworks. This is a SvelteKit application.</p>
<p style = "color: lightgreen;"> While it makes sense to develop web applications with a few elaborate functions in conjunction with reusable small ones, I decided to try the opposite approach. What I discovered is worth sharing, to say the least, so here it is.  </p>
  
 <p> The code samples at the top of this page shows that function composition using M can't be more transparent, concise, and maintainable. Going beyond numerical computations, M holds the ever-changing state of play in the<a href = "./score">Game of Score</a>, but that application relies too heavily on the functions that transform x in the m-M(x) closure. A modified version of M will make the code more efficient and understandable after I refactor the application.  </p> 

  <p>
  A few additional lines of code in M can facilitate nesting of mixed synchronous and asynchronous functions handled by m, and can help avoid mutations by providing an array, let's call it "ar", into which f(x) (which runds after m(f)) can be pushed, and having dF3x prompt the return of ar.slice(-1)[0] when f === dF3x. But enough of the small stuff, now it's time to show m-M(x) closures in all their glory, deftly making complex applications work while they do nothing but allow the function m to transform them by means of the functions m fetches. The <a href = "./cube7">Simulated Rubik's cube</a> is a case in point. </p>

  <p> The array x in the m-M(x) Rubik's cube array is an array consisting of six nine-member arrays of references to the strings "blue, green, red, orange, yellow and white." Functions called in response to DOM key presses and mouse clicks rearrange these strings, which are the names of CSS classes whose "background-color" properties match the names of the selectors that contain them. For example, the CSS class "blue" contains the line, "background-color: "blue".  </p>

  <p> To understand the interface between the m-M(x) representation of the cube with the 54 colored divs in the DOM, we first need to know how x in the closure is defined. Here it is: </p>
  
  <pre>{classCode2}</pre>

<p> m(dF3x)[0][0] on the solved cube representation in the DOM is a div with class = "blue". Here's blue's definition:   </p>
<pre>{showBlue}</pre>

      <p> Below is the cube representation in the DOM. Notice how the colors corresponds with the image in the monitor -- orange in front m(dF3x)[3], blue on the side m(dF3x)[0], and yellow on top (m(dF3x)[4]). </p>

<pre>{dom}</pre>


<p> When you press "r", click the "R" button, or click the upper left corner of the right side of the cube representation, the function 'R' is called on the array of six arrays of references to strings in the m-M(x) closure. The current configuration of x in the closure is of no concern to 'R'. It rearranges the strings based solely on their positions -- 54 positions, ranging from m(dF3x)[0][0] to m(dF3)[5][8].</p>

<p> R specifies that whatever string reference happens to be in position m(dF3x)[3][2] changes to whatever string reference happens to be in position m(dF3x)[5][2]. If the cube is in its starting configuration (solved, prior to scrambling), the upper right front corner will go from orange to white. Beyond that, we know nothing about the color of the front upper right corner before or after m(R) runs. The class will change to the whatever the class of the div in the front upper right corner (m(dF3x)(5)(2)) happens to be, but the background-color of that class might be whatever the background color of m(dF3x)(3)(2) happens to be. Here's the definition of R:  </p>

<pre>{Rcode}</pre>

<p> Running m(R) on a solved cube leaves the right side solid blue and the left side grid-template-columns-``. The front remains orange except for locations 2, 5, and 8 (the right column), which become white. </p>

<h1>STOP</h1>
<p> This is where the revision ends. </p>


 <p> The <a href="./cube7">Simulated Rubik's cube</a> page has gone through improvements, including code refactoring, that render much of its text incorrect -- but the cube itself works like a charm. Here's an explanation of the code, beginning with the interface between the closure holding the array of six nine-member arrays of references to the strings "blue, green, red, orange, yellow, and white" and the div containing six nine-member arrays of divs. The strings in the representation are the names of CSS classes with background-color entries corresponding to their names.  </p> 
  



 <p> The code samples at the top of this page show that function composition using M can't be more transparent, concise, and maintainable. When I get around to it, I'll show how slight modification of M facilitate nesting of mixed synchronous and asynchronous handled by m, and how, when x is an array, pushing modifications onto it can avoid mutations. The code is tested and good to to, but it's time now to show m-M(x) closures handling larger applications. There's the <a href="./score">Game of Score</a> and my current project, <a href="./cube7">Simulated Rubik's cube</a>.</p>
  
 <p> Key press and mouse click events call eventHandler(e) where e is an object containing an integer named keyCode. If eventHandler contains an object with a keyCode number matching keyCode in e, m(f) is called where f is a function that rearranges   resides  response to events initiated in the DOM. </p> 
<p> Events initiated by user key presses and clicks cause eventHandler() to call m on functions that operate on arrays of six nine-member arrays.   </p> 
</div>

<p> The following discussion centers around the function M (defined below), along with closures of the form m-M(x), where m = M(x) and x can be any JavaScript value. </p>


<p> M can, of course, be modified to include try-catch blocks, objects, or anything else. Modification of M in this presentation are small. The functions provided to m are responsible for turning the six sides and three middle sections of the cube. </p>


  <p>
    The simulated Rubik's cube example follows the convention of creating an
    application's main closure by calling "m = M(x)", where x can be any value,
    and r-erring to the result as "the m-M(x) closure." "x" is encapsulated,
    sequestered from everything outside the closure's scope. As is apparent from
    the definition of M (below_), 'x' can be modified by calling m(func) for
    some function "func". In the simplest version of "M", calling m(func)
    mutates "x," changing it from x to func(x).
  </p>
  
  <p>
    <span style="color:yellow; font-weight:bold">CAUTION</span> as will be
    extensively discussed on this page, m(dF3x) is a reference to 'x' in the
    closure unless the line in M,
    <span class="O"> if (func === dF3x) return x;</span>
    is changed to <span class="O">if (func === dF3x) return clone(x)</span> for some
    function "clone" that returns a perfect duplicate of 'x' with an address in memory
    different from that of 'x'. More about that later. First, here's the definition
    M and some examples of m-M(x) closures:
  </p>

  <p>
    The <a href="./score#mDef">Solitaire Game of Score</a> involves using two six-sided,
    one twelve-sided, and one twenty-sided die along with arithmetic and concatenation
    to arrive at the number 20 in two or more moves. The initial value of "x" in
    the m-M(x) closure is shown in the definition of m2:
  </p>
  <pre>m2 = M([ 
    [Math.floor(Math.random() * 6)   + 1, Math.floor(Math.random() * 6) + 1,
     Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 20) + 1], 
     [], ['+'], [], [0], [], [0], [] 
]);</pre>
  <h2>The Simulated Rubik's Cube</h2>
  <p>
    The <a href="./cube7">simulated Rubik's cube</a> is another example of a fairly
    complex application whose state is maintained in a tiny closure. The bare bones
    M shown above can handle the transformations of the cube, from keystroke or button
    click to the result seen in the browser. But, in order to facilitate taking back
    a series of moves, an array of references to every argument provided to m was
    added.
  </p>
  <h3>The Code Directly Responsible for the Browser Display</h3>

  <p>
    In the DOM, the simulated Rubik's cube consists of 6 groups of 9 Div
    elements. User moves rearrange classes. Cubies change color when they are
    assigned a class with a different background
  </p>

  <p>
    Those arguments are functions that operate on x in the m-M(x) closure; i.e.,
    that operate on <span style="color: orange">[ bb, gg, rr, oo, yy, ww ]</span
    >, the array that determines the background colors of the 54 divs in the
    DOM, thereby controling the configuration of the cube displayed in the
    browser. When an array was added to the definition of M, the original M was
    renamed M2. Here's the complete definition of m in the m-M(x) closure,
    beginning with the revised definition of M:
  </p>
  <pre>{Mcode}</pre>  
  <pre>{classCode2}</pre>

  <p>
    As the line "else x = func(x);" in the definition of M indicates, m(func)
    causes func(x) to replace x in the m-M(x) closure unless func is dF3x or
    dF3ar. Pressing the "r" key or clicking on the "R" rotates the right side of
    the cube clockwise a quarter turn. See how it uses the elements of the
    current configuration (named "ar") of <span style="color: orange"
      >[ bb, gg, rr, oo, yy, ww ]</span
    > as a source of building blocks to assemble the updated configuration, named
    "temp."
  </p>

  <pre>{Rcode}</pre>
  <p>
    The functions that manipulate the cube have numerous lines of code, but they
    are as simple as they could possibly be. They don't rely on procedures to
    determine what goes where during the construction of "temp", they are just
    instructions specifying the new locations of the elements of the array held
    in the m-M(x) closure. While not organized in tabular form, they are
    essentially items in a lookup table.
  </p>
  <p>
    If the meanings of passing by value and passing by reference is clear, as
    I'm sure it is for many of you, reading the rest of this section on the Rubik's cube simulator might be tedious. For those who are still a little unsure, I hope
    reading this will be the breakthrough that clarifies it once and for all.
  </p>
  <p>
    With moves stored in ar, setting the cube configuration back to where it was
    prior to the most recent move requires nothing more than the three short
    lines of code in the function "reverse". When m(dF3ar) is modified in
    reverse, 'x' is simultaneously modified in the m-M(x) closure. This is
    because both 'x' and m(dF3ar) are references to the same address in memory.
    Change what is stored at that address with either one, and that will be the
    value of both 'x' and 'm(dF3ar) and any other variable that happens to point
    to that location.
  </p>
  <pre>{reverseShow}</pre>
  <p>
    m(dF3ar) is a reference to ar in the m-M(x) closure, so reverse() shortens
    the length of ar inside the closure. Very little browser memory is needed to
    store the information necessary to reverse hundreds of moves. Making moves
    is not resource intensive either. A move doesn't rearrange the div elements
    of the cube or rotate numerous little cubits, as is the case with many
    Rubik's cube simulators. All it does is rearrange the placement of the
    strings (names of colors) referring to some CSS classes.
  </p>
  <p>
    The reverse function is oblivious to precisely which functions were
    responsible for the transformations being reversed. Whatever the function at
    the top of the list happens to be, it runs three more times. After foo
    executes, it and the function that was reversed are discarded, making the
    list one item shorter than it was.
  </p>
<div style="margin-left:2%; margin-right: 2%;">
  <img class="display_image" src={passBy} />
</div>
<div style="margin-left:12%; margin-right: 12%;">
  <p>
    Distinguishing between passing by value (primitives) and passing by
    reference (objects) is a stumbling block for people new to JavaScript. It's
    important to know that string, number, bigint, boolean, undefined, symbol,
    and null are the primitive values. All other values are down the prototype
    chain from Object and are, therefore, objects. Here's verification that a
    simple function is an object:
  </p>
</div>
<div style="margin-left:2%; margin-right: 2%;">
  <img class="display_image" src={object} />
</div>
<div style="margin-left:12%; margin-right: 12%;">
  <p>See "prototype: Object" at the bottom of the right side.</p>

  <a id="examples" />
  <h1>Elementary Facts and Examples</h1>

  <p>
    M can serve as the outer scope for multiple orthogonal (non-interacting)
    functions, with structures identical to M's "go()". For example:
  </p>
  <pre>{orthoganal}</pre>

  <h3>"M" facilitates function composition.</h3>
  <p>Gargage collectors should delete this.</p>
  <pre>{compose1}</pre>
  <p>
    The value "x" in the m-M(x) closure persists until m is redefined or
    deleted.
  </p>
  <pre>{compose2}</pre>
  <p>
    Recommended Reading: <a
      href="https://www.youtube.com/playlist?list=PLillGF-Rfqbars4vKNtpcWVDUpVOVTlgB"
      >Javascript Under the Hood</a
    >
  </p>
  <slot />
</div>

<style>
  /*img {
        width:120%; 
        height:120%;
    }*/
  .background {
    color: lightgreen;
  }

  h3 {
    color: turquoise;
  }

  img {
    display: block;
    margin: 0 auto;
    width: 100%;
  }

  .O {
    color: orange;
  }

.dis {
  color: #fe0374;
  font-weight: bold;
  font-size: 28px;
}

.play {
  color: yellow;
  font-weight: bold;
  font-size: 28px;
}

.light {
  color: rgb(172, 231, 243)
}

</style>
