/**
 * ==============================================================================
 * MODUL 23: IMPLEMENTASI FLOW CONTROL (Studi Kasus Penilaian Siswa)
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Menggabungkan konsep Looping, Conditional (`if...else`), dan Error Handling dalam satu studi kasus nyata.
 */

function evaluateStudentGrades(grades) {
    if (!Array.isArray(grades)) {
        throw new Error('Input tidak valid! Harap masukkan array berisi angka nilai.');
    }

    console.log('--- Laporan Evaluasi Nilai Siswa ---');
    for (let i = 0; i < grades.length; i++) {
        const grade = grades[i];

        if (typeof grade !== 'number') {
            throw new Error(`Data pada indeks ke-${i} (${grade}) bukan angka yang valid.`);
        }

        let predicate;
        if (grade >= 90) {
            predicate = 'A (Sangat Baik)';
        } else if (grade >= 80) {
            predicate = 'B (Baik)';
        } else if (grade >= 70) {
            predicate = 'C (Cukup)';
        } else if (grade >= 60) {
            predicate = 'D (Kurang)';
        } else {
            predicate = 'E (Tidak Lulus)';
        }

        console.log(`Siswa ${i + 1} | Skor: ${grade.toString().padEnd(3)} | Predikat: ${predicate}`);
    }
}

// Menjalankan fungsi di dalam blok try...catch untuk proteksi:
try {
    const classScores = [95, 85, 65, 80, 70];
    evaluateStudentGrades(classScores);
} catch (error) {
    console.error('Terjadi error:', error.message);
}
