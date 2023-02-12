const mainPopup = document.getElementById('modal_main');
const successPopup = document.getElementById('modal_success');
const popups = Array.from([mainPopup, successPopup]);

mainPopup.className = 'modal modal_active';
const successBtn = mainPopup.getElementsByClassName('btn btn_danger modal__close show-success')[0];
successBtn.onclick = () => {
    mainPopup.className = 'modal';
    successPopup.className = 'modal modal_active'
}

popups.forEach( popup => {
    let closePopup = popup.getElementsByClassName('modal__close modal__close_times');
    closePopup[0].onclick = () => {
        closePopup[0].closest('.modal').className = 'modal';
    };
})