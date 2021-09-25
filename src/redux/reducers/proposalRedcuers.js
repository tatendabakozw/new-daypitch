import {
  CREATE_PROPOSAL_FAIL,
  CREATE_PROPOSAL_REQUEST,
  CREATE_PROPOSAL_SUCCESS,
} from "../constants/proposalConstants";

export const create_a_proposal_Reducer = (
  state = { loading: false },
  action
) => {
  switch (action.type) {
    case CREATE_PROPOSAL_REQUEST:
      return { create_loading: true };
    case CREATE_PROPOSAL_SUCCESS:
      return {
        create_loading: false,
        proposal: action.payload,
        create_message: "Proposal sent!",
      };
    case CREATE_PROPOSAL_FAIL:
      return { create_loading: false, create_error: action.payload };
    default:
      return state;
  }
};
