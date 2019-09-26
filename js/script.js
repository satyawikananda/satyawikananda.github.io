window.onscroll = function(){
    scrollFunction();
}

function scrollFunction(){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        document.getElementsByClassName('navbar')[0].style.background = "#fff";
        document.getElementsByClassName('navbar')[0].style.boxShadow = "0 2px 2px rgba(10,16,20,.24), 0 0 2px rgba(10,16,20,.12)";
        document.getElementsByClassName('navbar')[0].style.transition = "all 0.3s ease";
    }else{
        document.getElementsByClassName('navbar')[0].style.background = "inherit";
        document.getElementsByClassName('navbar')[0].style.boxShadow = "0 0 0 0";
        document.getElementsByClassName('navbar')[0].style.transition = "all 0.3s ease";
    }
}

function openMenu(){
    document.getElementsByClassName('sidebar')[0].style.left = '0';
    document.getElementsByClassName('sidebar')[0].style.transition = 'all 0.3s ease';
    document.getElementsByClassName('sidebar')[0].style.width = '80%';
}

function closeMenu(){
    document.getElementsByClassName('sidebar')[0].style.left = '-300px';
    document.getElementsByClassName('sidebar')[0].style.transition = 'all 0.3s ease';
    document.getElementsByClassName('sidebar')[0].style.width = '0';
}