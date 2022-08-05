import fs from "node:fs";
import path from "node:path";

import { parseTypescript } from "./parsers/parse-typescript.js";
import { queryStyledComponentsCall } from "./queries/query-styled-components-call.js";
import { extractStylesAst } from "./core/extract-styles-ast.js";

function extractStylesComponentsAst(filePath: string) {
  const source = fs.readFileSync(filePath, "utf8");

  const ast = parseTypescript(source);
  const styledComponentsCalls = queryStyledComponentsCall(ast);

  for (const taggedTemplateExpression of styledComponentsCalls) {
    const stylesAst = extractStylesAst(taggedTemplateExpression);
    console.log(stylesAst);
  }
}

extractStylesComponentsAst(path.join(process.cwd(), "_tmptmptmp.tsx"));
