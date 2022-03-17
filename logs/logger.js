const {transports,createLogger} = require('winston')

const Emplogin = {
  transports: [
    new transports.File({
      level: 'error',
      filename: 'Helpers/error.log'
    })
  ]
};

const logger = createLogger(Emplogin);




module.exports=logger
