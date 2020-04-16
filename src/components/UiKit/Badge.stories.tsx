import React from "react";
import { InformationalBadge } from ".";
import { BadgeType } from "./InformationalBadge";

export default {
  title: "Badges",
};

export const Confirm = () => (
  <InformationalBadge badgeType={BadgeType.confirm} />
);

export const Alert = () => <InformationalBadge badgeType={BadgeType.alert} />;

export const Neutral = () => (
  <InformationalBadge badgeType={BadgeType.neutral} />
);

export const Information = () => (
  <InformationalBadge badgeType={BadgeType.information} />
);
