import React, { ReactNode, useEffect, useState } from "react";

export type TIconProps = {
  Component: ReactNode;
};

const Icon = ({ Component }: TIconProps) => {
  const IconComponent = () => Component;
  return <IconComponent />;
};

export default Icon;
