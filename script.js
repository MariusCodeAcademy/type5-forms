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

  const languagesList = event.target.querySelectorAll(
    "input[name='languages']:checked"
  );
  // sukti cikla per languagesList is atvaizduoti kieviena kalba htmle

  console.log(languagesList); // node list

  // <p><strong>First name:</strong>James</p>
  const nameEl = makeOutputEl('First Name:', firstName);
  const lastNameEl = makeOutputEl('Last Name', lastName);
  const ageEl = makeOutputEl('Age', age);
  const phoneNumberEl = makeOutputEl('Phone Number:', phoneNumber);
  const emailAddressEL = makeOutputEl('Email address:', emailAddress);
  const skillsRangeEl = makeOutputEl('Skills level:', skillsRange);
  const groupEl = makeOutputEl('Group:', group);

  // const languagesEl = makeOutputEl(
  //   'Preferred programing languages:',
  //   languagesList
  // );

  // <h3>Preferred programing languages:</h3>
  // <ul>
  //   <li>PHP</li>
  //   <li>Python</li>
  // </ul>
  const langItems = ['PHP', 'Python'];
  const titleEl = document.createElement('h3');
  titleEl.textContent = 'Preferred programing languages:';
  const listEl = document.createElement('ul');

  // sukti cikla per langItems ir sukurti ir prideti li el i sarasa
  let listItemEl = document.createElement('li');
  listItemEl.textContent = 'PHP';
  listEl.append(listItemEl);

  const formDisplayEl = document.querySelector('#form-display');
  formDisplayEl.innerHTML = '';
  formDisplayEl.append(
    nameEl,
    lastNameEl,
    ageEl,
    phoneNumberEl,
    emailAddressEL,
    skillsRangeEl,
    groupEl,
    titleEl,
    listEl
  );
});

// Helper functions
function makeOutputEl(title, value) {
  const newP = document.createElement('p');
  const nameTitleEl = document.createElement('strong');
  nameTitleEl.textContent = title;
  newP.append(nameTitleEl, value);
  return newP;
}

// const chekedInputs = document.querySelectorAll(
//   "input[name='languages']:checked"
// );
// console.log('chekedInputs ===', chekedInputs);
