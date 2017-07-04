import post from 'utils/post';

function Component() {
  return <div>test</div>;
}

const date = '2016-05-04';
const title = 'Test Post';

const { href, component } = post({
  filename: __filename,
  component: Component,
});

export { component as default, date, href, title };
