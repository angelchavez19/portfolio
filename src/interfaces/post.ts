export interface PostI {
  name: string;
  description: string;
  slug: string;
  date: string;
}

export interface BlogI {
  title: string;
  content: PostI[];
}
