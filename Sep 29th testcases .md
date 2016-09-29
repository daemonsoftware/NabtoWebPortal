#Test cases for AMP Nabto Web Portal

**Test Designed By:** Sruthi

**Test Designed Date:** 29/9/2016

**Test Executed By:** Sruthi

**Test Execution Date:** 29/9/2016

##TC1 
**Test Priority:** High

**Module Name:** Self service web site portal

**Test Title:** Display self service web site portal

**Test Description:** Self service web site portal not linked up

**Pre-condition:** Load the portal using the corresponding url


**Expected Result:** Self service web site portal is loaded with out being logged in


**Actual Result:** Not being loaded as it is not integrated

##TC2 
**Test Priority:** High

**Module Name:** Sign up

**Test Title:** User name field not added

**Test Description:**  User name field for sign up is not added to sign up form

**Pre-condition:** Load the portal 

**Test Steps:** 

* Click on "Sign up" link

**Test Data:**
//

**Expected Result:** Name field displayed along with other user sign up details 

**Post Condition:** Sends verification email.

**Actual Result:** User name input field in sign up form is missing .


##TC3
**Test Priority:** High

**Module Name:** Account dashboard

**Test Title:** Dashboard table is not as per requirement

**Test Description:** Dashboard table missing items according to product specification 

**Pre-condition:** Load the portal 

**Test Steps:** 

* Click on "Sign in" button 

**Test Data:**

* sruthi2499@gmail.com

* 123456

**Expected Result:** Redirecting to home page and loading home page  with Account and product information.

**Post Condition:** Product dashboard displayed on clicking product name.

**Actual Result:** Table in the home is not as per the requirement in the requirement specification



##TC3
**Test Priority:** High

**Module Name:** Sign up

**Test Title:** Verify e-mail domain

**Test Description:** e-mail domain for  sign up  is not verified

**Pre-condition:** Load the portal 

**Test Steps:** 

* Click on sign up

**Test Data:**
* sru@mail.com

**Expected Result:** Alert on e-mail with wrong domain to be displayed after verification.

**Post Condition:** Sing in using the sign up details .

**Actual Result:** Able to sign up with wrong mail domain.

