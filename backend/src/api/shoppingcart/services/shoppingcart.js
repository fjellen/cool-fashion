'use strict';

/**
 * shoppingcart service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::shoppingcart.shoppingcart');
