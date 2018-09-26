const questions = require("./lib/inquirer")
const requests = require("./lib/requests")
const yargs = require("yargs")

const argv = yargs.usage("Usage: $0 -way [string]").demandOption(["way"]).argv

if (argv.way == "name") {
    questions.getByName().then(ans => {
        console.log("                 ")
        if (ans.begin === "y" || ans.begin === "yes") {
            requests.byName(ans.name)
        } else {
            console.log("                 ")
            console.log("Bye bye!!!!!!!!")
        }
    })
}

if (argv.way == "keyword") {
    questions.getByKeyword().then(ans => {
        console.log("                 ")
        if (ans.begin === "y" || ans.begin === "yes") {
            requests.byKeyword(ans.keyword)
        } else {
            console.log("                 ")
            console.log("Bye bye!!!!!!!!")
        }
    })
}
