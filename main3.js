const arr = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116093305727036575959195309218611738193261179310511854807446237996274956735188575272489122793818301194912983367336244065664308602139494639522473719070217986094370277053921717629317675238467481846766940513000568127145263560827785771342757789609173637178721468440901224953430146549585371050792279689258923420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989"
var digits = 0
var wyg = ""
var correct = 0
var incorrect = 0
var skipped = 0
var colors = []
var lostelems = []
const divs = document.getElementById("output")
const pad = document.getElementById("numberPad")
const pop = document.getElementById("popup")
const score = document.getElementById("score")
function func(num){
    if(arr[digits] == num){
        divs.innerHTML += "<h1 style='font-size:35px' class='green'>"+num+"</h1>"
        digits++
        correct++
        score.innerHTML = "digits: " + digits
        wyg = wyg + String(num)
        console.log(wyg.length)
        if(wyg.length > 9){
            var lost = divs.firstChild
            divs.removeChild(divs.firstElementChild)
            lostelems.push(lost)
            console.log(lostelems)
        }
        console.log("correct: "+ correct)
        document.getElementById("corr").innerHTML = "Correct digits: "+correct
        colors.push("green")
    } else {
        divs.innerHTML += "<h1 style='font-size:35px' class='red'>"+arr[digits]+"</h1>"
        digits++
        incorrect++
        score.innerHTML = "digits: " + digits
        document.getElementById("inco").innerHTML = "Incorrect digits: "+incorrect
        wyg = wyg + String(num)
        console.log(wyg.length)
        if(wyg.length > 9){
            divs.removeChild(divs.firstElementChild)
        }
        colors.push("red")
    }
}
function skip(){
    divs.innerHTML += "<h1 style='font-size:35px' class='yellow'>"+arr[digits]+"</h1>"
    digits++
    skipped++
    score.innerHTML = "digits: " + digits
    document.getElementById("skip").innerHTML = "Skipped digits: "+skipped
    wyg = wyg + String(arr[digits])
    console.log(wyg.length)
    if(wyg.length > 9){
        divs.removeChild(divs.firstElementChild)
    }
    colors.push("yellow")
}
function back() {
    divs.removeChild(divs.lastElementChild);
    digits--;
    wyg = wyg.slice(0, wyg.length - 1);
    console.log(wyg);
    score.innerHTML = "digits: " + digits;
    if (colors[digits] == "green") {
      correct--;
      document.getElementById("corr").innerHTML = "Correct digits: " + correct;
    } else if (colors[digits] == "red") {
      incorrect--;
      document.getElementById("inco").innerHTML = "Incorrect digits: " + incorrect;
    } else if (colors[digits] == "yellow") {
      skipped--;
      document.getElementById("skip").innerHTML = "Skipped digits: " + skipped;
    }
    colors.pop();
    if (wyg.length > 9) {
      var lostChild = divs.firstElementChild;
      lostelems.push(lostChild);
      divs.removeChild(lostChild);
      var newChild = lostelems[lostelems.length - 1];
      divs.insertBefore(newChild, divs.firstElementChild);
    }
  }

