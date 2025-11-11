import Image from 'next/image'

const Homepage = () => {
  return (
    <div className='relative aspect-[3/1] mg-12'>
      <Image src="/featured.png" alt="KernelKart Logo" fill />
    </div>
  )
}

export default Homepage