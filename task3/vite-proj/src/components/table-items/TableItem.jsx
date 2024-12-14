import DomainList from "./DomainList";
import WebPagesList from "./WebPagesList";

export default function TableItem({ id, name, alphaCode, country, webPages, state, domains }) {
    return (
        <>
            <td>{id}</td>
            <td>{name}</td>
            <td>{alphaCode}</td>
            <td>{country}</td>
            <td className="table-multi-items">
                <WebPagesList 
                    webPages={webPages} />
            </td>
            <td>{state}</td>
            <td className="table-multi-items">
                <DomainList 
                    domains={domains}/>
            </td>
        </>
    )
}