import Link from 'next/link'

const Page = ({ params: { id } }) => {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-black/80">
      <div className="bg-white p-2">
        <div className="flex justify-end">
          <Link href="/movies">close modal</Link>
        </div>

        <div>modal id={id}</div>
      </div>
    </div>
  )
}

export default Page
