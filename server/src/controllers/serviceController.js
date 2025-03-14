import Service from "../models/Service.js";

export default {
    async all(req, res) {
        try {
            const services = await Service.findAll(
                // {
                // include: {
                //     association: 'detalhes', 
                //     attributes: ['id', 'chave', 'valor', 'createdAt']
                // },
                // order: [['date', 'DESC']]
                // }
            )
            res.status(200).json(services);
        } catch (error) {
            res.status(400).json(error);
        }
    }
} 