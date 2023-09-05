
<script>

import Firefox_1 from '$lib/Firefox_test.png';
import Firefox_2 from '$lib/Firefox_test_2.png';
import Firefox_3 from '$lib/Composition.png';

var Mdisplay = `function M (x) {
  return function go (func) {
    if (func === dF3s7) return x;
    else x = func(x);
    return go;
  }
}
Where dF3s7 = () => {}; // This flag is a function in order to simplify future type checking.`

var ret = () => {};

function M (x) {
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

var mona = `function M (x) {
  return function go (func) {
    if (func === dF3s7) return x;
    else x = func(x);
    return go;
  }
}
Where dF3s7 = () => {}; // This flag is a function in order to
                              accommodate future type checking.`
var orthoganal = `var demo1 = M(3);
var demo2 = M(3);
demo1(v=>v**3);
demo2(v=>v - 1);
console.log(demo1(dF3s7)); // 27
console.log(demo2(dF3s7)); // 2`;

var compose1 = `var m = M(3);
log(M(3)(v=>v**3)(v=>v*3)(Math.sqrt)(dF3s7)); // 9`;

var compose2 = `m(()=>4);  // Sets x in the m-M(x) closure to 4.
m(v=>v**4)(v=>v**(1/2))(v=>v-7)
log(m(dF3s7))                             // 42

var add = a => b => a + b;
var mult = a => b => a * b;
var exp = a => b => b**a;

m(()=>3)(add(4))(exp(4))(Math.sqrt)(add(-7));
log(m(dF3s7))                             // 42

// NOTE: ()=>3 (above) resets the value in the m-M(x) closure to 3.

log(M(2)(add(4))(mult(7))(dF3s7))`
var mean = `function meaning (ar) {return ar.reduce((a, 
  currentValue) => a**3 + currentValue, 0) - 2*13};

var m = M([1,3,4]);
m(meaning);
m(dF3s7);     // 42`;

  var M4 = `function M(x) {
    let ar = [];
    return function go(func) {
      if (func === dF3s7) return x;
      if (func === Rf7ar3s5) return ar;
      else x = func(x);
      if (typeof func == "function") ar.push(func);
      return go;
    };
  };`;


var reverseShow = `function reverse () {  // this works
    var k = m(Rf7ar3s5).length;
    let fu = m(Rf7ar3s5)[k-1];
    let foo = x => fu(fu(fu(x)));
    m(foo);
    m = m;
    let arr = m(Rf7ar3s5);
    if (m(Rf7ar3s5).slice(-1)[0].name !== m(Rf7ar3s5)
       .slice(-2,-1)[0].name) m(Rf7ar3s5).splice(-2,2);
};`;

  
</script>

<style>
body {
width: 70%;
margin: 0 auto;
}

h3 {
  color: black;
}

span {
  color: darkblue;
  font-size: 22px;
}

p {
  color: darkblue;
  font-size: 22px;
}
pre {
  color: #550033;
}

h1 {
  color: #550033;
}

button {
  font-size: 22px;
}



</style>


<body>
<h1>JavaScript Functions</h1>
<h3 style="font-size: 32px; font-weight: bold"> This little function . . .  </h3>
<pre>{mona}</pre>
<h3> . . . can anonymously compose functions,</h3>
<pre>M(3)(v=>v**3)(v => v*4)(v => v - 8)(Math.sqrt)(dF3s7);  // 10</pre>
<h3>. . . can serve as the outer scope for closures encapsulating everything that happens in applications.</h3>
<h3>&nbsp&nbsp;&nbsp;&nbsp;&nbsp;. . . be they simple,</h3>

<pre>var result = [3,4,5,6,7,8,9].reduce((a, b) => a + b); // 42</pre>

<h3>&nbsp&nbsp;&nbsp;&nbsp;&nbsp;... or complex,</h3>

  <span style="color:maroon;">m = M( [ bb, gg, rr, oo, yy, ww ] )</span>
  <span>at <a href="./cube3#cubeDef">Rubik's Cube Simulation</a>, in which the m-M(x) closure encapsulates an array of six nine-member arrays of references to strings. These strings signify div classes with background colors corresponding to the colors of the cube which is displayed in the browser. User key presses and button clicks invoke functions that work inside the m-M(x) closure, rearranging the classes of the 54 divs that constitute the cube. Here's another complex application encapsulated in an m-M(x) closure: <a href="./score">The Solitaire Game of Score</a>. It could use some cleaning and refactoring, but the browser interface works like a charm. </span>
<p> I suspect that many readers are still getting used to m-M(x) closures, where functions "f" operate on x sequestered away from whatever else is happening in a module not by directly operating on x (i.e., an immediate call to f(x)), but by being provided to m as arguments. Regardless of how comfortable you are with these closures, this is a good time to be surprised by the tiny amount of memory, and the simplicity of the function, needed to reverse a series of simulated Rubik's cube moves. There's no need to save the prior configurations of the cube in order to revisit them in the browser, one by one. All that's needed is an array of references to the functions invoked in performing prior moves. The demo is here: <a href="./cube4">cube4</a>. 
  A more detailed and thorough explanation of the Rubik's cube examples is directly below. Click here to skip to the section showing lots of <a href="#examples">examples and facts about m-M(x) closures</a> </p>

<a id="cube"></a>
<h1>Simulated Rubik's Cube</h1>
<p> M is re-defined for <a href="./cube3">cube3</a> as follows:
<pre style="margin-left:50px">{M4}</pre>
<p>And here's the function that can reverse a series of moves::</p>
<pre>{reverseShow}</pre>
<p>foo reverses fu because the inverse of any cube rotation is three more rotations. All of the basic button clicks and key presses cause 90 degree rotations. The algorithms in the right column are compositions of basic moves. Letters followed by "2" indicate two basic moves. Clicking <button on:click={sune}>Sune: R U R' U R U2 R'</button> increases the functions list, m(Rf7ar3s5), by 8, as shown in <a href="https://schalk2.com/cube4">Rubik's Cube</a></p>
<p>The reverse function is oblivious to precisely which functions were responsible for the transformations being reversed. Whatever the function at the top of the list happens to be, it run three more times. After foo executes, it and the function that was reversed are discarded, making the list one item shorter than it was before the "u" key was pressed (or <button on:click={Start}>Start</button> was clicked). </p>


<a id="examples"></a>
<h1>Elementary Facts and Examples</h1>


<p> M can serve as the outer scope for multiple orthogonal (non-interacting) functions, with structures identical to M's "go()". For example:</p> 
<pre>{orthoganal}</pre>
 
<h3> "M" facilitates function composition.</h3>  
<p>Gargage collectors should delete this.</p>
<pre>{compose1}</pre>
<p>The value "x" in the m-M(x) closure persists until m is redefined or deleted.</p>
<pre>{compose2}</pre>
<p>Here's a screenshot of the test in Firefox <a href = 'https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html'>Firefox Developer Console</a>  </p>
  
<img alt = "Firefox3" src = {Firefox_1} 
width = 120%;
height = auto;
/>
  <p> functions that operate on functions that operate on values held in closures. These operations can mutate the value in the closure or replace it, preserving the previous value along-side its replacement. </p>
<p>Type safety, error handling, and other functionality can be added; but for now, we'll consider just the essence of JS-Monads by working with a stripped-down, bare-bones version. This version, returned by M(x) (shown below) where x can be any JavaScript value, works much like Haskell monads without types, encapsulating and sequestering the composition of functions. </p>
<p>As the "Cube" and "Score" pages of this website (linked above) suggest, these simple closures can handle complex functionality in elaborate applications. There's no need to modify the JS-Monad factory function "M", or the copy of "go" that it returns, and which subsequently returns itself each time it operates on a function. The functions operated on by JS-monads (m-M(x) closures) can handle any degree of complexity. Here are some definitions:</p>

<pre>{Mdisplay}</pre>
<p>NOTE: "var" is used in this development version where "const" would be used in production. The purpose is to facilitate error-free revisions on the fly.</p>

<p>"m-M(x)" closures encapsulate the state of a <a href='./cube3'>Rubik's cube simulator</a>, and the state of attempts to win a simulated dice game in the <a href='./score'>Solitaire Game of Score</a>. But before elaborating on these, lets first explore some basic functionality of the m-M(x) closures. </p>

<pre>{test_0}</pre>

<h1> WORK IN PROGRESS:</h1>
<img alt = "Firefox" src = {Firefox_1} 
width = 120%;
height = auto;
/>

<h3>Immutable State</h3>
<p>The value "x" in m = M(x) can be an anonymous array, named "x" only inside the closure. "m(func) can concatenate its return value to the array, preserving the previous value and making the updated value available as needed."</p>
<p>Here's some example code, followed by a test in Firefox.</p>
<pre>{test_1}</pre>
<img alt='Firefox2' src = {Firefox_2} 
width = 120%;
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
<h1>Function Composition Simplified</h1>
<pre>{ZbackDemo}</pre>

<br><br><br>


<p> In the neighboring <a href=./cube>Rubik's cube></a> page, the functions for rotating the entire cube are elaborate and intricate. Other simulators use libraries or CSS transforms to rotate cubes, but I've yet to see one keyboard controllable Rubik's cube simulator that remains sensible after rotations. If the original right side happens to be on the bottom, pressing the key that used to rotate the right side rotates the bottom instead. </p>
<p> Under the hood, the cube remains stationary while the stickers (colors) get rearranged to simulate rotations of the faces, centers, and entire cube. Pressing the "r" key, for example, always rotates the right face of the cube on this page, but nowhere else as far as I know. </p>
<p>Here are the functions that rotate the cube 90 degrees on the Z axis: </p>
<pre>{Zdemo}</pre>
<p>Writing the code for Zro was a meticulous and painstaking endeavor. Nine copies each of the strings "blue", "green", "red", "orange", "yellow", and "white" had to be rearranged precisely as they are when a real Rubik's cube is rotated. </p>
<p> Substituting a new arrangement of the stickers (colors) for the previous one doesn't require much of the browser engine's memory or processing capability, and making the substitution requires very little time; so, rather than write another elaborate recipe for the reverse rearrangement, I simply ran the 90 degree rotation three times. It was sure to work as well as running it once, so no testing or bug-hunting was necessary. Here's the code for rotating 90 degrees counterclockwise on the Z axis</p>


<slot></slot>

</body>
