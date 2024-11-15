import DefaultLayout from '@/layout/DefaultLayout'
import { useState } from 'react';
import { CiImageOn } from 'react-icons/ci';

const SelfAssessment = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  return (
    <DefaultLayout heading='New Self-Assessment'>
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <button>Edit</button>
            <button className='font-extrabold'>Share</button>
          </div>
          <div className="flex gap-4 items-center">
            <label className="inline-flex items-center justify-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <span className="ms-3 mx-4 font-medium text-gray-900 dark:text-gray-300">Survey is active</span>
              <div className="relative border w-11 h-6 bg-slate-600  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[1px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-400"></div>
            </label>
          </div>
        </div>
        <div className=" mt-5">
          {/* Cover Image Section */}
          <div className="p-6 bg-white border border-gray-200 shadow-md rounded-lg">
            <h2 className="text-lg font-bold mb-4">Share Assessment</h2>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Add Cover Image (Optional):</label>
              <div className="max-w-80 text-black h-64 bg-blue-200 shadow-sm rounded-md p-4 flex flex-col items-center justify-center">
                <CiImageOn className='text-6xl text-blue-600' />
                <span className="text-gray-400">Drag your image here, or browse</span>
              </div>
            </div>
          </div>

          {/* Publish Time Section */}
          <div className="my-6 p-6 bg-white border border-gray-200 shadow-md rounded-lg">
            <h3 className="text-lg font-bold mb-2">Publish Time (Optional)</h3>
            <div className="grid grid-cols-2 gap-4 max-w-xl">
              <div>
                <label className="block text-sm font-medium mb-1">Add Date:</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full border bg-gray-300 max-w-md rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Add Time:</label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full border bg-gray-300 max-w-md rounded-md p-2"
                />
              </div>
            </div>
          </div>

          {/* End Page Section */}
          <div className='p-6 bg-white border border-gray-200 shadow-md rounded-lg'>
            <h3 className="text-lg font-bold mb-2">End Page</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Heading Text:</label>
              <input
                type="text"
                placeholder="You have completed this assessment"
                className="w-full bg-slate-300 max-w-xl rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Body Text:</label>
              <textarea
                placeholder="Thank you for taking the time to answer this assessment."
                className="w-full bg-slate-300 max-w-xl rounded-md p-2"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex justify-end gap-4">
            <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md">Preview</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Send Assessment</button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default SelfAssessment