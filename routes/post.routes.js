const Router = require('express')
const router = new Router
const PostController  = require('../controller/post.controller')

router.post('/messages', PostController.createPost)
router.get('/messages', PostController.getPostsByUser)
router.get('/messages/:id', PostController.getOnePost)

module.exports = router

