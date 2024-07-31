import {CONCEPTS_DATA} from "../staticData.js";
import CoreConcept from "../concept/CoreConcept.jsx";

export default function CoreConceptsSection() {
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <div id="concept-list">
                {
                    CONCEPTS_DATA.map((conceptItem) => {
                        return (
                            <CoreConcept key={conceptItem.title}
                                         {...conceptItem} />
                        );
                    })
                }
            </div>
        </section>
    );
}