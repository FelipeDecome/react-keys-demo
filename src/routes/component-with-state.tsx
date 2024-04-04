import { createFileRoute } from '@tanstack/react-router'

import { DefaultLayout } from '../layouts/DefaultLayout';
import { ComponentWithState } from '../components/ComponentWithState';

function Component() {
  return (
    <DefaultLayout label="Component with state" item={ComponentWithState} />
  )
}

export const Route = createFileRoute('/component-with-state')({
  component: Component
});
