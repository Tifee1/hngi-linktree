const App = () => {
  return (
    <main className='container max-w-5xl mx-auto grid my-10'>
      <btn className='relative cursor-pointer'>
        <img
          src='https://linktree-clone-two.vercel.app/assets/share.035c8a2a.svg'
          alt='share'
          className='absolute top-[5%] left-[75%] border-dotted border-2 border-gray-500 rounded-full p-3 w-18 h-16'
        />
      </btn>
      <section>
        <img
          src='https://ca.slack-edge.com/T042F7V19Q8-U048G86FJ5Q-d9b51b6be328-512'
          alt='profile'
          className='h-40 w-40 mx-auto rounded-full'
          id='profile__img'
        />
        <p id='slack' className='text-center text-xl'>
          @tifee01
        </p>

        <p id='slack' className='hidden'>
          tifee
        </p>
      </section>
      <section className='mt-10'>
        <a
          href='https://twitter.com/tifee01'
          className='w-full bg-white block text-center capitalize text-xl py-4 mb-3'
          id='btn__zuri'
        >
          twitter link
        </a>
        <a
          href='http://books.zuri.team/'
          className='w-full bg-white block text-center capitalize text-xl py-4 mb-3'
          id='books'
        >
          zuri books
          <p className='text-sm pt-2 text-black/70'>
            find books about design and coding
          </p>
        </a>
        <a
          href='https://books.zuri.team/python-for-beginners?ref_id=tifee'
          className='w-full bg-white block text-center capitalize text-xl py-4 mb-3'
          id='book__python'
        >
          python books
          <p className='text-sm pt-2 text-black/70'>
            buy python book from zuri
          </p>
        </a>
        <a
          href='https://background.zuri.team/'
          className='w-full bg-white block text-center capitalize text-xl py-4 mb-3'
          id='pitch'
        >
          background check for coders
          <p className='text-sm pt-2 text-black/70'>
            we help in doing background checks for all your coders
          </p>
        </a>
        <a
          href='https://books.zuri.team/design-rules'
          className='w-full bg-white block text-center capitalize text-xl py-4 mb-3'
          id='pitch'
        >
          Design books
          <p className='text-sm pt-2 text-black/70'>
            zuri helps in designing books for you
          </p>
        </a>
        <div className='flex justify-around w-[40%] mx-auto pt-8 pb-20'>
          <img
            src='https://linktree-clone-two.vercel.app/assets/slack.3d6ca7e6.svg'
            alt='slack'
          />
          <img
            src='https://linktree-clone-two.vercel.app/assets/github.6e0991a3.svg'
            alt='github'
          />
        </div>
      </section>
      <div className='bg-black/70 h-[1px] mt-5'></div>
      <div className='md:flex justify-between px-4 py-7'>
        <img
          src='https://linktree-clone-two.vercel.app/assets/Zuri.Internship_Logo.fcf458d8.svg'
          alt='zuri'
          className='mb-3'
        />
        <p className='mb-3 text-lg'>HNG Internship 9 Frontend Task</p>
        <img
          src='https://linktree-clone-two.vercel.app/assets/I4G.ea8febd0.svg'
          alt='ingressive'
          className='mb-3'
        />
      </div>
    </main>
  )
}
export default App
