export default function Search( {setCountrySearch} ) {

      const handleSubmit = (e) => {
        e.preventDefault(); 
        const country = e.target.elements.inputCountry.value;
        setCountrySearch(country);
        localStorage.setItem('countrySearch', country);
      };

      const handleReset = () => {
        setCountrySearch("");
        localStorage.removeItem('countrySearch');
        localStorage.removeItem('selectedNames');
      }

    return (
        <>
            <div className="search-section d-flex" onSubmit={handleSubmit}>
                <form className="search-form d-flex">
                    <input type="text" id="inputCountry" placeholder="Country" />
                    <input type="submit" value="Send" />
                </form>
                <button type="button" onClick={handleReset}>Reset</button>
            </div>
        </>
    )
}