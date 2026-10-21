
// Koneksi Supabase EduQuest
const SUPABASE_URL = "https://luygdxdtvswkcsoklrfv.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_S15yEulA9xZ11rK4PrsM2Q_UsDLVysa";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
const questionBank = {
  "7": [
    {
      question: "Apa yang dimaksud dengan algoritma?",
      options: [
        "Urutan langkah untuk menyelesaikan masalah",
        "Alat untuk mencetak dokumen",
        "Nama perangkat komputer",
        "Aplikasi untuk menggambar"
      ],
      answer: 0,
      explanation: "Algoritma adalah urutan langkah yang logis untuk menyelesaikan masalah."
    },
    {
      question: "Manakah yang termasuk perangkat keras?",
      options: ["Microsoft Word", "Keyboard", "Windows", "Google Chrome"],
      answer: 1,
      explanation: "Keyboard merupakan perangkat keras yang dapat disentuh dan digunakan untuk memasukkan data."
    },
    {
      question: "Apa fungsi utama CPU?",
      options: [
        "Mencetak foto",
        "Menghubungkan komputer ke meja",
        "Memproses instruksi dan data",
        "Membersihkan layar"
      ],
      answer: 2,
      explanation: "CPU memproses instruksi dan data dalam sistem komputer."
    },
    {
      question: "Memecah masalah besar menjadi bagian kecil disebut ...",
      options: ["Duplikasi", "Dekomposisi", "Dekorasi", "Simulasi"],
      answer: 1,
      explanation: "Dekomposisi membuat masalah kompleks lebih mudah diselesaikan."
    },
    {
      question: "Apa contoh kata sandi yang lebih aman?",
      options: [
        "123456",
        "password",
        "Tanggal lahir saja",
        "Kombinasi panjang yang unik dan sulit ditebak"
      ],
      answer: 3,
      explanation: "Kata sandi yang panjang, unik, dan sulit ditebak lebih baik untuk melindungi akun."
    }
  ],

  "8": [
    {
      question: "Apa tujuan penggunaan percabangan IF dalam pemrograman?",
      options: [
        "Mengubah warna monitor",
        "Menentukan tindakan berdasarkan kondisi",
        "Menghapus semua program",
        "Memperbesar ukuran keyboard"
      ],
      answer: 1,
      explanation: "IF memungkinkan program memilih tindakan berdasarkan kondisi benar atau salah."
    },
    {
      question: "Apa fungsi variabel dalam program?",
      options: [
        "Menyimpan nilai atau data",
        "Membersihkan komputer",
        "Menghubungkan kabel listrik",
        "Mencetak halaman"
      ],
      answer: 0,
      explanation: "Variabel digunakan untuk menyimpan nilai yang dapat digunakan atau diubah oleh program."
    },
    {
      question: "Bilangan biner menggunakan angka ...",
      options: ["0 dan 1", "1 dan 2", "0 sampai 9", "A sampai F saja"],
      answer: 0,
      explanation: "Sistem bilangan biner hanya menggunakan dua digit, yaitu 0 dan 1."
    },
    {
      question: "Apa fungsi utama spreadsheet seperti Microsoft Excel?",
      options: [
        "Mengedit video saja",
        "Membuat sistem operasi",
        "Mengolah data dalam tabel dan melakukan perhitungan",
        "Menggantikan perangkat keras"
      ],
      answer: 2,
      explanation: "Spreadsheet membantu mengelola data, menggunakan rumus, dan menyajikan informasi."
    },
    {
      question: "Mengapa kita perlu memeriksa kebenaran informasi di internet?",
      options: [
        "Semua informasi di internet pasti benar",
        "Informasi yang beredar belum tentu akurat",
        "Supaya tidak perlu membaca sumber",
        "Agar semua berita menjadi sama"
      ],
      answer: 1,
      explanation: "Memeriksa sumber dan membandingkan informasi membantu menghindari berita keliru."
    }
  ],

  "9": [
    {
      question: "Apa tujuan utama pengujian program (debugging)?",
      options: [
        "Menambah ukuran monitor",
        "Mencari dan memperbaiki kesalahan program",
        "Menghapus semua data pengguna",
        "Mengganti komputer baru"
      ],
      answer: 1,
      explanation: "Debugging membantu menemukan dan memperbaiki kesalahan agar program berjalan sesuai tujuan."
    },
    {
      question: "Apa yang dimaksud dengan phishing?",
      options: [
        "Teknik menipu untuk memperoleh informasi sensitif",
        "Cara membersihkan layar",
        "Metode membuat tabel",
        "Jenis perangkat input"
      ],
      answer: 0,
      explanation: "Phishing adalah upaya penipuan yang mencoba memperoleh informasi seperti kata sandi melalui pesan atau situs palsu."
    },
    {
      question: "Apa fungsi struktur data dalam pemrograman?",
      options: [
        "Mengatur dan menyimpan data agar dapat digunakan dengan efektif",
        "Mengatur pencahayaan ruangan",
        "Mempercepat koneksi listrik",
        "Mengganti bahasa manusia"
      ],
      answer: 0,
      explanation: "Struktur data mengorganisasi data sehingga operasi tertentu bisa dilakukan dengan lebih efektif."
    },
    {
      question: "Apa manfaat menggunakan autentikasi dua faktor?",
      options: [
        "Membuat kata sandi terlihat oleh semua orang",
        "Menghapus kebutuhan keamanan",
        "Menambahkan lapisan perlindungan saat masuk ke akun",
        "Membagikan akun kepada orang lain"
      ],
      answer: 2,
      explanation: "Autentikasi dua faktor menambahkan verifikasi selain kata sandi untuk melindungi akun."
    },
    {
      question: "Mengapa data perlu dicadangkan (backup)?",
      options: [
        "Agar data lebih mudah hilang",
        "Untuk membantu memulihkan data jika data utama hilang atau rusak",
        "Supaya komputer selalu mati",
        "Untuk menghapus file penting"
      ],
      answer: 1,
      explanation: "Cadangan data membantu memulihkan file ketika data utama terhapus, rusak, atau tidak bisa diakses."
    }
  ]
};

let questions = questionBank["7"];


const $ = (id) => document.getElementById(id);

let currentQuestion = 0;
let score = 0;
let answered = false;
let selectedGrade = "7";
let xpEarnedThisQuiz = 0;



/* PENYIMPANAN PROGRES BERDASARKAN NAMA DAN KELAS */

function getProgressStorageKey(name, grade) {
  const cleanName = (name || "").trim().toLowerCase();

  if (!cleanName) {
    return `eduquest-progress:guest:${grade}`;
  }

  return `eduquest-progress:${grade}:${encodeURIComponent(cleanName)}`;
}

function loadProgress(name, grade) {
  try {
    const key = getProgressStorageKey(name, grade);
    const saved = JSON.parse(localStorage.getItem(key));

    if (
      saved &&
      typeof saved.xp === "number" &&
      typeof saved.completed === "number"
    ) {
      return {
        xp: Math.max(0, saved.xp),
        completed: Math.max(0, saved.completed),
        perfectCount: Math.max(0, saved.perfectCount || 0)
      };
    }
  } catch (error) {
    console.warn("Progres belum dapat dibaca.", error);
  }

  return { xp: 0, completed: 0, perfectCount: 0 };
}

// Profil yang sedang aktif
let activeProfileName =
  localStorage.getItem("eduquest-player-name") || "";

let activeProfileGrade = selectedGrade;

let progress = loadProgress(
  activeProfileName,
  activeProfileGrade
);

// Simpan progres ke profil yang sedang aktif
function saveProgress() {
  try {
    const key = getProgressStorageKey(
      activeProfileName,
      activeProfileGrade
    );

    localStorage.setItem(key, JSON.stringify(progress));
  } catch (error) {
    console.warn("Progres tidak dapat disimpan.", error);
  }
}

// Beralih ke profil berdasarkan nama dan kelas
function activateProfile(name, grade) {
  activeProfileName = (name || "").trim().slice(0, 20);
  activeProfileGrade = String(grade);

  progress = loadProgress(
    activeProfileName,
    activeProfileGrade
  );

  updateStats();
  updateAchievements();
}


function updateStats() {
  $("xp").textContent = progress.xp;
  $("stat-xp").textContent = progress.xp;
  $("level").textContent = Math.floor(progress.xp / 50) + 1;
  $("completed").textContent = progress.completed;
}

function startQuiz() {
  questions = questionBank[selectedGrade];

  currentQuestion = 0;
  score = 0;
  answered = false;
  xpEarnedThisQuiz = 0;

  $("result-panel").classList.add("hidden");
  $("belajar").classList.add("hidden");
  $("quiz-panel").classList.remove("hidden");

  window.scrollTo({ top: 0, behavior: "smooth" });
  showQuestion();

  setTimeout(() => {
  $("quiz-panel").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
  }, 100);
}

function showQuestion() {
  answered = false;

  const item = questions[currentQuestion];

  $("question-counter").textContent =
    `Pertanyaan ${currentQuestion + 1} dari ${questions.length}`;

  $("progress-bar").style.width =
    `${(currentQuestion / questions.length) * 100}%`;

  $("question-text").textContent = item.question;
  $("feedback").textContent = "";
  $("next-button").disabled = true;

  const optionsContainer = $("answer-options");
  optionsContainer.replaceChildren();

  item.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "answer-option";
    button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
    button.addEventListener("click", () => chooseAnswer(index));
    optionsContainer.appendChild(button);
  });
}

function chooseAnswer(selectedIndex) {
  if (answered) return;
  answered = true;

  const item = questions[currentQuestion];
  const buttons = $("answer-options").querySelectorAll("button");

  buttons.forEach((button) => {
    button.disabled = true;
  });

  if (selectedIndex === item.answer) {
    score++;
    buttons[selectedIndex].classList.add("correct");
    $("feedback").textContent = "✅ Benar! +10 XP untuk jawaban ini.";
    $("feedback").style.color = "#128451";
  } else {
    buttons[selectedIndex].classList.add("incorrect");
    buttons[item.answer].classList.add("correct");
    $("feedback").textContent =
      `💡 Belum tepat. ${item.explanation}`;
    $("feedback").style.color = "#a14a32";
  }

  if (selectedIndex === item.answer) {
    $("feedback").textContent = `✅ Benar! ${item.explanation}`;
  }

  $("progress-bar").style.width =
    `${((currentQuestion + 1) / questions.length) * 100}%`;

  $("next-button").disabled = false;
  $("next-button").textContent =
    currentQuestion === questions.length - 1
      ? "Lihat Hasil 🏆"
      : "Pertanyaan Berikutnya →";
}

function nextQuestion() {
  if (!answered) return;

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    finishQuiz();
  }
}




function finishQuiz() {
  let name =
    localStorage.getItem("eduquest-player-name") || "";

  // Minta nama jika siswa belum mengisi profil
  if (!name.trim()) {
    const enteredName = prompt(
      "Masukkan nama panggilan untuk menyimpan progres:"
    );

    if (!enteredName || !enteredName.trim()) {
      alert(
        "Silakan masukkan nama agar progres dapat disimpan."
      );
      return;
    }

    name = enteredName.trim().slice(0, 20);

    localStorage.setItem("eduquest-player-name", name);

    const nameInput = $("leaderboard-name");
    if (nameInput) {
      nameInput.value = name;
    }
  }

  // Pastikan profil yang benar aktif sebelum XP ditambahkan
  activateProfile(name, selectedGrade);

  xpEarnedThisQuiz = score * 10;
  progress.xp += xpEarnedThisQuiz;
  progress.completed++;

  if (score === questions.length) {
    progress.perfectCount++;
  }

  // Simpan progres profil ini
  saveProgress();

  // Perbarui papan peringkat
  saveLeaderboardScore(selectedGrade, xpEarnedThisQuiz);

  updateStats();
  updateAchievements();

  $("quiz-panel").classList.add("hidden");
  $("result-panel").classList.remove("hidden");

  $("final-score").textContent =
    `${score}/${questions.length}`;

  $("earned-xp").textContent =
    `+${xpEarnedThisQuiz} XP`;

  if (score === questions.length) {
    $("result-message").textContent =
      "Sempurna! Semua jawabanmu benar. Lencana Jawaban Sempurna terbuka!";
  } else if (score >= 3) {
    $("result-message").textContent =
      "Bagus! Terus berlatih agar pengetahuanmu semakin kuat.";
  } else {
    $("result-message").textContent =
      "Jangan menyerah! Pelajari pembahasan dan coba lagi.";
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}




function backToLearning() {
  $("quiz-panel").classList.add("hidden");
  $("result-panel").classList.add("hidden");
  $("belajar").classList.remove("hidden");
  window.scrollTo({ top: $("belajar").offsetTop - 20, behavior: "smooth" });
}


document.querySelectorAll(".class-button").forEach((button) => {
  button.addEventListener("click", () => {
    selectedGrade = String(button.dataset.grade);

    document.querySelectorAll(".class-button").forEach((item) => {
      item.classList.remove("active");
    });

    button.classList.add("active");

    $("start-quiz").textContent =
      `Kuis Kelas ${selectedGrade} →`;

    const savedName =
      localStorage.getItem("eduquest-player-name") || "";

    // Muat progres nama tersebut untuk kelas yang dipilih
    activateProfile(savedName, selectedGrade);
  });
});


$("start-quiz").addEventListener("click", startQuiz);
$("next-button").addEventListener("click", nextQuestion);
$("back-button").addEventListener("click", backToLearning);
$("retry-button").addEventListener("click", startQuiz);

updateStats();
updateAchievements();


function updateAchievements() {
  const achievements = [
    {
      id: "badge-first",
      unlocked: progress.completed >= 1
    },
    {
      id: "badge-perfect",
      unlocked: progress.perfectCount >= 1
    },
    {
      id: "badge-explorer",
      unlocked: progress.completed >= 5
    }
  ];

  achievements.forEach((achievement) => {
    const card = $(achievement.id);
    if (!card) return;

    card.classList.toggle("unlocked", achievement.unlocked);

    const status = card.querySelector(".badge-status");
    status.textContent = achievement.unlocked
      ? "✓ Terbuka"
      : "Belum terbuka";
  });
}

/* =========================
   LEADERBOARD EDUQUEST
========================= */

const LEADERBOARD_KEY = "eduquest-leaderboard";
const PLAYER_NAME_KEY = "eduquest-player-name";

// Membaca data leaderboard
function getLeaderboardData() {
  try {
    const data = JSON.parse(
      localStorage.getItem(LEADERBOARD_KEY)
    );

    return Array.isArray(data) ? data : [];
  } catch (error) {
    return [];
  }
}

// Menyimpan nama panggilan

function saveLeaderboardName() {
  const input = $("leaderboard-name");
  if (!input) return;

  const name = input.value.trim();

  if (!name) {
    alert("Silakan isi nama panggilan terlebih dahulu.");
    return;
  }

  const safeName = name.slice(0, 20);

  localStorage.setItem("eduquest-player-name", safeName);

  // Muat progres sesuai nama dan kelas kuis aktif
  activateProfile(safeName, selectedGrade);

  renderLeaderboard();

  alert(
    `Profil ${safeName}, kelas ${selectedGrade}, berhasil dibuka.`
  );
}


// Menampilkan papan peringkat
function renderLeaderboard() {
  const list = $("leaderboard-list");
  const gradeSelect = $("leaderboard-grade");

  if (!list || !gradeSelect) return;

  const grade = gradeSelect.value;

  const students = getLeaderboardData()
    .filter(student => student.grade === grade)
    .sort((a, b) => b.xp - a.xp)
    .slice(0, 10);

  list.replaceChildren();

  if (students.length === 0) {
    const message = document.createElement("p");
    message.textContent =
      "Belum ada skor di kelas ini. Yuk, mulai belajar!";
    list.appendChild(message);
    return;
  }

  students.forEach((student, index) => {
    const row = document.createElement("div");
    row.className = "leaderboard-row";

    const rank = document.createElement("div");
    rank.className = "leaderboard-rank";
    rank.textContent = ["🥇", "🥈", "🥉"][index] ||
      `#${index + 1}`;

    const info = document.createElement("div");
    info.className = "leaderboard-student";

    const name = document.createElement("strong");
    name.textContent = student.name;

    const classInfo = document.createElement("small");
    classInfo.textContent = `Siswa kelas ${student.grade}`;

    info.append(name, classInfo);

    const xp = document.createElement("div");
    xp.className = "leaderboard-xp";
    xp.textContent = `${student.xp} XP`;

    row.append(rank, info, xp);
    list.appendChild(row);
  });
}

// Mencatat XP setelah kuis selesai
function saveLeaderboardScore(grade, earnedXP) {
  let name = localStorage.getItem(PLAYER_NAME_KEY);

  if (!name) {
    name = prompt(
      "Masukkan nama panggilan untuk leaderboard:"
    );

    if (!name || !name.trim()) {
      alert(
        "XP tetap tersimpan, tetapi skor tidak masuk leaderboard karena nama belum diisi."
      );
      return;
    }

    name = name.trim().slice(0, 20);
    localStorage.setItem(PLAYER_NAME_KEY, name);

    const input = $("leaderboard-name");
    if (input) input.value = name;
  }

  const students = getLeaderboardData();

  // Nama dan kelas yang sama dianggap sebagai profil yang sama
  let student = students.find(item =>
    item.name.toLowerCase() === name.toLowerCase() &&
    item.grade === grade
  );

  if (student) {
    student.xp += earnedXP;
  } else {
    students.push({
      name: name,
      grade: grade,
      xp: earnedXP
    });
  }

  localStorage.setItem(
    LEADERBOARD_KEY,
    JSON.stringify(students)
  );

  renderLeaderboard();
}

// Menyiapkan tombol dan filter
function initLeaderboard() {
  const input = $("leaderboard-name");
  const saveButton = $("save-leaderboard-name");
  const gradeSelect = $("leaderboard-grade");

  if (input) {
    input.value =
      localStorage.getItem(PLAYER_NAME_KEY) || "";
  }

  if (saveButton) {
    saveButton.addEventListener(
      "click",
      saveLeaderboardName
    );
  }

  if (gradeSelect) {
    gradeSelect.addEventListener(
      "change",
      renderLeaderboard
    );
  }

  renderLeaderboard();
}

initLeaderboard();

/* =========================================
   AUTENTIKASI EDUQUEST
   Menghubungkan form ke Edge Function
========================================= */

const loginForm = $("login-form");
const registerForm = $("register-form");
const authMessage = $("auth-message");

function showAuthMessage(message, isError = false) {
  if (!authMessage) return;

  authMessage.textContent = message;
  authMessage.style.color = isError ? "#c0392b" : "#128451";
}

function setAuthButtonsLoading(form, loading, normalText) {
  const button = form.querySelector('button[type="submit"]');

  if (!button) return;

  button.disabled = loading;
  button.textContent = loading ? "Memproses..." : normalText;
}

async function callEduQuestAuth(payload) {
  const { data, error } = await supabaseClient.functions.invoke(
    "eduquest-login",
    { body: payload }
  );

  if (error) {
    throw new Error(
      "Tidak dapat menghubungi layanan login. Periksa deployment dan log Edge Function."
    );
  }

  if (!data || !data.success) {
    throw new Error(data?.error || "Permintaan tidak berhasil.");
  }

  return data;
}

// PENDAFTARAN SISWA
loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const nisn = $("login-nisn").value.trim();
  const pin = $("login-pin").value;

  setAuthButtonsLoading(loginForm, true, "Masuk →");
  showAuthMessage("Memeriksa data akun...");

  try {
    const data = await callEduQuestAuth({
      action: "login",
      nisn,
      pin
    });

    const profile = data.profile;

    if (!profile?.full_name || !["7", "8", "9"].includes(
      String(profile.class_name)
    )) {
      throw new Error("Data profil siswa belum lengkap atau tidak valid.");
    }

    // Simpan profil aktif untuk fitur progres lokal.
    // Ini bukan token sesi autentikasi.
    localStorage.setItem("eduquest-player-name", profile.full_name);

    selectedGrade = String(profile.class_name);

    document.querySelectorAll(".class-button").forEach((button) => {
      const active = button.dataset.grade === selectedGrade;
      button.classList.toggle("active", active);
    });

    $("leaderboard-name").value = profile.full_name.slice(0, 20);
    $("leaderboard-grade").value = selectedGrade;
    $("start-quiz").textContent = `Kuis Kelas ${selectedGrade} →`;

    activateProfile(profile.full_name, selectedGrade);

    $("auth-section").hidden = true;
    $("app-header").hidden = false;
    $("app-content").hidden = false;

    renderLeaderboard();
    showAuthMessage("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  } catch (error) {
    showAuthMessage(
      error.message || "Login gagal. Silakan coba kembali.",
      true
    );
  } finally {
    setAuthButtonsLoading(loginForm, false, "Masuk →");
  }
});

// PENDAFTARAN SISWA
registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const nisn = $("register-nisn").value.trim();
  const fullName = $("register-name").value.trim();
  const className = $("register-class").value;
  const pin = $("register-pin").value;

  setAuthButtonsLoading(
    registerForm,
    true,
    "Daftar Sekarang →"
  );
  showAuthMessage("Memeriksa data pendaftaran...");

  try {
    const data = await callEduQuestAuth({
      action: "register",
      nisn,
      full_name: fullName,
      class_name: className,
      pin
    });

    showAuthMessage(
      data.message || "Pendaftaran berhasil. Silakan masuk."
    );

    registerForm.reset();

    // Isi NIS secara otomatis agar siswa bisa langsung masuk.
    $("login-nisn").value = nisn;
    $("login-pin").focus();
  } catch (error) {
    showAuthMessage(
      error.message || "Pendaftaran gagal. Silakan coba kembali.",
      true
    );
  } finally {
    setAuthButtonsLoading(
      registerForm,
      false,
      "Daftar Sekarang →"
    );
  }
});



