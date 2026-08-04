/**
 * ==============================================================================
 * MODUL 26: INHERITANCE (Pewarisan Sifat Antar Kelas)
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Memahami konsep SuperClass (Parent) dan SubClass (Child).
 * 2. Menerapkan pewarisan sifat menggunakan kata kunci `extends`.
 * 3. Memahami pengecekan hirarki pewarisan menggunakan operator `instanceof`.
 */

// ------------------------------------------------------------------------------
// 1. SUPERCLASS (Kelas Induk / Parent Class)
// ------------------------------------------------------------------------------

class SmartPhones {
    constructor(color, brand, model) {
        this.color = color;
        this.brand = brand;
        this.model = model;
    }

    charging() {
        console.log(`Mengisi daya ${this.brand} ${this.model}...`);
    }
}


// ------------------------------------------------------------------------------
// 2. SUBCLASS (Kelas Turunan / Child Class dengan `extends`)
// ------------------------------------------------------------------------------

// SubClass iOS mewarisi properti dan method dari SmartPhones:
class iOS extends SmartPhones {
    airDrop() {
        console.log(`[iOS] Fitur AirDrop aktif pada ${this.model}`);
    }
}

// SubClass Android mewarisi properti dan method dari SmartPhones:
class Android extends SmartPhones {
    splitScreen() {
        console.log(`[Android] Fitur Split Screen aktif pada ${this.model}`);
    }
}


// ------------------------------------------------------------------------------
// 3. PENGGUNAAN INSTANCE OBJECT
// ------------------------------------------------------------------------------

const iphone = new iOS('Hitam', 'Apple', 'iPhone 15 Pro');
const galaxy = new Android('Putih', 'Samsung', 'Galaxy S24 Ultra');

console.log('--- Eksekusi Method Warisan (SuperClass) ---');
iphone.charging(); // Output: Mengisi daya Apple iPhone 15 Pro...
galaxy.charging(); // Output: Mengisi daya Samsung Galaxy S24 Ultra...

console.log('\n--- Eksekusi Method Spesifik (SubClass) ---');
iphone.airDrop();     // Output: [iOS] Fitur AirDrop aktif pada iPhone 15 Pro
galaxy.splitScreen(); // Output: [Android] Fitur Split Screen aktif pada Galaxy S24 Ultra


// ------------------------------------------------------------------------------
// 4. PENGECEKAN HIRARKI DENGAN `instanceof`
// ------------------------------------------------------------------------------
console.log('\n--- Pengecekan Instanceof ---');
console.log('Apakah iphone instance dari iOS?        :', iphone instanceof iOS);         // true
console.log('Apakah iphone instance dari SmartPhones?:', iphone instanceof SmartPhones); // true (karena warisan)
console.log('Apakah galaxy instance dari iOS?        :', galaxy instanceof iOS);         // false
