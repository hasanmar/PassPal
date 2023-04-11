const Account = require('../models/Accounts')
const History = require('../models/History')

exports.account_index_get = async (req, res) => {
    try {
        const accounts = await Account.find()
        res.json({ accounts })
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

exports.account_create_get = (req, res) => {
    res.render('account/add')
}

exports.account_create_post = async (req, res) => {

    console.log(req.body);
    const account = new Account(req.body)
    try {
        const newAccount = await account.save()
        res.status(201).json({ newAccount })
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }

}

exports.account_detail_get = async (req, res) => {
    try {
        const account = await Account.findById(req.query.id)
        if (account == null) {
            res.status(404).json({ message: 'Account not found' })
        }
        else {
            res.status(201).json({ account })
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}


exports.account_delete_get = async (req, res) => {
    Account.findByIdAndDelete(req.query.id)
    .then(acc=>res.json({acc}))
    .catch(err =>console.log(err))
}

exports.account_edit_get = async (req, res) => {
    try {
        const account = await Account.findById(req.query.id)
        if (account == null) {
            res.status(404).json({ message: 'Account not found' })
        }
        else {
            res.status(201).json({ account })
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }

}

exports.account_edit_put = (req, res) => {
    Account.findById(req.body._id)
        .then((account) => {
            // res.redirect("/account/index");
            const saveToHistory = new History({
                website: account.website,
                username: account.username,
                emailAddress: account.emailAddress,
                password: account.password,
                user_id: account.user_id
            })
            console.log('saveToHistory', saveToHistory);
            saveToHistory.save()
            account.website = req.body.website
            account.username = req.body.username
            account.emailAddress = req.body.emailAddress
            account.password = req.body.password
            account.save()
            res.json({ account })
        })
        .catch(err => {
            console.log(err)
        });
}