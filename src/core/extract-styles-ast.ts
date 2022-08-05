import type { TaggedTemplateExpression } from "@babel/types";
import { parseCss } from "../parsers/parse-css.js";
import { embedQuasis } from "./embed-quasis.js";
import { getStylesString } from "./get-styles-string.js";
import { QuasisMap } from "./quasis-map.js";

export function extractStylesAst(
  taggedTemplateExpression: TaggedTemplateExpression
) {
  const quasisMap = new QuasisMap();
  const stylesString = getStylesString(taggedTemplateExpression, quasisMap);
  const cssAst = parseCss(stylesString);
  embedQuasis(cssAst, quasisMap);
  return cssAst;
}
