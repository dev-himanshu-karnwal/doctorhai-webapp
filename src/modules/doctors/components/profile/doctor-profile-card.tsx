import Image from "next/image";

interface DoctorProfileCardProps {
  name: string;
  specialty: string;
  imageUrl: string;
}

export function DoctorProfileCard({
  name,
  specialty,
  imageUrl,
}: DoctorProfileCardProps) {
  return (
    <div className="w-full shrink-0 rounded-[20px] bg-white p-5 text-center shadow-[0_4px_24px_rgba(0,0,0,0.04)] sm:rounded-[32px] sm:p-8 lg:w-[320px]">
      <div className="relative mx-auto mb-5 h-[120px] w-[120px] sm:mb-6 sm:h-[140px] sm:w-[140px]">
        <div className="h-full w-full overflow-hidden rounded-full border-4 border-[#F8FAFC]">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>
      <h1 className="text-[20px] font-bold text-[#1A2B3D] sm:text-[24px]">
        {name}
      </h1>
      <p className="mt-1 text-[14px] font-semibold text-[#4FB3AA] sm:text-[16px]">
        {specialty}
      </p>
    </div>
  );
}
