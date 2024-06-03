let computer_score = 0;
let user_score = 0;

let choices_object = {
    rock: {
        rock: "draw",
        scissors: "win",
        paper: "lose"
    },
    scissors: {
        rock: "lose",
        scissors: "draw",
        paper: "win"
    },
    paper: {
        rock: "win",
        scissors: "lose",
        paper: "draw"
    }
};


function checkResult(input) {
    let choices = ["rock", "scissors", "paper"];
    // console.log(choices);
    let index = Math.floor(Math.random() * choices.length);
    // console.log(index);
    let computer_choice = choices[index];
    console.log(computer_choice)
    document.getElementById("computer_text").innerHTML = `Computer chose: <b>${computer_choice.toUpperCase()}</b>`;
    document.getElementById("user_text").innerHTML = 'You chose: ' + input.toUpperCase();

    let result = choices_object[input][computer_choice];
    console.log("Result: ", result)

    document.getElementById("result_text").innerHTML = `You <b>${result.toUpperCase()}</b>`;

    switch (result) {
        case "win":
            document.getElementById("result_text").style.cssText = "background-color: blue";
            user_score++;
            break;

        case "lose":
            document.getElementById("result_text").style.cssText = "background-color: red";
            computer_score++;
            break;

        case "draw":
            document.getElementById("result_text").style.cssText = "background-color: grey";
            break;
    }

    document.getElementById("computer_score").innerHTML = `Computer: ${computer_score}`;
    document.getElementById("user_score").innerHTML = `User: ${user_score}`;
}