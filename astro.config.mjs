import { defineConfig } from "astro/config";

const USER = "leibowivz";
const REPO = "nan-shang-site";

export default defineConfig({
  site: `https://${USER}.github.io`,
  base: `/${REPO}`,
});
