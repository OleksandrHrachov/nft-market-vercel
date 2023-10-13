import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLFloat
} from "graphql";
import { ArtistType } from './artistSchema';
import { getArtistById } from "../db/artist";

export const AssetType: GraphQLObjectType = new GraphQLObjectType({
  name: "Asset",
  fields: () => ({
    _id: { type: GraphQLID },
    assetName: { type: GraphQLString },
    imgUrl: { type: GraphQLString },
    createdBy: {
      type: ArtistType,
      async resolve(parent, args) {
        return await getArtistById(parent.creatorId)
        
      }
     },
    createdAt: { type: GraphQLString },
    description: { type: GraphQLString },
    price:{type: GraphQLFloat},
    highestBid: {type: GraphQLFloat},
    tags: {type: new GraphQLList(GraphQLString)},
    creatorId: { type: GraphQLString }
  }),
});
