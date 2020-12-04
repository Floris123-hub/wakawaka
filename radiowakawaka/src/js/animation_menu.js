function anime() {
    if (document.getElementById('menu').style.display === 'none') {
        if (document.getElementById("box-live")) {
            document.getElementById("box-live").style.visibility = 'visible';
        }
        if (document.getElementById('social1')) {
            document.getElementById('social1').style.display = 'block';
        }
        if (document.getElementById('see-more')) {
            document.getElementById('see-more').style.visibility = 'visible';
        }
        if (document.getElementById('buy1')) {
            document.getElementById('buy1').style.visibility = 'visible';
        }
        if (document.getElementById('buy2')) {
            document.getElementById('buy2').style.visibility = 'visible';
        }
        if (document.getElementById('next')) {
            document.getElementById('next').style.visibility = 'visible';
        }
        if (document.getElementById('prev')) {
            document.getElementById('prev').style.visibility = 'visible';
        }
        
    } else if (document.getElementById('menu').style.display === 'block') {
        if (document.getElementById("box-live")) {
            document.getElementById("box-live").style.visibility = 'hidden';
        }
        if (document.getElementById('social1')) {
            document.getElementById('social1').style.display = 'none';
        }
        if (document.getElementById('see-more')) {
            document.getElementById('see-more').style.visibility = 'hidden';
        }
        if (document.getElementById('buy1')) {
            document.getElementById('buy1').style.visibility = 'hidden';
        }
        if (document.getElementById('buy2')) {
            document.getElementById('buy2').style.visibility = 'hidden';
        }
        if (document.getElementById('next')) {
            document.getElementById('next').style.visibility = 'hidden';
        }
        if (document.getElementById('prev')) {
            document.getElementById('prev').style.visibility = 'hidden';
        }
        
    }
}