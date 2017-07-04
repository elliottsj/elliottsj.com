import Markdown from 'react-markdown';
import path from 'path';

import PostLayout from 'components/PostLayout';
import { dirname as postsDirname } from '../pages/posts';

function nameFromFilename(filename) {
  const basename = path.basename(filename, path.extname(filename));
  return path.relative(
    postsDirname,
    path.join(path.dirname(filename), basename === 'index' ? '' : basename),
  );
}

export default function post({
  filename,
  name = nameFromFilename(filename),
  markdownSource,
  Component,
}) {
  return {
    href: `/posts/${name}`,
    component: () =>
      <PostLayout>
        {markdownSource ? <Markdown source={markdownSource} /> : Component}
      </PostLayout>,
  };
}
