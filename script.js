function checkAnswer() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    const userAnswer = parseFloat(document.getElementById("userAnswer").value);

    let correctAnswer;

    switch (operation) {
      case "add":
        correctAnswer = num1 + num2;
        break;
      case "subtract":
        correctAnswer = num1 - num2;
        break;
      case "multiply":
        correctAnswer = num1 * num2;
        break;
      case "divide":
        correctAnswer = num1 / num2;
        break;
      default:
        break;
    }

    const resultElement = document.getElementById("result");

    if (userAnswer === correctAnswer) {
      resultElement.textContent = "🎉 તમારો જવાબ સાચો છે.";
    } else {
      resultElement.textContent = "😔 તમારો જવાબ સાચો નથી.";
    }
  }