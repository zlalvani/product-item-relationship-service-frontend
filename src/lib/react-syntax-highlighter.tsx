import SyntaxHighlighter from "react-syntax-highlighter";
import { googlecode } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const BeautifulJson: React.FC<{ json: unknown }> = ({ json }) => {
  return <SyntaxHighlighter style={googlecode}>{JSON.stringify(json, null, 2)}</SyntaxHighlighter>;
};
