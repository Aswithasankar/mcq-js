function checkAnswer() { 
    const correctAnswer = "D"; 
    const options = document.getElementsByName("answer"); 
    options.forEach(option => { const label = document.querySelector(`label[for=${option.id}]`); 
    if (option.checked) { 
        if (option.value === correctAnswer) { 
            label.classList.add("correct"); } 
            else { 
                label.classList.add("incorrect"); } 
            } else { 
                label.classList.remove("correct", "incorrect"); 
            }
             
            });
         }