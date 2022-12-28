   var synth = window.speechSynthesis;

    var inputForm = document.querySelector('form');
    var voiceSelect = document.getElementById('voiceSelect');

    //var inputTxt = document.querySelector('input');

    /*
    inputForm.onsubmit = function(event) 
    {
      event.preventDefault();

      var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
      var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
      console.log("Selected Option:"+selectedOption);
      console.log(voices[1].name+" "+selectedOption);
      for(i = 0; i < voices.length ; i++) 
      {
        if(voices[i].name === selectedOption) 
        {
          utterThis.voice = voices[i];
        }
      }
      utterThis.rate = 1.5;
      synth.speak(utterThis);
      inputTxt.blur();
    }
    */
    
    function populateVoiceList() 
    {
      if(typeof speechSynthesis === 'undefined') 
      {
        return;
      }
    
      voices = speechSynthesis.getVoices();
      for(var i = 0; i < voices.length; i++) 
      {
        var option = document.createElement('option');
        option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

        if(voices[i].default) 
        {
          option.textContent += ' -- DEFAULT';
        }
        option.setAttribute('data-lang', voices[i].lang);
        option.setAttribute('data-name', voices[i].name);
        document.getElementById("voiceSelect").appendChild(option);
      }
    }

    let voices=null;
    populateVoiceList();
    if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) 
    {
        speechSynthesis.onvoiceschanged = populateVoiceList;
    }