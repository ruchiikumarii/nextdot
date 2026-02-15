import React from 'react';

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
  linkText?: string;
}

export interface CaseStudy {
  client: string;
  title: string;
  image: string;
}