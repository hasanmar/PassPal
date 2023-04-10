const History = require('../models/History')

exports.history_get = (req, res) => {
    console.log(req.query);
    History.find(user_id = req.query.id)
        .then(accounts => {
            res.json({ accounts })
            // res.render('history/index', { accounts })
        })
        .catch(
            err => console.log(err)
        )
    // res.send('history')
}

exports.history_delete_get = (req, res) => {
    History.findByIdAndDelete(req.query.id)
        .then(account => {
            res.json({ account })
        })
        .catch(err => console.log(err))
}