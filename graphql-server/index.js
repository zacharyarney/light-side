const { GraphQLServer } = require('graphql-yoga');
const resolvers = require('./graphql/resolvers');
const typeDefs = require('./graphql/schema')

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() =>
  console.log('\n=== SERVER RUNNING ON 4000 ===\n', resolvers)
);
