import React, { useState } from "react";
import HomeLayout from "../HomeLayout/HomeLayout";
import { SearchIcon, ViewGridAddIcon } from "@heroicons/react/outline";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import { useDispatch, useSelector } from "react-redux";
import ExploreRight from "../../components/ExploreRight/ExploreRight";
import { search_item_Action } from "../../redux/actions/searchActions";
import ExploreLeft from "../../components/ExploreLeft/ExploreLeft";
import Loading from "../../components/loading/loading";

function ExploreLauoput({ children, heading }) {
  const [grid_view, setGridView] = useState(false);
  const [skip, setSkip] = useState(0);
  // eslint-disable-next-line
  const [limit, setLimit] = useState(8);
  const dispatch = useDispatch();

  const _search = useSelector((state) => state.search_item);
  const { search_loading } = _search;

  //service info
  const servicesInfo = useSelector((state) => state.allServices);
  const { loading } = servicesInfo;

  // eslint-disable-next-line
  const [searchQuery, setSearchQuery] = useState("");

  const handleLoadMore = (e) => {
    e.preventDefault();
    setSkip(skip + limit);
  };

  const searchItems = (e) => {
    e.preventDefault()
    dispatch(search_item_Action(searchQuery));
  };

  return (
    <HomeLayout>
      <div className="lg:px-16 md:px-8 pt-24 px-4">
        {/* <div className="pt-24 pb-8">
                    <Warning />
                </div> */}
        <div className="flex flex-row justify-between gap-8">
          <>
            <ExploreLeft loading={loading} />
          </>

          {/* //middle row */}
          <div className="lg:w-2/4 md:w-3/4 w-full min-h-screen">
            <div className="w-full flex flex-col">
              <form onSubmit={searchItems} className="search bg-white flex flex-row items-center w-full rounded border border-gray-200 overflow-hidden mb-4">
                <input
                  type="text"
                  className="bg-white border-none outline-none p-2 flex-1"
                  placeholder="search"
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-blue-900 p-4 cursor-pointer hover:bg-blue-800 rounded"
                >
                  <SearchIcon height={20} width={20} className="text-white" />
                </button>
              </form>
              <div className="md:flex hidden flex-row items-center justify-between p-8">
                <p className="flex-1 text-gray-700 font-semibold">{heading}</p>
                <div className="flex flex-row items-center">
                  <ViewGridAddIcon
                    height={20}
                    width={20}
                    onClick={() => setGridView(true)}
                    className={`${grid_view ? "text-blue-500" : "text-gray-500"
                      } mr-4 cursor-pointer`}
                  />
                  <FormatListBulletedIcon
                    fontSize="small"
                    onClick={() => setGridView(false)}
                    className={`${grid_view ? "text-gray-500" : "text-blue-500"
                      } mr-4 cursor-pointer`}
                  />
                </div>
              </div>

              {search_loading ? (
                <Loading />
              ) : (
                <>
                  {/* //the items go here */}
                  {children}
                </>
              )}
            </div>
          </div>

          {/* right column */}
          <div className="w-1/4 min-h-screen lg:flex md:hidden hidden flex-col">
            <ExploreRight />
          </div>
        </div>
      </div>
      <div
        onClick={handleLoadMore}
        className="py-24 flex flex-col items-center"
      >
        <span className="bg-blue-900 rounded text-white p-2">Load More</span>
      </div>
    </HomeLayout>
  );
}

export default ExploreLauoput;
