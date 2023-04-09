const express = require('express');
const accountCntrl = require("../controllers/account");

const router = express.Router();
router.use(express.json());


router.get("/account/add", accountCntrl.account_create_get);
router.post("/account/add", accountCntrl.account_create_post);

router.get("/account/index", accountCntrl.account_index_get);
router.get("/account/detail", accountCntrl.account_detail_get);

router.delete("/account/delete", accountCntrl.account_delete_get);

router.get("/account/edit", accountCntrl.account_edit_get);
router.put("/account/update", accountCntrl.account_edit_put);

module.exports = router;
