


<script>


import Firefox_1 from '$lib/Firefox_test.png';
import Firefox_2 from '$lib/Firefox_test_2.png';

var Mdisplay = `var M = function M (x) {
  return function go (func) {
    if (func === ret) return x;
    else x = func(x);
    return go;
  }
}
Where ret = () => {}; // This flag is a function in order to simplify future type checking.`

var ret = () => {};

var M = function M (x) {
  return function go (func) {
    if (func === ret) return x;
    else x = func(x);
    return go;
  }
};

var log = console.log;
var test_0 = `var m = M('peaches');
log('m(ret) is', m(ret)); // m(ret) is peaches

m(x => x + ' and pears')
log('m(ret) is', m(ret)); // m(ret) is peaches and pears

m(()=>3);  // Equivalent to m = M(3) whenever m is mutable.
log('m(ret) is', m(ret)); // m(ret) is 3

log(m(v=>v**3)(v=>v+v)(v=>v-12)(ret)) // m(ret) is 42

var Pyth = a => b => Math.sqrt(a*a + b*b); 
log(M(Pyth(3)(4))(ret)); // This anonymous computation returns 5`

var test_1 = `var arr = m = M([1,2,3]);

var add = x => a => a.concat(x + a.slice(-1)[0]);
var mult = x => a => a.concat(x * a[a.length-1]);
m(add(4)); // 4 + 3 is concatenated to a.
log("1. m(ret)", m(ret)); // [ 1, 2, 3, 7 ]
m(mult(6));  // 6 * 7 is concatenated to a.
log("2. m(ret)", m(ret)); // [ 1, 2, 3, 7, 42 ]

// Next, we append the three stages of Math.sqrt(7 + 42) * 6  // 49, 7, 42 
log(m(x => x.concat(x[3] + x[4]))(x=>x.concat(Math.sqrt(x[x.length - 1])))(mult(6))(ret))
// [ 1, 2, 3, 7, 42, 49, 7, 42 ]`

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
    ]);`


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
  };`

var ZbackDemo = `function Zback (ar) {
      cube = m(Zro)(Zro)(Zro)();
  };`




</script>

<h1>The Basic JS-Monad</h1>

<p>Basic JS-Monads, as defined and demonstrated in this website, are functions that operate on functions that operate on values held in closures. These operations can mutate the value in the closure or replace it, preserving the previous value along-side its replacement. </p>
<p>Type safety, error handling, and other functionality can be added; but for now, we'll consider just the essence of JS-Monads by working with a stripped-down, bare-bones version. This version, returned by M(x) (shown below) where x can be any JavaScript value, works much like Haskell monads without types, encapsulating and sequestering the composition of functions. </p>
<p>As the "Cube" and "Score" pages of this website (linked above) suggest, these simple closures can handle complex functionality in elaborate applications. There's no need to modify the JS-Monad factory function "M", or the copy of "go" that it returns, and which subsequently returns itself each time it operates on a function. The functions operated on by JS-monads (m-M(x) closures) can handle any degree of complexity. Here are some definitions:</p>

<pre>{Mdisplay}</pre>
<p>NOTE: "var" is used in this development version where "const" would be used in production. The purpose is to facilitate error-free revisions on the fly.</p>

<p>"m-M(x)" closures encapsulate the state of a <a href='./cube1'>Rubik's cube simulator</a>, and the state of attempts to win a simulated dice game in the <a href='./score'>Solitaire Game of Score</a>. But before elaborating on these, lets first explore some basic functionality of the m-M(x) closures. </p>

<pre>{test_0}</pre>

<p>I urge you to define a function returned by M(x) for some value x as I did for "m = M('peaches')" in some REPL and experiment. I tested the above code in Firefox Dev Tools as follows:</p>
<img alt = "Firefox" src = {Firefox_1} 
width = 100%;
height = auto;
/>

<h3>Immutable State</h3>
<p>The value "x" in m = M(x) can be an anonymous array, named "x" only inside the closure. "m(func) can concatinate its return value to the array, preserving the previous value and making the updated value available as needed."</p>
<p>Here's some example code, followed by a test in Firefox.</p>
<pre>{test_1}</pre>
<img alt='Firefox2' src = {Firefox_2} 
width = 100%;
height = auto;
/>
<br><br>
<h3>More Elaborate Applications</h3>
<p>Here's how x in m = M(x) is defined in the <a href='./cube1'>Rubik's cube simulation</a></p>

<pre>b0 = b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = "blue"
g0 = g1 = g2 = g3 = g4 = g5 = g6 = g7 = g8 = "green"
r0 = r1 = r2 = r3 = r4 = r5 = r6 = r7 = r8 = "red"
o0 = o1 = o2 = o3 = o4 = o5 = o6 = o7 = o8 = "orange"
y0 = y1 = y2 = y3 = y4 = y5 = y6 = y7 = y8 = "yellow"
w0 = w1 = w2 = w3 = w4 = w5 = w6 = w7 = w8 = "white"

var bb = [b0,b1,b2,b3,b4,b5,b6,b7,b8];
var gg = [g0,g1,g2,g3,g4,g5,g6,g7,g8];
var rr = [r0,r1,r2,r3,r4,r5,r6,r7,r8];
var oo = [o0,o1,o2,o3,o4,o5,o6,o7,o8];
var yy = [y0,y1,y2,y3,y4,y5,y6,y7,y8];
var ww = [w0,w1,w2,w3,w4,w5,w6,w7,w8];

var cube = [bb,gg,rr,oo,yy,ww]
var m = M(cube); // x is the solved Rubik's cube representation encapsulated in the m-M(x) closure.</pre>
<p>Instead of rearranging 24 little cubies for each move, as many other Rubik's cube simulators do, this version rearranges the colors with JavaScript and a lookup table of possible moves. Rotation of the cube, its middle sections, and its faces is accomplished only with JavaScript, never with the CSS transform property.</p>
<p> The keyboard controls are oblivious to the cube colors. They are not affected by rotations, making the cube much easier to solve than most (possibly all) other online Rubik's cube simulators. For example, clicking "R" always turns the right face clockwise. Other simulator keyboard controls follow the original cube orientation, so clicking "R" might turn the bottom, top, left, back, or front face, depending on previous cube rotations. </p>


  <pre>{Rf}</pre>
<p> which turns the face currently on the right side of the cube clockwise, pursuant to this table of transformations: 

<pre>{table}</pre>
<p>The <a href='./score'>Game of Score</a> closure is defined this way:</p>
<pre>{score}</pre>
<p>Functions for m-M(x) closures can be elaborate. For example, here are two functions used in the Game of Score:</p>

<pre>{fuDem}</pre>
<p>More details are at <a href='https://github.com/dschalk/JavaScript-Functions'>Javascript-Functions</a>. </p>
<br><br>
<h1>These JavaScript Monads Simplify Function Composition</h1>
<p> In the neighboring <a href=./cube>Rubik's cube></a> page, the functions for rotating the entire cube are elaborate and intricate. Other simulators use libraries or CSS transforms to rotate cubes, but I've yet to see one controllable from the keyboard whose controls remain sensible after rotations. If the original right side happens to be on the bottom, pressing the key that used to rotate the right side rotates the bottom instead. </p>
<p> Under the hood, the cube remains stationary while the stickers (colors) get rearranged. Pressing the "r" key always rotates the right face of the cube. </p>
<p>Here are the functions that rotate the cube 90 degrees on the Z axis: </p>
<pre>{Zdemo}</pre>
<p>Writing the code for Zro was a meticulous and painstaking endeavor. Nine copies each of the strings "blue", "green", "red", "orange", "yellow", and "white" had to be rearranged precisely as they would be if a real Rubik's cube were rotated. </p>
<p> Substituting a new arrangement of the strings for the previous one doesn't strain the browser engine so, rather than write another elaborate recipe for the reverse rearrangement, I simply ran the 90 degree rotation three times. It was sure to work perfectly from the start, so no bug-hunting was required. Here's the code for rotating 90 degrees counterclockwise on the Z axis</p>
<pre>{ZbackDemo}</pre>

<br><br><br>
<!--
  var trCount = 0;


  function transform () {
    var ar = cube;
    m( [ ar[2], ar[3], ar[1], ar[0], [ ar[4][6], ar[4][3], ar[4][0], ar[4][7], ar[4][4], ar[4][1],ar[4][8], ar[4][5], ar[4][2] ], [ ar[5][2], ar[5][5], ar[5][8], ar[5][1], ar[5][4], ar[5][7],ar[5][0], ar[5][3], ar[5][6] ] ] );
    cube = m();

    trCount = (trCount + 1) % 4;
    var Rtemp;
    if (trCount === 1) {
      Rtemp = B;
      F = L;
      L = B;
      B = Rtemp;
      R = F;
    }
    console.log("In transform. m() is", m());
    return cube;
  }
-->

<slot></slot>


