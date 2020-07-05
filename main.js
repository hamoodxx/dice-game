//the variabels
var scores,activPlayer,gamePlaying,rollGame;
function refreshGame (){
    scores = [0,0];
    activPlayer = 0;
    gamePlaying = true;
    rollGame = 0;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.getElementById('name-0').textContent = 'player 1';
    document.getElementById('name-1').textContent = 'player 2';
    document.querySelector('.player-0-panel').classList.remove('winner!');
    document.querySelector('.player-1-panel').classList.remove('winner!');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');


    document.querySelector('.dice').style.display = 'none';
}
refreshGame();
document.querySelector('.btn-new').addEventListener('click',refreshGame);

//math operation

document.querySelector('.btn-roll').addEventListener('click',function (){
    if (gamePlaying) {
        var dice1 = Math.floor(Math.random() * 6) + 1;
        document.querySelector('.dice').style.display = 'block';
        document.querySelector('.dice').src = 'images/dice-'+ dice1+'.png';
        if (dice1 !== 1) {

            rollGame += dice1;
        document.querySelector('#current-' + activPlayer).textContent = rollGame;
        }else {
            nextPlayr();
            //nextPlayr
        }
    }
});
//the winner function
document.querySelector('.btn-hold').addEventListener('click',function () {

    scores[activPlayer] += rollGame;
    var getValue = document.querySelector('.max-score').value;
    document.getElementById('score-' + activPlayer).textContent = scores[activPlayer];
    if (scores[activPlayer] >= getValue) {
        document.getElementById('name-' + activPlayer).textContent = 'winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activPlayer + 'panel').classList.add('winner!');
        document.querySelector('.player-' + activPlayer + 'panel').classList.remove('active');
        gamePlaying = false;
        

    }else {
        nextPlayr();
    }

});

//nwxtplayer function

function nextPlayr () {
    activPlayer === 0 ? activPlayer = 1 : activPlayer = 0;
    rollGame = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    //the dice images
    document.querySelector('.dice').style.display = 'none';
}