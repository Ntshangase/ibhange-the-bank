# Ibhange-the-Bank

the name `ibhange` is an isiZulu word for bank.
Here i aim to document my build journey.

### Pre- build
This is a Basalt fullstack takehome test, it seems this was originally confidential and they have released it to the public as it is now available on their public repo. 
In this build i will use `react` as i'm most familiar with it and i think this will help me improve my skills in react, i'm also trying to limit the amount of new technologies i'm learning so that i can alteast master one/two and be highly productive with them.
this is suppose to be a one-week assignment. I don't know if that will be enough for me to complete since i have a 2test but if i can break it down i think that will work for me more because it looks easy the only thing which i think i could spend some time in is the API specifications. 


### Task breakdown
- build an budget tracking application 
- assume only one user of the application.
- allow and reflect transactions.

- [x] sprint 1 (1 day) 
    - skeleton, 
    - start and have a working application with basic layout.
- [x] sprint 2 (1 day) 
    - design and responsive-ness, 
    - make your skeletons come alive with css and the app should have working logic, you should be able to navigate to a different page and be able to see what that page is for.
- [ ] sprint 3 (3 days) 
    - functionality/api intergration
    -  apparently the most intensive task but i need to intergrate the json data into my app at this stage, how i will do that i honestly don't know but i just know i will do it.
    - i want to be able to see atleast the balance for the account and past transactions
    - i need to have the extra buttons to login/logout inside the app.
- [ ] sprint 4 (2 days)
    - host the app on vercel
    - comply with expectations write tests, add/view/filter transactions by credit/debit
    - if there is still time add extras. 

19/04
- the hard part seems to be building with no design.
- My approach is to use lowkey Agile development :
    - Built the app skeleton, important pages first. landing/home
    - the landing page will have a Login and Home button. this is to allow me to build the whole app separately and then add the login functionality later as i still have to learn about `okta`.
- the json data contains the transactions that the customer has done and i need to pull them and display them, to do that i will need to create like a template/card then display then with ......

20/04
today is sprint 2.
- A huge part of me is just winging this, the plan is there but the winging is in controll.
- I'm using experience as refrence of what best to do next.
- It's amazing how much information is shared on error messages, *thank you* to whoever started the trend of sharing error messages.
- the idea that a computer tells you whats wrong with your code can relatively be compared to the idea that a prophet/Isangoma/fortune-teller can tell you about what's wrong in your life, so if you can understand error messages then you should understand how prophecies work but the thing with both prophets and error messages...(I would let you build from here..)
- i think the best ideas should copy from or be an extension of nature.
- anouther thing taking time off screen is also an amazing debugging tool.

21/04
- I have decide to study this sprint for one day they try to do it in the 2days, because if i just start now i can work myself into a whole without knowing. And i want to see if this study method will work. 

22/04
- Had to install axios since the default fetch() in react doesn't allow Cross origin request by default, basically meaning the *combos don't communicate.* 
- cross origin resource transfer is a big deal. 
- i think the concept of time has really changes, In my efforts to solve the error CORS policy: No 'Access-Control-Allow-Origin', i was 2minutes into a 16minutes video and, i was like i can't watch this it's too long `why did i do that?`, but maybe it was intuition because i was able to solve that error quicker in chatGPT.
- Doing these takehome test's is a good way to learn. I need to do more.
in my current understanding A proxy server is *upotsho*  

24/04
- After my one man scrum i have redifined sprint 3 and it's goals:
    - show bank balance 
    - sort transactions by debit/credit
    - allow in-app purchase and reflect change in balance.
