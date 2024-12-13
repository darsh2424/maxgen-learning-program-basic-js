function AlertBox(alertText) {
  document.getElementById("main").classList.add('disabled')
    document.getElementById('alert-section').innerHTML += `
    <div class="alert-card">
        <div class="tick-div mt-2 mx-2">
          <img src="./img/verified-unscreen.gif">
        </div>
        <div class="alert-text">
          ${alertText}
        </div>
    </div>
  `
  document.getElementById("alert-section").scrollIntoView();
    setTimeout(function () {
        alertText='';
        document.getElementById("main").classList.remove('disabled')
        document.getElementById('alert-section').innerHTML ="";
        document.querySelector('.alert-card').classList.add('d-none')
    }, 2000)
}
export {AlertBox}