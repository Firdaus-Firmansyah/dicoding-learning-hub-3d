/**
 * ==============================================================================
 * MODUL 25: PARADIGMA BERBASIS OBJEK (Object-Oriented Programming / OOP)
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Memahami konsep dasar OOP (blueprint cetak biru & instance object).
 * 2. Membandingkan Constructor Function (ES5 Prototype) vs ES6 Class.
 * 3. Memahami pembuatan object menggunakan kata kunci `new`.
 */

// ------------------------------------------------------------------------------
// 1. CARA TRADISIONAL (Constructor Function & Prototype - ES5)
// ------------------------------------------------------------------------------

function PersonES5(name, age) {
    this.name = name;
    this.age = age;
}

// Menambahkan method pada prototype agar hemat memori:
PersonES5.prototype.eat = function () {
    console.log(`1. [ES5] ${this.name} (umur ${this.age}) sedang makan.`);
};

const personA = new PersonES5('Alice', 30);
const personB = new PersonES5('Bob', 25);

console.log('1. Nama Person A :', personA.name); // Output: Alice
personA.eat(); // Output: [ES5] Alice (umur 30) sedang makan.
personB.eat(); // Output: [ES5] Bob (umur 25) sedang makan.


// ------------------------------------------------------------------------------
// 2. CARA MODERN (ES6 Class Syntax)
// ------------------------------------------------------------------------------
// Class di JavaScript adalah "syntactical sugar" di atas mekanisme prototype.

class PersonES6 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`2. [ES6] ${this.name} sedang menyantap hidangan lezat.`);
    }
}

// Membuat instance object baru dengan operator `new`:
const personC = new PersonES6('Charlie', 28);
console.log('\n2. Nama Person C :', personC.name); // Output: Charlie
personC.eat(); // Output: [ES6] Charlie sedang menyantap hidangan lezat.


// ------------------------------------------------------------------------------
// 3. FAKTA MENARIK TENTANG CLASS DI JAVASCRIPT
// ------------------------------------------------------------------------------
// Tipe data sesungguhnya dari `class` adalah `function`.
console.log('\n3. Tipe data PersonES6:', typeof PersonES6); // Output: function
