import { parse } from "@babel/parser";

export function parseTypescript(value: string) {
  return parse(value, {
    plugins: ["typescript", "jsx", "estree"],
    errorRecovery: true,
  });
}
