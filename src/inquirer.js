const inquire = require("inquirer")

module.exports.askMovieName = () => {
    const questions = {
        name: "movieName",
        type: "input",
        message: "Please enter movie name: ",
        validate: answer => {
            if (answer.length <= 0) {
                return "Please enter a valid name."
            } else {
                return true
            }
        }
    }
    return inquire.prompt(questions)
}
