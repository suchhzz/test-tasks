export default function WebPagesList({ pages }) {
    return (
        <>
            {pages.map((page, index) => (
                <a key={index} href={page}>{page}</a>
            ))}
        </>
    );
}
