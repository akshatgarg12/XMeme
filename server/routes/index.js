const router = require('express').Router()
const memeController = require('../controllers/memeController')

/* /memes route will handle the API calls from the client regarding the creation
and reading of memes */

router.route('/memes')
      .get(memeController.READ)
      .post(memeController.CREATE)

router.patch('/memes/:_id', memeController.UPDATE)

module.exports = router