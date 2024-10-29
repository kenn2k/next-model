export type ServiceCardProps = {
  id?: number;
  title: string;
  description: string;
  features: string[];
  buttons: string[];
};

export type CardProps = {
  id?: number;
  description: string;
  title: string;
};

export type ReviewProps = {
  id?: number;
  content: string;
  title: string;
  author: string;
};
