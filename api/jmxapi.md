# use Deno as API backend  
https://console.deno.com/j10/fat-weasel-47/playground#main.ts

依赖
https://jsr.io/docs/using-packages#semver-resolution  
In Deno, you can use packages without an install step by using jsr: specifiers directly within your source files. In this example, we import the @luca/cases module directly in our code, without needing an import map entry.  
···
import { camelCase } from "jsr:@luca/cases@^1.0.1";

camelCase("hello world"); // "helloWorld"
···  
If you want to use at least a specific patch version, but do want to allow
updates, you can specify the patch version with a ^ prefix  

import { join } from "jsr:@std/path@1/join";


# use bun as backend API   
  but bun does not have a runtime serverless platform, replies on Cloudflare

# use Cloudflare workers as api backend  
  Hono


