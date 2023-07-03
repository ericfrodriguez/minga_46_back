const middleware2 = (req, res, next) => {
    req.midd2 = 'Esto viene del segundo'

    next();
}

export default middleware2;