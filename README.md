A scheduler using Agenda node module for fetching unique tweets after some interval and save them in DB.

1. Start npm install && npm start

2. Start Job using node /<path>/<to>/<dir>/dist/cron-job/index.js 

3. Verify result using REST Client(POSTMAN)
     Routes:	
	- /api/user/<user_name>     /*get count of post by <user_name>*/
	- /api/sort_rt		   /*get all documents sorted according to retweet_count*/



