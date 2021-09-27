import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ExploreJobListItem from "../../components/ExploreJobs/ExploreJobListItem";
import ExploreLauoput from "../../layouts/ExploreLayout/ExploreLauoput";
import { get_all_Jobs } from "../../redux/actions/jobsActions";

export default function ExploreJobs() {
  const jobsInfo = useSelector((state) => state.allJobs);
  const { loading, all_jobs } = jobsInfo;
  const _search = useSelector((state) => state.search_item);
  const { search_result } = _search;
  const dispatch = useDispatch();
  const [limit] = useState();
  const [skip] = useState();
  const history = useHistory()

  useEffect(() => {
    dispatch(get_all_Jobs(limit, skip));
  }, [dispatch, limit, skip]);

  console.log(search_result);

  if (search_result) {
    return (
      <ExploreLauoput heading="Jobs">
        <div className="flex flex-col w-full">
          {search_result.length > 1 ? (
            <>
              {search_result?.map((job, index) => (
                <div key={index}>
                  <ExploreJobListItem
                    title={job.job.title}
                    description={job.job.details}
                    amount={job.job.amount}
                    name={job.job.name}
                    id={job.id}
                  />
                </div>
              ))}
            </>
          ) : (
            <div className="flex flex-col items-center">
              <p className="text-gray-700 font-semibold mt-8">
                No Jobs found, try another search term
              </p>
              <span className="flex flex-col items-center py-16">
                <p className="text-black text-sm mt-2">
                  Do you want to become a recruiter?
                </p>
                <span
                  onClick={() => history.push("/listings")}
                  className="bg-blue-900 py-2 px-4 rounded text-white text-sm mt-4 hover:bg-blue-800 cursor-pointer"
                >
                  Become a recruiter?
                </span>
              </span>
            </div>
          )}
        </div>
      </ExploreLauoput>
    );
  }

  return (
    <ExploreLauoput heading="Jobs">
      <div className="flex flex-col w-full">
        {loading ? (
          <div className="flex flex-col w-full">
            <LoadingComponent />
            <LoadingComponent />
          </div>
        ) : (
          <>
            {all_jobs?.map((job, index) => (
              <div key={index}>
                <ExploreJobListItem
                  title={job.job.title}
                  description={job.job.details}
                  amount={job.job.amount}
                  name={job.job.name}
                  id={job.id}
                />
              </div>
            ))}
          </>
        )}
      </div>
    </ExploreLauoput>
  );
}

const LoadingComponent = () => {
  return (
    <div class="border border-gray-200 rounded p-4 w-full mx-auto bg-white mb-8">
      <div class="animate-pulse flex flex-col space-x-4">
        <div class="rounded-full bg-gray-200 self-start mb-8 h-16 w-16"></div>
        <div class="flex-1 space-y-4 py-1">
          <div class="h-4 bg-gray-200 rounded w-3/4"></div>
          <div class="space-y-2">
            <div class="h-4 bg-gray-300 rounded"></div>
            <div class="h-4 bg-gray-400 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
