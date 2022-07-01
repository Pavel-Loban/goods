const db = require('../db')

class GoodsController {
    async creatGood(req, res){
        const {title, img_src, price, more_image} = req.body
        const newGood = await db.query(`INSERT INTO good (title, img_src, price, more_image) VALUES ($1, $2, $3, $4) RETURNING *`, [title, img_src, price, more_image])
        res.json(newGood.rows[0])

    }

    async getGoods(req, res){
        const goods = await db.query(`SELECT * FROM good`)
        res.json(goods.rows)

    }

    async getOneGood(req, res){
        const id = req.params.id
        const good = await db.query(`SELECT * FROM good WHERE id=$1`, [id])
        res.json(good.rows[0])

    }

    async updateGood(req, res){
        const { title, img_src, price, more_image, id} = req.body
        const good = await db.query(`UPDATE good SET title= $1, img_src=$2, price=$3, more_image=$4 WHERE id = $5 RETURNING *`, [title, img_src, price, more_image, id])
        res.json(good.rows[0])

    }

    async deleteGood(req, res){
        const id = req.params.id
        const good = await db.query(`DELETE FROM good WHERE id=$1`, [id])
        res.json(good.rows[0])
    }
}

module.exports = new GoodsController();

