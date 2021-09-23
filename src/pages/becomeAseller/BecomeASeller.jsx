import React, { useState } from "react";
import HomeLayout from "../../layouts/HomeLayout/HomeLayout";
import Tags from "../../components/tags/Tags";
import { useDispatch, useSelector } from "react-redux";
import AccountLayout from "../../layouts/AccountLayuot/AccountLayout";
import { useEffect } from "react";
import {
  get_serviceAction,
  create_a_service_Action,
  edit_a_service_Action,
} from "../../redux/actions/serviceActions";
import { Input, Select, Textarea } from "@chakra-ui/react";
import Loading from "../../components/loading/loading";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import Success from "../../components/alert/Success";
import Error from "../../components/alert/Error";

const categories = [
  { name: "Programming and tech" },
  { name: "Writing & translation" },
  { name: "video and animation" },
  { name: "graphics and design" },
  { name: "home and living" },
  { name: "budiness" },
  { name: "vehicle and transportation" },
];

function BecomeASeller() {
  //input values
  const [description, setDescription] = useState("");
  const [catTags, setCatTags] = useState([]);
  const [level, setLevel] = useState("");
  const [school, setSchool] = useState("");
  const [pricerange, setPriceRange] = useState(0);
  const [selected, setSelected] = useState(categories[0]);
  const [website, setWebsite] = useState("");
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();

  //location info
  const [city, setCity] = useState("");
  const [code, setCode] = useState("");
  const [house_number, setHouseNumber] = useState("");
  const [street, setStreet] = useState();

  const _user = useSelector((state) => state.userCredsSignIn);
  const { userInfo } = _user;
  const _user_service = useSelector((state) => state.getService);
  const _create_service = useSelector((state) => state.create_service);
  const _edit_service = useSelector((state) => state.edit_service);
  const { edit_loading, edit_error, edit_message } = _edit_service;
  const { create_loading, create_message, create_error } = _create_service;
  const { service, loading } = _user_service;

  const selectedTags = (tags) => {
    setCatTags(tags);
  };

  const create_user_profile = (e) => {
    e.preventDefault();
    dispatch(
      create_a_service_Action(
        userInfo?.user?.uid,
        description,
        catTags,
        level,
        school,
        pricerange,
        selected,
        location,
        website,
        "seller",
        userInfo?.user?.photoURL,
        userInfo?.user?.displayName,
        userInfo?.user?.email
      )
    );
  };

  const edit_user_profile = (e) => {
    e.preventDefault();
    dispatch(
      edit_a_service_Action(
        userInfo?.user?.uid,
        service,
        description,
        level,
        school,
        pricerange,
        selected,
        location,
        website,
        catTags,
        userInfo?.user?.photoURL,
        userInfo?.user?.displayName,
        userInfo?.user?.email
      )
    );
  };

  useEffect(() => {
    dispatch(get_serviceAction(userInfo?.user?.uid));
  }, [dispatch]);

  // console.log(service)
  // console.log(auth?.currentUser?.uid)
  if (loading) {
    return (
      <HomeLayout>
        <AccountLayout>
          <div>
            <Loading />
          </div>
        </AccountLayout>
      </HomeLayout>
    );
  }

  return (
    <HomeLayout>
      <AccountLayout>
        <div className=" flex flex-col lg:px-32 md:px-16 px-4 items-center">
          <p className="py-16 text-xl font-semibold text-gray-700">
            Describe your service
          </p>
          {/* category */}
          <div className="flex flex-col  w-full items-center">
            <div className="flex flex-col self-center bg-white w-full">
              <p className="text-sm mb-2 text-gray-700 ml-4">
                Select service category
              </p>
              <div className={`" w-full"`}>
                <div className="relative mt-1">
                  <Select
                    variant="filled"
                    value={selected}
                    placeholder={`${
                      service ? service.category : "Service Category"
                    }`}
                    onChange={(e) => setSelected(e.target.value)}
                  >
                    {categories.map((category) => (
                      <option value={category.name}>{category.name}</option>
                    ))}
                  </Select>
                </div>
              </div>
            </div>
          </div>

          {/* tags */}
          <div className="flex flex-col w-full items-center">
            <div className="flex flex-col self-center bg-white w-full">
              {/* <p className="text-sm my-4 text-gray-700 ml-4 font-semibold">Search tags</p> */}
              <Tags
                selectedTags={selectedTags}
                className=""
                currentTags={service?.tags}
              />
            </div>
          </div>

          {/* description */}
          <div className="flex flex-col w-full items-center">
            <div className="flex flex-col self-center bg-white w-full">
              <p className="text-sm my-2 text-gray-700 ml-4">Description</p>
              {/* <textarea 
                            name="description" 
                            id="description" 
                            cols="30" rows="10"
                            className="p-2 border border-gray-300 outline-none"  
                            placeholder="describe yourself with not less than 150 words"/> */}
              <Textarea
                minLength={150}
                cols="30"
                rows="7"
                variant="filled"
                className="p-2 border border-gray-300 outline-none rounded-lg bg-white"
                placeholder={`${
                  service
                    ? service.category
                    : "Describe yourself and/or your service with not less than 150 words"
                }`}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
          </div>

          {/* education */}
          <div className="flex flex-col w-full items-center">
            <div className="flex flex-col self-center bg-white w-full">
              <p className="text-sm my-2 text-gray-700 ml-4">
                Education (Optional)
              </p>
              <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                <Input
                  type="text"
                  variant="filled"
                  placeholder="Level Reached"
                  className="p-2 col-span-1 border border-gray-300 bg-white outline-none rounded-lg"
                  onChange={(e) => setLevel(e.target.value)}
                />
                <Input
                  variant="filled"
                  type="text"
                  placeholder="School Attended"
                  className="p-2 border col-span-2 border-gray-300 bg-white outline-none rounded-lg"
                  onChange={(e) => setSchool(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* price range */}
          <div className="flex flex-col w-full items-center mt-4">
            <div className="flex flex-col self-center bg-white w-full">
              <p className="text-sm my-2 text-gray-700 ml-4">
                Price range e.g $45/hour
              </p>

              <Input
                type="number"
                variant="filled"
                placeholder="$35/hour"
                className="p-2 border col-span-2 border-gray-300 bg-white outline-none rounded-lg"
                onChange={(e) => setPriceRange(e.target.value)}
              />
            </div>
          </div>

          {/* location */}
          <div className="flex flex-col w-full items-center mt-4">
            <div className="flex flex-col self-center bg-white w-full">
              <p className="text-sm my-2 text-gray-700 ml-4">
                Location info (city/country)
              </p>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4 my-2">
                <Input
                  type="text"
                  variant="filled"
                  placeholder="Whats your work/house number"
                  className="p-2 border col-span-1 border-gray-300 bg-white outline-none rounded-lg"
                  onChange={(e) => setHouseNumber(e.target.value)}
                />
                <Input
                  type="text"
                  variant="filled"
                  placeholder="Whats your work area street name"
                  className="p-2 border col-span-1 border-gray-300 bg-white outline-none rounded-lg"
                  onChange={(e) => setStreet(e.target.value)}
                />
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-2">
                <Input
                  type="text"
                  variant="filled"
                  placeholder="postal code"
                  className="p-2 border col-span-1 border-gray-300 bg-white outline-none rounded-lg"
                  onChange={(e) => setCode(e.target.value)}
                />
                <Input
                  type="text"
                  variant="filled"
                  placeholder="Street name of work area"
                  className="p-2 border col-span-1 border-gray-300 bg-white outline-none rounded-lg"
                  onChange={(e) => setStreet(e.target.value)}
                />
              </div>
              <Input
                type="text"
                variant="filled"
                placeholder="Full address"
                className="p-2 border col-span-2 border-gray-300 bg-white outline-none rounded-lg"
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
          </div>
          {/* location */}
          <div className="flex flex-col w-full items-center mt-4">
            <div className="flex flex-col self-center bg-white w-full">
              <p className="text-sm my-2 text-gray-700 ml-4">
                website (Optional)
              </p>
              {/* <textarea 
                            name="description" 
                            id="description" 
                            cols="30" rows="10"
                            className="p-2 border border-gray-300 outline-none"  
                            placeholder="describe yourself with not less than 150 words"/> */}
              <Input
                type="text"
                variant="filled"
                placeholder="what is your website?"
                className="p-2 border col-span-2 border-gray-300 bg-white outline-none rounded-lg"
                onChange={(e) => setWebsite(e.target.value)}
                required
              />
            </div>
          </div>

          {/* //create profile button */}
          <div className="flex flex-col w-full items-center my-8">
            <div className="flex flex-col self-center bg-white w-full">
              {edit_message && <Success text={edit_message} />}
              {edit_error && <Error text={edit_error} />}
              {create_message && <Success text={create_message} />}
              {create_error && <Error text={create_error} />}
              {service ? (
                <>
                  <PrimaryButton
                    button_text="Edit Profile"
                    onClick={edit_user_profile}
                    loading={edit_loading}
                  />
                </>
              ) : (
                <>
                  <PrimaryButton
                    button_text="Create Profile"
                    onClick={create_user_profile}
                    loading={create_loading}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </AccountLayout>
    </HomeLayout>
  );
}

export default BecomeASeller;
