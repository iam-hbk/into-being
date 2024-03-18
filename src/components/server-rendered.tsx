import React from "react";
import { db } from "@/db/drizzle";
import * as schema from "@/db/schema";
type Props = {};

const ServerRendered = async (props: Props) => {
  const time = new Date().toJSON();
  const data = await db.select().from(schema.userInfo);
  return (
    <pre className="m-10">{JSON.stringify({ ...data[0], time }, null, 2)}</pre>
  );
};

export default ServerRendered;
