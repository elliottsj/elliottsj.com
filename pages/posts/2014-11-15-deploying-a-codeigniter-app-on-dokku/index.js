import post from 'utils/post';
import content from './content.md';

const { component, date, title, href } = post({
  date: '2014-11-15',
  title: 'Deploying CodeIgniter on EC2 via Dokku',
  filename: __filename,
  markdownSource: content,
});

export { component as default, date, href, title };
