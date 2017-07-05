import post from 'utils/post';

function Component() {
  return <div>test</div>;
}

const { date, component, href, title } = post({
  component: Component,
  date: '2016-05-04',
  filename: __filename,
  title: 'Test Post',
});

export { component as default, date, href, title };
