const winston = require('winston');

export default (level = 'info', service = "user-service", error = 'error.log', combined = 'combined.log') => {
    let loggerInstance = winston.createLogger({
        level,
        format: winston.format.json(),
        defaultMeta: {
            service
        },
        transports: [
            new winston.transports.File({
                filename: error,
                level: 'error'
            }),
            new winston.transports.File({
                filename: combined
            }),
        ],
    });

    return loggerInstance
}