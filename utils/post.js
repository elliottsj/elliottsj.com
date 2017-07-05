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
  date,
  filename,
  name = nameFromFilename(filename),
  markdownSource,
  title,
  Component,
}) {
  return {
    component: () =>
      <PostLayout date={date} title={title}>
        {markdownSource ? <Markdown source={markdownSource} /> : Component}
      </PostLayout>,
    date,
    href: `/posts/${name}`,
    title,
  };
}
