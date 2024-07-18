import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  result: {};
}

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
