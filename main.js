let score = 0;
let team1 = "patriots";
let team2 = "niners";

function scoreUp() {
  score++;

  if (score == 5) {
    document.getElementById("score-goal").innerHTML =
      '<img src="..//images/classic_kirby_3d_model_by_milesgamesda_deud7pd-fullview.png" alt=""></img>';
    document.getElementById("score-board").innerText = "you scored 5";
  }

  if (score == 10) {
    document.getElementById("score-goal").innerHTML =
      '<img src="..//images/kirby.png" alt="">';
    document.getElementById("score-board").innerText = "you scored 10";
  }
  drawscore();
}
function scoreDown() {
  score--;

  if (score == -5) {
    document.getElementById("score-goal").innerText = ":(";
    document.getElementById("score-board").innerText = ":(";
  }
  if (score == -10) {
    document.getElementById("score-goal").innerText = ":((";
    document.getElementById("score-board").innerText = ":((";
  }
  drawscore();
}

function drawscore() {
  if (score <= 0) {
    document.getElementById("score-display").innerText = score;
  }
  if (score >= 0) {
    document.getElementById("score-display").innerText = score;
  }
  console.log(score);
}
