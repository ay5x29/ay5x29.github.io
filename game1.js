let secretNumber = Math.floor(Math.random() * 100) + 1;
let guessesRemaining = 10;

function checkGuess() {
    let guessInput = document.getElementById('guessInput');
    let guess = Number(guessInput.value);
    let feedback = document.getElementById('feedback');

    if (guess < 1 || guess > 100) {
        feedback.textContent = '请输入一个1到100之间的数字。';
        return;
    }

    guessesRemaining -= 1;

    if (guess === secretNumber) {
        feedback.textContent = `恭喜你！答对了。数字是${secretNumber}。`;
        endGame();
    } else if (guessesRemaining === 0) {
        feedback.textContent = `游戏结束。正确答案是${secretNumber}。`;
        endGame();
    } else if (guess < secretNumber) {
        feedback.textContent = '太低了。';
    } else if (guess > secretNumber) {
        feedback.textContent = '太高了。';
    }

    feedback.textContent += ` 你还有${guessesRemaining}次猜测机会。`;
}

function endGame() {
    document.getElementById('guessInput').disabled = true;
    document.getElementById('feedback').textContent += ' 游戏已结束，请刷新页面重新开始。';
}
