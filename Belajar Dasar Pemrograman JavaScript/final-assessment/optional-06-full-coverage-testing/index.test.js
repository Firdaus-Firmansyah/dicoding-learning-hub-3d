import { describe, it } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

describe('Full Coverage Testing: sum()', () => {

  describe('Happy Path: Dua Angka Positif Valid', () => {
    it('harus mengembalikan hasil penjumlahan yang benar ketika kedua angka positif', () => {
      assert.strictEqual(sum(2, 3), 5);
      assert.strictEqual(sum(10, 20), 30);
      assert.strictEqual(sum(100, 250), 350);
    });

    it('harus mengembalikan nilai yang benar ketika salah satu atau kedua angka bernilai 0', () => {
      assert.strictEqual(sum(0, 0), 0);
      assert.strictEqual(sum(5, 0), 5);
      assert.strictEqual(sum(0, 8), 8);
    });
  });

  describe('Type Validation: Parameter Bukan Tipe Number', () => {
    it('harus mengembalikan 0 jika parameter a bukan tipe number', () => {
      assert.strictEqual(sum('5', 3), 0);
      assert.strictEqual(sum(null, 3), 0);
      assert.strictEqual(sum(undefined, 3), 0);
      assert.strictEqual(sum(true, 3), 0);
      assert.strictEqual(sum({}, 3), 0);
      assert.strictEqual(sum([], 3), 0);
    });

    it('harus mengembalikan 0 jika parameter b bukan tipe number', () => {
      assert.strictEqual(sum(5, '3'), 0);
      assert.strictEqual(sum(5, null), 0);
      assert.strictEqual(sum(5, undefined), 0);
      assert.strictEqual(sum(5, false), 0);
      assert.strictEqual(sum(5, {}), 0);
      assert.strictEqual(sum(5, []), 0);
    });

    it('harus mengembalikan 0 jika kedua parameter bukan tipe number', () => {
      assert.strictEqual(sum('hello', 'world'), 0);
      assert.strictEqual(sum(null, undefined), 0);
      assert.strictEqual(sum({}, []), 0);
    });
  });

  describe('Negative Numbers: Nilai Negatif', () => {
    it('harus mengembalikan 0 jika parameter a bernilai negatif', () => {
      assert.strictEqual(sum(-5, 10), 0);
      assert.strictEqual(sum(-1, 0), 0);
    });

    it('harus mengembalikan 0 jika parameter b bernilai negatif', () => {
      assert.strictEqual(sum(10, -5), 0);
      assert.strictEqual(sum(0, -1), 0);
    });

    it('harus mengembalikan 0 jika kedua parameter bernilai negatif', () => {
      assert.strictEqual(sum(-5, -5), 0);
      assert.strictEqual(sum(-10, -20), 0);
    });
  });
});
