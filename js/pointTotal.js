var exes = Array.from(document.getElementsByClassName("exercise"))
var points = exes.map(ex => {
    let kids = Array.from(ex.children)
    let submissible = kids.filter(child => child.hasAttribute("data-carnap-submission"))
    if (submissible.length == 0) return 0
    if (submissible[0].getAttribute("data-carnap-submission").substr(0,6) != "saveAs") return 0
    let customized = kids.filter(child => child.hasAttribute("data-carnap-points"))
    if (customized.length == 0) return 5
    else return Number(customized[0].getAttribute("data-carnap-points"))
}).reduce((a,b) => {return a + b})

try {
    let pointspans = document.getElementsByClassName("pointspan")
    Array.from(pointspans).forEach(x => {x.innerHTML = points})
} catch (e) {
    console.log("using pointTotal.js requires an element with the class 'pointspan'")
}
