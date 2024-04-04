import { ReactNode, useState } from "react";

interface ComponentWithStateProps {
  children: ReactNode;
}

export function ComponentWithState({ children }: ComponentWithStateProps) {
  const [checked, setChecked] = useState(false)

  return (
    <div className="flex gap-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <label htmlFor="">{children}</label>
    </div>
  )
}
