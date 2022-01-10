const contactForm = document.querySelector('#first-form');
const formDisplayEl = document.querySelector('#form-display');
const body = document.body;

// 1. create div#students-list
const studentListOutputEl = document.createElement('div');
studentListOutputEl.setAttribute('id', 'students-list');
body.append(studentListOutputEl);

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  //  1 get all values ======================================
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

  // 2. input output elements ======================================

  // <p><strong>First name:</strong>James</p>
  const nameEl = makeOutputEl('First Name:', firstName);
  const lastNameEl = makeOutputEl('Last Name', lastName);
  const ageEl = makeOutputEl('Age', age);
  const phoneNumberEl = makeOutputEl('Phone Number:', phoneNumber);
  const emailAddressEL = makeOutputEl('Email address:', emailAddress);
  const skillsRangeEl = makeOutputEl('Skills level:', skillsRange);
  const groupEl = makeOutputEl('Group:', group);

  // <article>
  //   <h3>Preferred programing languages:</h3>
  //   <ul>
  //     <li>PHP</li>
  //     <li>Python</li>
  //   </ul>
  //  </article>
  const titleEl = document.createElement('h3');
  titleEl.textContent = 'Preferred programing languages:';
  const listEl = document.createElement('ul');

  // sukti cikla per langItems ir sukurti ir prideti li el i sarasa
  languagesList.forEach((langItemNode) => {
    let listItemEl = document.createElement('li');
    listItemEl.textContent = langItemNode.value;
    listEl.append(listItemEl);
  });

  makeOutputList('Preferred programing languages:', languagesList);

  // 1. create div#students-list

  // 2. create div.student-item
  const studentItemEl = document.createElement('div');
  // older way
  // studentItemEl.setAttribute('class', 'student-item');
  // better way
  studentItemEl.classList.add('student-item');
  // 3. add student info to student-item
  studentItemEl.append(
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
  // 4. add student to div#students-list

  // 3. Display output values ======================================
  studentListOutputEl.append(studentItemEl);

  //   6.1 sukurti span
  //   6.2 i span el irasyti „Sukurtas studentas (Vardas Pavardė)"
  //   6.3 ideti span i dokumenta
  //   6.4 praejus 5 sek sunaikitni arba paslepti span

  // makefeedback()
  const feedbackSpan = document.createElement('span');
  feedbackSpan.textContent = 'Sukurta';
  contactForm.append(feedbackSpan);
  // setTimeout(<funkcija kuri bus vygdoma>, <po kiek laiko miliisekundem>)
  setTimeout(() => {
    feedbackSpan.textContent = '';
  }, 3000);
});

// Helper functions
function makeOutputEl(title, value) {
  const newP = document.createElement('p');
  const nameTitleEl = document.createElement('strong');
  nameTitleEl.textContent = title;
  newP.append(nameTitleEl, value);
  return newP;
}

function makeOutputList(title, nodeList) {}

// const chekedInputs = document.querySelectorAll(
//   "input[name='languages']:checked"
// );
// console.log('chekedInputs ===', chekedInputs);

{
  /* <div id="students-list">
    <div class="student-item">
      << studen info >>
    </div>
  </div> */
}
