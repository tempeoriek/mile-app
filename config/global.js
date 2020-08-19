module.exports = function (global) {
    global.flatry = require('flatry');
    global.bcrypt = require('bcryptjs');
    global.express = require('express');
    global.mongoose = require('mongoose');
    global.moment = require('moment');
    global.momenttz = require('moment-timezone');
    global.axios = require('axios');
    global.async = require('async');
    global.qs = require('qs');
}
