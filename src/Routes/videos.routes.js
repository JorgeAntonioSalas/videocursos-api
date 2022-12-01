const { Router } = require('express');
const router = Router();
const videosControllers = require('../Controllers/videos.controllers');

router.post('/videos/', videosControllers.create);
router.get('/videos/', videosControllers.getAll);
router.delete('/videos/:video_id', videosControllers.delete);

module.exports = router;