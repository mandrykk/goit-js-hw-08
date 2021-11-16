import throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = 'feedback-form-state';
const feedbackForm = document.querySelector('.feedback-form');

initForm();

feedbackForm.addEventListener('input', e => {
    e.preventDefault();
    const formData = new FormData(feedbackForm);
    formData.forEach((value, name) => console.log(value, name));
});

feedbackForm.addEventListener('change', throttle(onThottle, 500));

feedbackForm.addEventListener('submit', evt => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
}
);

function onThottle (e){
    let persistedFilters = localStorage.getItem(LOCAL_STORAGE_KEY);
    persistedFilters = persistedFilters ? JSON.parse(persistedFilters) : {};
    persistedFilters[e.target.name] =e.target.value;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(persistedFilters));
}

function initForm(){
let persistedFilters = localStorage.getItem(LOCAL_STORAGE_KEY);
if(persistedFilters){
    persistedFilters = JSON.parse(persistedFilters);
    Object.entries(persistedFilters).forEach(([name, value]) => {
        feedbackForm.elements[name].value = value;
    });
}
}



