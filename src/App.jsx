import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreditCardIcon, WalletIcon } from '@heroicons/react/16/solid'
import { GoChevronDown } from "react-icons/go";
import { AiTwotoneBank } from "react-icons/ai";

function App() {
  return (
    <div className="w-full min-h-screen flex p-6 pb-100 justify-center" style={{ background: '#323138' }}>
      <div className='w-full max-w-lg'>
        <div className='mx-auto w-md'>
          <p className='text-white mt-4 text-xs'>Paying to</p>
          <div className='text-orange-500 font-semibold text-xl'>homefood</div>
        </div>

        <div className='w-[500px] relative mt-4 mx-auto bg-white max-w-md rounded-2xl shadow-xl pb-4 z-50'>
          <p className='text-gray-800 text-base font-medium text-xl px-6 pt-4'>Hi Prasad Naik,</p>
          <p className='text-gray-600 text-md mt-2 px-6'>7405553438</p>

          <div className='px-6'>
            <hr className='my-4 border-gray-200' />
          </div>

          <div className='flex items-center justify-between mb-4  px-6'>
            <p className='text-sm text-gray-500'>
              Order Order12312 orderNumber
            </p>
            <button className='text-sm text-gray-500 flex items-center gap-1'>View order
              <GoChevronDown className='w-4 h-4' />
            </button>
          </div>

          <div className='space-y-2  px-6'>
            <div className='flex justify-between text-sm'>
              <span className='text-black font-medium text-md'>Order Value</span>
              <span className='text-black font-medium'>₹5,00,000.00</span>
            </div>

            <div className='flex justify-between text-sm'>
              <span className='text-gray-500'>Discount</span>
              <span className='text-gray-800 text-xs font-medium'>₹2,000.00</span>
            </div>
          </div>

          <div className='flex justify-between mt-3 mb-4'>
            <span></span>
            <span className='inline-flex items-center gap-1 bg-orange-100 text-orange-500 text-[12px] font-medium pr-3 pl-2 py-1 rounded-bl-2xl rounded-tl-2xl '>
              <img src="/percentage.png" alt="percetage" className='w-5 h-5' />
              Total saving of 0.4% on this order
            </span>
          </div>

          <div className='px-6'>
            <hr className='my-4 border-gray-200' />
          </div>

          <div className='flex justify-between text-sm px-6'>
            <span className='text-black text-[16px] font-semibold'>Payable Amount</span>
            <span className='text-gray-800 text-[16px] font-medium'>₹4,98,000.00</span>
          </div>
        </div>

        <div style={{ background: '#f4f4f5' }} className='w-[500px] rounded-3xl shadow-xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-10 md:-translate-y-30 z-10'>
          <div className='text-gray-600 text-base font-medium text-xs px-8 pt-45'>Select Payment Method</div>

          <div className='bg-white flex items-center justify-between px-8 py-5 mt-5 rounded-xl border-b shadow-sm border-gray-200 mx-8'>
            <div className='flex items-center gap-4'>
              <img src="/upi.jpg" alt="upi" className='w-10 h-10 border border-gray-200 rounded-full p-1' />
              <span>UPI</span>
            </div>
            <GoChevronDown className='w-8 h-8 text-gray-400' />
          </div>

          <div className='bg-white flex items-center justify-between px-8 py-5 mt-5 rounded-xl border-b shadow-sm border-gray-200 mx-8'>
            <div className='flex items-center gap-4'>
              <WalletIcon className='w-10 h-10 text-gray-600 border border-gray-200 rounded-full p-2' />
              <span>Wallet</span>
            </div>
            <GoChevronDown className='w-8 h-8 text-gray-400' />
          </div>

          <div className='bg-white flex items-center justify-between px-8 py-5 mt-5 rounded-xl border-b shadow-sm border-gray-200 mx-8'>
            <div className='flex items-center gap-4'>
              <CreditCardIcon className='w-10 h-10 text-gray-600 border border-gray-200 rounded-full p-2' />
              <span>Debit/Credit Card</span>
            </div>
            <GoChevronDown className='w-8 h-8 text-gray-400' />
          </div>

          <div className='bg-white flex items-center justify-between px-8 py-5 mt-5 rounded-xl border-b shadow-sm border-gray-200 mx-8'>
            <div className='flex items-center gap-4'>
              <AiTwotoneBank className='w-8 h-8 text-gray-600 border border-gray-200 rounded-full p-1' />
              <span>Net Banking</span>
            </div>
            <GoChevronDown className='w-8 h-8 text-gray-400' />
          </div>

          <div className='flex justify-center items-center gap-2 mt-2'>
            <span className='text-sm text-gray-500'>Powered by</span>
            <img src="https://swiftprepay-75s86whln-goswift.vercel.app/assets/swiftpay.svg" alt="swift" className='w-30 h-10' />
          </div>

          <button className='mt-4 w-full cursor-pointer text-white bg-black hover:bg-gray-600 font-medium text-lg px-10 py-6 text-center'>
            PROCEED TO PAY
          </button>
        </div>


        <div style={{ height: '210px' }}>
        </div>
      </div>
    </div>
  )
}

export default App
