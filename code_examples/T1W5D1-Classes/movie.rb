class Movie
  # Just Getter or Accessor
  attr_reader :actors
  # Just Setter or Mutator
  # Both Setter and Getter
  attr_accessor :title, :director
  class << self
    attr_accessor :number_of_movies
  end

  Movie.number_of_movies = 0
  
  def initialize(title,director)
    @title = title
    @director = director
    @actors = []
    Movie.number_of_movies += 1
  end

  def print_movie
    puts "The Movie title is: #{@title}"
    puts "The Movie director is: #{@director}"
    puts "The actors in this movie is:"
    @actors.each do |name|
      puts name
    end
  end

  def to_s
    "Title: #{@title}\nDirector: #{@director}"
  end

  def add_actor(name:, dob:)
    @actors << {name: name, date_of_bith: dob}
  end
  
end