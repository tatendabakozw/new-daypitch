import React, { useState, useEffect } from 'react'
import ExploreListItem from '../../components/Exploreseller/ExploreListItem';
import { useDispatch, useSelector } from 'react-redux';
import { get_allServices } from '../../redux/actions/serviceActions';
import ExploreLauoput from '../../layouts/ExploreLayout/ExploreLauoput';

function ExploreSellers() {
    // eslint-disable-next-line
    const [grid_view, setGridView] = useState(false)
    const [skip] = useState(0);
    // eslint-disable-next-line
    const [limit] = useState(8);
    const dispatch = useDispatch()

    //service info
    const servicesInfo = useSelector(state => state.allServices)
    const { loading, all_services } = servicesInfo

    useEffect(() => {
        dispatch(get_allServices(limit, skip))
    }, [dispatch, limit, skip])


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
                                                        id={service.user}
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
                                                            id={service.user}
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

