import { QuestionMarkCircleIcon } from "@heroicons/react/outline";
import React from "react";

const comments = [
    {
      id: 1,
      name: "Leslie Alexander",
      date: "4d ago",
      imageId: "1494790108377-be9c29b29330",
      body: "Ducimus quas delectus ad maxime totam doloribus reiciendis ex. Tempore dolorem maiores. Similique voluptatibus tempore non ut.",
    },
  ];

function CommentsComponent() {
  return (
    <div>
      <section aria-labelledby="notes-title">
        <div className="bg-white shadow sm:rounded-lg sm:overflow-hidden">
          <div className="divide-y divide-gray-200">
            <div className="px-4 py-5 sm:px-6">
              <h2
                id="notes-title"
                className="text-lg font-medium text-gray-900"
              >
                Feedback
              </h2>
            </div>
            <div className="px-4 py-6 sm:px-6">
              <ul className="space-y-8">
                {comments.map((comment) => (
                  <li key={comment.id}>
                    <div className="flex space-x-3">
                      <div className="flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={`https://images.unsplash.com/photo-${comment.imageId}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
                          alt=""
                        />
                      </div>
                      <div>
                        <div className="text-sm">
                          <p className="font-medium text-gray-900">
                            Tafara Bako
                          </p>
                        </div>
                        <div className="mt-1 text-sm text-gray-700">
                          <p>
                            Worked well with him, and he gives more time if
                            there are any difficulties during development
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-6 sm:px-6">
            <div className="flex space-x-3">
              <div className="min-w-0 flex-1">
                <form action="#">
                  <div>
                    <label htmlFor="comment" className="sr-only">
                      About
                    </label>
                    <textarea
                      id="comment"
                      name="comment"
                      rows={3}
                      className="shadow-sm block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm border border-gray-300 rounded"
                      placeholder="Add a note"
                      defaultValue={""}
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <p className="group inline-flex items-start text-sm space-x-2 text-gray-500 hover:text-gray-900">
                      <QuestionMarkCircleIcon
                        className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Comment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CommentsComponent;
