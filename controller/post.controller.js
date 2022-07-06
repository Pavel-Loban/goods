const db = require('../db');
class PostController{

    async createPost(req, res){
        const {selector1, selector2, countId, timemessage, datemessage} = req.body;
        const newMessage = await db.query(`INSERT INTO messages (selector1, selector2, countId, timemessage, datemessage) VALUES ($1, $2, $3, $4, $5) RETURNING *`, [selector1, selector2, countId, timemessage, datemessage])
        res.json(newMessage.rows[0])

    }

    async getPostsByUser (req, res){
        // const {id} = req.query;
        const getPosts = await db.query(`SELECT * FROM messages`)
        res.json(getPosts.rows);
    }

    async getOnePost(req, res){
        const id = req.params.id
        const messages = await db.query(`SELECT * FROM messages WHERE id=$1`, [id])
        res.json(messages.rows[0])

    }

}

module.exports = new PostController();