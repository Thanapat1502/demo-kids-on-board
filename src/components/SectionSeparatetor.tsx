export const SectionSeparator = () => {
  return (
    <div className="py-12 relative bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-200 to-blue-300"></div>
          <div className="px-8">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
            </div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-blue-300 via-blue-200 to-transparent"></div>
        </div>
      </div>
    </div>
  )
}