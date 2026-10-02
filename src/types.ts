import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export interface FishingMethod {
  name: string;
  season: string;
  description: string;
  icon: LucideIcon;
}

export interface TimelineEvent {
  age: string;
  title: string;
  description: string;
}

export interface FamilyVoice {
  title: string;
  text: string;
  name: string;
}

export interface ScheduleItem {
  time: string;
  activity: string;
  icon: LucideIcon;
}
