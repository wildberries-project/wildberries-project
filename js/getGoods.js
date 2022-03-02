const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link');

   const getData = () => {
        fetch('https://test-e87c5-default-rtdb.firebaseio.com/db.json')
            .then((res) => res.json())
            .then((data) => {
                localStorage.setItem('data', JSON.stringify(data));
            })
    }

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            getData();
        })
        console.log(link);
    })

    // localStorage.setItem('goods', JSON.stringify([1,2,3,4]));
    // localStorage.removeItem('goods');

}

getGoods();