function changeReadMore() { 
    const mycontent = 
        document.getElementById('cards-main'); 
    const mybutton = 
        document.getElementById('mybuttonid'); 

        let a=mycontent.clientHeight
        console.log(a)
  
    if (mycontent.clientHeight ===1052) { 
        document.getElementById('cards-main').setAttribute("style","height:100%")
        mybutton.textContent = 'See a litle'; 
    } else { 
        mycontent.style.height = '1052px'; 
        mybutton.textContent = 'See more'; 
    } 
}


// ..rus
function changeReadMore() { 
  const mycontent = 
      document.getElementById('cards-main'); 
  const mybutton = 
      document.getElementById('мойbuttonid'); 

      let a=mycontent.clientHeight
      console.log(a)

  if (mycontent.clientHeight ===1052) { 
      document.getElementById('cards-main').setAttribute("style","height:100%")
      mybutton.textContent = 'Посмотри немного'; 
  } else { 
      mycontent.style.height = '1052px'; 
      mybutton.textContent = 'Смотреть больше'; 
  } 
}


// az
function changeReadMore() { 
  const mycontent = 
      document.querySelector('.hidden-row'); 
  const mybutton = 
      document.querySelector('#mybuttonid')

     

      document.querySelector('#mybuttonid2').style.display = 'none';
     mycontent.style.display = 'flex';
     document.querySelector('#mybuttonid3').style.display = 'block';
    // mycontent.style.display = 'none' 
    //   mybutton.textContent = 'Daha çox baxın'; 

}

function changeReadMore2() { 
    const mycontent = 
        document.querySelector('.hidden-row'); 
    const mybutton = 
        document.querySelector('#mybuttonid')
  
       
  
        document.querySelector('#mybuttonid2').style.display = 'block';
       mycontent.style.display = 'none';
       document.querySelector('#mybuttonid3').style.display = 'none';
      // mycontent.style.display = 'none' 
      //   mybutton.textContent = 'Daha çox baxın'; 
  
  }











// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}






