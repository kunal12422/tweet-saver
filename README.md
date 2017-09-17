## A scheduler using Agenda node module for fetching unique tweets after some interval and save them in DB.

### Start server:
```
npm install && npm start
node /dist/cron-job/index.js
```

### Verify result:
     Routes:	
     - /api/user/<user_name>     *get count of post by <user_name>*
     - /api/sort_rt		   *get all documents sorted according to retweet_count*



