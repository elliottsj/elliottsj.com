import post from 'utils/post';
import content from './content.md';

const { component, date, title, href } = post({
  date: '2014-09-27',
  title: 'CSC309: Deploying the Right Way',
  filename: __filename,
  markdownSource: content,
});

export { component as default, date, href, title };
