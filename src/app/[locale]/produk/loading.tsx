export default function ProductsLoading() {
  return (
    <div
      className="min-h-screen px-4 py-16"
      style={{ backgroundColor: 'var(--neutral-white)' }}
    >
      {/* Hero Section Skeleton */}
      <div
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 mb-12"
        style={{ backgroundColor: 'var(--primary-cream)' }}
      >
        <div className="max-w-7xl mx-auto text-center animate-pulse">
          <div
            className="h-12 bg-gray-200 rounded w-3/4 mx-auto mb-6"
            style={{ opacity: 0.6 }}
          ></div>
          <div
            className="h-6 bg-gray-200 rounded w-2/3 mx-auto"
            style={{ opacity: 0.4 }}
          ></div>
        </div>
      </div>

      {/* Products Grid Skeleton */}
      <div className="max-w-7xl mx-auto">
        <div className="animate-pulse space-y-8">
          {/* Results count skeleton */}
          <div
            className="h-4 bg-gray-200 rounded w-32"
            style={{ opacity: 0.4 }}
          ></div>

          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div
                key={i}
                className="rounded-2xl border-2 p-6 sm:p-8"
                style={{
                  backgroundColor: 'var(--neutral-white)',
                  borderColor: 'var(--neutral-medium)',
                }}
              >
                {/* Category badge skeleton */}
                <div
                  className="h-6 bg-gray-200 rounded w-24 mb-3"
                  style={{ opacity: 0.4 }}
                ></div>

                {/* Title skeleton */}
                <div
                  className="h-8 bg-gray-200 rounded w-full mb-6"
                  style={{ opacity: 0.5 }}
                ></div>

                {/* Description skeleton */}
                <div className="space-y-2 mb-6">
                  <div
                    className="h-4 bg-gray-200 rounded w-full"
                    style={{ opacity: 0.3 }}
                  ></div>
                  <div
                    className="h-4 bg-gray-200 rounded w-5/6"
                    style={{ opacity: 0.3 }}
                  ></div>
                </div>

                {/* Specs skeleton */}
                <div className="space-y-4 mb-6">
                  <div
                    className="h-4 bg-gray-200 rounded w-32"
                    style={{ opacity: 0.4 }}
                  ></div>
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4].map(j => (
                      <div
                        key={j}
                        className="h-8 bg-gray-200 rounded w-16"
                        style={{ opacity: 0.3 }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
