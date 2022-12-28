function compruebaAceptaCookies() {
    if (localStorage.aceptaCookies == 'true') {
        cajacookies.style.display = 'none';
    }
};

function aceptarCookies() {
    localStorage.aceptaCookies == 'true';
        cajacookies.style.display = 'none';
};

// $(document).ready(function() {
//     compruebaAceptaCookies();
// });



function ventana(url) {
	localStorage.aceptaCookies === 'true';
    let show = window.confirm("Política de privacidad");
    if (show === true) {

        window.open("https://www.inversionesbryan.com/cookies.html", "ventana", "width=120 height=300 scrollbars=YES");
    } else {
        window.close("https://www.inversionesbryan.com");
    }
    
};

// ventana();


$(document).ready(function() {
    compruebaAceptaCookies()
});


// if(confirm('Are you sure you want to do this?'))
// {
      // Do these things
//       $('input[type=text]').each(function(index, value) {
//            total += parseInt($(value).val() || 0);
//       });
//       $("#chkTotal").html(total);
// }

// document.querySelector("")