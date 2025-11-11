const chalk = require('chalk');
const io = require('console-read-write');

async function main() {

    console.log(chalk.blue('Welcome to Rock-Paper-Scissors Game!'));

    io.write(chalk.green('Please enter your choice (rock, paper, scissors): '));
    
    const userInput = await io.read('');
    const userChoice = userInput.trim().toLowerCase();

    const choices = ['rock', 'paper', 'scissors'];
    if (!choices.includes(userChoice)) {
        console.log(chalk.red('Invalid choice! Please choose rock, paper, or scissors.'));
        return;
    }

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(chalk.yellow(`Computer chose: ${computerChoice}`));

    if (userChoice === computerChoice) {
        console.log(chalk.green('It\'s a tie!'));
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log(chalk.green('You win!'));
    } else {
        console.log(chalk.red('You lose!'));
    }

}

main();
