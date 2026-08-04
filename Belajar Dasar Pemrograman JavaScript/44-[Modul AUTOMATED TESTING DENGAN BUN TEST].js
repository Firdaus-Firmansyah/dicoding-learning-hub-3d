/**
 * ==============================================================================
 * MODUL 44: AUTOMATED TESTING DENGAN BUN TEST (bun:test)
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Memahami test runner & assertion bawaan Bun runtime (`bun:test`).
 * 2. Membandingkan sintaks `node:test` (Node.js) vs `bun:test` (Jest-like syntax).
 * 3. Menggunakan Matcher `.toBe()`, `.toEqual()`, dan penanganan error `.toThrow()`.
 * 4. Menyelesaikan tantangan pengujian kalkulator pada Bun.
 */

// ------------------------------------------------------------------------------
// 1. FUNGSI TARGET (Kalkulator yang Diuji)
// ------------------------------------------------------------------------------

function add(numA, numB) {
    if (typeof numA !== 'number' || typeof numB !== 'number') {
        throw new TypeError('Expected a number');
    }
    return numA + numB;
}

function multiply(numA, numB) {
    if (typeof numA !== 'number' || typeof numB !== 'number') {
        throw new TypeError('Expected a number');
    }
    return numA * numB;
}


// ------------------------------------------------------------------------------
// 2. SUITE PENGUJIAN DENGAN BUN TEST (Sintaks `bun:test` - Jest Style)
// ------------------------------------------------------------------------------
/*
import { describe, it, expect } from 'bun:test';

describe('Calculator Operations (Bun Test)', () => {

    // Test 1: Pengujian Penjumlahan Sukses (Happy Path)
    it('harus menjumlahkan dua angka dengan benar (1 + 1 = 2)', () => {
        // Arrange
        const operandA = 1;
        const operandB = 1;
        const expectedValue = 2;

        // Act
        const actualValue = add(operandA, operandB);

        // Assert dengan matcher .toBe()
        expect(actualValue).toBe(expectedValue);
    });

    // Test 2: Pengujian Perkalian Sukses
    it('harus mengalikan dua angka dengan benar (3 * 2 = 6)', () => {
        expect(multiply(3, 2)).toBe(6);
    });

    // Test 3: Pengujian Melempar Error jika parameter bukan number (Negative Path)
    it('harus melempar TypeError ketika numA bernilai string', () => {
        expect(() => add('5', 4)).toThrow(TypeError);
    });

    it('harus melempar TypeError ketika numB bernilai string', () => {
        expect(() => add(10, '8')).toThrow(TypeError);
    });
});
*/


// ------------------------------------------------------------------------------
// 3. TABEL PERBANDINGAN SINTAKS: NODE.JS vs BUN
// ------------------------------------------------------------------------------
/*
 +-----------------------+----------------------------------+--------------------------------------+
 | Kebutuhan             | Node.js (node:test + assert)     | Bun (bun:test - Jest Style)          |
 +-----------------------+----------------------------------+--------------------------------------+
 | Import Module         | import { test } from 'node:test' | import { it, expect } from 'bun:test'|
 | Assertion Nilai       | assert.strictEqual(actual, exp)  | expect(actual).toBe(exp)             |
 | Assertion Object      | assert.deepStrictEqual(act, exp) | expect(actual).toEqual(exp)          |
 | Assertion Throw Error | assert.throws(() => fn(), Error) | expect(() => fn()).toThrow(Error)    |
 | Menjalankan Test      | node --test                      | bun test                             |
 +-----------------------+----------------------------------+--------------------------------------+
*/

console.log('--- Demonstrasi Eksekusi Manual Fungsi Kalkulator ---');
console.log('1. Penjumlahan (1 + 1) :', add(1, 1));
console.log('2. Perkalian (3 x 2)   :', multiply(3, 2));
console.log('\n💡 Untuk menjalankan pengujian otomatis Bun, gunakan perintah:');
console.log('   bun test "44-[Modul AUTOMATED TESTING DENGAN BUN TEST].js"');
