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
        const account = await Account.findById(req.params.id)
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
    try {

        const account = await Account.findByIdAndDelete(req.params.id)
        res.json(account)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }

}

exports.account_edit_get = async (req, res) => {
    try {
        const account = await Account.findById(req.params.id)
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

exports.account_edit_put = async (req, res) => {
    try {
        const account = await Account.findByIdAndUpdate(req.body._id, req.body, { new: true })
        const oldAccount = await Account.findById(req.body._id)
        if (account == null) {
            res.status(404).json({ message: 'Account not found' })
        }
        else {
            const saveOldAccount = new History(oldAccount)
            saveOldAccount.save()
            account.save()
            res.status(200)
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }

}