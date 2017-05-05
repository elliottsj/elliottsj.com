import post from 'utils/post';
import content from './content.md';

const { href, component } = post({
  filename: __filename,
  markdownSource: content,
});
export { href, component as default };
