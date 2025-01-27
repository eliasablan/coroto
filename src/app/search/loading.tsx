export default function Loading() {
  return (
    <ul className="col-span-1 mt-4 grid grid-flow-row gap-1 md:col-span-2 md:grid-cols-2 lg:grid-cols-3">
      {Array(12)
        .fill(0)
        .map((_, index) => {
          return (
            <li
              key={index}
              className="aspect-square w-full animate-pulse rounded-lg bg-muted transition-opacity"
            />
          )
        })}
    </ul>
  )
}
