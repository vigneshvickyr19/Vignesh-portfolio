/**
 * Minimal syntax highlighter for the hero code snippet.
 * Parses keywords, strings, JSX tags, and comments via regex
 * then renders each token with a colour-coded span.
 */
const CodeHighlight = ({ text }: { text: string }) => {
  if (!text) return <br />;

  const highlighted = text
    .replace(/(const|return|useState)/g, "<kw>$1</kw>")
    .replace(/(".*?")/g, "<str>$1</str>")
    .replace(/(<\/?[A-Z]\w*>?)/g, "<tag>$1</tag>")
    .replace(/(\/\/.*)/g, "<cmt>$1</cmt>");

  const parts = highlighted.split(
    /(<kw>.*?<\/kw>|<str>.*?<\/str>|<tag>.*?<\/tag>|<cmt>.*?<\/cmt>)/g
  );

  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("<kw>"))
          return (
            <span key={i} className="text-purple-400">
              {part.replace(/<\/?kw>/g, "")}
            </span>
          );
        if (part.startsWith("<str>"))
          return (
            <span key={i} className="text-green-400">
              {part.replace(/<\/?str>/g, "")}
            </span>
          );
        if (part.startsWith("<tag>"))
          return (
            <span key={i} className="text-primary">
              {part.replace(/<\/?tag>/g, "")}
            </span>
          );
        if (part.startsWith("<cmt>"))
          return (
            <span key={i} className="text-muted-foreground">
              {part.replace(/<\/?cmt>/g, "")}
            </span>
          );
        return (
          <span key={i} className="text-zinc-300">
            {part}
          </span>
        );
      })}
    </>
  );
};

export default CodeHighlight;
