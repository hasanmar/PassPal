const Account = require('../models/Account')

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
    try {

    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }

}

exports.account_detail_get = async (req, res) => {
    try {

    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }

}

exports.account_delete_get = async (req, res) => {
    try {

    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }

}

exports.account_edit_get = async (req, res) => {
    try {

    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }

}

exports.account_edit_put = async (req, res) => {
    try {

    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }

}