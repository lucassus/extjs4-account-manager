require 'ffaker'

User.delete_all

User.create!(:first_name => "Dart", :last_name => "Vader", :email => "vader@deathstar.net")
User.create!(:first_name => "Luke", :last_name => "Skywalker", :email => "luke@rebel.org")
User.create!(:first_name => "William", :last_name => "Adama", :email => "adama@galactica.battlestar.org")

50.times do
  User.create!(:first_name => Faker::Name.first_name, :last_name => Faker::Name.last_name, :email => Faker::Internet.email)
end
