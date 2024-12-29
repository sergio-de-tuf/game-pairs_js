const game = document.getElementById("game");

function startGame(game, cardsCount) {
  const cardsNumberArray = [];
  let firstCard = null;
  let secondCard = null;

  for (let i = 1; i <= cardsCount; i++) {
    cardsNumberArray.push(i, i);
  }

  for (let i = 0; i < cardsNumberArray.length; i++) {
    let randomIndex = Math.floor(Math.random() * cardsNumberArray.length);

    let temp = cardsNumberArray[i];
    cardsNumberArray[i] = cardsNumberArray[randomIndex];
    cardsNumberArray[randomIndex] = temp;
  }

  for (const cardNumber of cardsNumberArray) {
    let card = document.createElement("div");
    card.textContent = cardNumber;
    card.classList.add("card");

    card.addEventListener("click", function () {
      if (
        card.classList.contains("open") ||
        card.classList.contains("success")
      ) {
        return;
      }
      if (firstCard !== null && secondCard !== null) {
        firstCard.classList.remove("open");
        secondCard.classList.remove("open");
        firstCard = null;
        secondCard = null;
      }

      card.classList.add("open");

      if (firstCard === null) {
        firstCard = card;
      } else {
        secondCard = card;
      }

      if (firstCard !== null && secondCard !== null) {
        let firstCardNumber = firstCard.textContent;
        let secondCardNumber = secondCard.textContent;

        if (firstCardNumber === secondCardNumber) {
          firstCard.classList.add("success");
          secondCard.classList.add("success");
        }
      }
    });

    game.append(card);
  }
}

let cardsCount = Number(prompt("Enter number of pairs", 4));
startGame(game, cardsCount);
