export default function BlogLoading() {
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
            className="h-12 bg-gray-200 rounded w-1/2 mx-auto mb-6"
            style={{ opacity: 0.6 }}
          ></div>
          <div
            className="h-6 bg-gray-200 rounded w-2/3 mx-auto"
            style={{ opacity: 0.4 }}
          ></div>
        </div>
      </div>

      {/* Blog Posts Grid Skeleton */}
      <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div
                key={i}
                className="rounded-xl overflow-hidden border"
                style={{ borderColor: 'var(--neutral-medium)' }}
              >
                {/* Image skeleton */}
                <div
                  className="h-48 bg-gray-200"
                  style={{ opacity: 0.4 }}
                ></div>

                {/* Content skeleton */}
                <div className="p-6 space-y-4">
                  {/* Date skeleton */}
                  <div
                    className="h-4 bg-gray-200 rounded w-24"
                    style={{ opacity: 0.3 }}
                  ></div>

                  {/* Title skeleton */}
                  <div
                    className="h-6 bg-gray-200 rounded w-full"
                    style={{ opacity: 0.5 }}
                  ></div>

                  {/* Description skeleton */}
                  <div className="space-y-2">
                    <div
                      className="h-4 bg-gray-200 rounded w-full"
                      style={{ opacity: 0.3 }}
                    ></div>
                    <div
                      className="h-4 bg-gray-200 rounded w-4/5"
                      style={{ opacity: 0.3 }}
                    ></div>
                  </div>

                  {/* Button skeleton */}
                  <div
                    className="h-10 bg-gray-200 rounded w-32"
                    style={{ opacity: 0.4 }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
