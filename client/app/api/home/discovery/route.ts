import { NextResponse } from "next/server";
import { IAsset } from "../../../types";

import { getClient } from "../../../libs/client";
import { gql } from "@apollo/client";

export async function GET(req: Request) {
  const query = gql`
    query {
      assets{
    _id
    imgUrl
    assetName
    price
    highestBid
    createdBy{
      nickName
      avatarUrl
      _id
    }
  }
    }
  `;

  const assets = await getClient()
    .query<{ assets: IAsset[] }>({
      query,
    })
    .then((res) => res.data)
    .catch(e => {
      console.log('ERROR home-discovery-route =>', e);
      return {assets: []}
    })

    return NextResponse.json(assets.assets);
};