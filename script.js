const output = document.querySelector('.output');
    const input = document.querySelector('.input');
    const btn = document.querySelector('.btn');
    const userGuess = document.querySelector('.user-guess');
    const result = document.querySelector('.result');
    const answer = document.querySelector('.answer');
    const scoreText= document.querySelector('.score');

    const wordArray1 = ['know', 'lives', 'there', 'anial', 'child', 'school', 'quiet', 'because', 'around','have','pretty', 'walk','house', 'yard', 'down', 'girl', 'down', 'great', 'both', 'water', 'rock', 'full','again', 'today','many', 'think','after','know', 'move', 'each','them','used','read','give','into', 'ride', 'cute', 'laugh', 'work', 'here','what', 'want', 'play', 'sad','smile','ride','mode','please','little','time', 'past', 'father','mother','sister','brother','orange','peach','apple'];

    let randomWord ='';
    let shuffledWord = '';
    let score = 0;
    
    window.onload =start;
  

    function start(){
        shuffledWord = '';
        input.value = '';

        let rWord = wordArray1[Math.floor(Math.random()*wordArray1.length)];
            randomWord = rWord;
            let randomWordLength = rWord.length;

            for(let x =0 ; x < randomWordLength; x++){
                let index = Math.floor(Math.random()*rWord.length);
                shuffledWord += rWord[index];
                rWord = rWord.substr(0,index) + rWord.substr(index+1);
            }

            output.innerHTML = shuffledWord ;
    }

    input.addEventListener('keypress', function(e){
        if (e.key === 'Enter') {
       guess();
    }
    });

    btn.addEventListener('click', guess);


    function guess(){
        userAnswer = input.value;
        const error = document.querySelector('.error');

      if(userAnswer.toLowerCase() == randomWord){

          error.classList.remove('show');

          result.innerHTML = '<img src ="images/check64.png">';

          //Add score
          score+=10;
          scoreText.innerHTML = score;

          userGuess.innerHTML = input.value.toLowerCase();
          answer.innerHTML = randomWord;
        
          start();

      }else if(userAnswer == ''){

          //Show error message
          error.classList.add('show');

      }else{

        error.classList.remove('show');

        result.innerHTML = '<img src ="images/close64.png">';

        userGuess.innerHTML = input.value.toLowerCase();
        answer.innerHTML = randomWord;
       
        start();

      }
    }
