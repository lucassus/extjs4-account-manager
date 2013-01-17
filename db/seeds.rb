User.create!(:first_name => "Dart", :last_name => "Vader", :email => "vader@deathstar.net")
User.create!(:first_name => "Luke", :last_name => "Skywalker", :email => "luke@rebel.org")
User.create!(:first_name => "William", :last_name => "Adama", :email => "adama@galactica.battlestar.org")

50.times do |n|
  User.create!(:first_name => "User #{n}", :last_name => "Last", :email => "user_#{n}@email.com")
end
