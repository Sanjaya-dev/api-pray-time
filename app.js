function success(position){
    console.log(position);
}

function error(){
    alert('position tidak dapat di akses');
}

function userLocation(){
    if(!navigator.geolocation){ //mengecek apakah ada geolocation tersedia di browser
        alert('Geolocation tidak di dukung didalam browser anda, silahkan gunakan bworser lain')
    }else{
        navigator.geolocation.getCurrentPosition(success,error);
    }
}
function index(){
    let app = document.getElementById('app')
    let h3 = document.createElement('h3')
    h3.innerHTML = 'Prayer Times';

    app.appendChild(h3);

    userLocation()
}

index()
