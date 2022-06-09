import React from 'react';
import { connect } from 'react-redux';
// import { useDispatch } from 'react-redux';
import cookieActions from 'redux/actions/cookieActions';

const index = (props: any) => {

    const { userStatus, setStatus } = props;
    // const dispatch = useDispatch();

    return (
        <div>
            <button
            style={{ 
                marginBottom:"5rem",
                background: "green",
                color: "white",
                cursor:"pointer",
                padding:"1rem"
            }}
                onClick={() => {
                    //@ts-ignore
                    // dispatch(cookieActions.putIt('I am here'))
                    // setStatus('I am here')
                    // throw new Error("I am error to show in sentry");
                }}
            >Click me I am error</button>
        </div>
    );
};

// export default index;

// @ts-ignore
const mapStateToProps = state => ({
    userStatus: state.main
  })
  
  const mapDispatchToProps = {
    setStatus: cookieActions.putIt,
  }
  
//   export default connect(mapStateToProps, mapDispatchToProps)(index)
