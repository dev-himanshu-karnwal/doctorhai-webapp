export function BottomSection() {
  return (
    <section className="grid gap-6 lg:grid-cols-2">
      <article className="rounded-2xl bg-gray-900 p-8 text-white">
        <h2 className="mb-2 text-2xl font-bold">Designed for Zero Training</h2>
        <p className="mb-6 text-gray-300">
          Doctors don&apos;t have time to learn complex software. Our
          &quot;Switchboard&quot; interface takes less than 2 seconds to update.
        </p>
        <ul className="flex flex-wrap gap-4">
          <li className="flex items-center gap-2 text-sm">
            <span className="text-lg">⚡</span>
            Lightning Fast
          </li>
          <li className="flex items-center gap-2 text-sm">
            <span className="text-lg">📱</span>
            Any Device
          </li>
        </ul>
      </article>

      <article className="rounded-2xl bg-sky-100 p-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900">My Status App</h2>
        <div className="flex justify-center">
          <div className="rounded-2xl border-4 border-gray-800 bg-white p-6 shadow-lg">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-8 w-8 rounded-full bg-gray-300" />
              <span className="text-sm font-medium text-gray-700">
                User Name
              </span>
            </div>
            <div className="space-y-3">
              <div className="rounded-lg bg-green-600 px-4 py-3 text-center text-sm font-medium text-white">
                Available
              </div>
              <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-center text-sm text-gray-500">
                Busy
              </div>
              <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-center text-sm text-gray-500">
                On Break
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
