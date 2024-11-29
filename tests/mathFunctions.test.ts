import { test, expect } from 'vitest';
import { IsPrime } from '../src/scripts/mathFunctions';


test.each([{input: 5, expected: true}])
    ('$input is prime: $expected', ({input, expected}) => {
    expect(IsPrime(input)).toBe(expected);
});

