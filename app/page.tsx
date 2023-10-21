import Board from '@/components/Dashboard/Board';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'STC Portal',
	description: '',
	// other metadata
};

export default function Home() {
	return (
		<>
			<Board />
		</>
	);
}
