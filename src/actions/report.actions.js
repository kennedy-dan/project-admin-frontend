import axios from "../helpers/axios";
import { reportConstants } from "./constants";

export const reports = () => {
  return async (dispatch) => {
    dispatch({ type: reportConstants.GET_REPORTS_REQUEST });
    const res = await axios.get("/getcrimereport");
    console.log(res)
    if (res.status === 200) {
      const { crimesReport } = res.data;
      dispatch({
        type: reportConstants.GET_REPORTS_SUCCESS,
        payload: { reports: crimesReport },
      });
    }else{
        dispatch({
            type: reportConstants.GET_REPORTS_FAILURE,
            payload: {error: res.data.error}
        })
    }
  };
};

export const updateReport = (payload) =>{
  return async (dispatch)=> {
    dispatch({type: reportConstants.UPDATE_REPORTS_REQUEST});
    const res = await axios.post("/admincrimereport", payload);
    if(res.status === 200){
      const {report} = res.data
      dispatch({type: reportConstants.UPDATE_REPORTS_SUCCESS, payload:{reportUpdate: report}})
    }
  }
}
