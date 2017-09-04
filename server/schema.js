import randomstring from 'randomstring';


const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
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

const PassPhrase = new GraphQLObjectType({
  name: 'passPhrase',
  fields: () => ({
    passphrase: { type: GraphQLString },
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
    passPhrase: {
      type: PassPhrase,
      args: {
        passphrase: { type: GraphQLString },
      },
      resolve(parVal, args) {
        const passphraser = randomstring.generate({
          length: 5,
          charset: 'alphanumeric',
        });
        return {
          passphrase: `${passphraser
          }`,
        };
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
