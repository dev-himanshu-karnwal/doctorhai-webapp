import { axiosInstance } from "@/lib/axios";
import { ApiResponse } from "@/types/api.types";
import {
  GlobalFilterQuery,
  GlobalSearchData,
} from "../types/global-search.types";

export const globalSearchService = {
  search: async (
    params: GlobalFilterQuery
  ): Promise<ApiResponse<GlobalSearchData>> => {
    const response = await axiosInstance.get<ApiResponse<GlobalSearchData>>(
      "/global-search",
      { params }
    );
    return response.data;
  },
};
