import { useState } from 'react'
import { toast } from 'react-toastify'

const Contact = () => {
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
    message: '',
    check: 'false',
  })

  const handleSubmit = (e) => {
    const { first_name, last_name, email, message } = user

    e.preventDefault()
    if (!first_name || !last_name || !email || !message) {
      toast.error('Please fill all input values')
      return
    }
    toast.success('Form Submitted')
    setUser({
      first_name: '',
      last_name: '',
      email: '',
      message: '',
      check: 'false',
    })
  }

  const handleChange = (e) => {
    const name = e.target.id
    const value = e.target.value
    setUser({ ...user, [name]: value })
  }

  return (
    <main className='w-[400px] md:w-[90vw] md:max-w-2xl mx-auto grid my-10 px-4'>
      <h2 className='mb-4'>contact me</h2>
      <p className='text-base mb-12'>
        Hi there, contact me to ask me about anything you have in mind
      </p>

      <div>
        <form onSubmit={handleSubmit}>
          <div className='md:grid grid-cols-2 gap-4'>
            <div>
              <label htmlFor='first_name' className='capitalize'>
                first name
              </label>
              <input
                type='text'
                id='first_name'
                className='block w-full  bg-transparent border border-black rounded-md my-2 py-1 px-2 placeholder:text-black/50'
                placeholder='Enter Your First Name'
                value={user.first_name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor='last_name' className='capitalize'>
                last name
              </label>
              <input
                type='text'
                id='last_name'
                className='block w-full  bg-transparent border border-black rounded-md my-2 py-1 px-2 placeholder:text-black/50'
                placeholder='Enter Your Last Name'
                value={user.last_name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor='email' className='capitalize'>
              email
            </label>
            <input
              type='email'
              id='email'
              className='block w-full  bg-transparent border border-black rounded-md my-2 py-1 px-2 placeholder:text-black/50'
              placeholder='youremail@email.com'
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='email' className='capitalize'>
              message
            </label>
            <textarea
              id='message'
              cols='10'
              rows='5'
              placeholder='Send me a message and i will reply as soon as possible '
              className='block w-full  bg-transparent border border-black rounded-md my-2 py-1 px-2 placeholder:text-black/50 resize-none'
              value={user.message}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type='checkbox'
              id='check'
              className='mr-2 w-[20px] h-[20px]'
            />
            You agree to providing your data to Boluwatife who may contact you
          </div>
          <button
            id='btn__submit'
            type='submit'
            className='bg-black text-white px-4 py-2 uppercase tracking-widest text-xl mt-4 rounded-md w-full hover:bg-black/70 transition-all ease-linear duration-[0.3s]'
          >
            send message
          </button>
        </form>
      </div>
    </main>
  )
}
export default Contact
