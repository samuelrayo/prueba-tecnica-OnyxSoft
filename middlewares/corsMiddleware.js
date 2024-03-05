const corsMiddleware = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Contro-Allow-Methods', 'GET, POST, PATCH, DELETE')
    next()
}

export default corsMiddleware