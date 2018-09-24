const inquire = require("inquirer")
const color = require("colors")

module.exports.ask = async () => {
    const questions = [
        {
            name: "movieName",
            type: "input",
            message: "Please enter movie name or keyword: ".italic.white.reset,
            validate: answer => {
                if (answer.length <= 0) {
                    return "Please enter a valid name."
                } else {
                    return true
                }
            }
        },
        {
            name: "how",
            type: "list",
            message: "Please choose one option".italic.white.reset,
            choices: ["Search by name ?", "search by keyword ?"]
        },
        {
            name: "begin",
            type: "choose",
            message: "Begin search? (y/n)".italic.white.reset,
            default: "y"
        }
    ]

    return inquire.prompt(questions)
}
