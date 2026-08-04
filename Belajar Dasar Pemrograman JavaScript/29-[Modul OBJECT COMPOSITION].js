/**
 * ==============================================================================
 * MODUL 29: OBJECT COMPOSITION (Komposisi Objek / Composition over Inheritance)
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Memahami kelemahan pewarisan kelas yang terlalu kaku (*Gorilla/Banana Problem*).
 * 2. Menerapkan prinsip *Composition over Inheritance* (merakit objek dari kemampuan modular).
 * 3. Menggunakan Factory Functions dan `Object.assign()` untuk merakit objek secara fleksibel.
 */

// ------------------------------------------------------------------------------
// 1. BASE ENTITY (Cetak Biru Dasar)
// ------------------------------------------------------------------------------

class Character {
    constructor(name, health, position) {
        this.name = name;
        this.health = health;
        this.position = position;
    }

    canMove() {
        console.log(`🏃 ${this.name} berpindah posisi ke koordinat [${this.position}]!`);
    }
}


// ------------------------------------------------------------------------------
// 2. BEHAVIOR MIXINS (Kemampuan Mandiri yang Bisa Dibagikan)
// ------------------------------------------------------------------------------

function canAttack(character) {
    return {
        attack: () => {
            console.log(`⚔️  ${character.name} menyerang dengan senjata tajam!`);
        }
    };
}

function canDefend(character) {
    return {
        defend: () => {
            console.log(`🛡️  ${character.name} bertahan menggunakan perisai baja!`);
        }
    };
}

function canCastSpell(character) {
    return {
        castSpell: () => {
            console.log(`✨ ${character.name} merapalkan mantra sihir elemen!`);
        }
    };
}


// ------------------------------------------------------------------------------
// 3. FACTORY FUNCTIONS (Merakit Karakter dengan `Object.assign`)
// ------------------------------------------------------------------------------

// Monster: Hanya bisa Menyerang
function createMonster(name) {
    const character = new Character(name, 100, 0);
    return Object.assign(character, canAttack(character));
}

// Guardian: Hanya bisa Bertahan
function createGuardian(name) {
    const character = new Character(name, 150, 0);
    return Object.assign(character, canDefend(character));
}

// Wizard: Hanya bisa Merapal Sihir
function createWizard(name) {
    const character = new Character(name, 80, 0);
    return Object.assign(character, canCastSpell(character));
}

// Warrior: Bisa Menyerang DAN Bertahan sekaligus (Komposisi Bebas!)
function createWarrior(name) {
    const character = new Character(name, 120, 0);
    return Object.assign(character, canAttack(character), canDefend(character));
}


// ------------------------------------------------------------------------------
// 4. MENGUJI HASIL KOMPOSISI OBJEK
// ------------------------------------------------------------------------------

console.log('--- 1. Karakter Monster ---');
const goblin = createMonster('Goblin Hutan');
goblin.canMove();
goblin.attack();

console.log('\n--- 2. Karakter Wizard ---');
const gandalf = createWizard('Gandalf');
gandalf.canMove();
gandalf.castSpell();

console.log('\n--- 3. Karakter Warrior (Multi-Kemampuan) ---');
const aragorn = createWarrior('Aragorn');
aragorn.canMove();
aragorn.attack();
aragorn.defend();
