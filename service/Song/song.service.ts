import axiosInstance from "@/utils/axios";

export interface Song {
  id: string;
  title: string;
  artist: string;
  difficulty: {
    pst: number;
    prs: number;
    ftr: number;
    byd: number;
    etr: number;
  };
  releaseDate: string;
  version: string;
  description: string;
  note: {
    pst: number;
    prs: number;
    ftr: number;
    byd: number;
    etr: number;
  }
  image: string;
  play: string;
  pack: string; 
}

export const songService = {
  // 1. Lấy danh sách tất cả bài hát
  getAllSongs: async (): Promise<Song[]> => {
    const response = await axiosInstance.get<Song[]>("Arcaea");
    return response.data; 
  },

  // 2. Lấy chi tiết 1 bài hát
  getSongById: async (id: string): Promise<Song> => {
    const response = await axiosInstance.get<Song>(`Arcaea/${id}`);
    return response.data;
  },
};

export default songService;
