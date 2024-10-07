/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { ContactSection } from './contact';

test('contact form ', () => {
	const contact = render(<ContactSection />);
	console.log(contact);
	const tilte = screen.getByTitle('title');
	console.log(tilte);
});
