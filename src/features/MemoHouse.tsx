import { memo } from "react";
import NormalHouse, { IProps } from "./NormalHouse";

type IPropKeys = keyof IProps;

export default memo(NormalHouse, (p: IProps, q: IProps) => {
  const isEqual = Object.keys(p).every(
    (propKey: string) => p[propKey as IPropKeys] === q[propKey as IPropKeys]
  );
  return isEqual;
});
