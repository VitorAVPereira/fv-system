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
            console.error("Erro no método all:", error);
            res.status(400).json({ error: error.message });
        }
    },
    async create(req, res) {
        try {
            const { name, client, job_type, date, status } = req.body;

            const newService = await Service.create({
                name, client, job_type, date, status
            });

            // if (detalhes && detalhes.length > 0) {
            //     await Promise.all(detalhes.map(async (detalhe) => {
            //         await newService.createDetalhe({
            //             chave: detalhe.chave,
            //             valor: detalhe.valor,
            //         });
            //     }));
            // }

            res.status(201).json(newService);
        } catch (error) {
            res.status(400).json(error);
        }
    }
} 