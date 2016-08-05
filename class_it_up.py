class Ice_Cream():

	def __init__(self, flavor, color, topping, popular):
		self.flavor = flavor
		self.color = color
		self.topping = topping
		self.popular = popular

	def is_popular(self):
		if self.flavor == "Coffee" and self.popular == True:
			print("Pick me!!!")
		else:
			print("This isn't the best suflavor")

	def new_toppings(self, toppings):
		self.topping = toppings

	def serve(self):
		print("Your ice cream is ready")


vanilla = Ice_Cream("Vanilla", "white", "caramel", True)
chocolate = Ice_Cream("Chocolate", "brown", "whip cream", False)
coffee = Ice_Cream("Coffee", "light brown", "nothing", True)

ice_creams = []
ice_creams.append(vanilla)
ice_creams.append(chocolate)
ice_creams.append(coffee)

for kind in ice_creams:
	print(kind.flavor)
	print(kind.color)
	kind.new_toppings("sprinkles")
	print(kind.topping)
	kind.serve()
	kind.is_popular()



# Ice cream comes in different flavors, colors, toppings, and is it popular?
# If the ice cream flavor is popular it'll say "Pick me!!!"
# The original toppings will all change to sprinkles
# When the ice cream is served it'll say "Your ice cream is ready"