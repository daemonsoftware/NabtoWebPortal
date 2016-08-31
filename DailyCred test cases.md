##Test case for Daily Cred

**Test Designed By:** Sruthi

**Test Designed Date:** 31/8/2016

**Test Executed By:** Sruthi

**Test Execution Date:** 31/8/2016

##TC1 
**Test Priority:** Medium

**Module Name:** Sign Up

**Test Title:** Verify username and e-mail id

**Test Description:** Mail id is not verfied

**Pre-condition:** Load the portal using [dailycred.abhij.it](http://dailycred.abhij.it)

**Test Steps:** 

* Click on "Sign up" button 
* Fill the Register form with relevant data
* Click on "Register" button

**Test Data:**
* e-mail address: sruthi@mail.com
* password: sruthi24

**Expected Result:**user name and profile pic should be added with other sign up details.

**Post Condition:**Welcome page with user profile pic ,username and email shown

**Actual Result:**Welcome page without user profile pic , username and email are same.

##TC2 
**Test Priority:** medium

**Module Name:** Sign up

**Test Title:** Verify sign up form e-mail id

**Test Description:** e-mail domain is not getting verified

**Pre-condition:** Load the portal using [dailycred.abhij.it](http://dailycred.abhij.it)

**Test Steps:** 

* Click on "Sign up" button 
* Fill the register form with relevant data
* Click on "Register" button

**Test Data:**
* e-mail address: sruthi@mail.com
* password: sruthi24

**Expected Result:**Alert on wrong e-mail id with wrong domain. 

**Post Condition:**Redirecting to welcome page.

**Actual Result:**Not verifying e-mail id's domain and redirecting to welcome page with wrong mail id .


##TC3
**Test Priority:** Medium

**Module Name:** Forgot password

**Test Title:** Verify reset password e-mail id

**Test Description:** e-mail id for resetting password is not verified

**Pre-condition:**Load the portal using [dailycred.abhij.it](http://dailycred.abhij.it)

**Test Steps:** 

* Click on "forgot password" button 

**Test Data:**
* sruthi@ccc.com

**Expected Result:**alert on e-mail with wrong domain to be displayed after verfication.

**Post Condition:**reset password request sent to the corresponding e-mail and alert is displayed as "An email has been sent. Please check your email for further instructions."

**Actual Result:**"An email has been sent. Please check your email for further instructions." alert is displayed.


