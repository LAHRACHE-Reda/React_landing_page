import './CoreConcept.css';

export default function CoreConcept({title, description, imageLocation}) {
    return (
        <div id="core-concept">
            <img src={imageLocation} alt={title}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}