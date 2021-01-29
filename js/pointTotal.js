var exes = Array.from(document.getElementsByClassName("exercise"))
var points = exes.map(ex => {
    let customized = Array.from(ex.children).filter(child => child.getAttribute("data-carnap-points"))
    if (customized.length == 0) return 5
    else return Number(customized[0].getAttribute("data-carnap-points"))
}).reduce((a,b) => {return a + b})

try {
    let pointspans = document.getElementsByClassName("pointspan")
    Array.from(pointspans).forEach(x => {x.innerHTML = points})
} catch (e) {
    console.log("using pointTotal.js requires an element with the class 'pointspan'")
}
