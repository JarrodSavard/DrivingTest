const testRoute = document.querySelector('.my-btn-test');
const studyRoute = document.querySelector('.my-btn-study');


testRoute.addEventListener('click', () =>{
    window.location.replace('test.html')
});

studyRoute.addEventListener('click', () =>{
    window.location.replace('study.html');
});

