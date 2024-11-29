import { test, expect } from 'vitest';
import { IsPrime, SquareRoot } from '../src/scripts/mathFunctions';

// square root number test
test.each([
    {input: 1, expected: 1},
    {input: 2, expected: 1},
    {input: 3, expected: 1},
    {input: 4, expected: 2},
    {input: 5, expected: 2},
    {input: 9, expected: 3},
    {input: 16, expected: 4},
    {input: 17, expected: 4}
])
('the square root of $input is $expected',
    ({input, expected})=>{
        expect(SquareRoot(input)).toBe(expected);
    }
);

// prime number test
test.each([
    {input: 5, expected: true},
    {input: 9, expected: false},
    {input: 523, expected: true},
    {input: 1337, expected: true}
])
('$input is prime: $expected', 
    ({input, expected}) => {
        expect(IsPrime(input)).toBe(expected);
    }
);

