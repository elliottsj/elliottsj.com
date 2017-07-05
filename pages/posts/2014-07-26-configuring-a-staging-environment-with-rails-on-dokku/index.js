import post from 'utils/post';
import content from './content.md';

const { component, date, title, href } = post({
  date: '2014-07-26',
  title: 'Configuring a Staging Environment with Rails on Dokku',
  filename: __filename,
  markdownSource: content,
});

export { component as default, date, href, title };
