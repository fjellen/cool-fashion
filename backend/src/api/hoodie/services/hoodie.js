'use strict';

/**
 * hoodie service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hoodie.hoodie');
