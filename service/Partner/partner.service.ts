import axiosInstance from "@/utils/axios";

export interface Partner {
  avatar: string | Blob | undefined;
  id: string;
  name: string;
  type: 'Support' | 'Balance' | 'Challenge' | 'Creator';
  skill: string;
  fullbody: string;
  description: string;
  stat: {
    step: number;
    frag: number;
    over: number;
  };
  releaseDate: string;
  version: string;
}

export const partnerService = {
  getAllPartners: async (): Promise<Partner[]> => {
    const response = await axiosInstance.get<Partner[]>("Partner");
    return response.data; 
  },
  getPartnerById: async (id: string): Promise<Partner> => {
    const response = await axiosInstance.get<Partner>(`Partner/${id}`);
    return response.data;
  },
};

export default partnerService;