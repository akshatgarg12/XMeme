const router = require('express').Router()
const memeController = require('../controllers/memeController')
const Meme = require('../models/meme')

/* /memes route will handle the API calls from the client regarding the creation
and reading of memes */

router.route('/memes')
      .get(memeController.READ)
      .post(memeController.CREATE)


router.route('/memes/:_id')
      .patch(memeController.UPDATE)
      .get(memeController.READ)


module.exports = router