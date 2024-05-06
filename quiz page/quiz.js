// operating classes using js (DOM)
const doinfo = document.querySelector('.do')
const himinfo = document.querySelector('.him')
const anchorinfo = document.querySelector('.anchor')
const mouseinfo = document.querySelector('.mouse')
const quizinfo = document.querySelector('.quiz-container')
const hiinfo = document.querySelector('.hi')
const nextinfo = document.querySelector('.next')
const questioninfo = document.querySelector('.question')
const option1info = document.querySelector('.opt1')
const option2info = document.querySelector('.opt2')
const option3info = document.querySelector('.opt3')
const option4info = document.querySelector('.opt4')
const numberinfo = document.querySelector('.number')
const scoreinfo = document.querySelector('.score')
let correctinfo = document.querySelector(".correct")
let zeroinfo = document.querySelector(".zero")
let circleinfo = document.querySelector(".circle")
let ansinfo = document.querySelector(".ans")
let extrainfo = document.querySelector(".main_extra_info")
let btn2info = document.querySelector(".btn2")
// start button on clicking
doinfo.onclick = () => {
    himinfo.classList.add('active')
    mouseinfo.classList.add('active')
}
anchorinfo.onclick = () => {
    himinfo.classList.remove('active')
    mouseinfo.classList.remove('active')
}

// continue button on clicking
let num = 0;
hiinfo.onclick = () => {
    himinfo.classList.remove('active')
    mouseinfo.classList.add('active')
    quizinfo.classList.add('active')
    option1info.style.borderColor = "white";
    option2info.style.borderColor = "white";
    option3info.style.borderColor = "white";
    option4info.style.borderColor = "white";
    option1info.style.transform = "scale(1.0)";
    option2info.style.transform = "scale(1.0)";
    option3info.style.transform = "scale(1.0)";
    option4info.style.transform = "scale(1.0)";
    option1info.style.color = "black";
    option2info.style.color = "black";
    option3info.style.color = "black";
    option4info.style.color = "black";
    extrainfo.style.marginTop = "150px";
    scoreinfo.style.textContent = `score:0/${theory.length}`;
    numberinfo.textContent = `1 of ${theory.length} questions`
    questioninfo.textContent = `${theory[0].num}.${theory[0].question}`;
    option1info.textContent = `${theory[0].option1}`;
    option2info.textContent = `${theory[0].option2}`;
    option3info.textContent = `${theory[0].option3}`;
    option4info.textContent = `${theory[0].option4}`;
    let l = theory[0].answer;
    option1info.onclick = () => {
        option1info.style.transform = "scale(1.1)";
        option2info.style.pointerEvents = "none";
        option3info.style.pointerEvents = "none";
        option4info.style.pointerEvents = "none";
        if (option1info.textContent === l) {
            option1info.style.color = "green";
            option1info.style.pointerEvents = "none";
            option1info.style.borderColor = "green";
            num = num + 1;
            scoreinfo.textContent = `score:${num}/${theory.length}`;
        }
        else {
            option1info.style.color = "red";
            option1info.style.borderColor = "red";
        }
        if (option2info.textContent === l) {
            option2info.style.color = "green";
            option2info.style.borderColor = "green"
        }
        else {

        }
        if (option3info.textContent === l) {
            option3info.style.color = "green";
            option3info.style.borderColor = "green";
        }
        else {

        } if (option4info.textContent === l) {
            option4info.style.color = "green";
            option4info.style.borderColor = "green";
        }
        else {

        }
    }
    option2info.onclick = () => {
        option2info.style.transform = "scale(1.1)";
        option1info.style.pointerEvents = "none";
        option3info.style.pointerEvents = "none";
        option4info.style.pointerEvents = "none";
        if (option2info.textContent === l) {
            option2info.style.borderColor = "green";
            option2info.style.pointerEvents = "none";
            option2info.style.color = "green";
            num = num + 1;
            scoreinfo.textContent = `score:${num}/${theory.length}`;
        }
        else {
            option2info.style.borderColor = "red";
            option2info.style.color = "red";
        }
        if (option1info.textContent === l) {
            option1info.style.color = "green";
            option1info.style.borderColor = "green";
        }
        else {

        }
        if (option3info.textContent === l) {
            option3info.style.color = "green";
            option3info.style.borderColor = "green";
        }
        else {


        } if (option4info.textContent === l) {
            option4info.style.color = "green";
            option4info.style.borderColor = "green";
        }
        else {
        }
    }
    option3info.onclick = () => {
        option3info.style.transform = "scale(1.1)";
        option2info.style.pointerEvents = "none";
        option1info.style.pointerEvents = "none";
        option4info.style.pointerEvents = "none";
        if (option3info.textContent === l) {
            option3info.style.pointerEvents = "none";
            option3info.style.color = "green";
            option3info.style.borderColor = "green";
            num = num + 1;
            scoreinfo.textContent = `score:${num}/${theory.length}`;
        }
        else {
            option3info.style.borderColor = "red";
            option3info.style.color = "red";
        }
        if (option2info.textContent === l) {
            option2info.style.color = "green";
            option2info.style.borderColor = "green";
        }
        else {

        }
        if (option4info.textContent === l) {
            option4info.style.color = "green";
            option4info.style.borderColor = "green";
        }
        else {

        }

        if (option1info.textContent === l) {
            option1info.style.color = "green";
            option1info.style.borderColor = "green";
        }
        else {
        }
    }
    option4info.onclick = () => {
        option4info.style.transform = "scale(1.1)";
        option2info.style.pointerEvents = "none";
        option3info.style.pointerEvents = "none";
        option1info.style.pointerEvents = "none";
        if (option4info.textContent === l) {
            option4info.style.pointerEvents = "none";
            option4info.style.borderColor = "green";
            option4info.style.color = "green";

            num = num + 1;
            scoreinfo.textContent = `score:${num}/${theory.length}`;
        }
        else {
            option1info.style.color = "red";
            option1info.style.borderColor = "red";
        }
        if (option1info.textContent === l) {
            option1info.style.color = "green";
            option1info.style.borderColor = "green";
        }
        else {
        }
        if (option2info.textContent === l) {
            option2info.style.color = "green";
            option2info.style.borderColor = "green"
        }
        else {
        }
        if (option3info.textContent === l) {
            option3info.style.color = "green";
            option3info.style.borderColor = "green";
        }
        else {
        }
    }

}

// creating a array for questions , options and answers
let theory = [
    {
        num: 1,
        question: "what causes global warming?",
        answer: "Greenhouse gases",
        option1: "Trees",
        option2: "Ocean currents",
        option3: "Volcanic eruptions",
        option4: "Greenhouse gases",
    },
    {
        num: 2,
        question: "What is the main greenhouse gas?",
        answer: "Carbon dioxide",
        option1: "Carbon dioxide",
        option2: "Oxygen",
        option3: "Nitrogen",
        option4: "Methane",
    },
    {
        num: 3,
        question: "what is melting in polar regions?",
        answer: "Ice caps",
        option1: "Rocks",
        option2: "Ice caps",
        option3: "Penguins",
        option4: "Glaciers"
    },
    {
        num: 4,
        question: "What's the main source of air pollution?",
        answer: "Fossil fuels",
        option1: "Fossil fuels",
        option2: "Wind",
        option3: "Clouds",
        option4: "Rain"
    },
    {
        num: 5,
        question: "What's harming coral reefs?",
        answer: "Ocean acidification",
        option1: "Sunlight",
        option2: "Rainfall",
        option3: "Ocean acidification",
        option4: "Seaweed"
    },
    {
        num: 6,
        question: "what traps heat in the atmosphere?",
        answer: "Carbon dioxide",
        option1: "Ice",
        option2: "Carbon dioxide",
        option3: "Snow",
        option4: "Clouds"
    },
    {
        num: 7,
        question: "what renewable energy comes from the sun?",
        answer: "Solar power",
        option1: "Natural gas",
        option2: "Oil",
        option3: "Coal",
        option4: "Solar power"
    },
    {
        num: 8,
        question: "What's the result of deforestation?",
        answer: "Loss in habitat",
        option1: "Loss in habitat",
        option2: "Cleaner air",
        option3: "Decrease in wildlife",
        option4: "Increase in biodiversity"
    },
    {
        num: 9,
        question: "What's causing extreme weather events?",
        answer: "Climate change",
        option1: "Global cooling",
        option2: "Urbanisation",
        option3: "Climate change",
        option4: "Plate tectonics"
    },
    {
        num: 10,
        question: "what's a natural carbon sink?",
        answer: "Forests",
        option1: "Forests",
        option2: "Factories",
        option3: "Cars",
        option4: "Buildings"
    }
]
let x1 = theory.length;
function display(index) {
    numberinfo.textContent = `${theory[index].num} of ${x1} questions`
    questioninfo.textContent = `${theory[index].num}.${theory[index].question}`;
    option1info.textContent = `${theory[index].option1}`;
    option2info.textContent = `${theory[index].option2}`;
    option3info.textContent = `${theory[index].option3}`;
    option4info.textContent = `${theory[index].option4}`;

}
let count = 0;
nextinfo.onclick = () => {
    count++;
    display(count);
    option1info.style.backgroundColor = "none"
    option2info.style.backgroundColor = "none"
    option3info.style.backgroundColor = "none"
    option4info.style.backgroundColor = "none"
    option1info.style.transform = "scale(1.0)";
    option2info.style.transform = "scale(1.0)";
    option3info.style.transform = "scale(1.0)";
    option4info.style.transform = "scale(1.0)";
    option1info.style.color = "black";
    option1info.style.borderColor = "white";
    option2info.style.color = "black";
    option2info.style.borderColor = "white";
    option3info.style.color = "black";
    option3info.style.borderColor = "white";
    option4info.style.color = "black";
    option4info.style.borderColor = "white";
    option2info.style.pointerEvents = "auto";
    option3info.style.pointerEvents = "auto";
    option4info.style.pointerEvents = "auto";
    option1info.style.pointerEvents = "auto";

    let x2 = `${theory.length} of ${theory.length} questions`;
    if (numberinfo.textContent === x2) {
        quizinfo.style.height = "415px";
        nextinfo.textContent = "submit";
        nextinfo.onclick = () => {
            ansinfo.classList.add('active');
            quizinfo.classList.remove('active');
            extrainfo.style.marginTop = "-360px"
            extrainfo.style.width = "1510px"
        }
    }
    else {

    }
    let l = theory[count].answer;
    option1info.onclick = () => {
        option1info.style.transform = "scale(1.1)";
        option2info.style.pointerEvents = "none";
        option3info.style.pointerEvents = "none";
        option4info.style.pointerEvents = "none";
        if (option1info.textContent === l) {
            option1info.style.pointerEvents = "none";
            option1info.style.color = "green";
            option1info.style.borderColor = "green";
            num = num + 1;
            scoreinfo.textContent = `score:${num}/${theory.length}`;
        }
        else {
            option1info.style.color = "red";
            option1info.style.borderColor = "red";
        }
        if (nextinfo.textContent === "submit") {
            correctinfo.textContent = `Your scored ${num} out of ${theory.length}`;
            console.log(num)
            let D = ((num) * 360) / 10;
            console.log(D)
            // extrainfo.style.marginTop = "150px"
            circleinfo.style.background = `conic-gradient(#08b908 ${D}deg, rgba(255,255,255,.1) 0deg)`;
            let E = ((num) * 100) / 10;
            zeroinfo.textContent = `${E}%`;
        }
        if (option2info.textContent === l) {
            option2info.style.color = "green";
            option2info.style.borderColor = "green"
        }
        else {
            // option2info.style.backgroundColor = "none";
        }
        if (option3info.textContent === l) {
            option3info.style.color = "green";
            option3info.style.borderColor = "green";
        }
        else {
            // option3info.style.backgroundColor = "none";

        } if (option4info.textContent === l) {
            option4info.style.color = "green";
            option4info.style.borderColor = "green";
        }
        else {

        }
    }

    option2info.onclick = () => {
        option2info.style.transform = "scale(1.1)";
        option1info.style.pointerEvents = "none";
        option3info.style.pointerEvents = "none";
        option4info.style.pointerEvents = "none";
        if (option2info.textContent === l) {
            option2info.style.pointerEvents = "none";
            option2info.style.borderColor = "green";
            option2info.style.color = "green";
            num = num + 1;
            scoreinfo.textContent = `score:${num}/${theory.length}`;
        }
        else {
            option2info.style.borderColor = "red";
            option2info.style.color = "red";
        }
        if (nextinfo.textContent === "submit") {
            correctinfo.textContent = `Your scored ${num} out of ${theory.length}`;
            console.log(num)
            let D = ((num) * 360) / 10;
            // extrainfo.style.marginTop = "150px";
            console.log(D)
            circleinfo.style.background = `conic-gradient(#08b908 ${D}deg, rgba(255,255,255,.1) 0deg)`;
            let E = ((num) * 100) / 10;
            zeroinfo.textContent = `${E}%`;
        }
        if (option1info.textContent === l) {
            option1info.style.color = "green";
            option1info.style.borderColor = "green";
        }
        else {
        }
        if (option3info.textContent === l) {
            option3info.style.color = "green";
            option3info.style.borderColor = "green";
        }
        else {
            // option3info.style.backgroundColor = "none";

        } if (option4info.textContent === l) {
            option4info.style.color = "green";
            option4info.style.borderColor = "green";
        }
        else {
            // option4info.style.backgroundColor = "none";

        }
    }
    option3info.onclick = () => {
        option3info.style.transform = "scale(1.1)";
        option2info.style.pointerEvents = "none";
        option1info.style.pointerEvents = "none";
        option4info.style.pointerEvents = "none";
        if (option3info.textContent === l) {
            option3info.style.pointerEvents = "none";
            option3info.style.color = "green";
            option3info.style.borderColor = "green";
            num = num + 1;
            scoreinfo.textContent = `score:${num}/10`;
        }
        else {
            option3info.style.borderColor = "red";
            option3info.style.color = "red";

        }
        if (nextinfo.textContent === "submit") {
            correctinfo.textContent = `Your scored ${num} out of ${theory.length}`;
            console.log(num)
            let D = ((num) * 360) / 10;

            console.log(D)
            circleinfo.style.background = `conic-gradient(#08b908 ${D}deg, rgba(255,255,255,.1) 0deg)`;
            let E = ((num) * 100) / 10;
            zeroinfo.textContent = `${E}%`;
        }
        if (option2info.textContent === l) {
            option2info.style.color = "green";
            option2info.style.borderColor = "green";
        }
        else {
        }
        if (option4info.textContent === l) {
            option4info.style.color = "green";
            option4info.style.borderColor = "green";
        }
        else {
        }

        if (option1info.textContent === l) {
            option1info.style.color = "green";
            option1info.style.borderColor = "green";
        }
        else {
        }
    }
    option4info.onclick = () => {
        option4info.style.transform = "scale(1.1)";
        option2info.style.pointerEvents = "none";
        option3info.style.pointerEvents = "none";
        option1info.style.pointerEvents = "none";
        if (option4info.textContent === l) {
            option4info.style.pointerEvents = "none";
            option4info.style.borderColor = "green";
            option4info.style.color = "green";

            num = num + 1;
            scoreinfo.textContent = `score:${num}/10`;
        }
        else {
            option4info.style.color = "red";
            option4info.style.borderColor = "red";
        }
        if (nextinfo.textContent === "submit") {
            correctinfo.textContent = `Your scored ${num} out of ${theory.length}`;
            console.log(num)
            let D = ((num) * 360) / 5;
            console.log(D)
            circleinfo.style.background = `conic-gradient(#08b908 ${D}deg, rgba(255,255,255,.1) 0deg)`;
            let E = ((num) * 100) / 10;
            zeroinfo.textContent = `${E}%`;
        }
        if (option1info.textContent === l) {
            option1info.style.color = "green";
            option1info.style.borderColor = "green";
        }
        else {

        }
        if (option2info.textContent === l) {
            option2info.style.color = "green";
            option2info.style.borderColor = "green"
        }
        else {
        }
        if (option3info.textContent === l) {
            option3info.style.color = "green";
            option3info.style.borderColor = "green";
        }
        else {
        }
    }
}
