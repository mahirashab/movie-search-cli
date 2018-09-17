const reuest = require("request")
const cheerio = require("cheerio")
const yargs = require("yargs")

const argv = yargs.argv

const keyWord = argv.title

if (keyWord) {
    const url = `https://www.imdb.com/find?ref_=nv_sr_fn&q=${keyWord}&s=all`

    reuest(url, (err, res, body) => {
        const $ = cheerio.load(body)
        const data = $(".findSection")
            .first()
            .find(".findResult")
            .text()

        console.log(data)
    })
}
