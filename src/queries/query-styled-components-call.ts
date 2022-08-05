import type { File, TaggedTemplateExpression } from "@babel/types";
import esquery from "esquery";

const selector = [
  "TaggedTemplateExpression",
  '[tag.callee.name="styled"]',
].join();

export function queryStyledComponentsCall(
  ast: File
): TaggedTemplateExpression[] {
  return esquery.query(
    ast.program as any,
    selector
  ) as TaggedTemplateExpression[];
}
