const express = require('express');
const router = express.Router();
const AdminNotices = require('../controllers/adminNotices.controller');
const adminNotices = new AdminNotices();
// auth-middleware incomplete stage
// admin-middleware incomplete stage

router.post('/adminNotices', adminNotices.createAdminNotice.bind(adminNotices));

router.get('/adminNotices', adminNotices.getAdminNotices.bind(adminNotices));

router.get('/adminNotices/:id', adminNotices.getAdminNotice.bind(adminNotices));

router.patch('/adminNotices/:id', adminNotices.updateAdminNotice.bind(adminNotices));

module.exports = router;
