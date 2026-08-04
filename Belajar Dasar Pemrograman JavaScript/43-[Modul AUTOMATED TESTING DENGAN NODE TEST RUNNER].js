/**
 * ==============================================================================
 * MODUL 43: AUTOMATED TESTING (Pengujian Otomatis dengan Node.js Test Runner)
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Memahami pola pengujian AAA (Arrange, Act, Assert).
 * 2. Menggunakan modul bawaan `node:test` (`describe`, `it` / `test`) dan `node:assert`.
 * 3. Menguji *Happy Path* (kasus sukses) dan *Negative Path* (pengujian melempar error).
 */

const { describe, it } = require('node:test');
const assert = require('node:assert');

// ------------------------------------------------------------------------------
// 1. FUNGSI BISNIS YANG DIUJI (Unit Target)
// ------------------------------------------------------------------------------

function calculateSum(numA, numB) {
    if (typeof numA !== 'number' || typeof numB !== 'number') {
        throw new TypeError('Parameter numA dan numB harus berupa number!');
    }
    return numA + numB;
}


// ------------------------------------------------------------------------------
// 2. SUITE PENGUJIAN OTOMATIS
// ------------------------------------------------------------------------------

describe('Suite Pengujian: calculateSum()', () => {

    // Test Case 1: Kasus Positif (Happy Path)
    it('harus mengembalikan hasil penjumlahan yang benar ketika kedua argumen adalah number', () => {
        // 1. Arrange (Persiapan data)
        const operandA = 10;
        const operandB = 15;
        const expectedValue = 25;

        // 2. Act (Eksekusi fungsi)
        const actualValue = calculateSum(operandA, operandB);

        // 3. Assert (Verifikasi ekspektasi hasil)
        assert.strictEqual(actualValue, expectedValue);
    });

    // Test Case 2: Kasus Negatif (Negative Path / Error Handling)
    it('harus melempar TypeError ketika argumen yang diberikan berupa string', () => {
        const testAction = () => {
            calculateSum('10', 5);
        };

        // Memastikan testAction melempar error bertipe TypeError
        assert.throws(testAction, TypeError);
    });
});