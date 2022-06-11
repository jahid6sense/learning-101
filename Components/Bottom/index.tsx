import React from "react";
import {connect} from "react-redux";
// import {gg} from "redux/actions/cookieActions";
// import { useDispatch } from 'react-redux';
import cookieActions from "redux/actions/cookieActions";

const index = (props: any) => {
  console.log(props);

  const getUserData = () => {
    cookieActions.getData(
      (success: any) => {
        console.log(success);
        const rng = Math.floor(Math.random() * 10);
        props.setUser(success[rng].name);
      },
      (error: any) => {
        console.error(error);
      }
    );
  };

  return (
    <div>
      <button
        style={{
          marginBottom: "5rem",
          background: "Red",
          color: "white",
          cursor: "pointer",
          padding: "1rem",
        }}
        onClick={() => {
          throw new Error("I am error to show in sentry");
        }}
      >
        Click me I am error
      </button>

      <button
        style={{
          marginBottom: "5rem",
          marginLeft: "1rem",
          background: "green",
          color: "white",
          cursor: "pointer",
          padding: "1rem",
        }}
        onClick={() => {
          props.putIt();
        }}
      >
        Click me I am from REDUX ({props.status})
      </button>

      <button
        style={{
          marginBottom: "5rem",
          marginLeft: "1rem",
          background: "green",
          color: "white",
          cursor: "pointer",
          padding: "1rem",
        }}
        onClick={() => {
          props.removeGg();
        }}
      >
        Reset
      </button>

      <button
        style={{
          marginBottom: "5rem",
          marginLeft: "1rem",
          background: "gray",
          color: "white",
          cursor: "pointer",
          padding: "1rem",
        }}
        onClick={() => {
          getUserData();
        }}
      >
        See user name in cookie
      </button>

      <button
        style={{
          marginBottom: "5rem",
          marginLeft: "1rem",
          background: "gray",
          color: "white",
          cursor: "pointer",
          padding: "1rem",
        }}
        onClick={() => {
          props.outUser();
        }}
      >
        Out User ({props.name})
      </button>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    status: state.main.status,
    name: state.main.name,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    putIt: () => dispatch(cookieActions.putIt()),
    removeGg: () => dispatch(cookieActions.removeIt()),
    setUser: (name: any) => dispatch(cookieActions.setUser(name)),
    outUser: () => dispatch(cookieActions.outUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
