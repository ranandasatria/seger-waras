import type { LucideIcon } from "lucide-react";

export type Service = {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
};

export type ValueProp = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ProcessStep = {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type PortfolioItem = {
  id: string;
  title: string;
  category: "Hunian" | "Komersial" | "Renovasi";
  location: string;
  year: number;
  ratio: "1/1" | "4/3" | "4/5" | "16/9" | "21/9" | "3/4";
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
};
