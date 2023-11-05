import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export const BasicButtonComponent= ({ setSelectedState }) => {
    
    // const [selectedState, setSelectedState] = useState('')
    
    const handleSelect = (selectedValue) => {
        setSelectedState(selectedValue);
        // console.log(selectedValue)
      };

    const states = [
        'AL', 'AK', 'TX', 'WA'
        // ... add the remaining states
    ];

    const visibleStates = states.slice(0,5)
    return (
        <DropdownButton
            id="state-dropdown"
            title="Select State"
            onSelect={handleSelect}
            style={{ background: 'transparent' }}
            >
            <Dropdown.Menu style={{ maxHeight: '200px', overflowY: 'auto' }}>
                {visibleStates.map((state) => (
                <Dropdown.Item key={state} eventKey={state}>
                    {state}
                </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </DropdownButton>
    );
}