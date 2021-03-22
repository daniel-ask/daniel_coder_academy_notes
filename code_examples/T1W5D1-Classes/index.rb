require_relative('movie')

the_shining = Movie.new('The Shining','Stanley Kubrick')
puts Movie.number_of_movies
lord_of_the_rings = Movie.new('Lord of the Rings','Peter Jackson')

the_shining.add_actor(dob: '22/04/1937',name: 'Jack Nicholson')
the_shining.print_movie
# puts the_shining.number_of_movies
# puts Movie?g.number_of_movies

# p "This movie #{the_shining}"