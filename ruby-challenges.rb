# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# use select to select the words in the array containing the letter
def selector(array, string)
    array.select {|value| value.include?(string.downcase)}
end
puts selector(beverages_array, letter_t)

# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

# create a method with a local variable that holds the sum and uses an each loop to iterate through the array and add the numbers

def add_nums array
    num_sum = 0
    array.each do |value|
        num_sum += value
    end
    return num_sum
end

p add_nums nums_array1
p add_nums nums_array2


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
    def initialize (model, wheels = 2)
        @model = model
        @wheels = wheels
        @speed = 0
    end
#create a method that returns info
    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@speed} mph."
    end
#create a method that increases speed by given amount
    def pedal_faster int
        @speed += int
    end

#create a method that slows the bike down to a value not less than 0
    def brake int
        @speed -= int
        @speed = 0 if @speed < 0
    end
end

my_bike = Bike.new("Giant")
my_bike.pedal_faster 12
my_bike.brake 20
p my_bike.bike_info
# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
