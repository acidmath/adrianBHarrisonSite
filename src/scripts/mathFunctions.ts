// I have the benefit of knowing I only need to output an integer
// and it can be rounded down
export function SquareRoot(input: number){
    if(input <= 4) return 1;
    let x: number = 2;
    let xSquared = 4;
    while(xSquared < input){
        if(xSquared==input)return x;        
        xSquared = ++x*x; // being fancy for fun
    }
    return x - 1;
}

export function IsPrime(input: number){
    let isPrime: boolean = false;
    return isPrime;
    //let searchTo: number = 
}