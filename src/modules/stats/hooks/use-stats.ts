import { useQuery } from "@tanstack/react-query";
import { statsService } from "../services";

export function useStats(hospitalId?: string) {
  const doctorStatsQuery = useQuery({
    queryKey: ["doctor-stats", hospitalId],
    queryFn: () => statsService.getDoctorStats(hospitalId),
  });

  const hospitalStatsQuery = useQuery({
    queryKey: ["hospital-stats"],
    queryFn: () => statsService.getHospitalStats(),
  });

  const doctorStats = doctorStatsQuery.data?.data?.doctorStats;
  const hospitalStats = hospitalStatsQuery.data?.data?.hospitalStats;

  const doctorVerificationRate =
    doctorStats && doctorStats.total_doctor_count > 0
      ? Math.round(
          (doctorStats.total_verfied_count / doctorStats.total_doctor_count) *
            100
        )
      : 0;

  const hospitalVerificationRate =
    hospitalStats && hospitalStats.total_hospital_count > 0
      ? Math.round(
          (hospitalStats.total_verified_count /
            hospitalStats.total_hospital_count) *
            100
        )
      : 0;

  return {
    doctorStats: doctorStats
      ? { ...doctorStats, percentage_change: doctorVerificationRate }
      : undefined,
    hospitalStats: hospitalStats
      ? { ...hospitalStats, percentage_change: hospitalVerificationRate }
      : undefined,
    isLoading: doctorStatsQuery.isLoading || hospitalStatsQuery.isLoading,
    isError: doctorStatsQuery.isError || hospitalStatsQuery.isError,
    refetch: () => {
      doctorStatsQuery.refetch();
      hospitalStatsQuery.refetch();
    },
  };
}
