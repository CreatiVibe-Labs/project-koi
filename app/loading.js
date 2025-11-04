// Loading component for better UX during data fetching
export default function Loading() {
  return (
    <div className="loading-container min-h-screen flex items-center justify-center">
      <div className="loading-spinner">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#39ff14]"></div>
        <p className="mt-4 text-white">Loading...</p>
      </div>
    </div>
  );
}
