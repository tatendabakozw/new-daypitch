import React, { useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { PaperClipIcon } from "@heroicons/react/solid";
import ContractsLayout from "../../layouts/ContractsLayout/ContractsLayout";
import { useDispatch, useSelector } from "react-redux";
import { get_all_user_contracts_Action } from "../../redux/actions/contractActions";
import { Spinner } from "@chakra-ui/spinner";
import jsPDF from "jspdf";
import * as htmlToImage from "html-to-image";

function MyJobs() {
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userCredsSignIn);
  const { userInfo } = userSignin;
  const user_contracts = useSelector((state) => state.all_user_contracts);
  const { loading, contracts } = user_contracts;

  useEffect(() => {
    dispatch(get_all_user_contracts_Action(userInfo?.user?.uid));
  }, [dispatch, userInfo?.user?.uid]);

  const onButtonClick = () => {
    htmlToImage
      .toPng(document.getElementById("my-node"), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "my-image-name.jpeg";
        const pdf = new jsPDF();
        const imgProps = pdf.getImageProperties(dataUrl);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("download.pdf");
      });
  };

  if (loading) {
    return (
      <ContractsLayout>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-sm hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span>Loading...</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-500">
                <div className="flex flex-col w-full items-center my-8">
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.900"
                    size="xl"
                  />
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </ContractsLayout>
    );
  }

  return (
    <ContractsLayout>
      <>
      {
        contracts?.length < 1 ? (
          <p className="mb-4 text-center text-gray-700 text-lg">You have no contracts at the moment</p>
        ) :(
          <>
          {contracts?.map((contract, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <div id="my-node" className="w-full">
                  <Disclosure.Button className="myPage flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-sm hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                    <span>{contract.contracts.title !== '' ? contract.contracts.title : 'No Title'}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-blue-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <div className="bg-white overflow-hidden sm:rounded-lg">
                      <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          Contract Details
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                          Details about this contract
                        </p>
                      </div>
                      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                        <dl className="sm:divide-y sm:divide-gray-200">
                          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                              Contractor name
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              {contract.contracts.firstname} {contract.contracts.lastname}
                            </dd>
                          </div>
                          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                              Contract title
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {contract.contracts.title !== '' ? contract.contracts.title : 'No Title'}
                            </dd>
                          </div>
                          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                              Contract status
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {contract.contracts.status}
                            </dd>
                          </div>
                          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                              Email address
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              {contract.contracts.email}
                            </dd>
                          </div>
                          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                              Expected earnings
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              ${contract.contracts.amount}  
                            </dd>
                          </div>
                          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                              Details
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {contract.contracts.details}
                            </dd>
                          </div>
                          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                              Download contract?
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                  <div className="w-0 flex-1 flex items-center">
                                    <PaperClipIcon
                                      className="flex-shrink-0 h-5 w-5 text-gray-400"
                                      aria-hidden="true"
                                    />
                                    <span className="ml-2 flex-1 w-0 truncate">
                                      resume_back_end_developer.pdf
                                    </span>
                                  </div>
                                  <div className="ml-4 flex-shrink-0">
                                    <span
                                      onClick={onButtonClick}
                                      href="/"
                                      className="font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                      Download
                                    </span>
                                  </div>
                                </li>
                              </ul>
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
          </>
        )
      }
      </>
    </ContractsLayout>
  );
}

export default MyJobs;
