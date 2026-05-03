const db = require('../database/db')


const foundObservationByUser = async (userId)=>{
    const [observations] = await db.query(
    'SELECT id, title, category, content, created_at, updated_at FROM observations WHERE user_id = ?',
    [userId]
    )
    return observations
}

const createObservation = async (title,category,content,userId)=>{
    const [result] = await db.query(
    'INSERT INTO observations (title, category, content, user_id) VALUES (?,?,?,?)',
    [title,category,content,userId]
    )
    return result
}

const updateObservation = async (title,category,content,id,userId)=>{
    const [result] = await db.query(
    'UPDATE observations SET title= ?, category= ?, content= ? WHERE id = ? AND user_id= ?',
    [title,category,content,id,userId]
    )
    return result
}

const deleteObservation = async (id, user_id)=>{
    const [result] = await db.query(
    'DELETE FROM observations WHERE id = ? AND user_id = ?',
    [id, user_id]
    )
    return result
}

module.exports = {
    foundObservationByUser,
    createObservation,
    updateObservation,
    deleteObservation
}

