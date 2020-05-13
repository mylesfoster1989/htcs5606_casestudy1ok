

/**
 * Purpose: logo animation
 *
 * @returns
 */
//here belows
//Left Divider Animation start
function leftDividerAnimation() {
    targetPic = document.getElementById("leftDivPic");
    x = 0;
    setInterval(function () {
        targetPic.style.right = x + "px";
        x = x - 2;
        if (x >= 800){
            x = 0;
        }
    }, 1000);
}
//Left Divider Animation end



function addToCart(e) {
    cart = document.getElementById("cartDiv");
    switch (e.id) {
        case "addCat":
            qty = document.getElementById("catQty").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>Cat: <input type="number" class="cartInput" id = "cartCat" pName = "Cat" price="3.3" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 3.3)
                    + '</p>');
            break;
        case "addBird":
            qty = document.getElementById("birdQty").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>Bird: <input type="number" class="cartInput" id = "cartBird" pName = "Bird" price="2.9" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 2.3)
                    + '</p>');
            break;
        case "addFish":
            qty = document.getElementById("fishQty").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>Fish: <input type="number" class="cartInput" id = "cartFish" pName = "Fish" price="1.3" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 1.3)
                    + '</p>');
            break;
        case "addDog":
            qty = document.getElementById("dogQty").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>Dog: <input type="number" class="cartInput" id = "cartDog" pName = "Dog" price="4.5" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 4.5)
                    + '</p>');
            break;

        case "addDog2":
            qty = document.getElementById("dog2Qty").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>Dog2: <input type="number" class="cartInput" id = "cartDog2" pName = "Dog2" price="4.3" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 4.3)
                    + '</p>');
            break;
        case "addDog3":
            qty = document.getElementById("dog3Qty").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>Dog3: <input type="number" class="cartInput" id = "cartDog3" pName = "Dog3" price="8.3" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 8.3)
                    + '</p>');
            break;
        case "addDog4":
            qty = document.getElementById("dog4Qty").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>Dog4: <input type="number" class="cartInput" id = "cartDog4" pName = "Dog4" price="7.55" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 7.55)
                    + '</p>');
            break;
        case "addDog5":
            qty = document.getElementById("dog5Qty").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>Dog5: <input type="number" class="cartInput" id = "cartDog5" pName = "Dog5" price="3.55" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 3.55)
                    + '</p>');
            break;
        case "addDog6":
            qty = document.getElementById("dog6Qty").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>Dog6: <input type="number" class="cartInput" id = "cartDog6" pName = "Dog6" price="3.30" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 3.30)
                    + '</p>');
            break;

        case "addRep":
            qty = document.getElementById("repQty").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>Rep: <input type="number" class="cartInput" id = "cartRep" pName = "Rep" price="3.33" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 3.33)
                    + '</p>');
            break;
        case "addChicken":
            qty = document.getElementById("chickenQty").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>Chicken: <input type="number" class="cartInput" id = "cartChicken" pName = "Chicken" price="3.20" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 3.20)
                    + '</p>');
            break;

        default:
        // code block
    }

}

function addToInvoice() {

}

/**
 * Show invoice page
 */
function invoice() {

    voicePage = document.getElementById("voicePage");
    //Get the button that opens the modal
    var btn = document.getElementById("showInvoiceBut");

    //Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    //When the user clicks on the button, open the modal
    btn.onclick = function() {
        cart = document.getElementsByClassName("cartInput");
        voiceContent = document.getElementById("voice-content");
        Total = 0;
        var elems = document.getElementsByClassName("items");
        i = 0
        while (i<elems.length){
            elems[i].parentNode.removeChild(elems[i]);
        }


        i = 0;
        while (i < cart.length) {
            console.log(cart[i].id);
            qty = cart[i].value;
            switch (cart[i].id) {
                case "cartCat":
                    voiceContent.insertAdjacentHTML(
                        'beforeend',
                        '<p class = "items">Cat: Qty:'+ qty +' Price:$' + (Number(qty) * 3.3)+ '</p>');
                    Total += (Number(qty) * 3.3);
                    break;
                case "cartBird":
                    voiceContent.insertAdjacentHTML(
                        'beforeend',
                        '<p class = "items">Bird: Qty:'+ qty +' Price:$' + (Number(qty) * 2.3)+ '</p>');
                    Total += (Number(qty) * 2.3);
                    break;
                case "cartFish":
                    voiceContent.insertAdjacentHTML(
                        'beforeend',
                        '<p class = "items">Fish: Qty:'+ qty +' Price:$' + (Number(qty) * 1.3)+ '</p>');
                    Total += (Number(qty) * 1.3);
                    break;
                case "cartDog":
                    voiceContent.insertAdjacentHTML(
                        'beforeend',
                        '<p class = "items">Dog: Qty:'+ qty +' Price:$' + (Number(qty) * 4.5)+ '</p>');
                    Total += (Number(qty) * 4.5);
                    break;
                case "cartDog2":
                    voiceContent.insertAdjacentHTML(
                        'beforeend',
                        '<p class = "items">Dog2: Qty:'+ qty +' Price:$' + (Number(qty) * 4.3)+ '</p>');
                    Total += (Number(qty) * 4.3);
                    break;

                case "cartDog3":
                    voiceContent.insertAdjacentHTML(
                        'beforeend',
                        '<p class = "items">Dog3: Qty:'+ qty +' Price:$' + (Number(qty) * 8.3)+ '</p>');
                    Total += (Number(qty) * 8.3);
                    break;

                case "cartDog4":
                    voiceContent.insertAdjacentHTML(
                        'beforeend',
                        '<p class = "items">Dog4: Qty:'+ qty +' Price:$' + (Number(qty) * 7.55)+ '</p>');
                    Total += (Number(qty) * 7.55);
                    break;

                case "cartDog5":
                    voiceContent.insertAdjacentHTML(
                        'beforeend',
                        '<p class = "items">Dog5: Qty:'+ qty +' Price:$' + (Number(qty) * 3.55)+ '</p>');
                    Total += (Number(qty) * 3.55);
                    break;

                case "cartDog6":
                    voiceContent.insertAdjacentHTML(
                        'beforeend',
                        '<p class = "items">Dog6: Qty:'+ qty +' Price:$' + (Number(qty) * 3.30)+ '</p>');
                    Total += (Number(qty) * 3.3);
                    break;

                case "cartRep":
                    voiceContent.insertAdjacentHTML(
                        'beforeend',
                        '<p class = "items">Rep: Qty:'+ qty +' Price:$' + (Number(qty) * 3.33)+ '</p>');
                    Total += (Number(qty) * 3.33);
                    break;

                case "cartChicken":
                    voiceContent.insertAdjacentHTML(
                        'beforeend',
                        '<p class = "items">Chicken: Qty:'+ qty +' Price:$' + (Number(qty) * 3.20)+ '</p>');
                    Total += (Number(qty) * 3.2);
                    break;


                default:
                // code block
            }

            i++;

        }
        voiceContent.insertAdjacentHTML(
            'beforeend',
            '<p class = "items">Total: $'+ Total+'</p>');

        voicePage.style.display = "block";
    }

    //When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        voicePage.style.display = "none";
    }

    //When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == voicePage) {
            voicePage.style.display = "none";
        }
    }
}
