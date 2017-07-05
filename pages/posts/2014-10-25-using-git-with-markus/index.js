import post from 'utils/post';
import content from './content.md';

const { component, date, title, href } = post({
  date: '2014-10-25',
  title: 'Using Git with MarkUs',
  filename: __filename,
  markdownSource: content,
});

export { component as default, date, href, title };
