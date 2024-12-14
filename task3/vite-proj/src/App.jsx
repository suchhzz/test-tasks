import { useEffect, useState } from 'react'
import './App.css'
import Search from './components/Search'
import Table from './components/Table'
import { fetchUniversities } from './services/universities'

function App() {

  const [univesityData, setUniversityData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let data = await fetchUniversities();

      setUniversityData(data);
    }
  }, [])

  return (
    <>
      <section>
        <div className="container">
          <Search></Search>
          <Table 
            data={univesityData}/>
        </div>
      </section>
    </>
  )
}

export default App
