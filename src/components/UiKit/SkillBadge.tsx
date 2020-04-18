import React, { ReactNode } from "react";

export interface SkillBadgeProps {
  /** text within badge */
  children: ReactNode;
}

const classNames = "px-3 py-1 inline-flex font-inter text-sm rounded-lg";

/** Badge, for helper current requests view */
const SkillBadge = ({ children }: SkillBadgeProps) => (
  <div
    style={{ backgroundColor: "#FDEBDB", color: "#E47565" }}
    className={classNames}
  >
    {children}
  </div>
);

export default SkillBadge;
