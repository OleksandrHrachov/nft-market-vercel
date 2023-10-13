import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
} from "graphql";

export const HowItWorkCardType: GraphQLObjectType = new GraphQLObjectType({
  name: "HowItWorkCard",
  fields: () => ({
    _id: { type: GraphQLID },
    title: { type: GraphQLString },
    imgUrl: { type: GraphQLString },
    description: { type: GraphQLString },
  }),
});
