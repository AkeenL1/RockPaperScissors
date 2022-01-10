let cpuScore = 0;
let playerScore = 0;
function computerPlay()
{
	let x = Math.floor(Math.random()*3) + 1;
	switch (x)
	{
		case 1:
			return "rock";
			break;
		case 2:
			return "scissors";
			break;
		default:
			return "paper";
			break;
	}
}
function round(playerSelection, computerSelection)
{
	
	if(computerSelection.toLowerCase() == "rock")
	{
		switch(playerSelection.toLowerCase())
		{
			case "rock":
				console.log("It's a tie");
				break;
			case "paper":
				console.log("You Win!");
				playerScore++;
				break;
			case "scissors":
				console.log("You lose!");
				cpuScore++;
				break;
			default:
				break;
		}
	}
	else if(computerSelection.toLowerCase() == "paper")
	{
		switch(playerSelection.toLowerCase())
		{
			case "paper":
				console.log("It's a tie");
				break;
			case "scissors":
				console.log("You Win!");
				playerScore++;
				break;
			case "rock":
				console.log("You lose!");
				cpuScore++;
				break;
			default:
				break;
		}
	}
	else
	{
		switch(playerSelection.toLowerCase())
		{
			case "scissors":
				console.log("It's a tie");
				break;
			case "rock":
				console.log("You Win!");
				playerScore++;
				break;
			case "paper":
				console.log("You lose!");
				cpuScore++;
				break;
			default:
				break;
		}
	}
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener('click',() =>
	{
		round("rock",computerPlay());
	});
scissorsBtn.addEventListener('click',() =>
	{
		round("paper",computerPlay());
	});
paperBtn.addEventListener('click',() =>
	{
		round("scissors",computerPlay());
	});

const pScore = document.querySelector("#playerScore");
const cScore = document.querySelector("#cpuScore");
const globBtn = document.querySelectorAll('button');
globBtn.forEach((globBtn) => {
	globBtn.addEventListener('click',() =>	
	{
		pScore.textContent = playerScore.toString();
		cScore.textContent = cpuScore.toString();
		if(playerScore>=5)
		{
			alert("You WIN!!");
		}

		if(cpuScore>=5)
		{
			alert("You Lose!");
		}
		return;
	});
});
	

