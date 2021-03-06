<div className="lg:px-16 md:px-8 px-4 pt-32">
            <div className="flex flex-row justify-between gap-16">
                <div className="lg:w-1/4 md:w-1/4 w-0 lg:block md:block hidden min-h-screen">
                    <div className="flex flex-col items-center">
                    <div className=" w-full">
                        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-3 bg-white dark:bg-gray-800 lg:flex md:hidden hidden flex-col">
                            <span className="flex flex-row items-center mb-4 dark:text-white">
                                {/* <XIcon height={20} width={20} /> */}
                                <p className="text-gray-700 font-sm dark:text-green-500 font-semibold">Filters</p>
                                <div className="flex-1 "></div>
                                <ChevronDownIcon height={20} width={20} className="text-blue-900" />
                            </span>
                            
                            {/* // select price range */}
                            <div className="bg-white z-30 mb-4">
                                <Listbox value={selected} onChange={setSelected}>
                                    <div className="relative mt-1">
                                    <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg border border-gray-300 focus:outline-none cursor-pointer sm:text-sm">
                                        <span className="block truncate">{selected.name}</span>
                                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                        <SelectorIcon
                                            className="w-5 h-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                        </span>
                                    </Listbox.Button>
                                    <Transition
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-lg shadow border border-gray-300 max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {filter_price.map((person, personIdx) => (
                                            <Listbox.Option
                                            key={personIdx}
                                            className={({ active }) =>
                                                `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                                                    select-none relative py-2 pl-10 pr-4 hover:bg-gray-200 cursor-pointer`
                                            }
                                            value={person}
                                            >
                                            {({ selected, active }) => (
                                                <>
                                                <span
                                                    className={`${
                                                    selected ? 'font-medium' : 'font-normal'
                                                    } block truncate`}
                                                >
                                                    {person.name}
                                                </span>
                                                {selected ? (
                                                    <span
                                                    className={`${
                                                        active ? 'text-amber-600' : 'text-amber-600'
                                                    }
                                                            absolute inset-y-0 left-0 flex items-center pl-3`}
                                                    >
                                                    <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                                </>
                                            )}
                                            </Listbox.Option>
                                        ))}
                                        </Listbox.Options>
                                    </Transition>
                                    </div>
                                </Listbox>
                            </div>

                            <p className="text-gray-700 font-sm dark:text-green-500 font-semibold">Categories:</p>
                            
                            {/* // categories */}
                            {
                                !loading ? (
                                    <div className="w-full py-2">
                                        <div className="w-full max-w-md mx-auto">
                                            <RadioGroup value={selected_category} onChange={setSelecCategory}>
                                            <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
                                            <div className="space-y-2">
                                                {categories?.map((category) => (
                                                <RadioGroup.Option
                                                    key={category.name}
                                                    value={category}
                                                    className={({ active, checked }) =>
                                                    `${active ? '' : ''}
                                                        ${checked ? 'text-gray-700 ' : 'bg-white text-gray-700'}
                                                    relative rounded-lg px-2 py-2 cursor-pointer flex focus:outline-none`
                                                }>
                                                    {({ active, checked }) => (
                                                    <>
                                                        <div className="flex items-center justify-between w-full">
                                                        <div className="flex items-center">
                                                            <div className="text-sm">
                                                            <RadioGroup.Label
                                                                as="p"
                                                                className={`text-sm ${
                                                                checked ? 'text-gray-900 font-semibold' : 'text-gray-500'
                                                                }`}
                                                            >
                                                                {category.name}
                                                            </RadioGroup.Label>
                                                            </div>
                                                        </div>
                                                        {checked && (
                                                            <NewCheckIcon className="w-6 h-6" />
                                                        )}
                                                        </div>
                                                    </>
                                                    )}
                                                </RadioGroup.Option>
                                                ))}
                                            </div>
                                            </RadioGroup>
                                        </div>
                                    </div>
                                ):(
                                    <div class="animate-pulse flex flex-col space-x-4">
                                        <div class="flex-1 space-y-4 py-1">
                                            <div class="space-y-2">
                                                <div class="h-4 bg-gray-300 rounded"></div>
                                                <div class="h-4 bg-gray-400 rounded w-5/6"></div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>  
                    </div>

                </div>

                {/* //middle row */}
                <div className="lg:w-2/4 md:w-3/4 w-full min-h-screen">
                    <div className="w-full flex flex-col">
                        <div className="search bg-white flex flex-row items-center w-full rounded-lg border border-gray-200 overflow-hidden mb-4">
                            <input 
                                type="text" 
                                className="bg-white border-none outline-none p-2 flex-1" 
                                placeholder="search" />
                            <span className="bg-blue-900 p-4 cursor-pointer hover:bg-blue-800 rounded-lg">
                                <SearchIcon height={20} width={20} className="text-white" />
                            </span>
                        </div>
                        <div className="md:flex hidden flex-row items-center justify-between p-8">
                            <p className="flex-1 text-gray-700 font-semibold">Sellers</p>
                            <div className="flex flex-row items-center">
                                <ViewGridIcon  
                                    height={20} width={20} 
                                    onClick={()=> setGridView(true)}
                                    className={`${grid_view ? "text-blue-500" : "text-gray-500" } mr-4 cursor-pointer`} />
                                <FormatListBulletedIcon 
                                    fontSize="small"
                                    onClick={()=> setGridView(false)} 
                                    className={`${grid_view ? "text-gray-500" : "text-blue-500" } mr-4 cursor-pointer`} />
                            </div>
                        </div>
                        <div >
                            {
                                all_services?.map(service=>(
                                    <>
                                        {grid_view ? (<div className="sellers grid md:grid-cols-2 grid-cols-1 gap-16 items-center" key={service._id}>
                                        <ExploreGridItem 
                                            key={service._id}
                                            className="col-span-1"
                                            verified={service.verified}
                                            category={service.category}
                                            price={service.price_range}
                                            rating={service.rating}
                                            tags={service.tags}
                                            propic={service.picture}
                                            businessname={service.username}
                                            description={service.description}
                                            id={service._id}
                                        />
                                        </div>):(
                                            <div key={service._id} className="flex flex-col">
                                                <ExploreListItem 
                                                    key={service._id}
                                                    className="col-span-2"
                                                    verified={service.verified}
                                                    category={service.category}
                                                    price={service.price_range}
                                                    rating={service.rating}
                                                    tags={service.tags}
                                                    propic={service.picture}
                                                    businessname={service.username}
                                                    description={service.description}
                                                    id={service._id}
                                                />
                                        </div>
                                    )}
                                    </>
                                ))
                            }
                        </div>
                    </div>
                </div>

                {/* right column */}
                <div className="lg:w-1/4 lg:block md:hidden hidden min-h-screen w-full flex-col">
                    {
                        userInfo ? (
                            <div className="w-full flex flex-col">
                                <div className="flex flex-row items-center mb-8">
                                    <div className="h-12 w-12 bg-white rounded-full overflow-hidden mr-2">
                                        <img src={userInfo?.user?.photoURL} alt="user_pic" className="object-contain" />
                                    </div>
                                    <p className="text-gray-700 font-semibold">My Account</p>
                                </div>
                                <span className="bg-blue-900 text-sm p-2 text-white text-center self-center w-2/3 hover:bg-blue-800 cursor-pointer">Upgrade account</span>
                            </div>
                        ):(
                            <div>
                                <p>Login</p>
                            </div>
                        )
                    }
                </div>

            </div>
            </div>
            <div className="py-24 flex flex-col items-center">
                
            </div>