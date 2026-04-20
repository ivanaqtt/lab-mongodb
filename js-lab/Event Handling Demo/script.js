// --- DOM References ---
const output     = document.getElementById('output');
const clickBtn   = document.getElementById('clickBtn');
const textInput  = document.getElementById('textInput');
const selectBox  = document.getElementById('selectBox');
const keyupInput = document.getElementById('keyupInput');
const demoForm   = document.getElementById('demoForm');
const formInput  = document.getElementById('formInput');
const hoverBox   = document.getElementById('hoverBox');
const focusInput = document.getElementById('focusInput');

// Helper: update the output area
function log(message) {
  output.textContent = message;
}

// --- 4.2 Click Event ---
clickBtn.addEventListener('click', () => {
  log('Button was clicked!');
});

// --- 4.3 Input Event (live typing) ---
textInput.addEventListener('input', () => {
  log(`Input: "${textInput.value}"`);
});

// --- 4.3 Change Event (dropdown selection) ---
selectBox.addEventListener('change', () => {
  log(`Selected: "${selectBox.value}"`);
});

// --- 4.4 Submit Event ---
demoForm.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent page reload
  log(`Form submitted! Name: "${formInput.value}"`);
  formInput.value = '';
});

// --- 4.5 Keyup Event ---
keyupInput.addEventListener('keyup', (e) => {
  log(`Last key pressed: "${e.key}"`);
});

// --- 4.6 Mouseover & Mouseout Events ---
hoverBox.addEventListener('mouseover', () => {
  hoverBox.classList.add('hovered');
  log('Mouse entered the hover box.');
});

hoverBox.addEventListener('mouseout', () => {
  hoverBox.classList.remove('hovered');
  log('Mouse left the hover box.');
});

// --- 4.7 Focus & Blur Events ---
focusInput.addEventListener('focus', () => {
  focusInput.classList.add('highlighted');
  log('Input field focused.');
});

focusInput.addEventListener('blur', () => {
  focusInput.classList.remove('highlighted');
  log('Input field lost focus.');
});
