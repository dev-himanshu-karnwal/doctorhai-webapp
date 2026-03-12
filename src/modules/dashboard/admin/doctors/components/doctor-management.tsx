"use client";

import { useState, useMemo } from "react";
import {
  DoctorCard,
  DoctorManagementHeader,
  DoctorManagementFilters,
  DoctorManagementPagination,
} from "./";
import { useDoctors } from "@/modules/doctors/hooks/use-doctors";
import { DoctorCardSkeleton } from "./skeletons";
import type { DoctorFilterTab } from "../types";
import { useDebounce } from "@/hooks";

export function DoctorManagement() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 400);
  const [activeTab, setActiveTab] = useState<DoctorFilterTab>("All");
  const [page, setPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const limit = 12;

  const queryParams = useMemo(
    () => ({
      page,
      limit,
      search: debouncedSearch || undefined,
      isVerified:
        activeTab === "Unverified"
          ? false
          : activeTab === "Verified"
            ? true
            : undefined,
      sortOrder,
    }),
    [page, limit, debouncedSearch, activeTab, sortOrder]
  );

  const { data, isLoading, isFetching } = useDoctors(queryParams);

  const isDataLoading = isLoading || isFetching;

  const doctors = data?.doctors || [];
  const metadata = data?.metadata;

  return (
    <div className="min-h-screen" style={{ background: "#F0F2F5" }}>
      <div className="mx-auto max-w-6xl px-4 py-7 sm:px-6 md:px-8">
        <DoctorManagementHeader />

        <DoctorManagementFilters
          search={search}
          setSearch={(val) => {
            setSearch(val);
            setPage(1);
          }}
          activeTab={activeTab}
          setActiveTab={(tab) => {
            setActiveTab(tab);
            setPage(1);
          }}
          sortOrder={sortOrder}
          setSortOrder={(order) => {
            setSortOrder(order);
            setPage(1);
          }}
        />

        {/* ── Cards Grid ── */}
        <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {isDataLoading ? (
            [...Array(limit)].map((_, i) => <DoctorCardSkeleton key={i} />)
          ) : doctors.length > 0 ? (
            doctors.map((doc) => <DoctorCard key={doc.id} doc={doc} />)
          ) : (
            <div
              className="col-span-1 py-20 text-center text-gray-400 sm:col-span-2 md:col-span-3 lg:col-span-4"
              style={{ fontSize: 14 }}
            >
              No doctors match your criteria.
            </div>
          )}
        </div>

        {metadata && metadata.totalPages > 1 && (
          <DoctorManagementPagination
            page={page}
            setPage={setPage}
            totalPages={metadata.totalPages}
          />
        )}
      </div>
    </div>
  );
}
