/**
 * ==============================================================================
 * MODUL 27: ENCAPSULATION (Enkapsulasi & Pembatasan Hak Akses Data)
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Memahami pentingnya menyembunyikan data internal agar tidak diubah sembarangan.
 * 2. Menggunakan Getter (`get`) dan Setter (`set`) untuk memvalidasi akses data.
 * 3. Menerapkan fitur modern ES2022 Private Field (`#namaField`) & Private Method (`#namaMethod`).
 */

// ------------------------------------------------------------------------------
// 1. CLASS DENGAN GETTER, SETTER, DAN PRIVATE IDENTIFIER (`#`)
// ------------------------------------------------------------------------------

class CoffeeMachine {
    // Private Field (hanya bisa diakses dari DALAM class ini saja):
    #temperature = 90;
    #waterAmount = 0;

    constructor(waterAmount) {
        this.#waterAmount = waterAmount;
        this.#temperature = this.#calculateDefaultTemperature();
    }

    // Getter untuk membaca nilai suhu:
    get temperature() {
        return this.#temperature;
    }

    // Setter untuk memvalidasi perubahan suhu:
    set temperature(newTemp) {
        if (newTemp < 0 || newTemp > 100) {
            console.log('⚠️ Suhu tidak valid! Harus berada di antara 0°C dan 100°C.');
            return;
        }
        console.log(`✅ Suhu mesin berhasil disesuaikan ke: ${newTemp}°C`);
        this.#temperature = newTemp;
    }

    // Private Method (hanya untuk kalkulasi internal mesin):
    #calculateDefaultTemperature() {
        return 92;
    }

    makeCoffee() {
        console.log(`☕ Membuat kopi nikmat dengan suhu ${this.#temperature}°C dan air ${this.#waterAmount}ml.`);
    }
}


// ------------------------------------------------------------------------------
// 2. MENGUJI ENKAPSULASI
// ------------------------------------------------------------------------------

const myMachine = new CoffeeMachine(250);

console.log('--- 1. Membaca Data lewat Getter ---');
console.log('Suhu Awal Mesin :', myMachine.temperature, '°C'); // Memanggil `get temperature()`

console.log('\n--- 2. Mengubah Data lewat Setter ---');
myMachine.temperature = 95; // Memanggil `set temperature(95)`
myMachine.temperature = 150; // Ditolak oleh validasi setter

console.log('\n--- 3. Menjalankan Operasi Mesin ---');
myMachine.makeCoffee();

// Mencoba mengakses private field secara langsung akan menghasilkan Syntax Error:
// console.log(myMachine.#temperature); // ERROR: Private field '#temperature' must be declared in an enclosing class
