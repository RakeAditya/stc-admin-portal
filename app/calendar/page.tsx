import Calendar from '@/components/Calender';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Calendar Page ',
	description: 'This is Calendar page ',
	// other metadata
};

const CalendarPage = () => {
	return (
		<>
			<Calendar />
		</>
	);
};

export default CalendarPage;
