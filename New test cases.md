##Test case for AMP

**Test Designed By:** Sruthi

**Test Designed Date:** 26/8/2016

**Test Executed By:** Sruthi

**Test Execution Date:** 26/8/2016

##TC1 
**Test Priority:** Medium

**Module Name:** Sign In

**Test Title:** Verify sign up email id

**Test Description:** Mail id is not verfied

**Pre-condition:** Load the portal using www.appmyproduct.com

**Test Steps:** 

* Click on "Sign up for free" button 
* Fill the sign up form with relevant data
* Click on "Okay sign me up " button

**Test Data:**
* Name: sruthi
* email id: sruthi249@gmailcom
* comment: new user

**Expected Result:**Alert on wrong email,after verfication of email_id should be displayed.

**Post Condition:**"Thanks we will notify you,once service is ready to use" alert is shown

**Actual Result:**"Thanks we will notify you,once service is ready to use" alert is shown.

##TC2 
**Test Priority:** low

**Module Name:** Sign In

**Test Title:** Verify sign up form

**Test Description:** Sign up data is not refrehed or resetted

**Pre-condition:** Load the portal using www.appmyproduct.com

**Test Steps:** 

* Click on "Sign up for free" button 
* Fill the sign up form with relevant data
* Click on "Okay sign me up " button
* Click on "Sign up for free" button again

**Test Data:**
* Name: sruthi
* email id: sruthi249@gmailcom
* comment: new user

**Expected Result:**Sign up form relevant data field should be refreshed.

**Post Condition:**"Thanks we will notify you,once service is ready to use"/"Error! Something went wrong! Please check input and/or try" is displayed 

**Actual Result:**Sign up form with previous data is displayed .


##TC3
**Test Priority:** Medium

**Module Name:** Sign In

**Test Title:** Verify Sign In 

**Test Description:** Sign in form not displayed

**Pre-condition:** Sign up as a new user

**Test Steps:** 

* Click on "Sign In" button 

**Test Data:**//

**Expected Result:**Sign in form is displayed.

**Post Condition:**window location  redirection after successful log in  

**Actual Result:**Sign up form is displyed.

##TC4
**Test Priority:** Medium

**Module Name:** Docs link

**Test Title:** Verify Docs link 

**Test Description:** Docs link not working

**Pre-condition:** load the portal using www.appmyproduct.com

**Test Steps:** 

* Click on "docs" link

**Test Data:**//

**Expected Result:**Window loaction redirecting to docs page.

**Post Condition:**Window content change according to the contents of Doc link.

**Actual Result:**Window is not redirecting.

##TC5
**Test Priority:** low

**Module Name:** Sign In

**Test Title:** Verify sign up form

**Test Description:** Sign up data is not refreshed or resetted

**Pre-condition:** Load the portal using www.appmyproduct.com

**Test Steps:** 

* Click on "Sign up for free" button 
* Fill the sign up form with relevant data
* Click on "Okay sign me up " button

**Test Data:**
* Name: sruthi
* email id: sruthi2499@gmail.com
* comment: new user

**Expected Result:**"user already exist" alert to be displayed

**Post Condition:**sign in with new user dtails 

**Actual Result:**"Error! Something went wrong! Please check input and/or try" is displayed

