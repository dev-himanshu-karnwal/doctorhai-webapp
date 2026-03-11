import Image from "next/image";

export function HospitalCardHeader({
  isVerified,
  name,
  imageUrl,
}: {
  isVerified: boolean;
  name: string;
  imageUrl?: string;
}) {
  return (
    <>
      <div className="mb-3 flex w-full justify-end">
        <span
          className="inline-flex items-center gap-[5px] font-bold"
          style={{
            fontSize: "9.5px",
            letterSpacing: "0.07em",
            color: isVerified ? "#059669" : "#D97706",
            background: isVerified ? "#ECFDF5" : "#FFFBEB",
            padding: "4px 9px",
            borderRadius: 999,
          }}
        >
          <span
            className={`h-[6px] w-[6px] flex-shrink-0 rounded-full ${isVerified ? "bg-[#10B981]" : "bg-[#F59E0B]"}`}
          />
          {isVerified ? "VERIFIED" : "UNVERIFIED"}
        </span>
      </div>

      <div
        className="mb-4 flex items-center justify-center overflow-hidden"
        style={{
          width: 80,
          height: 80,
          borderRadius: 18,
          background: "#F8FAFC",
          border: "1px solid #F1F5F9",
        }}
      >
        {imageUrl ? (
          <Image
            src={imageUrl ?? "/images/hospital.jpg"}
            alt={name}
            width={80}
            height={80}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-[32px] font-extrabold text-[#94A3B8]">
            {name.charAt(0)}
          </span>
        )}
      </div>
    </>
  );
}
