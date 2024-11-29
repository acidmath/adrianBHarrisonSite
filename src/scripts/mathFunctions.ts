/**
 * Gets the integer square root
 * @param {number} input - the number to get the square root of
 * @returns {number} the square root of the given number, rounded down to the nearest integer
 */
export function IntSquareRoot(input: number) {
	if (input < 4) return 1;
	let x: number = 2;
	let xSquared = 4;
	while (xSquared <= input) {
		if (xSquared == input) return x;
		xSquared = ++x * x;
	}
	return x - 1;
}

/**
 * Returns if a number is prime
 * @param {number} input - the number to evaluate whether it's prime
 * @returns true if the given number is prime, false if not
 */
export function IsPrime(input: number) {
	if (input < 2) return false;
	let searchTo: number = IntSquareRoot(input);
	for (let i: number = 2; i <= searchTo; i++) {
		if (input % i == 0) return false;
	}
	return true;
}
