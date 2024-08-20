export interface IProject {
  src: string;
  alt: string;
  title: string;
  width: string;
  height: string;
  description: string;
  links: Link[];
}

interface Link {
  name: string;
  href: string;
}
