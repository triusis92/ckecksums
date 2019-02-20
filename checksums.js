//Created by Lance


//////////// Credit card number validator  /////////
function creditcardgood(cardnum)
{
// assume everything is good
var valid = new Boolean(true);
var sum=0;

if (cardnum.length != 16)
	valid=false;

for (n=0;n<cardnum.length;n++)
{
	// extract nth character
	c = cardnum.slice(n,n+1);
	
	// is it not a digit?
	if ((c < "0") || (c > "9"))
	{
		valid=false;
	}
}

for (i=0; i<cardnum.length; i++)
{
	num = parseInt(cardnum.slice(i,i+1), 10);
	if (i % 2  == 0) // check if deigit is even
	{
		num *= 2; // if even multiply by 2
        
		if (num > 9)
		{
		num -= 9;
		}
	}

	sum += num;
}

if(sum % 10 != 0)
{
	valid = false;
}

return valid;
}
//////////// ISBN number validator  /////////
function isbngood(isbnum)
{
// assume everything is good
var valid = new Boolean(true);

if ((isbnum==null) || (isbnum==""))
	valid= false;

if (isbnum.length != 10)
	valid=false;


// checksum unlikely to be OK if letters used
// but just in case

for (i=0;i<isbnum.length;i++)
{
	// extract nth character
	c = isbnum.slice(i,i+1);
	if(isbnum.charAt(9)=="x" || isbnum.charAt(9)=="X" )//if last digit is small or big X read it in
	{
		return valid;
	}
	else if ((c < "0") || (c > "9"))
	{
		valid=false;
	}
}

// checksum calculation
var sum = 0;

for (i=0; i<isbnum.length; i++)
{
	if(isbnum.charAt(9)=="X" || isbnum.charAt(9)=="x")//if  last digit is x then assign the last digit value of 10
    {
		num = 10;
    }
	else
	{
		num = parseInt(isbnum.charAt(i), 10);
	}
	
	num = (num*(10-i));// this multiplies each number in the sequence strating from 10 and descending to 1
	sum += num;
}

if(sum % 11 != 0)
{
	valid = false;
}

return valid;
}
//////////// PESEL number validator  /////////
function peselgood(PESEL)
{
// assume everything is good
var valid = new Boolean(true);

if ((PESEL==null) || (PESEL==""))
	valid= false;

if (PESEL.length != 11)
	valid=false;

// checksum unlikely to be OK if letters used
// but just in case
	
for (i=0;i<PESEL.length;i++)
{
	// extract nth character
	c = PESEL.slice(i,i+1);
	
	// is it not a digit?
	if ((c < "0") || (c > "9"))
	{
		valid=false;
	}
}

//Check that date is between 01 and 12
var month = PESEL.substring(2,4);//extract the digits corresponding to date
if((parseInt(month,10) % 20) >12)//if answer is greater than 12, number is bad
{
	valid=false;
}

// checksum calculation
var sum = 0;

//Char each number and multiply them according to algorithm "13791379131"
sum = (PESEL.charAt(0)*1) + (PESEL.charAt(1)*3) + (PESEL.charAt(2)*7) + (PESEL.charAt(3)*9) + (PESEL.charAt(4)*1) + (PESEL.charAt(5)*3) + 
	  (PESEL.charAt(6)*7) + (PESEL.charAt(7)*9) + (PESEL.charAt(8)*1) + (PESEL.charAt(9)*3) + (PESEL.charAt(10)*1);

if(parseInt(sum,10) % 10 != 0)
{
	valid = false;
}

return valid;
}
//////////// EAN number validator  /////////
function eangood(articlenum)
{
// assume everything is good
var valid = new Boolean(true);

if ((articlenum==null) || (articlenum==""))
	valid= false;

if (articlenum.length != 13)
	valid=false;

// checksum unlikely to be OK if letters used
// but just in case
	
for (i=0;i<articlenum.length;i++)
{
	// extract nth character
	c = articlenum.slice(i,i+1);
	
	// is it not a digit?
	if ((c < "0") || (c > "9"))
	{
		valid=false;
	}
}

// checksum calculation

var sum = 0;

for (i=0; i<articlenum.length; i++)
{
	num = parseInt(articlenum.slice(i,i+1), 10);
	
	if (i % 2  == 1) //check if digit is odd
	{
	num *= 3;//multiply every odd digit by 3
	}
	
	sum += num;
}

if(sum % 10 != 0)
{
	valid = false;
}

return valid;
}
//////////// HENKIL number validator  /////////
function henkilgood(HETU)
{

// assume everything is good
var valid = new Boolean(true);
var symbol= HETU.charAt(6);

if ((HETU==null) || (HETU==""))
	valid= false;

if (HETU.length != 11)
	valid=false;

//Check that first 6 digits are numbers
for (i=0;i<5;i++)
{
	// extract nth character
	c = HETU.charAt(i);
	
	// is it not a digit?
	if ((c < "0") || (c > "9"))
	{
		valid=false;
	}
}
//check that digits 8,9 and 10 are numbers
for (i=7;i<10;i++)
{
	// extract nth character
	c = HETU.charAt(i);
	
	// is it not a digit?
	if ((c < "0") || (c > "9"))
	{
		valid=false;
	}
}
var month = HETU.substring(2,4);//extract the digits corresponding to date
if(parseInt(month,10) <1 || parseInt(month,10) >12)// check if month is less than 1 or greater than 12
{
	valid=false;
}
//Check that symbol correspondig to century is either '-', '+' or 'A'
if(!(symbol == "-" || symbol == "+" || symbol == "A"))
{
	valid = false;
}

// checksum calculation
var sum = 0;

sum1 = HETU.substring(0, 6);//extract the first six gigits
sum2 = HETU.substring(7, 10); //extract the digits 8,9 and 10
sum = sum1.concat(sum2);//join the two digit strings
mod = parseInt(sum,10) % 31;//turn the sum into integer and mod it by 31

// map mod to letter
lstring ="0123456789ABCDEFHJKLMNPRSTUVWXY";
letter = lstring.charAt(mod);
// check if the mod letter or digit matches the lstring ignoring the case
if(HETU.charAt(10).toUpperCase() != letter) 
{
	valid=false;
}

return valid;
}

function eurogood(notenum)
{

// assume everything is good
var valid = new Boolean(true);

if ((notenum==null) || (notenum==""))
	valid= false;

if (notenum.length != 12)
	valid=false;

// checksum calculation

var sum = 0;
num1 = notenum.charCodeAt(0) -64 //convert the first digit  into ascii code an assign it to num1
num2 = notenum.substring(1,12) //get the rest of the digits

//check if the rest of digits are numbers
for (i=1;i<num2.length;i++)
{
	// extract nth character
	c = num2.slice(i, i+1);
	
	// is it not a digit?
	if ((c < "0") || (c > "9"))
	{
		valid=false;
	}
}

// check if first digit letter is between 1 and 26 in ascii  ('A' to 'Z')
if(num1<1 || num1>26)
{
	valid = false;
}
sum=parseInt(num2,10)+num1;// add the digit corresponding to a number to the sum of the rest of digits

//check if second digit is not a number, if not a number execute the if statement
if(!(notenum.charAt(1)>="0" && notenum.charAt(1) <="9"))
{
	num3 = notenum.charCodeAt(1) -54 // convert the second digit from letter to number
	num2 = notenum.substring(2,12) // get the rest of digits starting with third digit
	
	//check if the rest of digits are numbers
	for (i=2;i<num2.length;i++)
	{
	// extract nth character
	c = num2.slice(i, i+1);
	
	// is it not a digit?
	if ((c < "0") || (c > "9"))
		{
			valid=false;
		}
	}
	
	// check if second digit letter is between 11 and 36 that is between 'A' and 'Z' as per algorithm
	if(num3<11 || num3>36)
	{
		valid = false;
	}
	sum=parseInt(num3,10)+ parseInt(num2,10)+num1;// add the two numbers that correspond to letters to the sum of the rest of digits
}

if(sum % 9 != 8)
{
	valid = false;
}

return valid;
}



function checkean()
{
num = document.getElementById("eanfield").value
if (eangood(num))
	{
	document.getElementById("eanfield").style.background="#00ff00";
	}
else
	{
	document.getElementById("eanfield").style.background="#ff6666";
	}
}



function checkcc()
{
num = document.getElementById("creditcardfield").value
if (creditcardgood(num))
	{
	document.getElementById("creditcardfield").style.background="#00ff00";
	}
else
	{
	document.getElementById("creditcardfield").style.background="#ff6666";
	}
}
function checkeuro()
{
num = document.getElementById("eurofield").value
if (eurogood(num))
	{
	document.getElementById("eurofield").style.background="#00ff00";
	}
else
	{
	document.getElementById("eurofield").style.background="#ff6666";
	}
}

function checkpesel()
{
num = document.getElementById("peselfield").value
if (peselgood(num))
	{
	document.getElementById("peselfield").style.background="#00ff00";
	}
else
	{
	document.getElementById("peselfield").style.background="#ff6666";
	}
}


function checksotu()
{
num = document.getElementById("sotufield").value
if (henkilgood(num))
	{
	document.getElementById("sotufield").style.background="#00ff00";
	}
else
	{
	document.getElementById("sotufield").style.background="#ff6666";
	}
}

function checkisbn()
{
num = document.getElementById("isbnfield").value
if (isbngood(num))
	{
	document.getElementById("isbnfield").style.background="#00ff00";
	}
else
	{
	document.getElementById("isbnfield").style.background="#ff6666";
	}
}