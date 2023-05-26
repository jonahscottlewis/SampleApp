const {User} = require("../models")
const { signToken } = require('../utils/auth');
const resolvers = {
    Query: {
      getUser: async (parent,args) => {
        try {
          console.log("GET QUERY USER!")
          console.log(args)
          const newUser = await User.findOne({email: args.email});

          return newUser
      } catch (error) {
          console.log('ERROR ADDING USER MUTATION')
          console.log(error)
      }
     
      }
    },
    Mutation: {
      addUser: async (parent, args) => {
        try {
            console.log("ADDING MUTATION USER!")
            console.log(args)
            const newUser = await User.create(args);
            console.log(newUser)
            const token = signToken(newUser);

            return {token,newUser};
        } catch (error) {
            console.log('ERROR ADDING USER MUTATION')
            console.log(error)
        }
       
      },
     
    },
  };
  
  module.exports = resolvers;
  