import React from "react";
import HomeLayout from "../HomeLayout/HomeLayout";
import { useHistory, useLocation } from "react-router-dom";
import SideDrawer from "../../components/panel/SideDrawer";
import { Button, Input, Stack, Textarea, Select, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { create_a_job } from "../../redux/actions/jobsActions";
import { data } from "../../data";

const contract_routes = [
  { name: "Contracts", location: "/jobs" },
  { name: "Jobs", location: "/listings" },
];

export default function ContractsLayout({ children }) {
  const location = useLocation();
  const history = useHistory();
  const [name, setName] = useState("name");
  // eslint-disable-next-line
  const [job_name, setJobName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [amount, setAmount] = useState(0);
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  // eslint-disable-next-line
  const [category, setCategory] = useState("");

  const [paymeny_option, setPaymentOption] = useState("");
  const [period, setPeriod] = useState("hourly");
  const _user = useSelector(state => state.userCredsSignIn)
  const {userInfo} = _user

  const jobs_state = useSelector((state) => state.create_Job);
  const { loading } = jobs_state;
  const dispatch = useDispatch();

  const post_job = (e) => {
    e.preventDefault();
    const msg_obj = {
      created_by: userInfo?.user.uid,
      done_by: "",
      job_name: job_name,
      name,
      company,
      email,
      details,
      phone_number,
      amount,
      title,
      period
    };
    dispatch(create_a_job(msg_obj, userInfo?.user.uid));
  };

  return (
    <HomeLayout>
      <div className="flex flex-col items-center px-4">
        <div className="py-16 lg:w-3/5 md:w-4/5 w-full">
          <>
            <SideDrawer
              sendButton={
                <Button
                  isLoading={loading}
                  onClick={post_job}
                  colorScheme="blue"
                >
                  Post Job
                </Button>
              }
              drawer_heading={"Create a job"}
            >
              <Stack spacing={8} pt={8}>
                <Input
                  placeholder="Your full name"
                  onChange={(e) => setName(e.target.value)}
                />
                {/* <Input placeholder="Job name"
                                    onChange={e => setJobName(e.target.value)}
                                /> */}
                <Input
                  placeholder="Company (Optional)"
                  onChange={(e) => setCompany(e.target.value)}
                />
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                />
                <Input
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="phone number with country code"
                />

                <div className="w-full border-b flex-1 border-gray-300"></div>

                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm text-gray-700"
                  >
                    Select category:
                  </label>
                  <select
                    id="location"
                    name="location"
                    onChange={(e) => setCategory(e.target.value)}
                    className="mt-1 block w-full px-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none sm:text-sm rounded-md"
                    defaultValue="Vehicle and transportation"
                  >
                    {data.categories.map((option, index) => (
                      <option value={option.name} key={index}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
                <Input
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="contract title"
                />

                    <Text>Payment</Text>
                <Select
                  placeholder="set payment option"
                  onChange={(e) => setPaymentOption(e.target.value)}
                >
                  <option value="once_off">Once off payment</option>
                  <option value="periodically">Periodically</option>
                </Select>

                {paymeny_option === "periodically" ? (
                  <div className="flex flex-row items-center gap-4 w-full">
                    <Select
                      placeholder="set period"
                      onChange={(e) => setPeriod(e.target.value)}
                    >
                      <option value="hour">per hour</option>
                      <option value="day">per day</option>
                      <option value="week">per week</option>
                      <option value="month">per month</option>
                    </Select>
                    <Input
                      type="number"
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder={`$amount/${period}`}
                    />
                  </div>
                ) : (
                  <Input
                    type="number"
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Amount for the job"
                  />
                )}
                <Textarea
                  rows={5}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Full details for the job"
                />
              </Stack>
            </SideDrawer>
          </>
          <div className="flex jobs w-full">
            <div className="w-full pt-2">
              <div className="w-full p-2 mx-auto bg-white rounded-sm shadow">
                <div className="flex flex-row items-center">
                  {contract_routes.map((option, index) => (
                    <span
                      onClick={() => history.push(option.location)}
                      key={index}
                      className={`${
                        location.pathname === option.location
                          ? "border-b-2 border-blue-900 bg-gray-100 "
                          : "border-none "
                      } text-gray-700 hover:bg-gray-100 cursor-pointer md:py-4 py-2 md:mb-8 mb-4 px-4 text font-semibold`}
                    >
                      {option.name}
                    </span>
                  ))}
                </div>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
