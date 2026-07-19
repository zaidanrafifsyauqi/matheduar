// =========================
// SOAL LEVEL 1
// =========================

const level1 = [

{
question:"Bangun datar yang memiliki 4 sisi sama panjang adalah?",
answers:["Lingkaran","Persegi","Segitiga","Trapesium"],
correct:1
},

{
question:"Bangun datar yang memiliki satu titik pusat adalah?",
answers:["Persegi","Segitiga","Lingkaran","Segi Lima"],
correct:2
},

{
question:"Segitiga memiliki berapa sisi?",
answers:["2","3","4","5"],
correct:1
},

{
question:"Persegi panjang memiliki berapa sisi?",
answers:["3","4","5","6"],
correct:1
},

{
question:"Bangun datar yang berbentuk bulat adalah?",
answers:["Persegi","Lingkaran","Segitiga","Trapesium"],
correct:1
}

];

// =========================
// SOAL LEVEL 2
// =========================

const level2 = [

{
question:"Persegi memiliki berapa titik sudut?",
answers:["2","3","4","5"],
correct:2
},

{
question:"Persegi panjang memiliki sisi yang saling?",
answers:["Melengkung","Sejajar","Bulat","Tidak beraturan"],
correct:1
},

{
question:"Lingkaran memiliki berapa titik sudut?",
answers:["0","1","2","4"],
correct:0
},

{
question:"Segitiga memiliki berapa titik sudut?",
answers:["2","3","4","5"],
correct:1
},

{
question:"Bangun datar yang memiliki 4 sisi tetapi tidak semuanya sama panjang adalah?",
answers:["Persegi","Persegi Panjang","Lingkaran","Segitiga"],
correct:1
}

];

// =========================
// SOAL LEVEL 3
// =========================

const level3 = [

{
question:"Jajar genjang memiliki berapa pasang sisi sejajar?",
answers:["1","2","3","4"],
correct:1
},

{
question:"Belah ketupat memiliki sisi yang?",
answers:["Semua sama panjang","Semua berbeda","Melengkung","Tidak beraturan"],
correct:0
},

{
question:"Layang-layang memiliki berapa pasang sisi yang sama panjang?",
answers:["1","2","3","4"],
correct:1
},

{
question:"Trapesium memiliki minimal berapa pasang sisi sejajar?",
answers:["1","2","3","4"],
correct:0
},

{
question:"Segi lima memiliki berapa sisi?",
answers:["3","4","5","6"],
correct:2
}

];

// =========================
// SOAL LEVEL 4
// =========================

const level4 = [

{
question:"Segi enam memiliki berapa sisi?",
answers:["4","5","6","7"],
correct:2
},

{
question:"Jumlah sudut pada persegi adalah?",
answers:["90°","180°","270°","360°"],
correct:3
},

{
question:"Lingkaran memiliki sudut sebanyak?",
answers:["0","1","2","4"],
correct:0
},

{
question:"Bangun datar yang memiliki 5 sisi disebut?",
answers:["Segitiga","Segi Lima","Segi Enam","Trapesium"],
correct:1
},

{
question:"Bangun datar yang memiliki 6 sisi disebut?",
answers:["Segi Empat","Segi Lima","Segi Enam","Lingkaran"],
correct:2
}

];

// =========================
// SOAL LEVEL 5
// =========================

const level5 = [

{
question:"Bangun datar yang memiliki empat sisi sama panjang dan empat sudut siku-siku adalah?",
answers:["Persegi","Belah Ketupat","Trapesium","Layang-layang"],
correct:0
},

{
question:"Bangun datar yang memiliki satu titik pusat adalah?",
answers:["Persegi","Segitiga","Lingkaran","Segi Lima"],
correct:2
},

{
question:"Bangun datar yang memiliki tiga sisi adalah?",
answers:["Persegi","Segitiga","Lingkaran","Segi Enam"],
correct:1
},

{
question:"Bangun datar yang memiliki lima sisi disebut?",
answers:["Segi Empat","Segi Lima","Segi Enam","Trapesium"],
correct:1
},

{
question:"Bangun datar yang memiliki enam sisi disebut?",
answers:["Segi Lima","Segi Enam","Lingkaran","Persegi"],
correct:1
}

];

// =========================
// AMBIL LEVEL
// =========================

const level =
parseInt(localStorage.getItem("level")) || 1;

let levelName = "";

if(level === 1)
{
    levelName = "🟢 Level 1 - Dasar";
}
else if(level === 2)
{
    levelName = "🔵 Level 2 - Mudah";
}
else if(level === 3)
{
    levelName = "🟡 Level 3 - Sedang";
}
else if(level === 4)
{
    levelName = "🟠 Level 4 - Sulit";
}
else
{
    levelName = "🔴 Level 5 - Ahli";
}

// =========================
// PILIH SOAL BERDASARKAN LEVEL
// =========================

let questions = [];

if(level === 1)
{
    questions = level1;
}
else if(level === 2)
{
    questions = level2;
}
else if(level === 3)
{
    questions = level3;
}
else if(level === 4)
{
    questions = level4;
}
else
{
    questions = level5;
}

// =========================
// QUIZ
// =========================

let currentQuestion = 0;
let score = 0;

function loadQuestion()
{
    document.getElementById("levelTitle").innerHTML =
    levelName;

    document.getElementById("question").innerHTML =
    questions[currentQuestion].question;

    document.getElementById("progress").innerHTML =
    "Soal " +
    (currentQuestion + 1) +
    " dari " +
    questions.length;

    const buttons =
    document.querySelectorAll(".answer");

    buttons.forEach((btn,index)=>
    {
        btn.innerHTML =
        questions[currentQuestion].answers[index];
    });

    let percentage =
    ((currentQuestion + 0) / questions.length) * 100;

    document.getElementById("progress-bar").style.width =
    percentage + "%";
}

function checkAnswer(index)
{
    const feedback =
    document.getElementById("feedback");

    feedback.style.display = "block";

    if(index === questions[currentQuestion].correct)
    {
        score += 20;

        const liveScore =
        document.getElementById("live-score");

        if(liveScore)
        {
            liveScore.innerHTML = score;
        }

        feedback.className = "correct";
        feedback.innerHTML = "✅ Jawaban Benar!";
    }
    else
    {
        feedback.className = "wrong";
        feedback.innerHTML = "❌ Jawaban Salah!";
    }

    setTimeout(() =>
    {
        feedback.style.display = "none";

        currentQuestion++;

        if(currentQuestion < questions.length)
        {
            loadQuestion();
        }
        else
        {
            localStorage.setItem("score", score);
            localStorage.setItem("levelName", levelName);

            window.location.href = "hasil.html";
        }

    }, 1500);
}

window.onload = loadQuestion;
