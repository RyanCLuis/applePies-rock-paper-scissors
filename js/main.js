/*------ plan of action ------ */
// Identify and initialze our state variables
// (these are out constants and our lets pertaining to the state of our game)
// (usually, they are the initial starting points of out elements)
// (out starting values)

// Code the main render() function & our renderResults()
// (these are controllers that update the view based on user input)

// code the click event listener
// code the win logic
// update out renderResults after we have win logic(to add a border to a winner)

// code a countdown timer
// want to add some Audio to the countdown to improve urser experience

/*------ constants ------ */

// list of choices
const RPS_LOOKUPS = {
    r: {img: 'imgs/rock.png', beats: 's'}
    p: {img: 'imgs/paper.png', beats: 'r'}
    s: {img: 'imgs/sissors.png', beats: 'p'}
}

/*------ cashed elements references ------ */
const pResultEl = document.getElementById('p-result')
const cResultEl = document.getElementById('c-result')

const countdownEl = document.getElementById('countdown')

/*------ App's initial state variables ------ */
// some things will change as the game proceeds
let scores

let results

let winner
/*------ functions ------ */

/*------ event listeners ------ */