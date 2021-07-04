

``` 
rails new backend-example -d postgresql -T --api

cd backend-examples

rails db:create
```
Uncomment in gemfile

```
gem 'bcrypt', '~> 3.1.7'

gem 'rack-cors'

```


Uncomment the following in `config/initailizers/cors.rb`

```ruby

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'example.com'

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end

```


```
u = User.create(username: 'cdask', email: 'daniel@mail.com', password: 'password', password_confirmation: 'password')
  TRANSACTION (0.2ms)  BEGIN
  User Exists? (0.9ms)  SELECT 1 AS one FROM "users" WHERE "users"."username" = $1 LIMIT $2  [["username", "cdask"], ["LIMIT", 1]]
  User Create (1.0ms)  INSERT INTO "users" ("password_digest", "username", "email", "created_at", "updated_at") VALUES ($1, $2, $3, $4, $5) RETURNING "id"  [["password_digest", "$2a$12$ilMKAgAQA1tzTehjVMth6uCn0Hpaaw3nPGoyw6gdTTbVyEFBfCSYS"], ["username", "cdask"], ["email", "daniel@mail.com"], ["created_at", "2021-07-04 05:00:25.661510"], ["updated_at", "2021-07-04 05:00:25.661510"]]
  TRANSACTION (4.7ms)  COMMIT
=> #<User id: 1, password_digest: [FILTERED], username: "cdask", email: "daniel@mail.com", created_at: "2021-07-04 05:00:25.661510000 +0000", updated_at: "2021-07-04 05:00:25.661510000 +0000">
irb(main):002:0> User.all
  User Load (0.3ms)  SELECT "users".* FROM "users" /* loading for inspect */ LIMIT $1  [["LIMIT", 11]]
=> #<ActiveRecord::Relation [#<User id: 1, password_digest: [FILTERED], username: "cdask", email: "daniel@mail.com", created_at: "2021-07-04 05:00:25.661510000 +0000", updated_at: "2021-07-04 05:00:25.661510000 +0000">]>
irb(main):003:0> u.authenticate('password')
=> #<User id: 1, password_digest: [FILTERED], username: "cdask", email: "daniel@mail.com", created_at: "2021-07-04 05:00:25.661510000 +0000", updated_at: "2021-07-04 05:00:25.661510000 +0000">
irb(main):004:0> u.authenticate('passw')
=> false
irb(main):005:0> u.authenticate('password')
=> #<User id: 1, password_digest: [FILTERED], username: "cdask", email: "daniel@mail.com", created_at: "2021-07-04 05:00:25.661510000 +0000", updated_at: "2021-07-04 05:00:25.661510000 +0000">
```


```

rails secret

bundle exec rake secret


```
