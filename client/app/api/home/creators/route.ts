import { NextResponse } from "next/server";
import { ICreator } from "../../../types";

import { getClient } from "../../../libs/client";
import { gql } from "@apollo/client";

export async function GET(req: Request) {
  const query = gql`
    query {
      artists {
        _id
        nickName
        avatarUrl
        totalSales
      }
    }
  `;

  const creators = await getClient()
    .query<{ artists: ICreator[] }>({
      query,
    })
    .then((res) => res.data)
    .catch(e => {
      console.log('ERROR home-creators-route =>', e);
      return {artists: []}
    })

    return NextResponse.json(creators.artists);
};
