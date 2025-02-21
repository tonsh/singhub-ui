import React from 'react';
import './App.css'
import './singhub.css'
import { DatePickerWithRange } from './singhub/search/DatePickerWithRang';
import { TimeSlot } from './singhub/search/TimeSlot';

function App() {

  return (
    <>
      <div className="sticky mx-0 top-0 right-0 left-0 w-screen border-b border-gray-300 bg-white pt-10 pb-4">
        <div className="max-w-xl mx-auto">
          <div className="flex pb-4">
            <div className="flex items-center rounded-full rounded-r-none border border-r-0 border-gray-300 focus-within:ring-gray-400 focus-within:border-gray-400">
              <div className="flex items-center px-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="size-5 stroke-gray-600 stroke-[1.5]">
                  <path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <input type="text" placeholder="Search by keyword" className="p-2 text-gray-500 placeholder-gray-400 outline-none" />
              </div>

              <div className="flex items-center px-4 border-l border-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="w-5 h-6 stroke-gray-600 stroke-[1.5]">
                  <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <input type="text" placeholder="Enter postal code" className="p-2 text-gray-500 placeholder-gray-400 outline-none" />
              </div>
            </div>

            <button className="base-button text-white font-semibold rounded-l-none !rounded-r-full border-[1.5] !border-gray-300 !bg-red-400 hover:!bg-red-500 active:!bg-red-600">Search</button>

            <button className="base-button !bg-white !px-2 ml-1 text-gray-600 rounded-full !border-gray-300 hover:!bg-gray-200 active:!bg-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="size-6 stroke-current stroke-[1.5]">
                <path d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
              </svg>
            </button>
          </div>

          {/* <div className="flex items-center w-62 border mb-4 rounded-md shadow-sm border-gray-300 focus-within:ring-gray-400 focus-within:border-gray-400">
            <input type="text" placeholder="20/02/2025" className="w-1/2 p-2 border-0 rounded-md text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-0" />
            <span className="text-gray-500">&rarr;</span>
            <input type="text" placeholder="20/02/2025" className="w-1/2 p-2 border-0 rounded-md text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-0" />
            <span className="mr-2 text-gray-500 hover:!border-gray-300 active:!border-gray-300">
              <svg fill="none" viewBox="0 0 24 24" className="size-5 stroke-current stroke-1.5">
                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </span>
          </div> */}

          <div className="flex space-x-4">
            <DatePickerWithRange id="search-date-range" className="mb-4 w-65" />
            <TimeSlot className="mb-4 w-75" />
          </div>

          {/* <button>Apply</button> */}

          <div className="flex space-x-4 text-sm">
            <span className="bg-gray-400 hover:bg-blue-500 text-white px-2 py-1 rounded-full font-medium">Inline Skating</span>
            <span className="bg-gray-400 hover:bg-blue-500 text-white px-2 py-1 rounded-full font-medium">Table Tennis</span>
          </div>
        </div>
      </div>

      <div id="add-chat-btn" className="mx-auto max-w-4xl flex items-end justify-end">
        <div className="fixed bottom-40 p-4 text-white text-lg font-bold bg-red-400 hover:bg-red-500 active:bg-red-600 rounded-full shadow-lg border border-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="size-6 stroke-current stroke-[1.5]">
            <path d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
      </div>

      <div className="py-4">

        {/* <h1 className="font-semibold mb-4">47 results</h1> */}

        <ul>

          {Array.from({ length: 10 }).map((_, index) => (
            // TODO: Add a key to the li, Don't use index as key
            <li key={index} className="bg-white rounded border border-gray-300 p-4 mx-auto max-w-4xl mt-5">
                <h2 className="text-lg font-semibold">Inline Skating (Beginners Level 1) @ Pasir Ris by Edwin Lim (Sat, 615pm)</h2>

                <div className="flex items-center text-gray-600 text-sm text-left mt-3">
                  <span className="flex items-center">
                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="size-6 stroke-current stroke-[1.5]">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M5.905 5h3.418a1 1 0 0 1 .928 .629l1.143 2.856a3 3 0 0 0 2.207 1.83l4.717 .926a2.084 2.084 0 0 1 1.682 2.045v.714a1 1 0 0 1 -1 1h-13.895a1 1 0 0 1 -1 -1.1l.8 -8a1 1 0 0 1 1 -.9z" />
                      <path d="M8 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                      <path d="M16 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    </svg>
                    Inline Skating
                  </span>
                  <span className="mx-1">•</span>
                  <span>From $90.00</span>
                  <span className="mx-1">•</span>
                  <span>4 sessions</span>
                </div>

                <div className="flex items-center space-x-2 my-2">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full flex items-center space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="size-4 stroke-current stroke-[1.5]">
                      <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="size-4 stroke-current stroke-[1.5]">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M10 14m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
                      <path d="M19 5l-5.4 5.4" />
                      <path d="M19 5h-5" />
                      <path d="M19 5v5" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="size-4 stroke-current stroke-[1.5]">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 9m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
                      <path d="M12 14v7" />
                      <path d="M9 18h6" />
                    </svg>
                    <span>20 / 20 available</span>
                  </span>

                  <span className="bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full flex items-center space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="size-4 stroke-current stroke-[1.5]">
                      <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="size-4 stroke-current stroke-[1.5]">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M10 14m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
                      <path d="M19 5l-5.4 5.4" />
                      <path d="M19 5h-5" />
                      <path d="M19 5v5" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="size-4 stroke-current stroke-[1.5]">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 9m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
                      <path d="M12 14v7" />
                      <path d="M9 18h6" />
                    </svg>
                    <span>21 / 20 unavailable</span>
                  </span>

                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full flex items-center space-x-1">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="size-4 stroke-current stroke-[1.5]">
                      <path d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg> */}
                    {/* <svg className="size-4" viewBox="0 0 16 16">
                      <circle className="text-gray-200 stroke-current stroke-3" cx="8" cy="8" r="5" fill="none"></circle>
                      <circle className="text-yellow-800 stroke-current stroke-6" cx="8" cy="8" r="5" fill="none" strokeDasharray="25.12" strokeDashoffset="7.54"></circle>
                    </svg> */}
                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 stroke-current stroke-[1.5]">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M4 7a1 1 0 0 1 1 1v8a1 1 0 0 1 -2 0v-3h-1a1 1 0 0 1 0 -2h1v-3a1 1 0 0 1 1 -1" />
                      <path d="M20 7a1 1 0 0 1 1 1v3h1a1 1 0 0 1 0 2h-1v3a1 1 0 0 1 -2 0v-8a1 1 0 0 1 1 -1" />
                      <path d="M16 5a2 2 0 0 1 2 2v10a2 2 0 1 1 -4 0v-4h-4v4a2 2 0 1 1 -4 0v-10a2 2 0 1 1 4 0v4h4v-4a2 2 0 0 1 2 -2" />
                    </svg>
                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="size-4 stroke-current stroke-[1.5]">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M4 7a1 1 0 0 1 1 1v8a1 1 0 0 1 -2 0v-3h-1a1 1 0 0 1 0 -2h1v-3a1 1 0 0 1 1 -1" />
                      <path d="M20 7a1 1 0 0 1 1 1v3h1a1 1 0 0 1 0 2h-1v3a1 1 0 0 1 -2 0v-8a1 1 0 0 1 1 -1" />
                      <path d="M16 5a2 2 0 0 1 2 2v10a2 2 0 1 1 -4 0v-4h-4v4a2 2 0 1 1 -4 0v-10a2 2 0 1 1 4 0v4h4v-4a2 2 0 0 1 2 -2" />
                    </svg>
                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="size-4 stroke-current stroke-[1.5]">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M4 7a1 1 0 0 1 1 1v8a1 1 0 0 1 -2 0v-3h-1a1 1 0 0 1 0 -2h1v-3a1 1 0 0 1 1 -1" />
                      <path d="M20 7a1 1 0 0 1 1 1v3h1a1 1 0 0 1 0 2h-1v3a1 1 0 0 1 -2 0v-8a1 1 0 0 1 1 -1" />
                      <path d="M16 5a2 2 0 0 1 2 2v10a2 2 0 1 1 -4 0v-4h-4v4a2 2 0 1 1 -4 0v-10a2 2 0 1 1 4 0v4h4v-4a2 2 0 0 1 2 -2" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 stroke-current stroke-[1.5]">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="size-4 stroke-current stroke-[1.5]">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873l-6.172 -3.245z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="size-4 stroke-current stroke-[1.5]">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873l-6.172 -3.245z" />
                    </svg>

                    <span>Moderate intensity</span>
                  </span>

                  <svg className="size-6" viewBox="0 0 24 24">
                    <circle className="text-gray-200 stroke-current stroke-3" cx="12" cy="12" r="6" fill="none"></circle>
                    <circle className="text-blue-400 stroke-current stroke-6" cx="12" cy="12" r="6" fill="none" strokeDasharray="37.7" strokeDashoffset="11.3"></circle>
                  </svg>
                </div>

                <div className="flex items-center text-gray-600 text-sm space-x-2 pt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="size-4 stroke-current stroke-[1.5]">
                  <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <span>Pasir Ris Sport Centre</span>
                </div>

                <div className="flex items-center text-gray-600 text-sm space-x-2 pt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="size-4 stroke-current stroke-[1.5]">
                    <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                  </svg>
                  <span>Starts Sat, 22 Feb</span>
                </div>
                <div className="flex items-center text-gray-600 text-sm space-x-2 pt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="size-4 stroke-current stroke-[1.5]">
                    <path d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span>6:15 pm - 7:15 pm</span>
                </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
