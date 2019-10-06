/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function () {
	var output = [];
	var player;
	var R1 = "R";
	var R2 = "P";
	var R3 = "S";
	var round = [R1, R2, R3];
	//for (i=0; )
		// Number of possibilities = 3*3*3 = 27,
	// each time fixing two rounds and change the third one ,
	//tell all the possibilities finished
		return "" + R1 + R2 + R3 + "";

	return output.puch(round);
  // TODO: your solution here
};
