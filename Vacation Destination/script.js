(function(){
    "use strict";

    var DetailsForm = document.getElementById('DDF');
    DetailsForm.addEventListener('submit', handleformsubmit);

    function handleformsubmit(event){
        event.preventDefault();

        const DestinationName = event.target.elements['name'].value;
        const DestinationLocation = event.target.elements['location'].value;
        const DestinationPhoto = event.target.elements['photo'].value;
        const DestinationDescription = event.target.elements['description'].value;

        for (let i=0; i < DetailsForm.length; i++){
            DetailsForm.elements[i].value='';
        }

        const DestinationCard = CreateDestinationCard(DestinationName,DestinationLocation,DestinationPhoto,DestinationDescription);

        const WishListContainer = document.getElementById('DestinationsContainer');
        
        if(WishListContainer.children.length === 0){
            document.getElementById('title').innerHTML = 'My Wishlist';
        }

        document.querySelector('#DestinationsContainer').appendChild(DestinationCard);

    }

    function CreateDestinationCard(name,location,photoURL,description){
        
        let card = document.createElement('div');
        card.className = 'card';

        let img = document.createElement('img');
        img.setAttribute('Alt', name);

        const ConstantPhotoURL = 'images/signpost.jpg';

        if(photoURL.length === 0){
            img.setAttribute('src', ConstantPhotoURL);
        }
        else{
            img.setAttribute('src', photoURL);
        }

        card.appendChild(img);

        const CardBody = document.createElement('div');
        CardBody.className = 'card-body';

        const CardTitle = document.createElement('h3');
        CardTitle.innerText = name;
        CardBody.appendChild(CardTitle);

        const CardSubtitle = document.createElement('h4');
        CardSubtitle.innerText = location;
        CardBody.appendChild(CardSubtitle);

        if(description.length !==0){
            const CardText = document.createElement('p');
            CardText.className = 'card-text';
            CardText.innerText = description;
            CardBody.appendChild(CardText);
        }

        const CardDelete = document.createElement('button');
        CardDelete.innerText = "Remove";

        CardDelete.addEventListener('click', removeDestination);
        CardBody.appendChild(CardDelete);

        card.appendChild(CardBody);

        return card;

    }

    function removeDestination(event){

        const card = event.target.parentElement.parentElement;
        card.remove();

    }

})()