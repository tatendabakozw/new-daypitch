import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function NavbarDropdown({title, options}) {
  const [authenticated, setAuthenticated] = useState(false)

  return (
    <div className="z-0">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium ">
            {title}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
            <>
              {
                authenticated ? (
                  <>
                     {
                        options.map(option =>(
                          <>
                            {option.authenticated ? (<Menu.Item key={option.id}>
                            {({ active }) => (
                              <button className={`${'hover:bg-gray-100 text-gray-900 '} group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                                  {option.name}
                              </button>
                              )}
                            </Menu.Item>) : null}
                              </>
                        ))
                      }
                  </>
                ) : (<>
                  {
                      options.map(option =>(
                        <>
                          {!option.authenticated ? (<Menu.Item key={option.id}>
                        {({ active }) => (
                        <button className={`${'hover:bg-gray-100 text-gray-900 '} group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                            {option.name}
                        </button>
                        )}
                    </Menu.Item>) : null}
                        </>
                      ))
                    }
                </>)
              }
             </>

              <div className="border-b border-gray-200 my-2"></div>
              <Menu.Item>
                {({ active }) => (
                  <button className={`${'hover:bg-gray-100 text-gray-900 '} group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
           
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}