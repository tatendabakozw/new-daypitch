import React, { useState } from "react";
import {
    ChevronDownIcon,
  } from "@heroicons/react/outline";
import { RadioGroup } from "@headlessui/react";

import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Text,
  } from "@chakra-ui/react";
import { data } from "../../data";

const filter_price = [{ name: "High To Low" }, { name: "Low To High" }];

function ExploreLeft({loading}) {
  const [distance, setDistance] = useState(30)
//   const [selected, setSelected] = useState(filter_price[0])
  const [selected_category, setSelecCategory] = useState("category");

  console.log(distance)


  const filter_by_category = () => {
    console.log(selected_category);
  };

  return (
    <>
      <div className="w-1/4 lg:block md:block hidden min-h-screen">
        <div className="flex flex-col items-center">
          <div className=" w-full">
            <div className="border border-gray-200 dark:border-gray-800 rounded p-3 bg-white dark:bg-gray-800 flex-col">
              <span className="flex flex-row items-center mb-4 dark:text-white">
                {/* <XIcon height={20} width={20} /> */}
                <p className="text-gray-700 font-sm dark:text-green-500 font-semibold">
                  Filters
                </p>
                <div className="flex-1 "></div>
                <ChevronDownIcon
                  height={20}
                  width={20}
                  className="text-blue-900"
                />
              </span>

              {/* // select price range */}
              <div className="bg-white z-30 mb-4">
                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Sort by
                  </label>
                  <select
                    id="location"
                    name="location"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none sm:text-sm rounded-md"
                    defaultValue="Price (Low to high)"
                  >
                    {data.filter_options.map((option, index) => (
                      <option key={index}>{option.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="my-8">
                <p className="text-gray-700 font-sm dark:text-green-500 font-semibold">
                  Distance{" "}
                </p>
                <Slider
                  aria-label="slider-ex-1"
                  defaultValue={30}
                  onChange={val=> setDistance(val)}
                >
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
                <Text className="text-sm text-gray-600 ml-2">{distance}km</Text>
              </div>

              <p className="text-gray-700 font-sm dark:text-green-500 font-semibold">
                Categories:
              </p>

              {/* // categories */}
              {!loading ? (
                <div className="w-full py-2 z-10">
                  <div className="w-full max-w-md mx-auto">
                    <RadioGroup
                      value={selected_category}
                      onChange={(e) => {
                        setSelecCategory(e);
                        filter_by_category();
                      }}
                    >
                      <RadioGroup.Label className="sr-only">
                        category
                      </RadioGroup.Label>
                      <div className="space-y-2">
                        {data.categories?.map((category) => (
                          <RadioGroup.Option
                            key={category.name}
                            value={category}
                            className={({ active, checked }) =>
                              `${active ? "" : ""}
                                                        ${
                                                          checked
                                                            ? "text-gray-700 "
                                                            : "bg-white text-gray-700"
                                                        }
                                                    relative rounded px-2 py-2 cursor-pointer flex focus:outline-none`
                            }
                          >
                            {({ active, checked }) => (
                              <>
                                <div className="flex items-center justify-between w-full">
                                  <div className="flex items-center">
                                    <div className="text-sm">
                                      <RadioGroup.Label
                                        as="p"
                                        className={`text-sm ${
                                          checked
                                            ? "text-gray-900 font-semibold"
                                            : "text-gray-500"
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
              ) : (
                <div class="animate-pulse flex flex-col space-x-4">
                  <div class="flex-1 space-y-4 py-1">
                    <div class="space-y-2">
                      <div class="h-4 bg-gray-300 rounded"></div>
                      <div class="h-4 bg-gray-400 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function NewCheckIcon(props) {
    return (
      <svg viewBox="0 0 24 24" fill="none" {...props}>
        <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
        <path
          d="M7 13l3 3 7-7"
          stroke="#059669"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

export default ExploreLeft;
