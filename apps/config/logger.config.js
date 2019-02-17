 /**
 * Configurations of logger.
 */
const winston = require('winston');
const winstonRotator = require('winston-daily-rotate-file');

const consoleConfig = [
  new winston.transports.Console({'colorize': true})
];

const createLogger = new winston.Logger({
  'transports': consoleConfig
});

const detailsLogger = createLogger;
detailsLogger.add(winstonRotator, {
  'name': 'access-file',
  'level': 'info',
  'filename': './logs/access.log',
  'json': false,
  'datePattern': 'DD.MM.YYYY',
  'maxLogSize': 20480,
  'prepend': true
});

module.exports = {
  'detailsLogger': detailsLogger,
};