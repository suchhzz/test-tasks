import { useEffect, useState } from "react";
import TableItem from "./table-items/TableItem";
import Counter from "./Counter";

export default function Table({ data }) {
    const [selectedItems, setSelectedItems] = useState([]);

    useEffect(() => {
        const savedSelections = JSON.parse(localStorage.getItem('selectedItems')) || [];
        setSelectedItems(savedSelections);
      }, []);


      const handleCheckboxChange = (name, isChecked) => {
        setSelectedItems((prevSelected) => {
            let updatedSelections = [...prevSelected];

            if (isChecked) {
                updatedSelections.push(name);
            } else {
                updatedSelections = updatedSelections.filter(item => item !== name);
            }
            localStorage.setItem('selectedItems', JSON.stringify(updatedSelections));

            return updatedSelections;
        });
    };
      
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
                    {data.map((item, index) => (
                        <tr key={index}>
                            <TableItem
                                id={index + 1}
                                name={item.name}
                                alphaCode={item.alpha_two_code}
                                country={item.country}
                                webPages={item.web_pages}
                                state={item['state-province'] || 'none'}
                                domains={item.domains}
                                selected={selectedItems.includes(item.name)}
                                handleCheckboxChange={handleCheckboxChange}
                            />
                        </tr>
                    ))}
                    </tbody>
                </table>
                <Counter selectedCount={selectedItems.length} />
            </div>
        </>
    )
}