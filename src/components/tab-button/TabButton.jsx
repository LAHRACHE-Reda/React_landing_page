import './TabButton.css';

export default function TabButton({children, onSelectedTab, isSelected}) {
    return (
        <li>
            <button className={isSelected ? 'active' : ''}
                    onClick={onSelectedTab}
                    id="tab-button">
                {children}
            </button>
        </li>
    );
}