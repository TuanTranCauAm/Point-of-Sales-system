import React from 'react';
import emailjs from 'emailjs-com'

function NoteScreen(props){
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_ocsz6uv', 'template_c9p9qnw', e.target, 'user_UwlXy9Doa7qWf0wnTzqdB')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }
    return  <div className="BOOK">
    <div className="book">                                                                                     
            <strong>SEND US A NOTE TO IMPROVE OUR QUALITY</strong>
            <br/><br/>
            <form onSubmit={sendEmail}>
                Phone number:&ensp;&ensp;&ensp;&ensp;&ensp;    
                <input type="text" name="phone" required/>
                <br></br><br/>
                Restaurant branch:&ensp; <select name="select">
                    <option>Dictrict 10, Ho Chi Minh city</option>
                    <option>Dictrict Thu Duc, Ho Chi Minh city</option>
                </select>       
                <br/><br/>
                Your note:&ensp;&ensp;&ensp;&ensp;&ensp;
                <input type="text" name="chair" required/>
                <br/><br/>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <input type="submit" value="Send"/>
            </form>
        </div>
    </div> 
}
export default NoteScreen;