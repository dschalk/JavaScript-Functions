

    function ret () {};

	var m2;
	var PIN, WINNERS;
	var WIN = 1000.0;
	var FIN = 1001.0;
	var FINAL;
	var millisec = 0;
	var seconds = 0;
	var timer;
	var d2;
	var startStop = 'Start';
	var value;
	var d2 = '';
	var A,
		B,
		C,
		D,
		AA,
		BB,
		CC,
		DD,
		EE,
		FF,
		GG,
		HH = 'wait';
	var N = 0;
	var l = console.log;
	var b0 = 'none';
	var b1 = 'none';
	var b2 = 'none';
	var b3 = 'none';
	var index;
	var b4 = 'none';
	var b5 = 'none';
	var b6 = 'none';
	var b7 = 'none';
	var s = ret;
	var AA;
	var BB;
	var CC;
	var DD;
	var EEE = 'awaiting selection';
	var FF;
	var WW;
	var XX;
	var YY;
	var ZZ;
	var SCORE;
	$: SCORE = [0];
	var ZYXW;
	var WXYZ;

	var runRoll;
	runRoll = (b) => {
		var arr = [
			[
				Math.floor(Math.random() * 6) + 1,
				Math.floor(Math.random() * 6) + 1,
				Math.floor(Math.random() * 12) + 1,
				Math.floor(Math.random() * 20) + 1
			],
			[],
			['+'],
			[],
			[b],
			[],
			[0],
			[]
		];
		var m2 = M(arr);
        console.log("m2(ret) is", m2(ret))
		// m2 = m2(fuu);

		//[5].push(clone([ a[0], a[1], a[2], a[3], a[4], [], a[6] ]));
		EEE = 'yet to be selected';
		m2 = M(m2(s));
		updateRoll(m2);
		m2(fu);
		if (tog) display();
		return m2;
        console.log("m2(ret)", m2(ret))
	};

	var Z = '';
	$: Z;
	var x;
	function updateRoll(m) {
		console.log('In updateRoll. m(s) is', m2(s)(ret));
		AA = m(s)[0][0];
		BB = m(s)[0][1];
		CC = m(s)[0][2];
		DD = m(s)[0][3];

		WW = m(s)[1][0];
		XX = m(s)[1][1];
		YY = m(s)[1][2];
		ZZ = m(s)[1][3];
		EE = m(s)[2];
		FF = m(s)[3];
		SCORE = m(s)[4];
		b0 = b1 = b2 = b3 = 'inline';
		b4 = b5 = b6 = b7 = 'none';
	}
	function sfunc() {
		b0 = b1 = b2 = b3 = b4 = b5 = b6 = b7 = 'none';
		if (AA != (undefined && 0)) b0 = 'inline';
		if (BB != (undefined && 0)) b1 = 'inline';
		if (CC != (undefined && 0)) b2 = 'inline';
		if (DD != (undefined && 0)) b3 = 'inline';
		if (WW != (undefined && 0)) b4 = 'inline';
		if (XX != (undefined && 0)) b5 = 'inline';
		if (YY != (undefined && 0)) b6 = 'inline';
		if (ZZ != (undefined && 0)) b7 = 'inline';
	}

	m2 = M([[
			Math.floor(Math.random() * 6) + 1,
			Math.floor(Math.random() * 6) + 1,
			Math.floor(Math.random() * 12) + 1,
			Math.floor(Math.random() * 20) + 1
		],
		[],
		['+'],
		[],
		[0],
		[],
		[0],
		[]
	]);

	var update = function update() {
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
	};

	$: AA = m2(s)[0][0];
	$: BB = m2(s)[0][1];
	$: CC = m2(s)[0][2];
	$: DD = m2(s)[0][3];
	$: EE = m2(s)[2];
	$: FF = m2(s)[3];
	$: SCORE = m2(s)[4];
	$: WW = m2(s)[1][0];
	$: XX = m2(s)[1][1];
	$: YY = m2(s)[1][2];
	$: ZZ = m2(s)[1][3];

	var ZWIN = '';
	var mon3 = M([1, 2, 3, 4]);

	function calc(aa, bb, c) {
		var a = parseInt(aa, 10);
		var b = parseInt(bb, 10);
		if (c === '+') return a + b;
		else if (c === '*') return a * b;
		else if (c === '-') return a - b;
		else if (c === '/') return a / b;
		else if (c === '@') return ' ' + a + b;
		else return 'fubar';
	}

	function g(ar) {
		var x = ar.pop() ** 3;
		ar.unshift(x);
		return ar;
	}

	function g2(ar) {
		return ar.flatMap((v) => (v + 1) ** 3);
	}
	function g3(ar) {
		return ar.flatMap((v) => Math.round(v ** (1 / 3)));
	}

	function clone(x) {
		return JSON.parse(JSON.stringify(x));
	}
	// var clone = structuredClone;

	function M (x) {
        return function go (func) {
            if (func === ret) return x
            x = func(x);
            return go;
        }
    }
    console.log("Fuck You")
	var back;
	back = (a) => {
		if (a[5].length < 1) {
			m2 = M(a);
			console.log("You're already all the way back");
			return;
		} else {
			var a7 = a[7];
			var a = a[5][a[5].length - 1];
			a[7] = a7;
			m2 = M(a);
			update();
			sfunc();
		}
	};

	var forward;
	forward = (a) => {
		var index = a[6][0];
		if (a[5].length === a[7].length) {
			console.log('Already at the top');
			m2 = M(a);
			return;
		} else {
			var a7 = clone(a[7]);
			var a = a[7][index + 1];
			a[7] = a7;
			m2 = M(a);
			update();
			sfunc();
		}
	};

	function test() {
		var xx = m2(s);
		console.log('<><><><><><><><> xx is', xx);
		console.log(xx[0]);
		console.log('xx[5].length is ', xx[5].length);
		console.log('index is', xx[6]);
		m2 = M(xx)(ret);
		return m2;
	}
    console.log("test(retard)", test());

	function fuu(a) {
		a[5].push(clone([a[0], a[1], a[2], a[3], a[4], a[5][0], a[6], a[7]]));
		l('In fu. a is', a);
		return a;
	}

	function fu(a) {
		a[5].push(clone([a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7]]));
		a[7].push(clone(a));
		a[6][0] += 1;
		// a[1].push(a[0].pop());
		var result;
		SCORE = a[4];
		var a1;
		if (a[1].length === 2 && a[2].length === 1) {
			a1 = a[1];
			result = calc(a[1][0], a[1][1], a[2][0]);
			a[0].push(result);
			a[3].push(result);
			a[1] = [];
			m2 = M(a);
		}

		if (a[1].length === 3) {
			a[0].push(a[1].pop());
		}

		if (result == 20 && intersection(a1, a[3]).length > 0) {
			if (a[4][0] == 2) {
				resettimer();
				PIN = FIN;
				if (FIN < WIN) WIN = FIN;
				ZWIN = 'You win! Your score is ';
				WINNERS = WIN;
				top.set([WIN]);

				// setTimeout(() => a[4][0] = 0,8000);
			} else {
				var aint = parseInt(a[4], 10);
				aint += 1;
				Z = '           Your score increased to ' + aint;
				runRoll(aint);
			}
			setTimeout(() => (Z = ZWIN = ''), 8000);
		}
		update();
		sfunc();
		return m2(s);
	}

	var fmon = (f) => (x) => x(f);
	var reset = (x) => [1, 2, 3, 4];

	var click0 = (a) => {
		a[1].push(a[0][0]);
		a[0].shift();
		m2 = M(a);
		m2(fu);
		// sfunc();
	};

	/* var click0 = a => {
    a[1].push(a[0].splice(0,1)[0]);
    m2 = M(a);

}; */

	var click1 = (a) => {
		a[1].push(a[0].splice(1, 1)[0]);
		m2 = M(a);
		m2 = m2(fu);
	};

	var click2 = (a) => {
		a[1].push(a[0].splice(2, 1)[0]);
		m2 = M(a);
		m2 = m2(fu);
	};

	var click3 = (a) => {
		a[1].push(a[0].splice(3, 1)[0]);
		m2 = M(a);
		m2 = m2(fu);
	};

	function clic0(m) {
		EEE = 'add';
		m[2] = '+';
		m2 = M(m);
	}

	$: var clic1 = (m) => {
		EEE = 'subtract';
		m[2] = '-';
		m2 = M(m);
	};

	function clic2(m) {
		EEE = 'multiply';
		m[2] = '*';
		m2 = M(m);
	}

	function clic3(m) {
		EEE = 'divide';
		m[2] = '/';
		m2 = M(m);
	}

	function clic4(m) {
		EEE = 'concat';
		m[2] = '@';
		m2 = M(m);
	}

	$: Z = Z;

	var m3 = M(3);

	var m4 = M(3.1415926535);
	var cube = (x) => x ** 3;
	var pow = n => x => x**n;
	var square = x => x*x; 
	var add = (n) => (x) => 1 * x + 1 * n;
	var mult = (n) => (x) => x * n;
	var reset2 = (n) => (x) => (x = n);

	function squareFu() {
		m4 = m4(square);
	}
	function cubeFu() {
		m4 = m4(cube);
	}

	function divFraction(x) {
		var y = x.split('/');
		if (y.length > 1) {
			return y[0] / y[1];
		} else {
			return y[0];
		}
	}
	var powFu = function powFu(e) {
		var p = divFraction(e.target.value);
		if (e.keyCode == 13) {
			m4 = m4(pow(p));
		}
	};

	var addFu = function addFu(e) {
		if (e.keyCode == 13) {
			m4 = m4(add(e.target.value));
		}
	};

	var multFu = function multFu(e) {
		if (e.keyCode == 13) {
			m4 = m4(mult(divFraction(e.target.value)));
		}
	};

	var resetFu = function resetFu(e) {
		if (e.keyCode == 13) {
			m4 = m4(reset2(divFraction(e.target.value)));
		}
	};

	function intersection(a, b) {
		return a.filter((x) => b.includes(x));
	}
    var m2 = M(3);
	$: var XO = m2(s);

	var tog = true;

	var display = function display() {
		tog = false;
		if (millisec >= 9) {
			millisec = 0;
			seconds += 1;
		} else millisec += 1;
		d2 = seconds + '.' + millisec;
		timer = setTimeout(() => display(), 100);
	};

	function starttimer() {
		if (timer > 0) {
			return;
		}
		display();
	}
	function stoptimer() {
		clearTimeout(timer);
		timer = 0;
	}

	function startstoptimer() {
		if (startStop === 'Start') startStop = 'Stop';
		else startStop = 'Start';
		if (timer > 0) {
			clearTimeout(timer);
			timer = 0;
		} else {
			display();
		}
	}

	function resettimer() {
		clearTimeout(timer);
		FIN = d2;
		var temp = m2(s);
		temp[4] = [0];
		m2 = M(temp);
		millisec = 0;
		seconds = 0;
		d2 = seconds + '.' + millisec;
		tog = true;
	}
