// =========================
// SOAL LEVEL 1
// =========================

const level1 = [

{
question:"Bola memiliki berapa rusuk?",
answers:["0","6","8","12"],
correct:0
},

{
question:"Kubus memiliki berapa sisi?",
answers:["4","5","6","8"],
correct:2
},

{
question:"Kubus memiliki berapa rusuk?",
answers:["8","10","12","14"],
correct:2
},

{
question:"Balok memiliki berapa titik sudut?",
answers:["6","8","10","12"],
correct:1
},

{
question:"Bangun ruang yang tidak memiliki titik sudut adalah?",
answers:["Kubus","Balok","Bola","Prisma"],
correct:2
}

];

// =========================
// SOAL LEVEL 2
// =========================

const level2 = [

{
question:"Kubus memiliki sisi berbentuk?",
answers:["Segitiga","Persegi","Lingkaran","Oval"],
correct:1
},

{
question:"Balok memiliki berapa pasang sisi sejajar?",
answers:["1","2","3","4"],
correct:2
},

{
question:"Bola memiliki sisi?",
answers:["Datar","Lengkung","Persegi","Segitiga"],
correct:1
},

{
question:"Kubus dan Balok memiliki?",
answers:["Titik Sudut","Lingkaran","Busur","Jari-jari"],
correct:0
},

{
question:"Bangun ruang yang memiliki sisi lengkung adalah?",
answers:["Kubus","Balok","Bola","Prisma"],
correct:2
}

];

// =========================
// SOAL LEVEL 3
// =========================

const level3 = [

{
question:"Kubus memiliki berapa titik sudut?",
answers:["6","8","10","12"],
correct:1
},

{
question:"Balok memiliki berapa rusuk?",
answers:["10","12","14","16"],
correct:1
},

{
question:"Kubus memiliki berapa sisi?",
answers:["4","5","6","8"],
correct:2
},

{
question:"Bola memiliki berapa titik sudut?",
answers:["0","2","4","8"],
correct:0
},

{
question:"Balok memiliki berapa sisi?",
answers:["4","5","6","8"],
correct:2
}

];

// =========================
// SOAL LEVEL 4
// =========================

const level4 = [

{
question:"Bangun ruang manakah yang memiliki 12 rusuk?",
answers:["Bola","Kubus","Keduanya","Tidak ada"],
correct:1
},

{
question:"Bangun ruang yang memiliki sisi lengkung adalah?",
answers:["Bola","Kubus","Balok","Prisma"],
correct:0
},

{
question:"Jika suatu bangun memiliki 8 titik sudut dan 12 rusuk maka bangun tersebut adalah?",
answers:["Bola","Kubus","Segitiga","Lingkaran"],
correct:1
},

{
question:"Bola memiliki berapa sisi lengkung?",
answers:["0","1","2","3"],
correct:1
},

{
question:"Kubus memiliki bentuk sisi?",
answers:["Lingkaran","Persegi","Oval","Segitiga"],
correct:1
}

];

// =========================
// SOAL LEVEL 5
// =========================

const level5 = [

{
question:"Bangun ruang tanpa rusuk adalah?",
answers:["Kubus","Balok","Bola","Prisma"],
correct:2
},

{
question:"Kubus memiliki berapa sisi?",
answers:["4","5","6","8"],
correct:2
},

{
question:"Balok memiliki berapa titik sudut?",
answers:["6","8","10","12"],
correct:1
},

{
question:"Bangun ruang dengan sisi lengkung adalah?",
answers:["Kubus","Balok","Bola","Prisma"],
correct:2
},

{
question:"Kubus memiliki berapa rusuk?",
answers:["8","10","12","14"],
correct:2
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
    levelName = "⭐ Level 1 - Explorer";
}
else if(level === 2)
{
    levelName = "⭐⭐ Level 2 - Adventurer";
}
else if(level === 3)
{
    levelName = "⭐⭐⭐ Level 3 - Master";
}
else if(level === 4)
{
    levelName = "⭐⭐⭐⭐ Level 4 - Champion";
}
else
{
    levelName = "⭐⭐⭐⭐⭐ Level 5 - Legend";
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