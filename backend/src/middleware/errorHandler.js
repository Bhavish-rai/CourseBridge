const errorHandler = (err, req, res, next) => {
    console.error("========== ERROR ==========");
    console.error(err);
    console.error("===========================");

    return res.status(err.statusCode || 500).json({
        success: false,
        statusCode: err.statusCode || 500,
        message: err.message || "Internal Server Error",

        error: process.env.NODE_ENV === "development"
            ? {
                name: err.name,
                code: err.code,
                detail: err.detail,
                constraint: err.constraint,
                stack: err.stack
            }
            : undefined
    });
};

module.exports = errorHandler;