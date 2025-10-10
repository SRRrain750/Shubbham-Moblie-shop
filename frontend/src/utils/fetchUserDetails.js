import Axios from "./Axios";
import SummaryApi from "../common/SummaryApi";

const fetchUserDetails = async (token) => {
    try {
        const response = await Axios({
            ...SummaryApi.userDetails
        })
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export default fetchUserDetails;