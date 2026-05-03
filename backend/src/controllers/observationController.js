const observationsService = require('../services/observationsService')


const newObservations = async (req,res)=>{
    try{
    const body = req.body || {}
    const title = body.title 
    const category = body.category
    const content = body.content
    const userId = req.user.id

    await observationsService.createObservation(title, category, content, userId)

    return res.status(201).json({
        message : 'observation créé avec succés.'
})
    }catch(error){
        const errorMessages = {
        INVALID_FIELDS: 'Les champs sont invalides.',
        REQUIRED_FIELDS: 'Tous les champs sont obligatoires.',
        INVALID_TITLE_LENGTH: 'Le titre doit contenir entre 3 et 100 caractères.',
        INVALID_CONTENT_LENGTH: 'Le contenu doit contenir entre 10 et 5000 caractères.',
        INVALID_CATEGORY_LENGTH: 'La catégorie est invalide.'
        }
        if(errorMessages[error.message]){
        return res.status(400).json({
        message: errorMessages[error.message]
        })
    }
        return res.status(500).json({
            message: 'Erreur serveur'
        })
    }
}
const updateObservations = async (req,res)=>{
    try{
    const body = req.body || {}
    const title = body.title
    const category = body.category
    const content = body.content
    const id = req.params.id
    const userId = req.user.id
    await observationsService.updateObservation(title, category, content, id, userId)

    return res.status(200).json({
        message : 'observation modifié avec succés.'
})
    }catch(error){
        const errorMessages = {
        INVALID_FIELDS: 'Les champs sont invalides.',
        REQUIRED_FIELDS: 'Tous les champs sont obligatoires.',
        INVALID_TITLE_LENGTH: 'Le titre doit contenir entre 3 et 100 caractères.',
        INVALID_CONTENT_LENGTH: 'Le contenu doit contenir entre 10 et 5000 caractères.',
        INVALID_CATEGORY_LENGTH: 'La catégorie est invalide.'
        }
        if(errorMessages[error.message]){
        return res.status(400).json({
        message: errorMessages[error.message]
        })
    }
        return res.status(500).json({
            message: 'Erreur serveur'
        })
    }
}

const foundObservation = async (req,res)=>{
    try{
        const userId = req.user.id

        const observations = await observationsService.foundObservation(userId)

        return res.status(200).json({
            observations
        })
    }catch(error){
        if(error.message === 'NO_FOUND_OBSERVATION'){
            return res.status(400).json({
                message:"aucune observation trouvé"
            })
        }
        return res.status(500).json({
            message: 'Erreur serveur'
        })
    }
}

const deleteObservation = async (req,res)=>{
    
    try{
    const userId = req.user.id
    const id = req.params.id
    
    await observationsService.deleteObservation(id,userId)

    return res.status(200).json({
        message:'observation suprimé avec succés'
    })

    }catch(error){
        return res.status(500).json({
            message: 'Erreur serveur'
        })
    }
}

module.exports = {
    newObservations,
    foundObservation,
    deleteObservation,
    updateObservations
}