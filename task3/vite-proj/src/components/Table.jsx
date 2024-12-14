import TableItem from "./table-items/TableItem";

export default function Table( {data} ) {
    return (
        <>
            <div className="table-section d-flex">
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Alpha two code</th>
                            <th>Country</th>
                            <th>Web pages</th>
                            <th>State</th>
                            <th>Domains</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {data.map((universityItem) => {
                                <TableItem
                                id={universityItem.}
                                name="Ivan"
                                alphaCode="uk"
                                country="ukraine"
                                webPages={["page1", "page2", "page3"]}
                                state="sad"
                                domains={["domain1", "domain2", "domain3"]}
                            />
                            })}
                        </tr>

                        <tr>
                            <TableItem
                                id="0"
                                name="Ivan"
                                alphaCode="uk"
                                country="ukraine"
                                webPages={["page1", "page2", "page3"]}
                                state="sad"
                                domains={["domain1", "domain2", "domain3"]}
                            />
                        </tr>
                        <tr>
                            <TableItem
                                id="0"
                                name="Ivan"
                                alphaCode="uk"
                                country="ukraine"
                                webPages={["page1", "page2", "page3"]}
                                state="sad"
                                domains={["domain1", "domain2", "domain3"]}
                            />
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}