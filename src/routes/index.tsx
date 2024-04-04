import { createFileRoute } from '@tanstack/react-router'

import { DefaultLayout } from '../layouts/DefaultLayout';

function Component() {
  return (
    <DefaultLayout label="Multiple renders" />
  )
}

export const Route = createFileRoute('/')({
  component: Component
});
