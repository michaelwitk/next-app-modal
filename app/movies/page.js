import Link from 'next/link'

const Page = () => {
  return (
    <div className="flex flex-col">
      <Link href="/movies/123">Movie 123</Link>
      <Link href="/movies/456">Movie 456</Link>
      <Link href="/movies/789">Movie 789</Link>
    </div>
  )
}

export default Page
