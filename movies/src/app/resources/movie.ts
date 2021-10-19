export interface Movie {
  id: string;
  title: string;
  synopsis: string;
  image: string;
  releaseDate: string;
  duration: string;
  language: {
            id: number;
            name: string;
            tag: string;
        };
  category: {
          id: number;
          name: string;
          tag: string;
      };
  active: boolean;
}