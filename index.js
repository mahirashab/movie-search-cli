const reuest = require("request")
const cheerio = require("cheerio")
var Spinner = require("cli-spinner").Spinner

const questions = require("./src/inquirer")

questions.askMovieName().then(ans => {
    const url = `https://www.imdb.com/find?ref_=nv_sr_fn&q=${
        ans.movieName
    }&s=all`

    let obj = new Spinner("Getting movie names.. %s")
    obj.start()

    reuest(url, (err, res, body) => {
        obj.stop(true)
        const $ = cheerio.load(body)
        const data = $(".findSection")
            .first()
            .find(".findResult")
            .text()

        console.log(data)
    })
})

// var obj = new Spinner("processing.. %s")

// obj.start()

// if (keyWord) {
//     const url = `https://www.imdb.com/find?ref_=nv_sr_fn&q=${keyWord}&s=all`

//     reuest(url, (err, res, body) => {
//         const $ = cheerio.load(body)
//         const data = $(".findSection")
//             .first()
//             .find(".findResult")
//             .text()

//         console.log(data)
//     })
// }
