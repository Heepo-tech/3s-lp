export default function AboutLoading() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: 'var(--neutral-white)' }}
    >
      {/* Hero Section Skeleton */}
      <div
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: 'var(--primary-cream)' }}
      >
        <div className="max-w-7xl mx-auto text-center animate-pulse">
          <div
            className="h-12 bg-gray-200 rounded w-2/3 mx-auto mb-6"
            style={{ opacity: 0.6 }}
          ></div>
          <div
            className="h-6 bg-gray-200 rounded w-3/4 mx-auto"
            style={{ opacity: 0.4 }}
          ></div>
        </div>
      </div>

      {/* Content Section Skeleton */}
      <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto animate-pulse space-y-12">
          {/* Text content skeleton */}
          <div className="space-y-4">
            <div
              className="h-6 bg-gray-200 rounded w-full"
              style={{ opacity: 0.4 }}
            ></div>
            <div
              className="h-6 bg-gray-200 rounded w-5/6"
              style={{ opacity: 0.4 }}
            ></div>
            <div
              className="h-6 bg-gray-200 rounded w-4/5"
              style={{ opacity: 0.4 }}
            ></div>
          </div>

          {/* Stats skeleton */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map(i => (
              <div
                key={i}
                className="text-center p-6 rounded-xl"
                style={{
                  backgroundColor: 'var(--primary-cream)',
                  opacity: 0.6,
                }}
              >
                <div
                  className="h-12 bg-gray-200 rounded w-24 mx-auto mb-2"
                  style={{ opacity: 0.5 }}
                ></div>
                <div
                  className="h-4 bg-gray-200 rounded w-20 mx-auto"
                  style={{ opacity: 0.4 }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
