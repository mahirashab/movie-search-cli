const questions = require("./lib/inquirer")
const requests = require("./lib/requests")

questions.ask().then(ans => {
    console.log("            ")

    if (ans.how === "Search by keyword ?") {
        requests.byKeyword(ans.movieName)
    } else if (ans.how === "Search by name ?") {
        requests.byName(ans.movieName)
    }
})
