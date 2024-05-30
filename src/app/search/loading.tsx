export default function Loading() {
  return (
    <ul className="grid grid-flow-row grid-cols-2 gap-4 lg:grid-cols-3">
      {Array(12)
        .fill(0)
        .map((_, index) => {
          return (
            <li
              key={index}
              className="aspect-square animate-pulse bg-muted transition-opacity"
            />
          )
        })}
    </ul>
  )
}
