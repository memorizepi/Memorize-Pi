const arr = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116093305727036575959195309218611738193261179310511854807446237996274956735188575272489122793818301194912983367336244065664308602139494639522473719070217986094370277053921717629317675238467481846766940513000568127145263560827785771342757789609173637178721468440901224953430146549585371050792279689258923420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989"
const arrDigits = arr.split("");
var digits = 0
var wyg = ""
var correct = 0
var incorrect = 0
var skipped = 0
var atleastihavethis = 8
var addi = 0
var colors = []
var lostelems = []
const divs = document.getElementById("output")
const pad = document.getElementById("numberPad")
const pop = document.getElementById("popup")
const score = document.getElementById("score")
function func(num) {
  if (arr[digits] == num) {
    if (digits > 6+addi) {
      divs.removeChild(divs.firstElementChild)
    }
    divs.innerHTML += "<h1 style='font-size:35px' class='green'>" + num + "</h1>"
    digits++
    correct++
    score.innerHTML = "digits: " + digits
    wyg = wyg + String(num)
    console.log(wyg.length)
    console.log("correct: " + correct)
    document.getElementById("corr").innerHTML = "Correct digits: " + correct
    colors.push("green")
  } else {
    if (digits > 6+addi) {
      divs.removeChild(divs.firstElementChild)
    }
    divs.innerHTML += "<h1 style='font-size:35px' class='red'>" + arr[digits] + "</h1>"
    digits++
    incorrect++
    score.innerHTML = "digits: " + digits
    document.getElementById("inco").innerHTML = "Incorrect digits: " + incorrect
    wyg = wyg + String(num)
    console.log(wyg.length)

    colors.push("red")
  }
}
function skip() {
  if (digits > 6+addi) {
    divs.removeChild(divs.firstElementChild)
  }
  divs.innerHTML += "<h1 style='font-size:35px' class='yellow'>" + arr[digits] + "</h1>"
  digits++
  skipped++
  score.innerHTML = "digits: " + digits
  document.getElementById("skip").innerHTML = "Skipped digits: " + skipped
  wyg = wyg + String(arr[digits])
  console.log(wyg.length)
  colors.push("yellow")
}
function back() {
  divs.innerHTML = ""
  digits = 0
  correct = 0
  incorrect = 0
  skipped = 0
  document.getElementById("corr").innerHTML = "Correct digits: " + correct
  document.getElementById("inco").innerHTML = "Incorrect digits: " + incorrect
  document.getElementById("skip").innerHTML = "Skipped digits: " + skipped
  score.innerHTML = "digits: " + digits
  if(digits >= 8){
  addi = 1
} else {
  addi = 0
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

