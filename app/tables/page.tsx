import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import TableOne from '@/components/Tables/TableOne';

import { Metadata } from 'next';
export const metadata: Metadata = {
	title: 'Tables Page ',
	description: 'This is Tables page ',
	// other metadata
};

const TablesPage = () => {
	return (
		<>
			<Breadcrumb pageName="Tables" />

			<div className="flex flex-col gap-10">
				<TableOne />
			</div>
		</>
	);
};

export default TablesPage;
