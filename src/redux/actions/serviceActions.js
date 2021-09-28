import { db } from "../../helpers/firebase";
import {
  ALL_SERVICE_GET_REQUEST,
  ALL_SERVICE_GET_SUCSESS,
  EDIT_SERVICE_FAIL,
  EDIT_SERVICE_REQUEST,
  EDIT_SERVICE_SUCCESS,
  SERVICE_GET_FAIL,
  SERVICE_GET_REQUEST,
  SERVICE_GET_SUCSESS,
  SERVIVE_CREATE_FAIL,
  SERVIVE_CREATE_REQUEST,
  SERVIVE_CREATE_SUCCESS,
} from "../constants/serviceConstants";

//get a single service
export const get_serviceAction = (id) => (dispatch) => {
  // console.log(token, id)
  dispatch({
    type: SERVICE_GET_REQUEST,
    payload: { id },
  });
  db.collection("services")
    .doc(id)
    .onSnapshot(
      (snapshot) => {
        console.log(id);
        dispatch({
          type: SERVICE_GET_SUCSESS,
          payload: snapshot.data(),
        });
      },
      (error) => {
        dispatch({
          type: SERVICE_GET_FAIL,
          payload:
            error.response && error.response.message
              ? error.response.error.message
              : error.message,
        });
      }
    );
};

//get all setvices
export const get_allServices = () => (dispatch) => {
  dispatch({
    type: ALL_SERVICE_GET_REQUEST,
  });
  const all_services = [];

  db.collection("services").onSnapshot(
    (snapshot) => {
      snapshot.forEach((doc) => {
        all_services.push(doc.data());
      });
      // console.log(all_services)
      dispatch({
        type: ALL_SERVICE_GET_SUCSESS,
        payload: all_services,
      });
    },
    (error) => {
      dispatch({
        type: SERVICE_GET_FAIL,
        payload:
          error.response && error.response.message
            ? error.response.error.message
            : error.message,
      });
    }
  );
};

//create a service
export const create_a_service_Action =
  (
    id,
    description,
    tags,
    level,
    school,
    price,
    category,
    location,
    website,
    role,
    service_picture,
    username,
    email,
    city,
    code,
    house_number,
    street,
    seller_range_type,
  ) =>
  (dispatch) => {
    dispatch({
      type: SERVIVE_CREATE_REQUEST,
    });
    db.collection("services")
      .doc(id)
      .set(
        {
          description: description,
          tags: tags,
          level: level,
          school: school,
          price: price,
          category: category,
          location: location,
          website: website,
          role: role,
          service_picture: service_picture,
          username: username,
          email: email,
          city,
          code,
          house_number,
          street,
          seller_range_type,
          owner: id
        },
        { merge: true }
      )
      .then((res) => {
        dispatch({
          type: SERVIVE_CREATE_SUCCESS,
          payload: res,
        });
      })
      .catch((error) => {
        dispatch({
          type: SERVIVE_CREATE_FAIL,
          payload:
            error.response && error.response.message
              ? error.response.error.message
              : error.message,
        });
      });
  };

//edit current service action
export const edit_a_service_Action =
  (
    id,
    service,
    description,
    level,
    school,
    pricerange,
    selected,
    location,
    website,
    catTags,
    service_picture,
    username,
    email,
    city,
    code,
    house_number,
    street,
    seller_range_type
  ) =>
  (dispatch) => {
    dispatch({
      type: EDIT_SERVICE_REQUEST,
    });
    console.log(selected)
    db.collection("services")
      .doc(id)
      .set(
        {
          description: description === "" ? service.description : description,
          school_level: level === "" ? service?.school_level : level,
          school_attended: school === "" ? service?.school_level : school,
          price: pricerange === "" ? service?.price : pricerange,
          category: selected === "" ? service?.category : selected,
          user: id,
          location: location === "" ? service?.location : location,
          website: website === "" ? service?.website : website,
          tags: catTags === undefined ? service?.tags : catTags,
          role: "seller",
          service_picture: service_picture,
          username: username,
          email: email,
          city: city === "" ? service.city : city,
          code: code=== "" ? service.code : code,
          house_number : house_number === "" ? service.house_number : house_number,
          street: street === "" ? service.street : street,
          seller_range_type: seller_range_type === "" ? service.seller_range_type : seller_range_type
        },
        { merge: true }
      )
      .then((res) => {
        dispatch({
          type: EDIT_SERVICE_SUCCESS,
          payload: res,
        });
      })
      .catch((err) => {
        dispatch({
          type: EDIT_SERVICE_FAIL,
          payload: err.message,
        });
      });
  };
