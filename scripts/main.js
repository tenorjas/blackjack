/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

function handValue(hand) {
  let numCards = hand.length;
  let sum = 0;
  var cardValue;
  var numAces = 0;

  for (var i = 0; i < numCards; i++) {
    if (hand[i] === "A") {
      cardValue = 11;
      numAces++;
    } else if (hand[i] === "K" || hand[i] === "Q" || hand[i] === "J") {
      cardValue = 10;
    } else {
      cardValue = Number(hand[i]);
    } // end of if-else
    sum += cardValue;
  } // end of for loop

  if (sum > 21 && numAces > 0) {
    sum = sum - 10 * numAces;
  }
  /*  if (sum > 21) {
    for (var j = 0; j < numCards; j++) {
      if (hand[i] === "A") {
        sum -= 10;
      }
    }
  }*/
  return sum;
} // end of the function

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
