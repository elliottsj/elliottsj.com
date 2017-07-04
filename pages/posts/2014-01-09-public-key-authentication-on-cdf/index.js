import post from 'utils/post';
import content from './content.md';

const date = '2014-01-09';
const title = 'Public Key Authentication on CDF';

const { href, component } = post({
  filename: __filename,
  markdownSource: content,
});

export { component as default, date, href, title };
