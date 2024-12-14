export default function Search() {
    return (
        <>
            <div className="search-section d-flex">
                <form className="search-form d-flex">
                    <input type="text" placeholder="Country" />
                    <input type="submit" value="Send" />
                </form>
                <button>Reset</button>
            </div>
        </>
    )
}