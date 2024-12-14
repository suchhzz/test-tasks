export default function Counter({ selectedCount }) {
    return (
        <>
            <div className="counter-field">
                <p>Checked checkboxes: {selectedCount}</p>
            </div>
        </>
    )
}