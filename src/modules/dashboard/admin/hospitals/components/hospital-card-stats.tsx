export function HospitalCardStats({ name }: { name: string }) {
  return (
    <>
      <h3
        className="mb-1.5 text-center leading-snug font-bold text-gray-900"
        style={{ fontSize: 16 }}
      >
        {name}
      </h3>
    </>
  );
}
