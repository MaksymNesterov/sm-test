import { useState } from "react"
import useClickAway from "../../hooks/UseClickAway"
import { SelectContainer, SelectHeader, SelectList, SelectItem } from "./styled"

type Option = { id: string, value: string }

const options: Option[] = [
	{ id: '1', value: 'Option 1' },
	{ id: '2', value: 'Option 2' },
	{ id: '3', value: 'Option 3' }

]

const Select: React.FC = () => {
	const { ref, isOpen, toggle } = useClickAway();
	const [selectedItem, setSelectedItem] = useState<Option>({ id: '-1', value: 'Select option' })

	const handleSelect = (item: Option) => {
		setSelectedItem(item)
		toggle()
	}

	return (
		<SelectContainer isOpen={isOpen} ref={ref}>
			<SelectHeader isOpen={isOpen} onClick={() => toggle()}>
				{selectedItem.value}
			</SelectHeader>
			{isOpen && (
				<SelectList>
					{options.map(item => (
						<SelectItem onClick={() => handleSelect(item)} id={item.id}>
							{item.value}
						</SelectItem>
					))}
				</SelectList>
			)}
		</SelectContainer>
	)
}

export default Select

