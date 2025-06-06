import { hc } from "hono/client";
import type { ExampleType } from "@server/routes/example"

const baseUrl = process.env.BUN_PUBLIC_SERVER_URL || "http://localhost:3000/api/v1";

const client = {
    example: hc<ExampleType>(`${baseUrl}/example`),
};

export default client;