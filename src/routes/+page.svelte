


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
Where ret = () => {}; // This flag's being a function can simplify future type checking.`

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
log('m(ret) is', m(ret)); // peaches

m(x => x + ' and pears')
log('m(ret) is', m(ret)); // peaches and pears

m(()=>3);  // Equivalent to m = M(3) whenever m is mutable.
log('m(ret) is', m(ret)); // 3

log(m(v=>v**3)(v=>v+v)(v=>v-12)(ret)) // 42

var Pyth = a => b => Math.sqrt(a*a + b*b); 
log(M(Pyth(3)(4))(ret)); // This anonymous computation returns 5`

var test_1 = `var arr = m = M([1,2,3]);

var add = x => a => a.concat(x + a.slice(-1)[0]);
var mult = x => a => a.concat(x * a[a.length-1]);
m(add(4));
log("1. m(ret)", m(ret)); // [ 1, 2, 3, 7 ]
m(mult(6));
log("2. m(ret)", m(ret)); // [ 1, 2, 3, 7, 42 ]

// Next, we append the three stages of 6 * Math.sqrt(7 + 42)  // 49, 7, 42 
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
}

function sfunc () {
    b0 = b1 = b2 = b3 = b4 = b5 = b6 = b7 = "none"; // All button displays controlled by b's disappear.
    if (AA != (undefined && 0)) b0 = "inline"; // Next, selected buttons are diplayed.
    if (BB != (undefined && 0)) b1 = "inline";
    if (CC != (undefined && 0)) b2 = "inline";
    if (DD != (undefined && 0)) b3 = "inline";
    if (WW != (undefined && 0)) b4 = "inline";
    if (XX != (undefined && 0)) b5 = "inline";
    if (YY != (undefined && 0)) b6 = "inline";
    if (ZZ != (undefined && 0)) b7 = "inline";
}`;

</script>

<h1>The Basic JS-Monad</h1>

<p>Basic JS-Monads, as defined and demonstrated in this website, are functions that operate on functions that operate on values held in closures. These operations can mutate the value in the closure or replace it, preserving the previous value while along-side its replacement. </p>
<p>Type safety, error handling, and other functionality can be added, but for now, we'll consider just the essence of JS-Monads by working with a stripped-down, bare-bones version. This version, returned by M(x) (shown below) where x can be any JavaScript value, works much like Haskell monads without types, encapsulating and sequestering the composition of functions. </p>
<p>As the "Cube" and "Score" pages of this website (linked above) suggest, these simple closures can handle complex functionality in elaborate applications. There's no need to modify the JS-Monad factory function "M", or the copy of "go()" that it returns. The functions operated on by JS-monads can handle the Complexity. Here are some definitions:</p>

<pre>{Mdisplay}</pre>

<p>"m-M(x)" closures encapsulate the state of a <a href='./cube1'>Rubik's cube emulator</a>, and the state of attempts to win a simulated dice game in the <a href='./score'>Solitaire Game of Score</a>. But before figuring out how these work, lets explore some basic functionality. Here are examples of things mentioned above, including "automatically executing closures", "elegant function composition", "persistent named and anonymous state", and "encapsulation of state updates." </p>

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
var m = M(cube);</pre>
<p>Instead of rearranging 24 little cubies for each move, as many other Rubik's cube simulators do, this version rearranges the colors according to a lookup table of possible moves. For example, no matter what configuration the cube is in, clicking "R" to turn the right face clockwise performs this transformation: </p>
<pre>{table}</pre>
<p>The <a href='./score'>Game of Score</a> is more complicated. The closure is defined this way:</p>
<pre>{score}</pre>
<p>Here are three of the application's functions:</p>

<pre>{fuDem}</pre>
<p>More details are at <a href='./score'>Game of Score</a>. </p>
<br><br><br>
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


