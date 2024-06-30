// rules/no-unclosed-graphql-ws-connections.js

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallows unclosed GraphQL-WS WebSocket connections',
      category: 'Possible Errors',
      recommended: true,
    },
  },

  create(context) {
    return {
      // Find all variable declarators with the identifier 'graphqlWsClient'
      VariableDeclarator(node) {
        if (node.id.name === 'graphqlWsClient' && node.init) {
          const isGraphQLWsClient =
            node.init.type === 'NewExpression' && node.init.callee.name === 'Client'; // Assuming Client is the imported class

          if (isGraphQLWsClient) {
            context.report({
              node,
              message:
                'Unclosed GraphQL-WS WebSocket connection. Ensure the connection is closed properly.',
            });
          }
        }
      },
    };
  },
};
