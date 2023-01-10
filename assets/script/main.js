// thong tin ca nhan
var authFormEl = document.querySelector('.auth-form');
var jsInforEl = document.querySelector('.js-infor');
var emailEl = document.getElementById('email');
var submit = document.querySelector('.submit');
var errorLabel = document.querySelector('.error-label');

submit.addEventListener('click', authform);

function authform(event){
    var emailValue = emailEl.value;
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let result = regex.test(emailValue);
    if(emailValue != ' ' && result){
        authFormEl.classList.add('hidden');
        jsInforEl.classList.remove('hidden');
    } else{
        errorLabel.classList.remove('hidden')
    }
    event.preventDefault();
}

// kinh nghiem
var experienceJs = document.querySelector('.experience-js');
var experienceViewMore = document.querySelector('.experience-viewmore');
var experienceContentJs = document.querySelector('.experience-content-js');
var experienceViewLess = document.querySelector('.experience-viewless');

experienceJs.addEventListener('mouseover', handleExperienceHover);
experienceJs.addEventListener('mouseout', handleExperienceOutHover);
experienceViewMore.addEventListener('click', handleExperienceViewMoreClick);
experienceViewLess.addEventListener('click', handleExperienceViewLessClick);

function handleExperienceHover(event){
    experienceViewMore.classList.remove('hidden');
    event.preventDefault();
}

function handleExperienceOutHover(event){
    experienceViewMore.classList.add('hidden');
    event.preventDefault();
}

function handleExperienceViewMoreClick(event){
    experienceViewMore.classList.add('hidden');
    experienceViewLess.classList.remove('hidden');
    experienceContentJs.classList.remove('hidden');
    experienceJs.removeEventListener('mouseover', handleExperienceHover);
    event.preventDefault();
}

function handleExperienceViewLessClick(event){
    experienceViewLess.classList.add('hidden');
    experienceContentJs.classList.add('hidden');
    experienceViewMore.classList.remove('hidden');
    experienceJs.addEventListener('mouseover', handleExperienceHover);
    event.preventDefault();

}

// hoc van
var educationJs = document.querySelector('.education-js');
var educationViewMore = document.querySelector('.education-viewmore');
var educationViewLess = document.querySelector('.education-viewless');
var educationContentJs = document.querySelector('.education-content-js');

educationJs.addEventListener('mouseover', handleEducationHover);
educationJs.addEventListener('mouseout', handleEducationOutHover);
educationViewMore.addEventListener('click', handleEducationViewMoreClick);
educationViewLess.addEventListener('click', handleEducationViewLessClick);

function handleEducationHover(event){
    educationViewMore.classList.remove('hidden');
    event.preventDefault();
}

function handleEducationOutHover(event){
    educationViewMore.classList.add('hidden');
    event.preventDefault();
}

function handleEducationViewMoreClick(event){
    educationViewMore.classList.add('hidden');
    educationViewLess.classList.remove('hidden');
    educationContentJs.classList.remove('hidden');
    educationJs.removeEventListener('mouseover', handleEducationHover);
    event.preventDefault();
}

function handleEducationViewLessClick(event){
    educationViewLess.classList.add('hidden');
    educationViewMore.classList.remove('hidden');
    educationContentJs.classList.add('hidden');
    educationJs.addEventListener('mouseover', handleEducationHover);
    event.preventDefault();
}

// hoat dong
var activityJs = document.querySelector('.activity-js');
var activityViewMore = document.querySelector('.activity-viewmore');
var activityViewLess = document.querySelector('.activity-viewless');
var activityContentJs = document.querySelector('.activity-content-js');

activityJs.addEventListener('mouseover', handleActivityHover);
activityJs.addEventListener('mouseout', handleActivityOutHover);
activityViewMore.addEventListener('click', handleActivityViewMoreClick);
activityViewLess.addEventListener('click', handleActivityViewLessClick);

function handleActivityHover(event){
    activityViewMore.classList.remove('hidden');
    event.preventDefault();
}

function handleActivityOutHover(event){
    activityViewMore.classList.add('hidden');
    event.preventDefault();
}

function handleActivityViewMoreClick(event){
    activityViewMore.classList.add('hidden');
    activityViewLess.classList.remove('hidden');
    activityContentJs.classList.remove('hidden');
    activityJs.removeEventListener('mouseover', handleActivityHover);
    event.preventDefault();
}

function handleActivityViewLessClick(event){
    activityViewLess.classList.add('hidden');
    activityViewMore.classList.remove('hidden');
    activityContentJs.classList.add('hidden');
    activityJs.addEventListener('mouseover', handleActivityHover);
    event.preventDefault();
}

// so thich
var hobbyJs = document.querySelector('.hobby-js');
var hobbyViewMore = document.querySelector('.hobby-viewmore');
var hobbyViewLess = document.querySelector('.hobby-viewless');
var hobbyContentJs = document.querySelector('.hobby-content-js');

hobbyJs.addEventListener('mouseover', handlehobbyHover);
hobbyJs.addEventListener('mouseout', handlehobbyOutHover);
hobbyViewMore.addEventListener('click', handlehobbyViewMoreClick);
hobbyViewLess.addEventListener('click', handlehobbyViewLessClick);

function handlehobbyHover(event){
    hobbyViewMore.classList.remove('hidden');
    event.preventDefault();
}

function handlehobbyOutHover(event){
    hobbyViewMore.classList.add('hidden');
    event.preventDefault();
}

function handlehobbyViewMoreClick(event){
    hobbyViewMore.classList.add('hidden');
    hobbyViewLess.classList.remove('hidden');
    hobbyContentJs.classList.remove('hidden');
    hobbyJs.removeEventListener('mouseover', handlehobbyHover);
    event.preventDefault();
}

function handlehobbyViewLessClick(event){
    hobbyViewLess.classList.add('hidden');
    hobbyViewMore.classList.remove('hidden');
    hobbyContentJs.classList.add('hidden');
    hobbyJs.addEventListener('mouseover', handlehobbyHover);
    event.preventDefault();
}

// ngon ngu
var languageJs = document.querySelector('.language-js');
var languageViewMore = document.querySelector('.language-viewmore');
var languageViewLess = document.querySelector('.language-viewless');
var languageContentJs = document.querySelector('.language-content-js');

languageJs.addEventListener('mouseover', handlelanguageHover);
languageJs.addEventListener('mouseout', handlelanguageOutHover);
languageViewMore.addEventListener('click', handlelanguageViewMoreClick);
languageViewLess.addEventListener('click', handlelanguageViewLessClick);

function handlelanguageHover(event){
    languageViewMore.classList.remove('hidden');
    event.preventDefault();
}

function handlelanguageOutHover(event){
    languageViewMore.classList.add('hidden');
    event.preventDefault();
}

function handlelanguageViewMoreClick(event){
    languageViewMore.classList.add('hidden');
    languageViewLess.classList.remove('hidden');
    languageContentJs.classList.remove('hidden');
    languageJs.removeEventListener('mouseover', handlelanguageHover);
    event.preventDefault();
}

function handlelanguageViewLessClick(event){
    languageViewLess.classList.add('hidden');
    languageViewMore.classList.remove('hidden');
    languageContentJs.classList.add('hidden');
    languageJs.addEventListener('mouseover', handlelanguageHover);
    event.preventDefault();
}

// ky nang
var skillJs = document.querySelector('.skill-js');
var skillViewMore = document.querySelector('.skill-viewmore');
var skillViewLess = document.querySelector('.skill-viewless');
var skillContentJs = document.querySelector('.skill-content-js');

skillJs.addEventListener('mouseover', handleskillHover);
skillJs.addEventListener('mouseout', handleskillOutHover);
skillViewMore.addEventListener('click', handleskillViewMoreClick);
skillViewLess.addEventListener('click', handleskillViewLessClick);

function handleskillHover(event){
    skillViewMore.classList.remove('hidden');
    event.preventDefault();
}

function handleskillOutHover(event){
    skillViewMore.classList.add('hidden');
    event.preventDefault();
}

function handleskillViewMoreClick(event){
    skillViewMore.classList.add('hidden');
    skillViewLess.classList.remove('hidden');
    skillContentJs.classList.remove('hidden');
    skillJs.removeEventListener('mouseover', handleskillHover);
    event.preventDefault();
}

function handleskillViewLessClick(event){
    skillViewLess.classList.add('hidden');
    skillViewMore.classList.remove('hidden');
    skillContentJs.classList.add('hidden');
    skillJs.addEventListener('mouseover', handleskillHover);
    event.preventDefault();
}