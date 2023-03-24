const MAX_INTERESTS = 5;

const profile = document.querySelector('.profile');
const interestsContainer = profile.querySelector('.interests');
const addInterestBtn = profile.querySelector('.add-interest');

let interests = [];

addInterestBtn.addEventListener('click', () => {
    if (interests.length < MAX_INTERESTS) {
        const newInterest = prompt('Enter a new interest:');
        if (newInterest && newInterest.trim() !== '') {
            interests.push(newInterest);
            updateInterests();
        }
    }
});

interestsContainer.addEventListener('click', event => {
    if (event.target.matches('.remove-interest')) {
        const index = interests.indexOf(event.target.dataset.interest);
        if (index !== -1) {
            interests.splice(index, 1);
            updateInterests();
        }
    }   
});

function updateInterests() {
    interestsContainer.textContent = '';
    interestsContainer.textContent = interests.join(', ');
    interests.forEach(interest => {
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'x';
        removeBtn.classList.add('remove-interest');
        removeBtn.dataset.interest = interest;
        interestsContainer.appendChild(removeBtn);
    });
}
