import DomainList from "./DomainList";
import WebPagesList from "./WebPagesList";

export default function TableItem({ id, name, alphaCode, country, webPages, state, domains, selected, handleCheckboxChange }) {

    const handleCheckboxClick = (e) => {
        handleCheckboxChange(name, e.target.checked);
    }

    return (
        <>
            <td>{id}</td>
            <td>{name}</td>
            <td>{alphaCode}</td>
            <td>{country}</td>
            <td className="table-multi-items">
                <WebPagesList
                    pages={webPages}
                />
            </td>
            <td>{state}</td>
            <td className="table-multi-items">
                <DomainList
                    domains={domains}
                />
            </td>
            <td>
                <input
                    type="checkbox"
                    checked={selected}
                    onChange={handleCheckboxClick}
                />
            </td>
        </>
    )
}