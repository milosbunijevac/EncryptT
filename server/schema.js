import randomstring from 'randomstring';
import crypto from 'crypto';

const algorithm = 'aes-256-ctr';


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

const DecryptMessage = new GraphQLObjectType({
  name: 'decryptMes',
  fields: () => ({
    message: { type: GraphQLString },
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
        const enc = crypto.createCipher(algorithm, `${args.passphrase}`).update(`${args.message}${args.name}${args.expirDate}`, 'utf-8', 'hex');
        return {
          passphrase: enc,
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
          passphrase: `${passphraser}`,
        };
      },
    },
    decryptMessage: {
      type: DecryptMessage,
      args: {
        message: { type: GraphQLString },
      },
      resolve(parVal, args) {
        const decryptphrase = crypto.createDecipher(algorithm, `${args.passphrase}`).update(`${args.message}`, 'hex', 'utf-8');
        return {
          message: `${decryptphrase}`,
        };
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
