import React, { useState, useEffect } from 'react'
import ExploreListItem from '../../components/Exploreseller/ExploreListItem';
import { useDispatch, useSelector } from 'react-redux';
import { get_allServices } from '../../redux/actions/serviceActions';
import ExploreLauoput from '../../layouts/ExploreLayout/ExploreLauoput';
import { useHistory } from 'react-router';

function ExploreSellers() {
    // eslint-disable-next-line
    const [grid_view, setGridView] = useState(false)
    const [skip] = useState(0);
    // eslint-disable-next-line
    const [limit] = useState(8);
    const dispatch = useDispatch()
    const _search = useSelector((state) => state.search_item);
    const { search_result } = _search;
    const history = useHistory()

    //service info
    const servicesInfo = useSelector(state => state.allServices)
    const { loading, all_services } = servicesInfo

    console.log(all_services)

    useEffect(() => {
        dispatch(get_allServices(limit, skip))
    }, [dispatch, limit, skip])

    if (search_result) {
        return (
            <ExploreLauoput heading="Jobs">
                <div className="flex flex-col w-full">
                    {search_result.length > 1 ? (
                        <>
                            {search_result?.map((service) => (
                                <>
                                    {grid_view ? (<div className="flex flex-col" key={service._id}>

                                        <ExploreListItem
                                            key={service.user}
                                            className="col-span-1"
                                            verified={service.verified}
                                            category={service.category}
                                            price={service.price}
                                            rating={service.rating}
                                            tags={service.tags}
                                            propic={service.service_picture}
                                            businessname={service.username}
                                            description={service.description}
                                            id={service.owner}
                                        />


                                    </div>) : (
                                        <div key={service._id} className="flex flex-col">
                                            <ExploreListItem
                                                key={service.user}
                                                className="col-span-1"
                                                verified={service.verified}
                                                category={service.category}
                                                price={service.price}
                                                rating={service.rating}
                                                tags={service.tags}
                                                propic={service.service_picture}
                                                businessname={service.username}
                                                description={service.description}
                                                id={service.owner}
                                            />
                                        </div>
                                    )}
                                </>
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
        <ExploreLauoput heading={'Sellers'}>
            {/* //middle row */}
            <div className="w-full min-h-screen">
                <div className="w-full flex flex-col">
                    <div >
                        {
                            !loading ? (
                                <>
                                    {
                                        all_services?.map(service => (
                                            <>
                                                {grid_view ? (<div className="flex flex-col" key={service._id}>
                                                    <ExploreListItem
                                                        key={service.user}
                                                        className="col-span-1"
                                                        verified={service.verified}
                                                        category={service.category}
                                                        price={service.price}
                                                        rating={service.rating}
                                                        tags={service.tags}
                                                        propic={service.service_picture}
                                                        businessname={service.username}
                                                        description={service.description}
                                                        id={service.owner}
                                                        service={service}
                                                    />
                                                </div>) : (
                                                    <div key={service._id} className="flex flex-col">
                                                        <ExploreListItem
                                                            key={service.user}
                                                            className="col-span-1"
                                                            verified={service.verified}
                                                            category={service.category}
                                                            price={service.price}
                                                            rating={service.rating}
                                                            tags={service.tags}
                                                            propic={service.service_picture}
                                                            businessname={service.username}
                                                            description={service.description}
                                                            id={service.owner}
                                                        />
                                                    </div>
                                                )}
                                            </>
                                        ))
                                    }
                                </>
                            ) : (
                                <div className="flex flex-col w-full">
                                    <LoadingComponent />
                                    <LoadingComponent />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </ExploreLauoput>
    )
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
    )
}
export default ExploreSellers

