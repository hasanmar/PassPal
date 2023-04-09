const express = require('express');
const historyCntrl = require("../controllers/history");

const router = express.Router();
router.use(express.json());


router.get("/history", historyCntrl.history_get);
router.delete("/history/delete/:id", historyCntrl.history_delete_get);

module.exports = router;
