/**
 * ==============================================================================
 * MODUL 28: POLYMORPHISM (Polimorfisme & Overriding)
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Memahami konsep Polimorfisme (banyak bentuk kemampuan / perilaku).
 * 2. Menerapkan Constructor Overriding menggunakan `super(args)`.
 * 3. Menerapkan Method Overriding dan memanggil method induk dengan `super.method()`.
 */

// ------------------------------------------------------------------------------
// 1. SUPERCLASS
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
// 2. SUBCLASS DENGAN CONSTRUCTOR & METHOD OVERRIDING
// ------------------------------------------------------------------------------

class AndroidPhone extends SmartPhones {
    // A. Constructor Overriding: Menambahkan parameter baru (e.g. fastChargeWatt)
    constructor(color, brand, model, fastChargeWatt) {
        // Wajib memanggil super() sebelum menggunakan kata kunci `this`:
        super(color, brand, model);
        this.fastChargeWatt = fastChargeWatt;
    }

    // B. Method Overriding: Mengubah dan memperluas fungsi charging()
    charging() {
        // Memanggil fungsi charging() bawaan SuperClass:
        super.charging();
        // Menambahkan fitur khusus di SubClass:
        console.log(`⚡ Mode Fast Charging aktif dengan daya ${this.fastChargeWatt}W!`);
    }

    splitScreen() {
        console.log(`📱 Fitur Split Screen aktif.`);
    }
}


// ------------------------------------------------------------------------------
// 3. EKSEKUSI POLIMORFISME
// ------------------------------------------------------------------------------

const galaxyS24 = new AndroidPhone('Titanium Gray', 'Samsung', 'Galaxy S24', 45);

console.log('--- Eksekusi Method yang Di-override ---');
galaxyS24.charging();
/* Output:
 * Mengisi daya Samsung Galaxy S24...
 * ⚡ Mode Fast Charging aktif dengan daya 45W!
 */
