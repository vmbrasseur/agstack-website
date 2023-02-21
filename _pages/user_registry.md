---
layout: page
title: User registry
permalink: /user_registry
horizontal: false
nav: false
---

User registry (`user-registry`) is a web application API that is developed using Flask. This API is used as the backend for user registration and the tasks related to user accounts. The current authentication method is JSON Web Token (JWT). During authentication, the user information is self-managed and received by the API client.

## User data collection

Flask database tables are used to create tables of user registry data that is entered. Review the following database tables created for the user registry:

### User

A table list of user data where the following parameter values are stored:

  * `id`: The user ID name. Required
  * `phone_number`: User preferred number. Optional
  * `email`: User email address. Required
  * `password`: Hash pasword for the user. Required
<!--from Ted how is the valid token defined?-->
  * `token_required`: Unique access token generated after a user is created
  * Discoverable fields for the user (`geoID`, `boundaries`, `polygon`, etc.)
  
## Signing up

Complete the following steps to create a user account:

1. Navigate to the User registry website (ur.agstack.org).
2. If you are creating a new account, select the **Sign up** link. A form is displayed.
3. Complete the required fields of the form, then click **Create**. After you complete the form, check the email that you entered for an activation email.

**Notes:** 

- You must verify your account by selecting the activation link.
- If the domain is block, you receive status code 401 with the following message: `You are not allowed to register.`
- If you enter an existing email, you a receive status code 202 with the following message: `User already exists. Please log in`

5. Verify that your account is created. Log in by entering your username and password. If the user account does not exist, you receive the following message: `User does not exist`. If the user account does exist, the password is verified. If the passwords do not match, you receive the following message: `Wrong password`.
6. 
<!--updating user account-->
<!--logout: Log out users-->

