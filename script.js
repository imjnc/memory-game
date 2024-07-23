const cards = document.querySelectorAll(".card");

let cardOne,cardTwo;

function flipcard(e){
    let clickedCard = e.target;

    if(clickedCard !== cardOne){
            clickedCard.classList.add("flip");

            if(!cardOne){
                return  cardOne = clickedCard;
            }

            cardTwo = clickedCard;

            let cardOneImg = cardOne.qu
    }

}

cards.forEach(card => {
    card.addEventListener("click", flipcard);
});