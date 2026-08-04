/**
 * ==============================================================================
 * MODUL 15: STRUKTUR DATA - ARRAY (List Terurut, Method, & Destructuring)
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Memahami struktur data Array sebagai kumpulan elemen terindeks (0-based).
 * 2. Menguasai method manipulasi Array: `push`, `pop`, `shift`, `unshift`, `splice`.
 * 3. Mengurutkan dan membalikkan Array dengan `sort()` dan `reverse()`.
 * 4. Menguasai teknik modern Array Destructuring.
 */

// ------------------------------------------------------------------------------
// 1. CARA MEMBUAT ARRAY
// ------------------------------------------------------------------------------

// A. Array Literal `[]` (Paling sering digunakan):
const fruits = ['apple', 'banana', 'cherry'];
console.log('1. Array Literal fruits:', fruits);

// B. Array Constructor `new Array()`:
const team = new Array('John', 'Jane', 'Jack', 'Jill');
console.log('1. Array Constructor team:', team);

// C. Array.from() (Mengonversi string atau struktur iterable ke array):
const charList = Array.from('foo');
console.log('1. Array.from("foo")    :', charList); // Output: ['f', 'o', 'o']


// ------------------------------------------------------------------------------
// 2. MENGAKSES & MENGUBAH ELEMEN (0-Indexed)
// ------------------------------------------------------------------------------

const scores = [42, 55, 30];
console.log('2. Elemen indeks 1 (kedua):', scores[1]); // Output: 55

// Mengubah elemen pada indeks tertentu:
scores[1] = 95;
console.log('2. Array setelah diubah   :', scores);    // Output: [42, 95, 30]


// ------------------------------------------------------------------------------
// 3. METHOD MANIPULASI ELEMEN ARRAY
// ------------------------------------------------------------------------------

const techStack = ['Android', 'Data Science', 'Web'];

// A. push(): Menambahkan elemen di akhir array
techStack.push('Machine Learning');
console.log('3. Setelah push()   :', techStack); 
// Output: ['Android', 'Data Science', 'Web', 'Machine Learning']

// B. pop(): Menghapus dan mengambil elemen terakhir
const removedLast = techStack.pop();
console.log('3. Setelah pop()    :', techStack, `(Dihapus: ${removedLast})`); 
// Output: ['Android', 'Data Science', 'Web']

// C. shift(): Menghapus dan mengambil elemen pertama
const removedFirst = techStack.shift();
console.log('3. Setelah shift()  :', techStack, `(Dihapus: ${removedFirst})`); 
// Output: ['Data Science', 'Web']

// D. unshift(): Menambahkan elemen di awal array
techStack.unshift('Cloud Computing');
console.log('3. Setelah unshift():', techStack); 
// Output: ['Cloud Computing', 'Data Science', 'Web']

// E. splice(startIndex, deleteCount, ...itemsToAdd): Menghapus/menyisipkan di indeks bebas
techStack.splice(1, 1); // Menghapus 1 elemen mulai dari indeks 1 ('Data Science')
console.log('3. Setelah splice() :', techStack); 
// Output: ['Cloud Computing', 'Web']


// ------------------------------------------------------------------------------
// 4. PENGURUTAN: SORT & REVERSE
// ------------------------------------------------------------------------------

const languages = ['Python', 'JavaScript', 'Go', 'C++'];

// sort(): Mengurutkan alfabetis secara ascending
languages.sort();
console.log('4. Setelah sort()   :', languages); 
// Output: ['C++', 'Go', 'JavaScript', 'Python']

// reverse(): Membalikkan urutan elemen
languages.reverse();
console.log('4. Setelah reverse():', languages); 
// Output: ['Python', 'JavaScript', 'Go', 'C++']


// ------------------------------------------------------------------------------
// 5. ARRAY DESTRUCTURING (Fitur Modern ES6)
// ------------------------------------------------------------------------------
// Mengekstrak elemen array ke dalam variabel individual berdasarkan urutan posisinya.

const greetingWords = ['Hello', 'Arsy', 'Developer'];
const [salutation, recipient] = greetingWords;

console.log('5. Destructuring salutation:', salutation); // Output: Hello
console.log('5. Destructuring recipient :', recipient);  // Output: Arsy