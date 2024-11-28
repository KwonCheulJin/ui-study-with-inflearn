import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import README from '/README.md';

export default function Home() {
  return (
    <div className="prose max-w-[800px] p-20">
      <Markdown remarkPlugins={[remarkGfm]}>{README}</Markdown>
    </div>
  );
}
