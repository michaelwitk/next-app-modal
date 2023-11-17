'use client'

import { useRouter } from 'next/navigation'

const LinkBack = ({ href }) => {
  const router = useRouter()
  return (
    <a
      className="active:scale-50 transition"
      href="/movies"
      onClick={(event) => {
        event.preventDefault()
        // router.back() // works but not ideal
        router.push('/movies') // <Link> issue, renders
      }}
    >
      close modal
    </a>
  )
}

const Page = ({ params: { id } }) => {
  console.log('render app/movies/@modal/[id]/page', { id })
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-black/80">
      <div className="bg-white p-2">
        <div className="flex justify-end">
          <LinkBack href="/movies">close modal</LinkBack>
        </div>

        <div>modal id={id}</div>
      </div>
    </div>
  )
}

export default Page
