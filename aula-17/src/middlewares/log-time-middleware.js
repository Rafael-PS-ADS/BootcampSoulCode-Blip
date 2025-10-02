export default (req, res, next) => {
    console.log(`[${new Date().toLocaleString("pt-br")}]`);
    next();
}