export default function TrustBar() {
  return (
    <div className="w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-5 gap-y-1 px-4 py-1.5 text-[11px] font-medium text-[#080808]">
        <span className="flex items-center gap-1">
          <span className="text-green-600 font-bold">✓</span>
          Conventionné CPAM
        </span>
        <span className="hidden text-gray-200 sm:inline" aria-hidden="true">|</span>
        <a
          href="tel:+33767751898"
          className="flex items-center gap-1 hover:underline"
          title="Appeler SPM Taxi"
        >
          ☎ 07 67 75 18 98
        </a>
        <span className="hidden text-gray-200 sm:inline" aria-hidden="true">|</span>
        <span className="flex items-center gap-1">
          <span className="text-[#F59E0B]">★</span>
          4,9/5 Google
        </span>
        <span className="hidden text-gray-200 sm:inline" aria-hidden="true">|</span>
        <span>7j/7 24h/24</span>
      </div>
    </div>
  );
}
