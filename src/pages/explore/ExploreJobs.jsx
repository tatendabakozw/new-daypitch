import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ExploreJobListItem from "../../components/ExploreJobs/ExploreJobListItem";
import ExploreLauoput from "../../layouts/ExploreLayout/ExploreLauoput";
import { get_all_Jobs } from "../../redux/actions/jobsActions";

export default function ExploreJobs() {
  const jobsInfo = useSelector((state) => state.allJobs);
  const { loading, all_jobs } = jobsInfo;
  const dispatch = useDispatch();
  const [limit] = useState();
  const [skip] = useState();

  useEffect(() => {
    dispatch(get_all_Jobs(limit, skip));
  }, [dispatch, limit, skip]);

  console.log(all_jobs);

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
