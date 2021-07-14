import { useEffect, useState, useRef } from "react";


export default function useClickAway() {
	const [isOpen, setIsOpen] = useState(false);

	const ref = useRef<HTMLDivElement>(null);

	const toggle = () => {
		setIsOpen(i => !i);
	}
	const handleClick = (e: MouseEvent) => {
		if (ref.current && !ref.current?.contains(e.target as Element)) setIsOpen(false);
	}

	useEffect(() => {
		if (isOpen) document.addEventListener('mousedown', handleClick);
		else document.removeEventListener('mousedown', handleClick);
		return () => {
			document.removeEventListener('mousedown', handleClick);
		};
	}, [isOpen]);
	return { ref, isOpen, setIsOpen, toggle };
}