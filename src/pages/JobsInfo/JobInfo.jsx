import React, { useState, useCallback } from "react";
import HomeLayout from "../../layouts/HomeLayout/HomeLayout";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  get_single_Job_Action,
  save_single_job_Action,
} from "../../redux/actions/jobsActions";
import Loading from "../../components/loading/loading";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Text,
  Select,
} from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";
import { create_a_proposal_Action } from "../../redux/actions/proposalActions";
import Success from "../../components/alert/Success";
import Error from "../../components/alert/Error";
import { getRandomString } from "../../utils/getRandomString";

export default function JobInfo() {
  let { id } = useParams();
  const get_job = useSelector((state) => state.single_Job);
  const _user = useSelector((state) => state.userCredsSignIn);
  const _proposal = useSelector((state) => state.create_proposal);
  const { create_message, create_loading, create_error } = _proposal;
  const _save_job = useSelector((state) => state.save_job);
  const { save_loading, save_error } = _save_job;
  const { userInfo } = _user;
  const { loading, job } = get_job;
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  // eslint-disable-next-line
  const [pictures, setPictures] = useState([]);
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState("");
  const [payment_period, setPaymentPeriod] = useState();

  const maxSize = 1048576;
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setPictures(acceptedFiles);
  }, []);

  const {
    isDragActive,
    getRootProps,
    getInputProps,
    isDragReject,
    acceptedFiles,
    rejectedFiles,
  } = useDropzone({
    onDrop,
    accept: "image/png, image/jpg, image/jpeg",
    minSize: 0,
    maxSize,
  });
  const isFileTooLarge =
    rejectedFiles?.length > 0 && rejectedFiles[0].size > maxSize;

  useEffect(() => {
    dispatch(get_single_Job_Action(id));
  }, [dispatch, id]);

  const send_proposal = () => {
    dispatch(
      create_a_proposal_Action(
        id,
        message,
        pictures,
        userInfo?.user?.uid,
        amount,
        payment_period,
        getRandomString(8)
      )
    );
  };

  console.log(job)

  const save_job = () => {
    dispatch(save_single_job_Action(id, userInfo?.user?.uid));
  };

  if (loading) {
    return (
      <HomeLayout>
        <Loading />
      </HomeLayout>
    );
  }

  return (
    <HomeLayout>
      <div className="relative min-h-screen bg-gray-100 pt-16">
        <main className="py-10">
          {/* Page header */}
          <div className="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
            <div className="flex items-center space-x-5">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {job?.data?.name}
                </h1>
                <p className="text-sm font-medium text-gray-500">
                  Job Created on{" "}
                  <time dateTime="2020-08-25">
                    {Date(job?.data?.createdAt * 1000).slice(0, 15)}
                  </time>
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
              {!job?._saved.includes(userInfo?.user?.uid) ? (
                <Button
                  onClick={save_job}
                  isLoading={save_loading}
                  type="button"
                  className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                >
                  Save
                </Button>
              ) : (
                <Button
                  onClick={save_job}
                  isLoading={save_loading}
                  type="button"
                  colorScheme="pink"
                  className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded text-gray-700 bg-pink-200 hover:bg-gray-50 focus:outline-none"
                >
                  Remove from Saved
                </Button>
              )}

              <Button
                ref={btnRef}
                colorScheme="blue"
                onClick={onOpen}
                type="button"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-blue-900 hover:bg-blue-800 focus:outline-none"
              >
                Send Proposal
              </Button>
              <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
                size="md"
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>Proposal</DrawerHeader>

                  <DrawerBody>
                    <p className="text-gray-700 text-sm my-2 font-semibold">
                      Type you message
                    </p>
                    <textarea
                      rows={10}
                      placeholder="Type here..."
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full border border-gray-300 rounded p-2 outline-none"
                    />
                    <p className="text-gray-400 text-right text-xs">
                      max: 500 words
                    </p>

                    <p className="text-gray-700 text-sm my-2 font-semibold">
                      What's your offer?
                    </p>
                    {job?.data.period !== '' ? (
                      <div className="sm:col-span-2 mb-8">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Amount to pay
                        </label>
                        <div className="mt-1">
                          <input
                            id="number"
                            name="amount"
                            required
                            onChange={(e) => setAmount(e.target.value)}
                            type="number"
                            className="py-3 px-4 block w-full shadow-sm  border border-gray-300 outline-none rounded-md"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 w-full gap-4">
                        <div>
                          <label
                            htmlFor="first-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Period
                          </label>
                          <div className="mt-1">
                            <Select
                              className="block w-full shadow-sm  border border-gray-300 outline-none rounded-md"
                              placeholder="Select the period"
                              w={"full"}
                              size={"lg"}
                              mb={4}
                              onChange={(e) => setPaymentPeriod(e.target.value)}
                            >
                              <option value="periodic">Hourly</option>
                              <option value="once_off">Weekly</option>
                              <option value="periodic">Monthly</option>
                              <option value="periodic">Yearly</option>
                            </Select>
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="first-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Amount
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="amount"
                              required
                              onChange={(e) => setAmount(e.target.value)}
                              id="first-name"
                              autoComplete="given-name"
                              className="py-3 px-4 block w-full shadow-sm col-span-1 border border-gray-300 outline-none rounded-md"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    <Text className="text-gray-700 text-sm ml-2 mt-4" size="sm">
                      Select any files you want to attach
                    </Text>
                    {/* //for picking up the images */}
                    <ul className="list-group mt-2">
                      {acceptedFiles.length > 0 &&
                        acceptedFiles.map((acceptedFile) => (
                          <li
                            key={acceptedFile.name}
                            className="list-group-item list-group-item-success"
                          >
                            {acceptedFile.name}
                          </li>
                        ))}
                    </ul>
                    <div
                      {...getRootProps()}
                      className="bg-gray-100 text-center text-sm rounded-full p-4 cursor-pointer"
                    >
                      <input {...getInputProps()} />
                      {!isDragActive && "Click here or drop a file to upload!"}
                      {isDragActive &&
                        !isDragReject &&
                        "Drop it like it's hot!"}
                      {isDragReject && "File type not accepted, sorry!"}
                      {isFileTooLarge && (
                        <div className="text-danger mt-2">
                          File is too large.
                        </div>
                      )}
                    </div>
                  </DrawerBody>
                  {create_message && <Success text={create_message} />}
                  {create_error && <Error text={create_error} />}
                  <DrawerFooter>
                    <Button variant="outline" mr={3} onClick={onClose}>
                      Cancel
                    </Button>
                    <Button
                      onClick={send_proposal}
                      colorScheme="blue"
                      isLoading={create_loading}
                    >
                      Send Proposal
                    </Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
          </div>

          <div className="mt-8  mx-auto md::px-8 px-4 lg:max-w-7xl">
            <div className="space-y-6 lg:col-start-1 lg:col-span-2">
              {/* Description list*/}
              <section aria-labelledby="applicant-information-title">
                <div className="bg-white shadow sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h2
                      id="applicant-information-title"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      Job Information
                    </h2>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      Information about the job.
                    </p>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Job title
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {job?.data?.title}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Email address
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {job?.data?.email}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Amount
                        </dt>
                        {!job?.data?.period !== "" ? (
                          <dd className="mt-1 text-sm text-gray-900">
                            ${job?.data?.amount}
                          </dd>
                        ) : (
                          <dd className="mt-1 text-sm text-gray-900">
                            ${job?.data?.amount} / {job?.data?.period}
                          </dd>
                        )}
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Phone
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {job?.data?.phone_number}
                        </dd>
                      </div>
                      <div className="sm:col-span-2">
                        <dt className="text-sm font-medium text-gray-500">
                          About
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {job?.data?.details}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </section>

              {/* Comments*/}
              {/* <section aria-labelledby="notes-title">
                <div className="bg-white shadow sm:rounded-lg sm:overflow-hidden">
                  <div className="divide-y divide-gray-200">
                    <div className="px-4 py-5 sm:px-6">
                      <h2
                        id="notes-title"
                        className="text-lg font-medium text-gray-900"
                      >
                        Comments Feature coming soon
                      </h2>
                    </div>
                  </div>
                  <CommentsComponent/>
                </div>
              </section> */}
            </div>
          </div>
        </main>
      </div>
    </HomeLayout>
  );
}
