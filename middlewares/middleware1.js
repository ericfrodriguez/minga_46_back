export default (req, res, next) => {
    req.midd1 = 'Esto viene del primero'

    next();
}
