import React, { useState, useRef, Fragment, useEffect } from "react";
import HomeLayout from "../../layouts/HomeLayout/HomeLayout";
import { CameraIcon } from "@heroicons/react/outline";
import Dropzone from "react-dropzone";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import AccountLayout from "../../layouts/AccountLayuot/AccountLayout";
import { Input } from "@chakra-ui/react";
import { change_profile_picture_Action, get_single_user_Action } from "../../redux/actions/userActions";
import Success from "../../components/alert/Success";
import Error from "../../components/alert/Error";
import Loading from "../../components/loading/loading";

function Account() {
  const dispatch = useDispatch();
  const [firstname, setFirstmame] = useState("");
  const [picture, setPicture] = useState(null);
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [username, setUsername] = useState("");
  const [msg, setMsg] = useState('')
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false)

  const _user = useSelector(state => state.single_user)
  const { user_loading } = _user

  const userSignin = useSelector((state) => state.userCredsSignIn);
  const _picture = useSelector((state) => state.change_user_picture);
  const { profile_loading, profile_message, profile_error } = _picture;
  const { userInfo } = userSignin;

  //for image picking
  const [previewSrc, setPreviewSrc] = useState("");
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false);
  const dropRef = useRef();

  //delete account
  let [isDelteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  function closeDelteModal() {
    setIsDeleteDialogOpen(false);
  }

  function openDeleteModal() {
    setIsDeleteDialogOpen(true);
  }

  const onDrop = (files) => {
    const [uploadedFile] = files;
    setPicture(uploadedFile);
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewSrc(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
    setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));
  };

  const changeProPic = (e) => {
    e.preventDefault();
    dispatch(change_profile_picture_Action(userInfo?.user?.uid, picture));
  };

  const editDetails = (e) => {
    setLoading(true)
    e.preventDefault();
    console.log(firstname, lastname, address, city, country, username)
    setTimeout(() => {
      setLoading(false)
    }, 1500);
    setMsg('Account updated!')
  };

  const deleteAccount = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(get_single_user_Action(userInfo?.user?.uid))
  }, [dispatch, userInfo?.user?.uid])

  if (user_loading) {
    return (
      <HomeLayout>
        <AccountLayout>
          <Loading />
        </AccountLayout>
      </HomeLayout>
    )
  }

  return (
    <HomeLayout>
      <AccountLayout>
        <div className="flex flex-col lg:px-32 md:px-16 px-4 w-full">
          <p className="text-2xl text-gray-700 pb-8">Edit Profile</p>

          {/* //edit picture */}
          <div className="flex flex-row self-center items-end pb-16">
            <div className="relative">
              <div className="self-center h-24 w-24 bg-gray-200 rounded-full overflow-hidden border border-gray-300">
                <img src={userInfo?.user?.photoURL} alt="user pro pic" />
              </div>


              <Dropzone onDrop={onDrop}>
                {({ getRootProps, getInputProps }) => (
                  <div
                    {...getRootProps({ className: "drop-zone" })}
                    ref={dropRef}
                  >
                    <Input {...getInputProps()} />
                    <div className="cursor-pointer absolute right-0 bottom-0 bg-gray-300 rounded-full p-2 border-2 border-white">
                      <CameraIcon
                        width={24}
                        height={24}
                        className="text-blue-300 hover:text-blue-500"
                      />
                    </div>
                  </div>
                )}
              </Dropzone>

            </div>

            {previewSrc ? (
              isPreviewAvailable ? (
                <div className="flex flex-col ml-2">
                  <div className="self-center h-28 w-28 bg-gray-200 rounded-full overflow-hidden border border-gray-300">
                    <img className="w-auto" src={previewSrc} alt="Preview" />
                  </div>
                  {profile_loading ? (
                    <span
                      className="bg-blue-900 opacity-75 p-1 my-1 text-sm cursor-pointer hover:bg-blue-800 rounded-lg text-white text-center"
                    >
                      Uploading...
                    </span>
                  ) : (
                    <span
                      onClick={changeProPic}
                      className="bg-blue-900 p-1 my-1 text-sm cursor-pointer hover:bg-blue-800 rounded-lg text-white text-center"
                    >
                      save image
                    </span>
                  )}
                </div>
              ) : (
                <div className="preview-message">
                  <p>No preview available for this file</p>
                </div>
              )
            ) : (
              <div className="font-semibold text-gray-700 dark:text-gray-300 text-sm ml-2">
                <p>Select picture</p>
              </div>
            )}
          </div>
          {profile_message && <Success text={profile_message} />}
          {profile_error && <Error text={profile_error} />}

          {/* //edit username part */}
          <div className="w-full pb-8 mt-4">
            <div className="flex flex-row items-center w-full mb-4">
              <div className="border-b border-gray-300 w-1/3"></div>
              <p className="text-gray-700 font-semibold text-center text-sm w-1/3">
                Display info
              </p>
              <div className="border-b border-gray-300 w-1/3"></div>
            </div>
            <span className="flex flex-col">
              <label
                htmlFor="username"
                className="text-gray-500 text-sm pb-2 font-semibold"
              >
                Username/Businessname
              </label>
              <Input
                type="text"
                variant="filled"
                id="username"
                className="border border-blue-300 outline-none rounded-lg p-2 bg-gray-50"
                onChange={(e) => setUsername(e.target.value)}
                placeholder={`Username`}
              />
            </span>
          </div>

          {/* //first and last name */}
          <div className="grid grid-cols-2 md:gap-16 gap-4 pb-8">
            <span className="flex flex-col col-span-1">
              <label
                htmlFor="firstname"
                className="text-gray-500 text-sm pb-2 font-semibold"
              >
                First Name
              </label>
              <Input
                type="text"
                variant="filled"
                id="firstname"
                className="border border-blue-300 outline-none rounded-lg p-2 bg-gray-50"
                onChange={(e) => setFirstmame(e.target.value)}
                placeholder={`Tatenda`}
              />
            </span>
            <span className="flex flex-col col-span-1">
              <label
                htmlFor="lastname"
                className="text-gray-500 text-sm pb-2 font-semibold"
              >
                Last Name
              </label>
              <Input
                type="text"
                variant="filled"
                id="lastname"
                className="border border-blue-300 outline-none rounded-lg p-2 bg-gray-50"
                onChange={(e) => setLastname(e.target.value)}
                placeholder={`Bako`}
              />
            </span>
          </div>

          <div className="w-full pb-8">
            <span className="flex flex-col">
              <label
                htmlFor="address"
                className="text-gray-500 text-sm pb-2 font-semibold"
              >
                Address
              </label>
              <Input
                type="text"
                variant="filled"
                id="address"
                className="border border-blue-300 outline-none rounded-lg p-2 bg-gray-50"
                onChange={(e) => setAddress(e.target.value)}
                placeholder={`15002 Zengeza 3 Extension, Chitungwiza`}
              />
            </span>
          </div>

          {/* //sity and country */}
          <div className="grid grid-cols-2 md:gap-16 gap-4 pb-8">
            <span className="flex flex-col col-span-1">
              <label
                htmlFor="city"
                className="text-gray-500 text-sm pb-2 font-semibold"
              >
                City
              </label>
              <Input
                type="text"
                variant="filled"
                id="city"
                className="border border-blue-300 outline-none rounded-lg p-2 bg-gray-50"
                onChange={(e) => setCity(e.target.value)}
                placeholder={`Harare`}
              />
            </span>
            <span className="flex flex-col col-span-1">
              <label
                htmlFor="country"
                className="text-gray-500 text-sm pb-2 font-semibold"
              >
                Country
              </label>
              <Input
                type="text"
                variant="filled"
                id="country"
                className="border border-blue-300 outline-none rounded-lg p-2 bg-gray-50"
                onChange={(e) => setCountry(e.target.value)}
                placeholder={`Zimbabwe`}
              />
            </span>
          </div>
          {/* //edit address part */}
          {msg && <Success text={msg} />}
          <div className="pb-8">
            <span className="flex flex-col">
              <span
                onClick={editDetails}
                className="border-none bg-blue-900 hover:bg-blue-800 text-center mt-4 cursor-pointer outline-none rounded-lg p-2 text-white"
              >
                Save
              </span>
            </span>
          </div>

          {/* //edit address part */}
          <div className="pb-8">
            <span className="flex flex-col">
              <span
                onClick={openDeleteModal}
                className="border-none bg-red-500 hover:bg-red-600 text-center cursor-pointer outline-none rounded-lg p-2 text-white"
              >
                Delete Account
              </span>
            </span>
            <>
              <Transition appear show={isDelteDialogOpen} as={Fragment}>
                <Dialog
                  as="div"
                  className="fixed inset-0 z-10 overflow-y-auto"
                  onClose={closeDelteModal}
                >
                  <div className="min-h-screen px-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Dialog.Overlay className="fixed inset-0" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                      className="inline-block h-screen align-middle"
                      aria-hidden="true"
                    >
                      &#8203;
                    </span>
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-3xl rounded-lg border border-gray-200">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          Confirm Delete!
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Once your account has been deleted it can never be
                            retreived. Are you sure you want to proceed?
                          </p>
                        </div>

                        <div className="mt-4">
                          <button
                            type="button"
                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 mr-4 border border-transparent rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                            onClick={closeDelteModal}
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-lg hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                            onClick={deleteAccount}
                          >
                            Delete my account!
                          </button>
                        </div>
                      </div>
                    </Transition.Child>
                  </div>
                </Dialog>
              </Transition>
            </>
          </div>
        </div>
      </AccountLayout>
    </HomeLayout>
  );
}

export default Account;
