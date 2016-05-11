/**
 * Venue
 * @description :: Model for storing venues
 */
module.exports = {
    schema: true,
    attributes: {
        name: {
            type: 'string',
            required: true
        },
        address: {
            type: 'string'
        },
        city: {
            type: 'string'
        },
        state: {
            type: 'string'
        },
        country: {
            type: 'string'
        },
        photo: {
            type: 'string',
            defaultsTo: '',
            url: true
        },
        owner: {
          model:'user',
          unique: true
        },
        users: {
          collection: 'user',
          via: 'venues'
        }

    }
};
