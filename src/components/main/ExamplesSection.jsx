import {EXAMPLES} from "../staticData.js";
import TabButton from "../tab-button/TabButton.jsx";
import {useState} from "react";

export default function ExamplesSection() {

    const [selectedTab, setSelectedTab] = useState();

    function handleClick(selectedItem) {
        setSelectedTab(selectedItem);
    }

    let tabContent = <p>Select a tab !</p>;

    if (selectedTab) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTab].title}</h3>
                <p>{EXAMPLES[selectedTab].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTab].code}</code>
                </pre>
            </div>
        );
    }

    return (
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                {
                    Object.keys(EXAMPLES).map((item) => {
                        return (
                            <TabButton isSelected={selectedTab === item}
                                       onSelectedTab={() => handleClick(item)}
                                       key={item}>
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </TabButton>
                        );
                    })
                }
            </menu>
            {tabContent}
        </section>
    );
}