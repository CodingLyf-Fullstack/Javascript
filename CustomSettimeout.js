function CustomSettimeout(callback, delay) {
    let start = Date.now();
    function check() {
        let current = Date.now()
        if(current-start >= delay) {
            callback()
        } else {
            requestAnimationFrame(check)
        }
    }
    requestAnimationFrame(check)
}

CustomSettimeout(() => {
    console.log('My custom settimeout')
}, 2000);
