export default function DomainList( {domains} ) {
    return (
        <>
            {domains.map((domain, index) => (
                <p key={index}>{domain}</p>
            ))}
        </>
    )
}