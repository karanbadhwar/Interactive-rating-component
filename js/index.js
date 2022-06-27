let submit = document.getElementById('submit');
let ul = document.getElementById('list');
let container = document.getElementById('container');
let body = document.getElementsByTagName('body')[0];
let rating = 0;

function flipCard(e){
    // console.log(e.target)
    if(rating){
        const div = ` <div id="rating">
                        <img class='thankyou' src="./images/illustration-thank-you.svg"/>
                        <p class='rating'>You Selected  ${rating} out of 5</p>
                        <h2>Thank You</h2>
                        <p class='note'>We appreciate you taking the time to give a rating. If you ever need more support,don’t hesitate to get in touch!</p>
                    </div>
        `;
        container.innerHTML = div;
        let warn = document.getElementById('warning');
        if(warn){
            warn.style.display='none';
        }
    }else{
        const warning = `
                    <h3 id='warning'>Please Select One Number for Rating
        `;
        body.insertAdjacentHTML('beforebegin', warning);
        // 
        // setInterval(()=>{
        //     warn.style.display='none'
        // },2000);
        // setInterval(() =>{
        //     warn.style.display='block'
        // },3000);
    }


}


ul.addEventListener('click', (e) =>{
    // console.log(e.target.value);
    rating = parseInt(e.target.value);
});

submit.addEventListener('click', flipCard);