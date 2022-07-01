const Router = require('express')
const router  = new Router()
const GoodsController = require('../controller/user.controller')

router.post('/good', GoodsController.creatGood)
router.get('/good', GoodsController.getGoods)
router.get('/good/:id', GoodsController.getOneGood)
router.put('/good/', GoodsController.updateGood)
router.delete('/good/:id', GoodsController.deleteGood)


module.exports = router