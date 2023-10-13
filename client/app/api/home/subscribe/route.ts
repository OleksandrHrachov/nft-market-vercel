import { NextResponse } from "next/server";
import { ISudscribe } from "../../../types";

import { getClient } from "../../../libs/client";
import { gql } from "@apollo/client";

export async function GET(req: Request) {
  const query = gql`
    query {
      subscribe {
        imgUrl
        title
        description
      }
    }
  `;

  const subscribe = await getClient()
    .query<{ subscribe: ISudscribe }>({
      query,
    })
    .then((res) => res.data.subscribe)
    .catch((e) => {
      console.log("ERROR home-subscribe-route =>", e);
      return [{
        imgUrl: "",
        title: "",
        description: "",
      }];
    });

  return NextResponse.json(subscribe);
}
