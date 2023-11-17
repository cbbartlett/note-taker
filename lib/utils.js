import path from "path";
import { fileURLToPath } from "url";

// Get the directory the from import meta
export default function getDirname(meta) {
  return path.dirname(fileURLToPath(meta.url));
}
