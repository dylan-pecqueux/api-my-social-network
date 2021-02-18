'use strict';
const slugify = require('slugify');

module.exports = {
  lifecycles: {
    async beforeCreate(data) {
      if (data.username) {
        data.slug = slugify(data.username, {lower: true});
      }
    },
    async beforeUpdate(params, data) {
      if (data.username) {
        data.slug = slugify(data.username, {lower: true});
      }
    },
  },
};