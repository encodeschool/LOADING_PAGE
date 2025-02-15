let loadingWrapper = document.querySelector('.loading_wrapper');

document.onreadystatechange = function() {
    if (document.readyState !== 'complete') {
        loadingWrapper.style.visibility = 'visible';
    } else {
        loadingWrapper.style.visibility = 'hidden'
        loadingWrapper.style.opacity = '0';
    }
}