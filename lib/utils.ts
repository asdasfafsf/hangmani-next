
export function transpileJSXToHTML(jsx: any) {
    const jsxRegex = /<(\w+)([^>]*)>(.*?)<\/\1>/g;
  
    let html = '';
    let match;
    while ((match = jsxRegex.exec(jsx)) !== null) {
      html += `<${match[1]}${match[2]}>`;
      const content = match[3];
      if (/<(\w+)/.test(content)) {
        html += transpileJSXToHTML(content);
      } else {
        html += content;
      }
  
      html += `</${match[1]}>`;
    }
  
    return html;
}