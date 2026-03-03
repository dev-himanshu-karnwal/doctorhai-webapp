export function CrowdedRoomsCard() {
  return (
    <article className="group flex h-auto min-h-[250px] w-full flex-col rounded-[24px] border border-[#F1F5F9] bg-white p-6 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:min-h-[280px] sm:rounded-[32px] sm:p-8 lg:min-h-[316px] lg:rounded-[40px] lg:p-10">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF8E1] transition-transform duration-300 group-hover:scale-110 sm:mb-8 sm:h-14 sm:w-14">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FFB300"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      </div>
      <h3 className="mb-3 text-[18px] leading-[24px] font-bold text-[#2D3748] transition-colors group-hover:text-[#FFB300] sm:mb-4 sm:text-[20px] sm:leading-[28px]">
        Crowded Rooms
      </h3>
      <p className="text-[15px] leading-[24px] font-normal text-[#718096] sm:text-[16px] sm:leading-[26px]">
        Nobody likes a packed lobby. Reduce congestion and keep everyone safer
        and happier.
      </p>
    </article>
  );
}
