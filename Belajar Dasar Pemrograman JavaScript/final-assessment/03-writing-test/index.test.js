import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('fungsi sum harus mengembalikan hasil penjumlahan dua angka dengan benar', () => {
  // Arrange
  const a = 3;
  const b = 5;
  const expected = 8;

  // Act
  const actual = sum(a, b);

  // Assert
  assert.strictEqual(actual, expected);
});

test('fungsi sum harus bekerja dengan angka negatif', () => {
  assert.strictEqual(sum(-2, 4), 2);
  assert.strictEqual(sum(-3, -7), -10);
});

test('fungsi sum harus bekerja dengan angka nol', () => {
  assert.strictEqual(sum(0, 0), 0);
  assert.strictEqual(sum(5, 0), 5);
});
