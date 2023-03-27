// javascript console and GUI game

function getComputerChoice(){
    let possible_output = ["paper", "scissor", "rock"];
    let computer_engine = Math.floor(Math.random() * possible_output.length);
    let computer_choise = (possible_output[computer_engine]);

    return computer_choise;
}

//checking whether gameover or not
function isgameover(value, whowin){
    if((value === 4) && (whowin === "human"))
    {
        let confirm_box = confirm(`Congradulation you win this game to play again please click [yes/cancel]`);
        if(confirm_box){
            location.reload();
         }
         else{
            location.replace("thanks_page.html");
         }
        
    }

    else if((value === 4) && (whowin === "computer")){
        let confirm_box = confirm(`game over ${whowin} win this game to play again please click [yes/cancel]`);
        if(confirm_box){
            location.reload();
         }
         else{
            location.replace("thanks_page.html");
         }
    }
}

// grabing html element
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");

//adding event listener
rock.addEventListener("click", callrock);
function callrock(){
    // alert("ite me");
    let possible_output = ["rock", "paper", "scissor"];
    let computer_engine = Math.floor(Math.random() * possible_output.length);
    let computer_choise = (possible_output[computer_engine]);

    let hu_choose = document.getElementById("human_choose");
    let com_choose = document.getElementById("computer_choose");
    let equ_choose = document.getElementById("equal_chance");

    let human_scores = document.getElementById("human_score_adder");
    let computer_scores = document.getElementById("computer_score_adder");

    let rock = "rock";

    if((rock === computer_choise) && (computer_choise === "rock")){
            // alert("equal");
            equ_choose.textContent = "Equal choose by you and the AI!";
            // console.log("Equal choose by you and the AI!");
            //accessing and make it functional th html element
            // let human_scores = document.getElementById("human_score_adder");
            // let computer_scores = document.getElementById("computer_score_adder");
            // human_scores.textContent = 0;
            // computer_scores.textContent = 0;
            console.log("Equal choose by you and the AI!");
            console.log(`you choose rock and computer choose ${computer_choise}`);
            hu_choose.textContent = `${rock}`;
            com_choose.textContent = `${computer_choise}`;
      }
  
      else if((rock === computer_choise) || (computer_choise === "paper"))
      {
            //   alert("not equal");
              console.log("computer win");
              // let human_scores = document.getElementById("human_score_adder");
              let computer_scores = document.getElementById("computer_score_adder");
              //computer_scores.textContent++;
              let c = computer_scores.textContent++;
              let winner = "computer";
              isgameover(c, winner);
              
              //computer_scores.textContent++;
              console.log(`you choose rock and computer choose ${computer_choise}`);
              equ_choose.textContent = `you choose rock and computer choose ${computer_choise} > Computer Win! <`
              hu_choose.textContent = `${rock}`;
              com_choose.textContent = `${computer_choise}`;
      }

      else if((rock === computer_choise) || (computer_choise === "scissor"))
      {
            //   alert("not equal");
              console.log("Congratulation you win");
              let human_scores = document.getElementById("human_score_adder");
              // let computer_scores = document.getElementById("computer_score_adder");
              //human_scores.textContent++;
              let u = human_scores.textContent++;
              let winner = "human";
              isgameover(u, winner);
              //human_scores.textContent++;
              console.log(`you choose rock and computer choose ${computer_choise}`);
              equ_choose.textContent = `you choose rock and computer choose ${computer_choise} > You Win! <`;
              hu_choose.textContent = `${rock}`;
              com_choose.textContent = `${computer_choise}`;
          }
      }



paper.addEventListener("click", callpaper);
function callpaper(){
    // alert("ite me");
    let possible_output = ["paper", "scissor", "rock"];
    let computer_engine = Math.floor(Math.random() * possible_output.length);
    let computer_choise = (possible_output[computer_engine]);

    let hu_choose = document.getElementById("human_choose");
    let com_choose = document.getElementById("computer_choose");
    let equ_choose = document.getElementById("equal_chance");

    let paper = "paper";

    
    if((paper === computer_choise) && (computer_choise === "paper")){
            // alert("equal");
            equ_choose.textContent = "Equal choose by you and the AI!";
            // console.log("Equal choose by you and the AI!");
            //accessing and make it functional th html element
            // let human_scores = document.getElementById("human_score_adder");
            // let computer_scores = document.getElementById("computer_score_adder");
            // human_scores.textContent = 0;
            // computer_scores.textContent = 0;
            console.log("Equal choose by you and the AI!");
            console.log(`you choose paper and computer choose ${computer_choise}`);
            hu_choose.textContent = `${paper}`;
            com_choose.textContent = `${computer_choise}`;
      }
  
      else if((paper === computer_choise) || (computer_choise === "scissor"))
      {
            //   alert("not equal");
              console.log("computer win");
              // let human_scores = document.getElementById("human_score_adder");
              let computer_scores = document.getElementById("computer_score_adder");
              //computer_scores.textContent++;
              let c = computer_scores.textContent++;
              let winner = "computer";
              isgameover(c, winner);
              //computer_scores.textContent++;
              console.log(`you choose paper and computer choose ${computer_choise}`);
              equ_choose.textContent = `you choose rock and computer choose ${computer_choise} > Computer Win! <`
              hu_choose.textContent = `${paper}`;
              com_choose.textContent = `${computer_choise}`;
      }

      else if((paper === computer_choise) || (computer_choise === "rock"))
      {
            //   alert("not equal");
              console.log("Congratulation you win");
              let human_scores = document.getElementById("human_score_adder");
              // let computer_scores = document.getElementById("computer_score_adder");
              //human_scores.textContent++;  
              let u = human_scores.textContent++;
              let winner = "human";
              isgameover(u, winner); 
              //human_scores.textContent++;
              console.log(`you choose paper and computer choose ${computer_choise}`);
              equ_choose.textContent = `you choose rock and computer choose ${computer_choise} > You Win! <`;
              hu_choose.textContent = `${paper}`;
              com_choose.textContent = `${computer_choise}`;
          }
    
}

scissor.addEventListener("click", callscissor);
function callscissor(){
        // alert("ite me");
        let possible_output = ["paper", "scissor", "rock"];
        let computer_engine = Math.floor(Math.random() * possible_output.length);
        let computer_choise = (possible_output[computer_engine]);

        let hu_choose = document.getElementById("human_choose");
        let com_choose = document.getElementById("computer_choose");
        let equ_choose = document.getElementById("equal_chance");
        
        let scissor = "scissor";

        if((scissor === computer_choise) && (computer_choise === "scissor")){
            // alert("equal");
            equ_choose.textContent = "Equal choose by you and the AI!";
            // console.log("Equal choose by you and the AI!");
            //accessing and make it functional th html element
            // let human_scores = document.getElementById("human_score_adder");
            // let computer_scores = document.getElementById("computer_score_adder");
            // human_scores.textContent = 0;
            // computer_scores.textContent = 0;
            console.log("Equal choose by you and the AI!");
            console.log(`you choose scissor and computer choose ${computer_choise}`);
            hu_choose.textContent = `${scissor}`;
            com_choose.textContent = `${computer_choise}`;
      }
  
      else if((scissor === computer_choise) || (computer_choise === "rock"))
      {
            //   alert("not equal");
              console.log("computer win");
              // let human_scores = document.getElementById("human_score_adder");
              let computer_scores = document.getElementById("computer_score_adder");
              //computer_scores.textContent++;
              let c = computer_scores.textContent++;
              let winner = "computer";
              isgameover(c, winner);
              //computer_scores.textContent++;
              console.log(`you choose scissor and computer choose ${computer_choise}`);
              equ_choose.textContent = `you choose scissor and computer choose ${computer_choise} > Computer Win! <`
              hu_choose.textContent = `${scissor}`;
              com_choose.textContent = `${computer_choise}`;
      }

      else if((paper === computer_choise) || (computer_choise === "paper"))
      {
            //   alert("not equal");
              console.log("Congratulation you win");
              let human_scores = document.getElementById("human_score_adder");
              // let computer_scores = document.getElementById("computer_score_adder");
              //human_scores.textContent++;   
              let u = human_scores.textContent++;
              let winner = "human";
              isgameover(u, winner);
              //human_scores.textContent++;
              console.log(`you choose scissor and computer choose ${computer_choise}`);
              equ_choose.textContent = `you choose scissor and computer choose ${computer_choise} > You Win! <`;
              hu_choose.textContent = `${scissor}`;
              com_choose.textContent = `${computer_choise}`;
          }
    
}

// let human_scores = document.getElementById("human_score_adder");
// let computer_scores = document.getElementById("computer_score_adder");

// human_scores.textContent = 0;
// computer_scores = 0;

    // function play_game(user,computer){    
    //     //calling computer generated values
    //     let Computer = getComputerChoice();   
    //     // let rock = callrock();
    //     // let paper = callpaper();
    //     // let scissor = callscissor();

    //     //accessing and make it functional th html element
    //     let human_scores = document.getElementById("human_score_adder");
    //     let computer_scores = document.getElementById("computer_score_adder");


    //     if (rock == getComputerChoice() || paper == getComputerChoice() || scissor == getComputerChoice()){
    //       console.log("Equal choose by you and the machine !");
    //               //accessing and make it functional th html element
    //     let human_scores = document.getElementById("human_score_adder");
    //     let computer_scores = document.getElementById("computer_score_adder");
    //     //   human_counter = 0;
    //     //   computer_counter = 0;
    //     //   console.log(`human score: ${human_counter = 0}`);
    //     //   console.log(`computer score: ${computer_counter = 0}`);
    //     human_scores.textContent = 0;
    //     computer_scores.textContent = 0;


    //     }
    
    //     else if(rock || paper || scissor == "rock")
    //     {
    //         if (getComputerChoice() == "scissor")
    //         {
    //             console.log("Congratulation you win");
    //             let human_scores = document.getElementById("human_score_adder");
    //             let computer_scores = document.getElementById("computer_score_adder");
    //             human_scores.textContent++;
    
    //         }
    //         else{
    //             console.log("Unfortunatlly you loss");
    //             let human_scores = document.getElementById("human_score_adder");
    //             let computer_scores = document.getElementById("computer_score_adder");
    //             computer_scores.textContent++;
    //         }
    //     }
    
    //     else if(rock || paper || scissor == "paper")
    //     {
    //         if (getComputerChoice() == "rock")
    //         {
    //             console.log("Congratulation you win");
    //             let human_scores = document.getElementById("human_score_adder");
    //             let computer_scores = document.getElementById("computer_score_adder");
    //             human_scores.textContent++;
    //         }
    
    //          else{
    //              console.log("Unfortunatlly you loss");
    //              let human_scores = document.getElementById("human_score_adder");
    //              let computer_scores = document.getElementById("computer_score_adder");
    //              computer_scores.textContent++;
    //         }
    //     }
    
    //     else if(rock || paper || scissor == "scissor")
    //     {
    //         if (getComputerChoice() == "paper"){
    //             let human_scores = document.getElementById("human_score_adder");
    //             let computer_scores = document.getElementById("computer_score_adder");
    //             human_scores.textContent++;
    //         }
    
    //     else{
    //         console.log("Unfortunatlly you loss");
    //         let human_scores = document.getElementById("human_score_adder");
    //         let computer_scores = document.getElementById("computer_score_adder");
    //         computer_scores.textContent++;
    //     }
    
    //     }
    // }

// play_game(callrock(),getComputerChoice())