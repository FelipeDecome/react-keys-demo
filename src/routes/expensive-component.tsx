import { createFileRoute } from '@tanstack/react-router'

import { DefaultLayout } from '../layouts/DefaultLayout';
import { ExpensiveComponent } from '../components/ExpensiveComponent';


function Component() {
  return (
    <DefaultLayout label="Expensive Component Example" item={ExpensiveComponent} />
  )
}

export const Route = createFileRoute('/expensive-component')({
  component: Component
});
