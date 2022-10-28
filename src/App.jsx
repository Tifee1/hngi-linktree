const App = () => {
  return (
    <main className='container max-w-5xl mx-auto grid my-10'>
      <section>
        <img
          src='https://ca.slack-edge.com/T042F7V19Q8-U048G86FJ5Q-d9b51b6be328-512'
          alt='profile'
          className='h-40 w-40 mx-auto rounded-full'
          id='profile__img'
        />
        <p id='twitter' className='text-center text-3xl my-5'>
          @tifee01
        </p>
        <p id='slack' className='hidden'>
          tifee
        </p>
      </section>
      <section className='mt-10'>
        <a
          href='https://training.zuri.team/'
          className='w-full bg-white block text-center capitalize text-xl py-4 mb-3'
          id='btn__zuri'
        >
          zuri team
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
          href='https://training.zuri.team/'
          className='w-full bg-white block text-center capitalize text-xl py-4'
          id='btn__zuri'
        >
          zuri team
        </a>
      </section>
    </main>
  )
}
export default App
