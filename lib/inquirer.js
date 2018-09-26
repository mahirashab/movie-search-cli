const inquire = require("inquirer")
const color = require("colors")

module.exports.getByName = () => {
    const questions = [
        {
            name: "name",
            type: "input",
            message: "Enter movie name:::".italic.bgWhite.black.reset,
            validate: answer => {
                if (answer.length <= 0) {
                    return "Please enter a name."
                } else {
                    return true
                }
            }
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

module.exports.getByKeyword = () => {
    const questions = [
        {
            name: "keyword",
            type: "input",
            message: "Enter movie keyword:::".italic.bgWhite.black.reset,
            validate: answer => {
                if (answer.length <= 0) {
                    return "Please enter a name."
                } else {
                    return true
                }
            }
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
