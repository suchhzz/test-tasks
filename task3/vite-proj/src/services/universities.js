import axios from "axios"

export const fetchUniversities = async () => {

    try {
        var response = await axios.get('http://universities.hipolabs.com/search?country=ukraine');

    }   catch (e) {
        console.error('universities fetch error');
        console.error(e);
    }

    console.log(response);
};