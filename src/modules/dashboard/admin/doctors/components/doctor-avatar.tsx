import Image from "next/image";
import { DoctorSilhouetteIcon } from "../icons";

interface DoctorAvatarProps {
  color?: string;
  grayscale?: boolean;
  profilePhotoUrl?: string | null;
  name?: string;
}

/**
 * Validates if a string is a valid URL or a path for Next.js Image
 */
const isValidUrl = (url: string | null | undefined): boolean => {
  if (!url || typeof url !== "string" || url.trim() === "" || url === "string")
    return false;
  return (
    url.startsWith("http") || url.startsWith("https") || url.startsWith("/")
  );
};

export function DoctorAvatar({
  color = "#0D9488",
  grayscale = false,
  profilePhotoUrl,
  name,
}: DoctorAvatarProps) {
  const hasValidPhoto = isValidUrl(profilePhotoUrl);

  return (
    <div
      className="relative flex flex-shrink-0 items-end justify-center overflow-hidden"
      style={{
        width: 100,
        height: 100,
        borderRadius: "50%",
        background: hasValidPhoto
          ? "#F3F4F6"
          : grayscale
            ? "linear-gradient(160deg, #d1d5db 0%, #e5e7eb 100%)"
            : `linear-gradient(160deg, ${color} 0%, ${color}99 100%)`,
      }}
    >
      {hasValidPhoto ? (
        <Image
          src={profilePhotoUrl as string}
          alt={name || "Doctor"}
          fill
          className="h-full w-full object-cover"
        />
      ) : (
        <DoctorSilhouetteIcon color={color} grayscale={grayscale} />
      )}
    </div>
  );
}
