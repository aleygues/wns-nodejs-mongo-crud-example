const express = require('express');
const WilderController = require('./../controllers/Wilders');
const helpers = require('./../helpers');
const router = express.Router();

router.post('/', helpers.handleAsyncError(WilderController.create));
router.get('/', helpers.handleAsyncError(WilderController.read));
//router.get('/:wilderId', helpers.handleAsyncError(WilderController.readOne));
router.patch('/:wilderId', helpers.handleAsyncError(WilderController.update));
//router.put('/:wilderId', helpers.handleAsyncError(WilderController.updateWhole));
//router.delete('/:wilderId', helpers.handleAsyncError(WilderController.delete));

//router.get('/search/', helpers.handleAsyncError(WilderController.search));
//router.post('/searches/', helpers.handleAsyncError(WilderController.search));

module.exports = router;