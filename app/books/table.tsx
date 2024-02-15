import React from 'react';
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	Pagination,
	getKeyValue,
} from '@nextui-org/react';

export default function BookTable({ users }) {
	const [page, setPage] = React.useState(1);
	const rowsPerPage = 4;

	const pages = Math.ceil(users.length / rowsPerPage);

	const items = React.useMemo(() => {
		const start = (page - 1) * rowsPerPage;
		const end = start + rowsPerPage;

		return users.slice(start, end);
	}, [page, users]);

	return (
		<Table
			aria-label='Example table with client side pagination'
			bottomContent={
				<div className='flex w-full justify-center'>
					<Pagination
						isCompact
						showControls
						showShadow
						color='secondary'
						page={page}
						total={pages}
						onChange={page => setPage(page)}
					/>
				</div>
			}
			classNames={{
				wrapper: 'min-h-[222px]',
			}}>
			<TableHeader>
				<TableColumn key='subject'>PRZEDMIOT</TableColumn>
				<TableColumn key='creator'>AUTOR/AUTORZY</TableColumn>
				<TableColumn key='title'>TYTUŁ</TableColumn>
				<TableColumn key='publisher'>WYDAWNICTWO</TableColumn>
			</TableHeader>
			<TableBody items={items}>
				{item => (
					<TableRow key={item.name}>{columnKey => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}</TableRow>
				)}
			</TableBody>
		</Table>
	);
}
