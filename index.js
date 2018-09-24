const reuest = require("request")
const cheerio = require("cheerio")
const Spinner = require("cli-spinner").Spinner

const questions = require("./src/inquirer")

questions.ask().then(ans => {
    console.log("            ")

    let url = ""

    const obj = new Spinner("processing.. %s")
    obj.setSpinnerString(18)
    obj.start()

    if (ans.how === "search by keyword ?") {
        url = `https://www.imdb.com/search/keyword?keywords=${
            ans.movieName
        }&mode=detail&page=1&ref_=kw_ref_key&sort=moviemeter`
    }

    console.log(url)

    reuest(url, (err, res, body) => {
        const $ = cheerio.load(body)
        obj.stop(true)
        const data = $(".mode-detail")
        // .find(".lister-item-header")
        // .text()

        console.log("            ")
        console.log("data: " + data)
    })
})
