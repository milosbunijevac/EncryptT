import GraphQLDate from 'graphql-date';

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = require('graphql');


const SecretMessage = new GraphQLObjectType({
  name: 'secretMessage',
  fields: () => ({
    // id: { type: GraphQLString },
    name: { type: GraphQLString },
    // message: { type: GraphQLString },
    // expirDate: { type: GraphQLDate },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    secretMessage: {
      type: SecretMessage,
      args: {
        name: { type: GraphQLString },
      },
      resolve(parVal, args) {
        return { name: `${args.name}test` };
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
