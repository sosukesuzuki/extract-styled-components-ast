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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ast.program as any,
    selector
  ) as TaggedTemplateExpression[];
}
