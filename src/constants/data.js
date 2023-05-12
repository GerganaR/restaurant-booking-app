import images from "./images";

const wines = [
  {
    title: "Chapel Hill Shiraz",
    price: "$56",
    tags: "AU | Bottle",
  },
  {
    title: "Catena Malbee",
    price: "$59",
    tags: "AU | Bottle",
  },
  {
    title: "La Vieillw Rose",
    price: "$44",
    tags: "FR | 750 ml",
  },
  {
    title: "Rhino Pale Ale",
    price: "$31",
    tags: "CA | 750 ml",
  },
  {
    title: "Irish Guinness",
    price: "$26",
    tags: "IE | 750 ml",
  },
];

const cocktails = [
  {
    title: "Aperol Sprtiz",
    price: "$20",
    tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
  },
  {
    title: "Dark 'N' Stormy",
    price: "$16",
    tags: "Dark rum | Ginger beer | Slice of lime",
  },
  {
    title: "Daiquiri",
    price: "$10",
    tags: "Rum | Citrus juice | Sugar",
  },
  {
    title: "Old Fashioned",
    price: "$31",
    tags: "Bourbon | Brown sugar | Angostura Bitters",
  },
  {
    title: "Negroni",
    price: "$26",
    tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle: "The best restaurant in Sofia, Bulgaria.",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "The best new restaurant in Sofia, Bulgaria.",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "The best restaurant in Plovdiv, Bulgaria.",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "The best restaurant in Varna, Bulgaria.",
  },
];

const reservations = [
  {
    restaurant: "Restaurant A",
    name: "John Doe",
    phone: "555-555-5555",
    email: "johndoe@example.com",
    date: "2023-05-06",
    time: "18:30",
    guests: 4,
  },
  {
    restaurant: "Restaurant B",
    name: "Jane Smith",
    phone: "555-555-5555",
    email: "janesmith@example.com",
    date: "2023-05-07",
    time: "19:00",
    guests: 2,
  },
  {
    restaurant: "Restaurant C",
    name: "Bob Johnson",
    phone: "555-555-5555",
    email: "bobjohnson@example.com",
    date: "2023-05-08",
    time: "20:00",
    guests: 6,
  },
];
const menu = [
  {
    title: "Chicken Parmesan",
    image_url:
      "https://www.southernliving.com/thmb/rQaGDkAPGa_MeU4eglrAaeuexjg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/southern-living-chicken-parmesan-ddmfs-0047-fe218cb392784e79bfb4bb586685d6f9.jpg",
    ingredients: "Breaded chicken breast, tomato sauce, mozzarella cheese",
    grams: 200,
    price: 15.99,
    category: "Pasta",
  },

  {
    title: "Grilled Salmon",
    image_url:
      "https://www.feastingathome.com/wp-content/uploads/2022/08/Grilled-Salmon-9.jpg",
    ingredients: "Salmon fillet, lemon butter sauce, green beans",
    grams: 250,
    price: 18.99,
    category: "Fish",
  },
  {
    title: "Fish and Chips",
    image_url:
      "https://img.delicious.com.au/_UUs8RNd/w1200/del/2017/09/fish-and-chips-with-fish-salt-51673-1.jpg",
    ingredients: "Cod, Fish, Parsley, Sauce, Potatoes, Flour, Beer",
    grams: 400,
    price: 14.99,
    category: "Fish",
  },
  {
    title: "Pepperoni Pizza",
    image_url:
      "https://sipbitego.com/wp-content/uploads/2021/08/Closeup-shot-of-Pepperoni-Pizza-Recipe-Sip-Bite-Go.jpg",
    ingredients: "Pizza Dough, Tomato Sauce, Mozzarella Cheese, Pepperoni",
    grams: 450,
    price: 12.99,
    category: "Pizza",
  },
  {
    title: "Margherita Pizza",
    image_url:
      "https://www.finedininglovers.com/sites/g/files/xknfdk626/files/styles/recipes_1200_800_fallback/public/2020-09/margherita-50kalo.jpg?itok=SdLu8iHb",
    ingredients: "Pizza Dough, Tomato Sauce, Mozzarella Cheese, Fresh Basil",
    grams: 400,
    price: 11.99,
    category: "Pizza",
  },
  {
    title: "Hawaiian Pizza",
    image_url:
      "https://images.food52.com/BbtHyaS4UtF8fJVasV_uaYK_4WA=/fit-in/1200x1200/b68610b3-cc3e-4812-af2c-449c68c35273--2018-1127_ken-forkish-hawaiian-pizza-genius_3x2_rocky-luten_003_v2.jpg",
    ingredients: "Pizza Dough, Tomato Sauce, Mozzarella Cheese, Ham, Pineapple",
    grams: 450,
    price: 13.99,
    category: "Pizza",
  },

  {
    title: "Cheeseburger",
    image_url:
      "https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/wlczfrmv/edd3fdba-b77e-4acf-8959-34a7f164ed17.jpg",
    ingredients: "Beef Patty, Cheese, Lettuce, Tomato, Special Sauce",
    grams: 250,
    price: 9.99,
    category: "Burgers",
  },
  {
    title: "Bacon Cheeseburger",
    image_url:
      "https://peaktoplate.com/wp-content/uploads/2022/08/venison-mushroom-swiss-burger-up-close.jpg",
    ingredients:
      "Beef Patty, Bacon, Cheddar Cheese, Lettuce, Tomato, Onion, Pickles, Special Sauce",
    grams: 300,
    price: 11.99,
    category: "Burgers",
  },
  {
    title: "Mushroom Swiss Burger",
    image_url:
      "https://www.mythreeseasons.com/wp-content/uploads/2021/08/mushroom-swiss-burger-1200px-wide-7.jpg",
    ingredients: "Beef Patty, Swiss Cheese, Mushrooms, Special Sauce",
    grams: 280,
    price: 10.99,
    category: "Burgers",
  },

  {
    title: "Veggie Burger",
    image_url:
      "https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3326,w_4989,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1200/shutterstock_267497981_cxngzb.jpg",
    ingredients: "Veggie Patty, Pickles, Tomato, Onion, Special Sauce",
    grams: 200,
    price: 8.99,
    category: "Burgers",
  },

  {
    title: "Spaghetti Bolognese",
    image_url:
      "https://tesali.pl/images//menu/na-strone-spaghetti-bolognese.jpg",
    ingredients: "Spaghetti,Ground Beef,Tomato Sauce,Parmesan Cheese",

    grams: 400,
    price: 11.99,
    category: "Pasta",
  },
  {
    title: "Fettuccine Alfredo",
    image_url:
      "https://cdn.shopify.com/s/files/1/1229/8312/articles/Fettuccine-Alfredo-Recipe-1_4bb02222-e716-4f75-98b0-839951c77f37_1200x1200.jpg?v=1547680895",
    ingredients: "Fettuccine, Heavy Cream, Cheese, Butter, Garlic,",
    grams: 350,
    price: 11.99,
    category: "Pasta",
  },
  {
    title: "Penne Arrabiata",
    image_url:
      "https://www.askchefdennis.com/wp-content/uploads/2022/09/penne-arrabiata-close-up-10.jpg",
    ingredients: "Penne, Tomato Sauce, Chili Flakes, Garlic, Parsley",
    grams: 400,
    price: 10.99,
    category: "Pasta",
  },
  {
    title: "Fish Tacos",
    image_url:
      "https://img.delicious.com.au/LeZXE94-/w1200/del/2019/11/fish-tacos-with-charred-tomato-salsa-119830-2.jpg",
    ingredients: "Mahi Mahi, Cabbage Slaw, Avocado Crema, Cilantro",
    grams: 200,
    price: 11.99,
    category: "Fish",
  },
  {
    title: "Steak Salad",
    image_url:
      "https://muybuenocookbook.com/wp-content/uploads/2023/02/carne-asada-salad.jpeg",
    ingredients: "Mixed Greens, Grilled Steak, Croutons, Balsamic Vinaigrette",
    grams: 350,
    price: 15.99,
    category: "Salads",
  },
  {
    title: "Caesar Salad",
    image_url:
      "https://www.culinaryhill.com/wp-content/uploads/2021/04/Caesar-Salad-Culinary-Hill-1200x800-1.jpg",
    ingredients: "Romaine Lettuce, Parmesan Cheese, Croutons, Caesar Dressing",
    grams: 300,
    price: 10.99,
    category: "Salads",
  },
  {
    title: "Greek Salad",
    image_url:
      "https://www.recipesfromeurope.com/wp-content/uploads/2022/12/greek-salad-og.jpg",
    ingredients: "Lettuce, Tomatoes, Cucumber, Red Onion, Greek Dressing",
    grams: 350,
    price: 12.99,
    category: "Salads",
  },
  {
    title: "Cobb Salad",
    image_url:
      "https://www.thegunnysack.com/wp-content/uploads/2022/03/Cobb-Salad-Toppings-Tray.jpg",
    ingredients: "Greens, Grilled Chicken, Avocado, Bacon, Egg, Cherry",
    grams: 400,
    price: 13.99,
    category: "Salads",
  },
];

export default { wines, cocktails, awards, reservations, menu };
