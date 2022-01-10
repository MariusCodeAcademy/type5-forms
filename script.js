const contactForm = document.querySelector('#first-form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const firstName = event.target.elements.firstName.value;
  const lastName = event.target.elements.lastName.value;
  const age = event.target.elements.age.value;
  const phoneNumber = event.target.elements.phoneNumber.value;
  const emailAddress = event.target.elements.emailAddress.value;
  const skillsRange = event.target.elements.skillsRange.value;
  const group = event.target.elements.group.value;
  const languages = event.target.elements.languages.value;

  // const nameEl = document.createElement('p');
  // const nameTitleEl = document.createElement('strong');
  // nameTitleEl.textContent = 'First Name:';
  // nameEl.append(nameTitleEl, firstName);

  // <p><strong>First name:</strong>James</p>

  const nameEl = makeOutputEl('First Name:', firstName);
  const lastNameEl = makeOutputEl('Last Name', lastName);
  const ageEl = makeOutputEl('Age', age);
  const phoneNumberEl = makeOutputEl('Phone Number:', phoneNumber);
  const emailAddressEL = makeOutputEl('Email address:', emailAddress);
  const skillsRangeEl = makeOutputEl('Skills level:', skillsRange);
  const groupEl = makeOutputEl('Group:', group);
  const languagesEl = makeOutputEl(
    'Preferred programing languages:',
    languages
  );

  const formDisplayEl = document.querySelector('#form-display');

  formDisplayEl.append(
    nameEl,
    lastNameEl,
    ageEl,
    phoneNumberEl,
    emailAddressEL,
    skillsRangeEl,
    groupEl,
    languagesEl
  );

  const body = document.body;
  let students_list_div;
  students_list_div = document.createElement('div');
  body.append(students_list_div);
  students_list_div.classList.add('student-item');

  document.getElementById('submit').onclick = function () {
    var markedCheckbox = document.getElementsByName('languages');
    for (var checkbox of markedCheckbox) {
      if (checkbox.checked) document.body.append(checkbox.value + ' ');
    }
  };
});

// Helper functions
function makeOutputEl(title, value) {
  const newP = document.createElement('p');
  const nameTitleEl = document.createElement('strong');
  nameTitleEl.textContent = title;
  newP.append(nameTitleEl, value);
  return newP;
}

const chekedInputs = document.querySelectorAll(
  "input[name='languages']:checked"
);
console.log('chekedInputs ===', chekedInputs);
