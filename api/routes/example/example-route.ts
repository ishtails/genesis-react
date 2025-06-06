import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { respond } from "@api/lib/utils/respond";

const example = new Hono()
  .get(
    "/",
    zValidator(
      "query",
      z.object({
        name: z.string(),
      })
    ),
    async (ctx) => {
      const { name } = ctx.req.valid("query");

      if (!name) {
        return respond.err(ctx, "Name is required", 400);
      }

      return respond.ok(
        ctx,
        {
          name,
        },
        "Successfully fetched data",
        200
      );
    }
  )

  .post(
    "/:id",
    zValidator(
      "json",
      z.object({
        name: z.string(),
      })
    ),
    zValidator(
      "param",
      z.object({
        id: z.string(),
      })
    ),
    async (ctx) => {
      const { name } = ctx.req.valid("json");
      const { id } = ctx.req.valid("param");

      if (!name) {
        return respond.err(ctx, "Name is required", 400);
      }

      return respond.ok(
        ctx,
        {
          name,
          id,
        },
        "Successfully posted data",
        200
      );
    }
  );

export default example;
export type ExampleType = typeof example;
