import { HospitalDetailDto, HospitalDetail } from "../types";
import { Doctor } from "@/modules/doctors/types";

export function mapHospital(
  dto: HospitalDetailDto,
  docs: Doctor[] = []
): HospitalDetail {
  const addressStr = dto.address
    ? `${dto.address.addressLine1}${dto.address.addressLine2 ? ", " + dto.address.addressLine2 : ""}, ${dto.address.city}, ${dto.address.state}`
    : "Address not available";

  return {
    id: dto.id,
    name: dto.name,
    availableDoctors: docs.length,
    address: addressStr,
    location: dto.location,
    phone: dto.phone,
    hours: "Open 24 Hours",
    timeline: dto.timeline || null,
    isOpenNow: dto.isActive,
    erAvailable: true,
    erWaitTime: "~15 mins",
    facilities: dto.facilities || [],
    totalDoctors: dto.doctors?.meta?.total || docs.length,
    doctors: docs,
  };
}
