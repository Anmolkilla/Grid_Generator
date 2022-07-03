//                  Grid
const grid = document.querySelector('.grid');
const createGridUnit = document.createElement('div');
createGridUnit.classList.add('units');

//              Row

const rowUnits = document.querySelectorAll('.row-unit');
const row = document.querySelector('.row');
const createRowUnit = document.createElement('input');
createRowUnit.classList.add('row-unit');
createRowUnit.setAttribute('value', '1 fr');
createRowUnit.setAttribute('inputmode', 'numeric');

//                  Column

const column = document.querySelector('.column');
const createColumnUnit = document.createElement('input');
createColumnUnit.classList.add('column.unit');
createColumnUnit.setAttribute('value', '1 fr');
createColumnUnit.setAttribute('inputmode', 'numeric');

//              inputs

const rowInput = document.querySelector('.row-input');
const rowGap = document.querySelector('.row-gap');
const columnInput = document.querySelector('.column-input');
const columnGap = document.querySelector('.column-gap');

rowInput.value = rowInput.value || 5;
columnInput.value = columnInput.value || 5;
rowGap.value = rowGap.value || 0;
columnGap.value = columnGap.value || 0;

grid.innerHTML = '';
for (let i = 0; i < 25; i++) {
	grid.appendChild(createGridUnit.cloneNode(true));
}

function start() {
	row.innerHTML = '';
	column.innerHTML = '';
	grid.innerHTML = '';

	function appending(r, c, rg, cg) {
		for (let i = 0; i < r; i++) {
			row.appendChild(createRowUnit.cloneNode(true));
		}
		for (let i = 0; i < c; i++) {
			column.appendChild(createColumnUnit.cloneNode(true));
		}
		for (let i = 0; i < c * r; i++) {
			grid.appendChild(createGridUnit.cloneNode(true));
		}

		grid.style.setProperty('grid-template-columns', 'repeat(' + r + ', 1fr) ');
		grid.style.setProperty('grid-template-rows', 'repeat(' + c + ',1fr) ');

		grid.style.setProperty('grid-row-gap', rg + 'px');
		grid.style.setProperty('grid-column-gap', cg + 'px');
	}
	appending(Number(rowInput.value), Number(columnInput.value), Number(rowGap.value), Number(columnGap.value));
}
start();
const modal = document.querySelector('.modal');
const codeWrapper = document.querySelector('.code-wrapper');
const close = document.querySelector('.close');
const copy = document.querySelector('.copy');
const getCodeButton = document.querySelector('.get-code');
getCodeButton.addEventListener('click', giveCode);
function giveCode() {
	modal.style.display = 'flex';
	modal.classList.add('fade-in');
	modal.classList.remove('fade-out');

	document.querySelector('.col-var').textContent = columnInput.value;
	document.querySelector('.row-var').textContent = rowInput.value;
	document.querySelector('.col-gap-var').textContent = columnGap.value;
	document.querySelector('.row-gap-var').textContent = rowGap.value;
}

close.addEventListener('click', () => {
	modal.classList.add('fade-out');
	modal.classList.remove('fade-in');
	modal.style.display = 'none';
});

copy.addEventListener('click', copyFn);
function copyFn() {
	codeWrapper.select();
	document.execCommand('copy');
}

document.querySelector('.reset-grid').addEventListener('click', () => {
	rowInput.value = 5;
	columnInput.value = 5;
	rowGap.value = 0;
	columnGap.value = 0;

	row.innerHTML = '';
	column.innerHTML = '';
	grid.textContent = '';
	for (let i = 0; i < 5; i++) {
		row.appendChild(createRowUnit.cloneNode(true));
	}
	for (let i = 0; i < 5; i++) {
		column.appendChild(createColumnUnit.cloneNode(true));
	}
	for (let i = 0; i < 25; i++) {
		grid.appendChild(createGridUnit.cloneNode(true));
	}
});
