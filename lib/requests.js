const reuest = require("request")
const cheerio = require("cheerio")
const urlencode = require("urlencode")

const Spinner = require("cli-spinner").Spinner

module.exports.byKeyword = keyword => {
    const obj = new Spinner("processing.. %s")
    obj.setSpinnerString(18)
    obj.start()

    const url = `https://www.imdb.com/search/keyword?keywords=${keyword}&mode=detail&page=1&ref_=kw_ref_key&sort=moviemeter`

    reuest(url, (err, res, body) => {
        const $ = cheerio.load(body)
        obj.stop(true)
        const data = $(".mode-detail")
            .find(".lister-item-content")
            .find(".lister-item-header")
            .find("a")
            .map((i, elm) => `${i}. ` + $(elm).text())
            .toArray()

        data.map(elm => {
            console.log(elm)
            console.log("             ")
        })
    })
}

module.exports.byName = name => {
    const obj = new Spinner("processing.. %s")
    obj.setSpinnerString(18)
    obj.start()

    name = name.replace(" ", "+")

    const url = `https://www.imdb.com/find?ref_=nv_sr_fn&q=${name}&s=tt`

    reuest(url, (err, res, body) => {
        const $ = cheerio.load(body)
        obj.stop(true)
        const data = $(".findResult")
            .find(".result_text")
            .find("a")
            .map((i, elm) => `${i}. ` + $(elm).text())
            .toArray()

        data.map(elm => {
            console.log(elm)
            console.log("             ")
        })
    })
}