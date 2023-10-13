import { NextResponse } from "next/server";
import { IBanner } from "../../../types";

import { getClient } from "../../../libs/client";
import { gql } from "@apollo/client";

export async function GET(req: Request) {
  const query = gql`
    query {
      banner {
        _id
        assetName
        createdBy
        imgUrl
        creatorNickName
        creatorAvatarUrl
      }
    }
  `;

  const banner = await getClient()
    .query<{ banner: IBanner }>({
      query,
    })
    .then((res) => res.data.banner)
    .catch(e => {
      console.log('ERROR home-banner-route =>', e);
    });

  return NextResponse.json(banner);
}
