//import { createClient } from 'npm:@supabase/supabase-js@2'

import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello J11!");
});

Deno.serve(app.fetch);
