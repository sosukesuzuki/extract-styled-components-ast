import { compile } from "stylis";

export function parseCss(value: string) {
  return compile(value);
}
