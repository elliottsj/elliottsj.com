import post from 'utils/post';
import content from './content.md';

const { component, date, title, href } = post({
  date: '2014-01-19',
  title: 'Public Key Authentication on CDF',
  filename: __filename,
  markdownSource: content,
});

export { component as default, date, href, title };
