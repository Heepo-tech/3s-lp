export default function Loading() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: 'var(--primary-cream)' }}
    >
      <div className="animate-pulse text-center">
        <div
          className="text-lg font-semibold"
          style={{ color: 'var(--primary-brown)' }}
        >
          Loading...
        </div>
      </div>
    </div>
  )
}
