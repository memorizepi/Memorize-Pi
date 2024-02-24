const arr = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116093305727036575959195309218611738193261179310511854807446237996274956735188575272489122793818301194912983367336244065664308602139494639522473719070217986094370277053921717629317675238467481846766940513000568127145263560827785771342757789609173637178721468440901224953430146549585371050792279689258923420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989";
var score = 0;
var ct20 = 1;
var wyg = "";
var lives = 0;
var time = 0;
var wayOfLoss = "";
localStorage.setItem("highscore", 0)
var highscore = localStorage.getItem("highscore")
const livess = document.getElementById("lives");
const divs = document.getElementById("output");
const pad = document.getElementById("numberPad");
const pop = document.getElementById("popup");
const times = document.getElementById("time");
livess.innerHTML = "lives: " + lives;
document.getElementById("score").innerHTML = "score: " + score;
var active = false

function func(num) {
  if (lives > 0) {
    if (arr[score] == num) {
      console.log("ct20 " + ct20);
      console.log("score " + score);
      divs.innerHTML += "<h1 style='font-size:35px'>" + num + "</h1>";
      score++;
      wyg = wyg + String(num);
      console.log(wyg.length);
      if (wyg.length > 8) {
        divs.removeChild(divs.firstElementChild);
      }
      document.getElementById("score").innerHTML = "score: " + score;
      console.log("score ct20 is: " + (score == ct20 * 20));
      console.log("lives < 3? " + (lives < 3));
      if ((score == ct20 * 20) && (lives < 3)) {
        lives++;
        ct20++;
        livess.innerHTML = "lives: " + lives;
        divs.classList.add("animd");
        setTimeout(function() {
          divs.classList.remove("animd");
        }, 1000);
        time = 200;
      } else if (score == ct20 * 20) {
        ct20++;
        livess.innerHTML = "lives: " + lives;
        divs.classList.add("animd");
        setTimeout(function() {
          divs.classList.remove("animd");
        }, 1000);
        time = 200;
      }
    } else {
      lives--;
      livess.innerHTML = "lives: " + lives;
      divs.classList.add("lose");
      setTimeout(function() {
        divs.classList.remove("lose");
      }, 1000);
      if (lives == 0) {
        document.getElementById("spore").innerHTML = "you memorized " + score + " digits of pi";
        divs.innerHTML = "";
        score = 0;
        wyg = "";
        document.getElementById("score").innerHTML = "score: " + score;
        popup();
        livess.innerHTML = "lives: " + lives;
        time = 1;
        times.innerHTML = time
        wayOfLoss += "lives";
      }
    }
  }
}

function popup() {
  active = false
  pop.style.display = "block";
  console.log(arr[score + 1])
  localStorage.setItem("highscore", score)
  highscore = localStorage.getItem("highscore")
  document.getElementById("hscore").innerHTML = "highscore: " + highscore
}

function disapear() {
  if (active == false) {
    active = true
    pop.style.display = "none";
    document.getElementById("a1").style.display = "block";
    document.getElementById("a1").classList.add("started");
    setTimeout(function() {
      document.getElementById("a1").classList.remove("started");
      document.getElementById("a1").style.display = "none";
      document.getElementById("a2").style.display = "block";
      document.getElementById("a2").classList.add("started");
      setTimeout(function() {
        document.getElementById("a2").classList.remove("started");
        document.getElementById("a2").style.display = "none";
        document.getElementById("a3").style.display = "block";
        document.getElementById("a3").classList.add("started");
        setTimeout(function() {
          document.getElementById("a3").classList.remove("started");
          document.getElementById("a3").style.display = "none";
          document.getElementById("a4").style.display = "block";
          document.getElementById("a4").classList.add("started");
          setTimeout(function() {
            document.getElementById("a4").classList.remove("started");
            document.getElementById("a4").style.display = "none";
            wyg = "";
            lives = 3;
            livess.innerHTML = "lives: " + lives;
            time = 200;
            times.innerHTML = "time: " + time / 10;
            interval = setInterval(function() {
              if (time >= 0) {
                time--;
              }
              times.innerHTML = "time: " + time / 10;
              if (time === 0) {
                wayOfLoss += "time";
                clearInterval(interval);
                if (wayOfLoss == "time") {
                  lives = 0;
                  divs.innerHTML = "";
                  livess.innerHTML = "lives: " + lives;
                  document.getElementById("spore").innerHTML = "you memorized " + score + " digits of pi";
                  popup();
                  score = 0;
                  document.getElementById("score").innerHTML = "score: " + score;
                }
              }
              wayOfLoss = "";
            }, 100);
            ct20 = 1;
          }, 900);
        }, 900);
      }, 900);
    }, 900);
  }
}

window.addEventListener("keydown", mykeydown);

function mykeydown(e) {
  keyPressed = e.keyCode;
  console.log("key: " + keyPressed);
  if (keyPressed == "49") {
    func("1")
  }
  if (keyPressed == "50") {
    func("2")
  }
  if (keyPressed == "51") {
    func("3")
  }
  if (keyPressed == "52") {
    func("4")
  }
  if (keyPressed == "53") {
    func("5")
  }
  if (keyPressed == "54") {
    func("6")
  }
  if (keyPressed == "55") {
    func("7")
  }
  if (keyPressed == "56") {
    func("8")
  }
  if (keyPressed == "57") {
    func("9")
  }
  if (keyPressed == "48") {
    func("0")
  }
  if (keyPressed == "190") {
    func(".")
  }
}

