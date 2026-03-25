import Admin from './admin.model.js';

// Récupérer tous les admins
export const getAllAdmins = async (req, res) => {
    try {
        const admins = await Admin.findAll();
        res.status(200).json(admins);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Récupérer un admin par ID
export const getAdminById = async (req, res) => {
    try {
        const admin = await Admin.findByPk(req.params.id);
        if (!admin) {
            res.status(404).json({ message: 'Admin non trouvé' });
        } else {
            res.status(200).json(admin);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Ajouter un admin
export const addAdmin = async (req, res) => {
    try {
        const admin = await Admin.create(req.body);
        res.status(201).json({admin });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Modifier un admin
export const updateAdmin = async (req, res) => {
    try {
        const admin = await Admin.findByPk(req.params.id);
        if (!admin) {
            res.status(404).json({ message: 'Admin non trouvé' });
        } else {
            await admin.update(req.body);
            res.status(200).json({ admin });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Supprimer un admin
export const delAdmin = async (req, res) => {
    try {
        const admin = await Admin.findByPk(req.params.id);
        if (!admin) {
            res.status(404).json({ message: 'Admin non trouvé' });
        } else {
            await admin.destroy();
            res.status(200).json({ message: 'Admin supprimé avec succès' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};