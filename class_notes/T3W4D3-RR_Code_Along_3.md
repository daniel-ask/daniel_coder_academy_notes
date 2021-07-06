

## Deployment

### Rails Api Heroku

`heroku apps:create <app-name>`

`git push heroku main`

`heroku config:set RAILS_MASTER_KEY=<master-key>`

`heroku rails db:migrate`

### React Client Netlify

log in with Github

deploy new sites

find repository

change in netlify change build command to `CI=false && yarn build`

change named




npm install netlify-cli -g

netlify deploy



### Enviroment variables

process.env.REACT_APP_BACKEND_URL

```
REACT_APP_BACKEND_URL=http://localhost:3000

```