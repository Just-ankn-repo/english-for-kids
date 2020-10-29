export default function categories(_data) {
  let end = '';
  if (_data === 0) {
    end = 'Congrats, you win!';
  } else {
    end = `Sorry, you lose.\n Incorrect answers: ${_data}`;
  }
  return `
    <div class="end-game__container">
      <img class="end-game__picture" src="./assets/img/${_data === 0}-end-game.png"></img>
      <p class="end-game__fail-rate">${end}</p>
    </div>
  `;
}
