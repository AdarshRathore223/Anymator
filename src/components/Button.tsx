import * as React from "react";
import { ReactNode } from "react";

type Propstypes = {
  children: ReactNode;
};

const Button = ({ children }: Propstypes) => {
  return <button>{children}</button>;
};

export { Button };
