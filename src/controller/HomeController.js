const getHomePage = (req, res) => {
    res.send('Hello World zxczcdfggwrew fuk nodemon!')
}

const getSamplePage = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomePage,
    getSamplePage
}