
// Broadcast array on array
export function bAr(fun,ar1,ar2) {
    var result = new Array(ar1.length)
    for (var i = 0;i<ar1.length;i++) {
        result[i] = fun(ar1[i],ar2[i])
    }
    return(result)
}

// Broadcast array on a number
export function b(fun,ar1,val) {
    var result = new Array(ar1.length)
    for (var i = 0;i<ar1.length;i++) {
        result[i] = fun(ar1[i],val)
    }
    return(result)
}

// Broadcast array on a function
export function bFun(fun,ar1) {
    var result = new Array(ar1.length)
    for (var i = 0;i<ar1.length;i++) {
        result[i] = fun(ar1[i])
    }
    return(result)
}

export function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

export function sum(ar) {
    return ar.reduce((a, b) => a + b, 0)
}

export function prod(ar) {
    return ar.reduce((a, b) => a * b, 1)
}

export function mean(ar) {
    return ar.reduce((a, b) => a + b, 0)/ar.length
}

export function median(values){
    if(values.length ===0) throw new Error("No inputs");
  
    values.sort(function(a,b){
      return a-b;
    });
  
    var half = Math.floor(values.length / 2);
    
    if (values.length % 2)
      return values[half];
    
    return (values[half - 1] + values[half]) / 2.0;
  }

export function range(start,end, step = start<end ? 1 : -1) {
    var arr = []
    if (step>0) {
        for (var i = start; i <= end; i += step) {
            arr.push(i)
        }
    }
    else {
        for (var i = start; i >= end; i += step) {
            arr.push(i)
        }
    }
    return arr
}

export function numericallyIntegrate(f, a, b, dx) {
	
	// calculate the number of trapezoids
	let n = (b - a) / dx
	
	// define the variable for area
	let Area = 0
	
	//loop to calculate the area of each trapezoid and sum.
	for (let i = 1; i <= n; i++) {
		//the x locations of the left and right side of each trapezpoid
		let x0 = a + (i-1)*dx
		let x1 = a + i*dx
		
		// the area of each trapezoid
		let Ai = dx * (f(x0) + f(x1))/ 2.
		
		// cumulatively sum the areas
		Area = Area + Ai	
		
	} 
	return Area
}

const randomNormals = () => {
    let u1 = 0, u2 = 0;
    //Convert [0,1) to (0,1)
    while (u1 === 0) u1 = Math.random();
    while (u2 === 0) u2 = Math.random();
    const R = Math.sqrt(-2.0 * Math.log(u1));
    const Θ = 2.0 * Math.PI * u2;
    return [R * Math.cos(Θ), R * Math.sin(Θ)];
};

export function randomSkewNormal(ξ, ω, α = 0) {
    const [u0, v] = randomNormals();
    if (α === 0) {
        return ξ + ω * u0;
    }
    const 𝛿 = α / Math.sqrt(1 + α * α);
    const u1 = 𝛿 * u0 + Math.sqrt(1 - 𝛿 * 𝛿) * v;
    const z = u0 >= 0 ? u1 : -u1;
    return ξ + ω * z;
};

export function percentile(arr, p) {
    arr.sort(function(a,b){
        return a-b;
    });
    if (arr.length === 0) return 0;
    if (typeof p !== 'number') throw new TypeError('p must be a number');
    if (p <= 0) return arr[0];
    if (p >= 1) return arr[arr.length - 1];

    var index = (arr.length - 1) * p,
        lower = Math.floor(index),
        upper = lower + 1,
        weight = index % 1;

    if (upper >= arr.length) return arr[lower];
    return arr[lower] * (1 - weight) + arr[upper] * weight;
}

export function smooth(ar,window) {
    let windowHalf = window/2
    let windowHalf1 = Math.floor(windowHalf)
    let windowHalf2 = Math.ceil(windowHalf)
    for (let i=windowHalf1;i<ar.length-windowHalf2;i++) {
        ar[i] = mean(ar.slice(i-windowHalf1,i+windowHalf2))
    }
}