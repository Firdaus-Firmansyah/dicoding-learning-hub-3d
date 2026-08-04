import { describe, it, expect } from 'bun:test';

// ------------------------------------------------------------------------------
// 1. FUNGSI TARGET (Kalkulator)
// ------------------------------------------------------------------------------

export function add(numA, numB) {
    if (typeof numA !== 'number' || typeof numB !== 'number') {
        throw new TypeError('Expected a number');
    }
    return numA + numB;
}

export function multiply(numA, numB) {
    if (typeof numA !== 'number' || typeof numB !== 'number') {
        throw new TypeError('Expected a number');
    }
    return numA * numB;
}


// ------------------------------------------------------------------------------
// 2. SUITE PENGUJIAN DENGAN BUN TEST (bun:test)
// ------------------------------------------------------------------------------

describe('Calculator Operations', () => {

    it('harus menjumlahkan dua angka dengan benar (1 + 1 = 2)', () => {
        // Arrange
        const operandA = 1;
        const operandB = 1;
        const expectedValue = 2;

        // Action
        const actualValue = add(operandA, operandB);

        // Assert
        expect(actualValue).toBe(expectedValue);
    });

    it('harus mengalikan dua angka dengan benar (3 * 2 = 6)', () => {
        // Assert langsung
        expect(multiply(3, 2)).toBe(6);
    });

    it('harus melempar TypeError ketika numA bernilai string', () => {
        // Assert throws
        expect(() => add('5', 4)).toThrow(TypeError);
    });

    it('harus melempar TypeError ketika numB bernilai string', () => {
        expect(() => add(10, '8')).toThrow(TypeError);
    });
});
