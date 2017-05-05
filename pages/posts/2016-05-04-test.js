import post from 'utils/post';

function Component() {
  return <div>test</div>;
}

const { href, component } = post({
  filename: __filename,
  component: Component,
});
export { href, component as default };
