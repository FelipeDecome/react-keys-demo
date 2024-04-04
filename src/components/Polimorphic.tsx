import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from "react";

type PolymorphicAsProp<E extends ElementType> = {
  as?: E;
  className?: string;
};

export type PolymorphicProps<E extends ElementType> = PropsWithChildren<
  ComponentPropsWithoutRef<E> & PolymorphicAsProp<E>
>;

const defaultElement = 'div';

export function Polimorphic<E extends ElementType = typeof defaultElement>({ as, children, ...rest }: PolymorphicProps<E>) {
  const As = as || defaultElement;

  return (
    <As {...rest}>
      {children}
    </As>
  )
}

