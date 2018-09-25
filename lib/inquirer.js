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
            choices: ["Search by name ?", "Search by keyword ?"]
        },
        {
            name: "begin",
            type: "choose",
            message: "Begin search? (y/n)".italic.white.reset,
            default: "y",
            validate: answer => {
                if (
                    !(
                        answer == "y" ||
                        answer == "yes" ||
                        answer == "n" ||
                        answer == "no"
                    )
                ) {
                    return "Please enter y or yes or n or no"
                } else {
                    return true
                }
            }
        }
    ]

    return inquire.prompt(questions)
}
