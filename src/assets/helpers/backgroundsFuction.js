const backgroundsFuction = (weather) => {

    document.querySelector('body').className = '';

    switch (weather){
        case 'Clouds':
            document.querySelector('body').classList.add('Clouds');
            break
        case 'Rain':
            document.querySelector('body').classList.add('Rain');
            break
        case 'Snow':
            document.querySelector('body').classList.add('Snow');
            break
        case 'Clear':
            document.querySelector('body').classList.add('Clear');
            break
        case 'Thunderstorm':
            document.querySelector('body').classList.add('Thunderstorm');
            break
    }


};

export default backgroundsFuction;