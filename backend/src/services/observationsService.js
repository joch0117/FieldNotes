const observationRepository= require('../repositories/observation.repository')


const validateObservation = (title, category, content, userId) => {

    title = typeof title === 'string' ? title.trim(): ''
    category = typeof category === 'string' ? category.trim(): ''
    content = typeof content === 'string' ? content.trim(): ''

    if (
        typeof title !== 'string' ||
        typeof category !== 'string' ||
        typeof content !== 'string'
    ) {
        throw new Error('INVALID_FIELDS')
    }

    if (!title || !content || !category) {
        throw new Error('REQUIRED_FIELDS')
    }

    if (title.length < 3 || title.length > 100) {
        throw new Error('INVALID_TITLE_LENGTH')
    }

    if (content.length < 10 || content.length > 5000) {
        throw new Error('INVALID_CONTENT_LENGTH')
    }
    if (category.length < 3 || category.length > 100) {
        throw new Error('INVALID_CATEGORY_LENGTH')
    }
    
}

const createObservation = async (title, category, content, userId) => {
    validateObservation(title, category, content)

    return observationRepository.createObservation(title, category, content, userId)
}

const updateObservation = async (title, category, content,id, userId) => {
    validateObservation(title, category, content)

    return observationRepository.updateObservation(title, category, content, id, userId)
}

const deleteObservation = async (id, user_id) =>{
    return observationRepository.deleteObservation(id, user_id)
}

const foundObservation = async (userId) =>{
    const userObservation = await observationRepository.foundObservationByUser(userId)

    if(!userObservation){
        throw new Error('NO_FOUND_OBSERVATION')
    }

    return userObservation
}

module.exports = {
    validateObservation,
    createObservation,
    updateObservation,
    deleteObservation,
    foundObservation
}