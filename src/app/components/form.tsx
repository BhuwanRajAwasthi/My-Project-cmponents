"use client"
import React, { useState } from 'react'
type TFormData = {
  fullname: string,
  age: string,
  address: string,
  dob: string,
  firstTime: boolean,
  phonenumber: string,
  lastTimeData: string,
  terms: boolean,
}

const FormComponent = () => {
  const [formData, setFormData] = useState<TFormData>()
  const [fullname, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [firstTime, setFirstTime] = useState(true);
  const [phonenumber, setPhonenumber] = useState("");
  const [lastTimeData, setLastTimeData] = useState("");
  const [terms, setTerms] = useState(false);

  const handleSubmit = () => {
    setFormData({
      fullname,
      age,
      address,
      dob,
      firstTime,
      phonenumber,
      lastTimeData,
      terms,
    })
    console.log(formData);
  }

  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <section className='border border-slate-500 rounded-xl p-4 gap-7 flex flex-col'>
        <div>
          <h2 className='font-bold tracking-tight leading-3 text-2xl'>Medical Form</h2>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className='flex flex-col gap-2'>
          <div className='flex justify-between gap-2'>
            <div className='flex flex-col gap-1'>
              <label htmlFor="fullName" className='font-semibold text-sm'>Full Name</label>
              <input
                type='text'
                className='placeholder:p-1 rounded-lg p-1 text-slate-400 text-sm border border-slate-500 placeholder:text-slate-400'
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div className='flex flex-col gap-1 w-[5rem]'>
              <label htmlFor="age" className='font-semibold text-sm'>Age</label>
              <input
                type='text'
                className='placeholder:p-1 rounded-lg p-1 text-slate-400 text-sm border border-slate-500 placeholder:text-slate-400'
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="address" className='font-semibold text-sm'>Birth Date</label>
            <input
              type='date'
              className='placeholder:p-1 rounded-lg p-1 text-slate-400 text-sm border border-slate-500 placeholder:text-slate-400'
              onChange={(e) => setDob(e.target.value)}
              required
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="address" className='font-semibold text-sm'>Address</label>
            <input
              type='text'
              className='placeholder:p-1 rounded-lg p-1 text-slate-400 text-sm border border-slate-500 placeholder:text-slate-400'
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="number" className='font-semibold text-sm'>Phone Number</label>
            <input
              type='text'
              className='placeholder:p-1 rounded-lg p-1 text-slate-400 text-sm border border-slate-500 placeholder:text-slate-400'
              onChange={(e) => setPhonenumber(e.target.value)}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="terms">First time visiting us?</label>
            <div className='flex justify-between'>
              <div className='flex gap-1'>
                <label htmlFor="terms">Yes</label>
                <input
                  type="radio"
                  name='freq'
                  onClick={() => setFirstTime(true)}
                />
              </div>
              <div className='flex gap-1'>
                <label htmlFor="terms">No</label>
                <input
                  type="radio"
                  name='freq'
                  onClick={() => setFirstTime(false)}
                />
              </div>
            </div>
          </div>
          {
            !firstTime && (
              <div className='flex flex-col gap-1'>
                <label htmlFor="lasttime" className='font-semibold text-sm'>Last Visit Date</label>
                <input type='date' className='placeholder:p-1 rounded-lg p-1 text-slate-400 text-sm border border-slate-500 placeholder:text-slate-400' />
              </div>
            )
          }
          <div className='flex items-center gap-2'>
            <input
              type="checkbox"
              onChange={() => setTerms(true)}
            />
            <label htmlFor="terms">I agree to terms and aggrement</label>
          </div>
          <div className='w-full flex justify-center mt-3'>
            <button
              type='submit'
              className='w-full p-2 font-bold text-slate-50 bg-blue-500 rounded-md hover:bg-blue-400'
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}
