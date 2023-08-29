var Rf78d3s5 = () => {};
var Rf7ar3s5 = () => {};
var Rf7back3s5 = () => {};

var log = console.log;

var M = function M2(x,index) {
  let ar = [index, x];	
  return function go(func) {
	if (func === Rf7ar3s5) return ar;
	else if (func === Rf78d3s5) return ar[ar[0]+1];
	else if (func === Rf7back3s5) {
		ar[0] -= 1;
		return ar[ar[0]+1]
	}
	else {
		x = ar.push(func(ar[ar.length -1]));
		ar[0] += 1;
		console.log("ar[0] in M is", ar[0]);
	}
	return go;
  };
}

var m = M(3,0);
m(x=>x**3)(x=>x+x)(x=>x-12)(v=>v+58)(Math.sqrt)
console.log("m(Rf78d3s5)", m(Rf78d3s5));
console.log(m(Rf7ar3s5));
console.log("m(Rf7back3s5)",(m(Rf7back3s5)));
console.log("m(Rf7back3s5)",(m(Rf7back3s5)));
console.log("m(Rf7back3s5)",(m(Rf7back3s5)));
console.log("m(Rf7back3s5)",(m(Rf7back3s5)));
console.log("m(Rf7back3s5)",(m(Rf7back3s5)));
