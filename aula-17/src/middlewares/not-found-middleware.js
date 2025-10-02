export default (req, res) => {
    res.status(404).json({
        message: "Caminho não encontrado.",
        path: req.path
    });
}