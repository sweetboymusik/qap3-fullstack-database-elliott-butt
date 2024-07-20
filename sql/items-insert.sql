INSERT INTO public.items 
	(item_name, price, category, description, image_url)
VALUES
	-- Fruits
	('Apples', 2.99, 1, 'Fresh and crisp apples.', 'apples.jpg'),
	('Bananas', 1.29, 1, 'Ripe and sweet bananas.', 'bananas.jpg'),
	('Oranges', 3.49, 1, 'Juicy and tangy oranges.', 'oranges.jpg'),
	('Grapes', 2.99, 1, 'Seedless green grapes.', 'grapes.jpg'),
	('Strawberries', 4.99, 1, 'Fresh strawberries.', 'strawberries.jpg'),

	-- Vegetables
	('Broccoli', 1.99, 2, 'Fresh green broccoli.', 'broccoli.jpg'),
	('Carrots', 1.49, 2, 'Crunchy orange carrots.', 'carrots.jpg'),
	('Spinach', 2.49, 2, 'Fresh spinach leaves.', 'spinach.jpg'),
	('Tomatoes', 3.29, 2, 'Ripe red tomatoes.', 'tomatoes.jpg'),
	('Cucumbers', 1.79, 2, 'Fresh cucumbers.', 'cucumbers.jpg'),

	-- Dairy
	('Milk', 2.79, 3, '1 gallon of whole milk.', 'milk.jpg'),
	('Cheddar Cheese', 3.99, 3, 'Sharp cheddar cheese.', 'cheddar_cheese.jpg'),
	('Yogurt', 2.99, 3, 'Plain Greek yogurt.', 'yogurt.jpg'),
	('Butter', 3.49, 3, 'Unsalted butter.', 'butter.jpg'),
	('Eggs', 2.49, 3, 'A dozen large eggs.', 'eggs.jpg'),

	-- Beverages
	('Coca-Cola', 1.99, 4, 'Refreshing Coca-Cola.', 'coca_cola.jpg'),
	('Orange Juice', 3.99, 4, 'Freshly squeezed orange juice.', 'orange_juice.jpg'),
	('Coffee', 4.99, 4, 'Ground coffee beans.', 'coffee.jpg'),
	('Tea', 3.29, 4, 'Assorted tea bags.', 'tea.jpg'),
	('Mineral Water', 1.49, 4, 'Sparkling mineral water.', 'mineral_water.jpg'),

	-- Meat
	('Chicken Breast', 7.99, 5, 'Boneless, skinless chicken breast.', 'chicken_breast.jpg'),
	('Ground Beef', 5.49, 5, 'Lean ground beef.', 'ground_beef.jpg'),
	('Pork Chops', 6.99, 5, 'Thick-cut pork chops.', 'pork_chops.jpg'),
	('Salmon Fillet', 9.99, 5, 'Fresh salmon fillet.', 'salmon_fillet.jpg'),
	('Bacon', 4.99, 5, 'Crispy bacon strips.', 'bacon.jpg'),

	-- Bakery
	('Whole Wheat Bread', 2.49, 6, 'Whole wheat sandwich bread.', 'whole_wheat_bread.jpg'),
	('Bagels', 3.49, 6, 'Freshly baked bagels.', 'bagels.jpg'),
	('Croissants', 4.99, 6, 'Buttery croissants.', 'croissants.jpg'),
	('Muffins', 3.99, 6, 'Assorted muffins.', 'muffins.jpg'),
	('Baguette', 2.99, 6, 'Classic French baguette.', 'baguette.jpg');
