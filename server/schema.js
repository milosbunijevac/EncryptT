import GraphQLDate from 'graphql-date';
import SHA256 from 'crypto-js/sha256';


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
    passphrase: { type: GraphQLString },
    name: { type: GraphQLString },
    message: { type: GraphQLString },
    expirDate: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    secretMessage: {
      type: SecretMessage,
      args: {
        passphrase: { type: GraphQLString },
        name: { type: GraphQLString },
        message: { type: GraphQLString },
        expirDate: { type: GraphQLString },
      },
      resolve(parVal, args) {
        return {
          passphrase: `${args.passphrase}`,
          name: `${args.name}test`,
          message: `${args.message}`,
          expirDate: `${args.expirDate}`,
        };
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
