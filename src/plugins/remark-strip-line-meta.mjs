/**
 * Strips {n,n-n} line-highlight notation from fenced code block language tags
 * so Prism can recognize the language. e.g. "jsx{19-27}" becomes "jsx".
 * This is a temporary workaround until Milestone 8 (Shiki migration) which
 * natively supports this notation.
 */
function visit(node, type, fn) {
  if (node.type === type) fn(node)
  if (node.children) node.children.forEach((child) => visit(child, type, fn))
}

export default function remarkStripLineMeta() {
  return (tree) => {
    visit(tree, "code", (node) => {
      if (node.lang) {
        node.lang = node.lang.replace(/\{[^}]*\}/, "")
      }
    })
  }
}
