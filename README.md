# assignment1
1.	Git<br>
I used visual studio code as the dev tool to implement the assignment1 and used the terminal embedded the visual studio code to update the<br> Git repository.
I created the assignment 1 repository which is initialized with README.md file on my GitHub account and cloned it to my local, I used ‘ng new assignment1’ to initialized all the folder structure in my local folder and used git config credential.username "Wendy3813ict" command to config my username and password then I have the permission to push my repository to my Git account, then I used ‘git add .’ to initialize each update commit and used ‘git commit -m ‘#comment content’’ to comment each commit and used ‘git push origin master’ to push/upload each commit, sometimes I used ‘git status’ to check my current modified files.<br>

2.	Nodejs as the server
I used Nodejs the server, it is not the initialized module with ‘ng new’, it is an installed module when I installed node 8.0 in my laptop. I used http package to create a new server because the http package has a create server method, this method has two arguments respectively are request and response.<br>

3.	For Component and router, I downloaded the app-routing modules and set all the component in different router link, each component is made of a ts, html, css and a spec.tss file. I cannot jump to another page after the successful login. I used ‘ng generate component componentname’ to generate the four files together. I put admin, Logout, login, createuser, user under the auth folder, because they are going to be authenticated in the following work.<br>
 

4.	For the data persistent, I just did the user login and use are added to local storage function.  I set the username is the key no format requirement, the values is an array, the array includes the element groupid, chanelid and email, groupid is used store the chat group, chanelid is used to store the chanel group, the email is generated from email input when register. I do not know whether it is necessary to set password for user authentication for the following work. I got stuck at the page changed after successful login.  For logout, the user must input the existing username in input field and click logout, the item will be removed from localstorage.
