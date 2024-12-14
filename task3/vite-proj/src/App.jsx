import { useEffect, useState } from 'react'
import './App.css'
import Search from './components/Search'
import Table from './components/Table'
import { fetchUniversities } from './services/universities'

function App() {

  const [univesityData, setUniversityData] = useState([]);
  const [countrySearch, setCountrySearch] = useState("");

  useEffect(() => {
    const savedCountry = localStorage.getItem('countrySearch');
    if (savedCountry) {
      setCountrySearch(savedCountry);
    }
  }, []);

  useEffect(() => {
    const fetchData = async (country) => {
      try {
        if (country.trim() !== "") {
          const fetchedData = await fetchUniversities(country);
          setUniversityData(fetchedData);
        } else {
          setUniversityData([]);
        }
      } catch (error) {
        console.error('fetching data error');
        console.error(error);
      }
    }
    fetchData(countrySearch);

  }, [countrySearch]);


  return (
    <>
      <section>
        <div className="container">
          <Search 
            setCountrySearch={setCountrySearch}
            />
          <Table 
            data={univesityData} 
            />
        </div>
      </section>
    </>
  )
}

export default App
