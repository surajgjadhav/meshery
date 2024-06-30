const graphqlWsConRule = require('./no-unclosed-graphql-ws-connections');
const plugin = {
  rules: {
    'no-unclosed-graphql-ws-connections': graphqlWsConRule,
    // Add custom rules here by importing rule config file
  },
};
module.exports = plugin;
