import { Input } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { title } from '@/components/primitives';
import { AddTextBook } from '@/lib/book-action';

export default function AddTextBookForm() {
	const variant = 'bordered';

	return (
		<form action={AddTextBook}>
			<h2 className={title()}>Nowy post</h2>
			<div key={variant} className='flex mt-10 flex-col md:flex-nowrap mb-6 md:mb-0 gap-4'>
				<Input type='text' name='subject' isRequired variant={variant} label='Przedmiot' placeholder='Np. J.Polski' />
				<Input
					type='text'
					name='creator'
					isRequired
					variant={variant}
					label='Autor/Autorzy'
					placeholder='Twórcy ksiazki'
				/>
				<Input type='text' name='title' isRequired variant={variant} label='Tytul' placeholder='Tytul ksiazki' />
				<Input type='text' name='publisher' isRequired variant={variant} label='Wydawca' placeholder='Np. Nowa Era' />
				<Input type='text' name='class' isRequired variant={variant} label='Klasa' placeholder='1/2/3/4' />
				<Button type='submit' color='default'>
					Opublikuj
				</Button>
			</div>
		</form>
	);
}
