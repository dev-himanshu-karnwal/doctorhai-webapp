import { useInfiniteQuery } from "@tanstack/react-query";
import { globalSearchService } from "../services";
import { GlobalFilterQuery } from "../types/global-search.types";

export const GLOBAL_SEARCH_KEYS = {
  SEARCH: (params: GlobalFilterQuery) => ["global-search", params] as const,
};

export function useGlobalSearch(params: GlobalFilterQuery) {
  return useInfiniteQuery({
    queryKey: GLOBAL_SEARCH_KEYS.SEARCH(params),
    queryFn: ({ pageParam = 1 }) =>
      globalSearchService.search({ ...params, page: pageParam as number }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const current = lastPage.data.pagination.page;
      const totalDoctorsPages = lastPage.data.pagination.totalPagesDoctors || 0;
      const totalHospitalsPages =
        lastPage.data.pagination.totalPagesHospitals || 0;
      const maxPages = Math.max(totalDoctorsPages, totalHospitalsPages);
      return current < maxPages ? current + 1 : undefined;
    },
  });
}
