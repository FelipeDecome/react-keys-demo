import { ElementType } from "react";
import { twMerge } from 'tailwind-merge'
import { Polimorphic, PolymorphicProps } from "./Polimorphic";

type ContainerProps<E extends ElementType> = PolymorphicProps<E>

const containerClassname = "w-full max-w-4xl mx-auto px-4"

export function Container<E extends ElementType>({ children, className, ...rest }: ContainerProps<E>) {
  return (
    // @ts-ignore
    <Polimorphic className={twMerge(containerClassname, className)} {...rest}>
      {children}
    </Polimorphic>
  )
}
