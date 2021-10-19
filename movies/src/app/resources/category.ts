export interface Category {
  id: string;
  name: string;
  tag: string;
  active: boolean;
  language: {
            id: number;
            name: string;
            tag: string;
        };
}