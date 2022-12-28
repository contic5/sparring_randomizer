function setupAlert()
{
    const audio = new Audio( 'Alarm.mp3' );
    audio.muted = true;
    
    const alert_elem = document.querySelector( '.alert' );

    audio.play().then( () =>
    {
        // already allowed
        usingaudio=true;
        alert_elem.remove();
    } )
    .catch( () => 
    {
        // need user interaction
        alert_elem.addEventListener( 'click', ({ target }) => 
        {
          if( target.matches('button') ) 
          {
            const allowed = target.value === "1";
            if( allowed ) 
            {
              usingaudio=true;
              audio.play()
            }
            else
            {
              usingaudio=false;
            }
            alert_elem.remove();
          }
        });
    });
}
setupAlert();