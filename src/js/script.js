document.addEventListener('DOMContentLoaded', () => {

	new Typewriter('#representations', {
		strings: [''],
		cursor: null,
		autoStart: true,
		loop: false,
		delay: 25
	}).typeString('EPRESENTATIONS and')

	setTimeout(() => {

		new Typewriter('#reconfigurations', {
			strings: [''],
			cursor: null,
			autoStart: true,
			loop: false,
			delay: 25
		}).typeString('ECONFIGURATIONS of the')

	}, 200)

	setTimeout(() => {

		new Typewriter('#digital', {
			strings: [''],
			cursor: null,
			autoStart: true,
			loop: false,
			delay: 25
		}).typeString('IGITAL in Swedish Literature and Art, 1950–2010')

	}, 400)

	const archiveTyper = new Typewriter('#archive', {
		strings: [''],
		cursor: null,
		autoStart: true,
		loop: false,
		delay: 25
	}).typeString('RCHIVE')

	new Typewriter('#book', {
		strings: [''],
		cursor: null,
		autoStart: true,
		loop: false,
		delay: 25
	}).typeString('OOK')

	new Typewriter('#conference', {
		strings: [''],
		cursor: null,
		autoStart: true,
		loop: false,
		delay: 25
	}).typeString('ONFERENCE')


	document.getElementById('archive-link').addEventListener('mouseleave', () => {
	})

})
