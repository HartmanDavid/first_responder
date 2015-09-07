9/4/2015 First_Responder_outline_v1-0.md
<h1>First Responder App - Project 4 <h1>

<i>PIN</i> == Person In Need <br>
<i>FR</i>  == First Responder
#I- Gather Requirments:
	Things my app must do:
<li>Provide location of Person In Need (<i><i>PIN</i></i>)</li> 
<li>Find <i>FR</i>s in proximity to <i>PIN</i></li>
<li>Give the <i>FR</i> information about location of <i>PIN</i></li>
<li>Have secure and seperate log-on for both user and first responder</li>
<li>Must text message 911  on behalf of <i>PIN</i></li>
<li>Convay to <i>FR</i> and 911 what is the type of emergancy</li>

#II- Use Cases:
 A) Title - Provide location of <i>PIN</i><br>
 	Actors: <i>PIN</i>'s Smart Phone & the <i>PIN</i><br>
 	Scenario: 
 	<ol><li><i>PIN</i> detects an emergency</li>
 	<li><i>PIN</i> opens the First Responder App</li>
 	<li>Smart Phone asks if <i>PIN</i> is having an emergancy</li>
 	<li><i>PIN</i> confirms they are having an emergancy</li>
 	<li>Smart Phone pulls up the <i>PIN</i>'s GPS location</li> 
 	<li><i>PIN</i> confirms their GPS location with the Smart Phone</li>
 	<li>Smart Phone moves to emergancy mode</li> </ol>
 
 B) Title- Find First Responders (<i>FR</i>) in proximity to <i>PIN</i><br>
 	Actors: <i>FR</i>'s, <i>PIN</i>'s Smart Phone, Application Server<br>
 	<ol><li><i>PIN</i>'s Smart Phone notifies Application Server of an emergancy</li>
 	<li>Smart Phone shares GPS corrdinates with Sever</li>
 	<li>Server compiles list of <i>FR</i>s in proximity</li>
 	<li>Server sends alert notice to <i>FR</i>s from list</li>
 	<li><i>FR</i> accepts alert message</li> </ol>	
C) Title - Give the <i>FR</i> information about location of <i>PIN</i><br>
	Actors: <i>FR</i>, Server, <i>FR</i>'s Smart Phone 
	<ol><li>Server compiles GPS information</li>
	<li>Server transmits location of emergancy to <i>FR</i>'s Smart Phone</li>
	<li><i>FR</i>'s Smart Phone uses google maps or other to guide <i>FR</i> to <i>PIN</i></li>


  	

 	
