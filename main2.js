const arr = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116093305727036575959195309218611738193261179310511854807446237996274956735188575272489122793818301194912983367336244065664308602139494639522473719070217986094370277053921717629317675238467481846766940513000568127145263560827785771342757789609173637178721468440901224953430146549585371050792279689258923420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989"
var score = 0
var ct20 = 1
var wyg = ""
var lives = 3
const livess = document.getElementById("lives")
const divs = document.getElementById("output")
const pad = document.getElementById("numberPad")
const pop = document.getElementById("popup")
livess.innerHTML = "lives: " + lives
function func(num){
  if(lives > 0){
    if(arr[score] == num){
        divs.innerHTML += "<h1 style='font-size:35px'>"+num+"</h1>"
        score++
        wyg = wyg + String(num)
        console.log(wyg.length)
        if(wyg.length > 9){
            divs.removeChild(divs.firstElementChild)
        }
        document.getElementById("score").innerHTML = "score: "+score
        if((score == ct20*20) && (lives<3)){
          lives++
          ct20++
          livess.innerHTML = "lives: " + lives
          divs.classList.add("animd")
          setTimeout(function(){
            divs.classList.remove("animd")
          }, 1000)
        } else if(score == ct20*20){
          ct20++
          livess.innerHTML = "lives: " + lives
          divs.classList.add("animd")
          setTimeout(function(){
            divs.classList.remove("animd")
          }, 1000)
        }
    } else {
        lives--
        livess.innerHTML = "lives: " + lives
        divs.classList.add("lose")
        setTimeout(function(){
          divs.classList.remove("lose")
        }, 1000)
        if(lives == 0){
            document.getElementById("spore").innerHTML = "you memorized "+score+" digits of pi"
            divs.innerHTML = ""
            score = 0
            wyg = ""
            document.getElementById("score").innerHTML = "score: "+ score
            popup()
            livess.innerHTML = "lives: "+lives
        }
    }
  }
}
function popup(){
  pop.style.display = "block"
}

function disapear(){
  pop.style.display = "none"
  lives = 3
  livess.innerHTML = "lives: "+lives
}
