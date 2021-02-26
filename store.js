var shop = [
{
    title: 'Dog',
    image: './assets/Purina.jpg',
    price: '19.99',
    description: "Purina Pro Plan Adult Sensitive Skin & Stomach Salmon & Rice Formula Dry Dog Food"
  },
{
    title: 'Cat',
    image: './assets/Fancy Feast.jpg',
    price: '16.79',
    description: "<br>Fancy Feast Gravy Lovers Poultry & Beef Feast Variety Pack Canned Cat Food"
  },
{
    title: 'Dog',
    image: './assets/American Journey.jpg',
    price: '14.49',
    description: "<br>American Journey Salmon & Sweet Potato Recipe Grain-Free Dry Dog Food"
  },
{
    title: 'Dog',
    image: './assets/ChuckIt.jpg',
    price: '5.01',
    description: "<br>Chuckit! Ultra Rubber Ball Tough Dog Toy"
  },
{
    title: 'Dog',
    image: './assets/Frisco.jpg',
    price: '15.00',
    description: "<br>Frisco Basic Dog Ball 3-pk Assorted Colors"
  },
{
    title: 'Cat',
    image: './assets/Mice Toy.jpg',
    price: '2.98',
    description: "<br>Frisco Basic Plush Mice Cat Toy with Catnip"
  },
{
    title: 'Dog',
    image: './assets/Best Friends Bed.jpg',
    price: '34.95',
    description: "Best Friends by Sheri The Original Calming Shag Fur Donut Cuddler Cat & Dog Bed"
  },
{
    title: 'Cat',
    image: './assets/Firsco Cat Tree.jpg',
    price: '22.99',
    description: "<br><br>Frisco 20-in Faux Fur Cat Tree"
  },
{
    title: 'Dog',
    image: './assets/BurtsShampoo.jpg',
    price: '6.83',
    description: "<br>Burt's Bees Tearless Puppy Shampoo with Buttermilk for Dogs, 16-oz bottle"
  },


  ];
  var postHTML = ""
  for (var i=0; i < shop.length; i++){

  var container = '<div class="container col-lg-4">'
  var heading = '<div class=" mb-3 text-center"><div class="card mb-4 shadow-sm" style="border: 5px solid black;"> ' + '<div class="card-header"><h4 class="my-0 fw-normal '+ '"> ' + shop[i].title + '</h4></div>';

  var price = '<div class="card-body"><h1 class="card-title pricing-card-title' + '">$' + shop[i].price + '</h1>';
  var image = '<ul class="list-unstyled mt-3 mb-4 ' + '"> <ul class="list-unstyled mt-3 mb-4"> <img src="' + shop[i].image + '"style="" alt="Product">';

  var description = '<li> ' + shop[i].description + '</li></ul><button type="button" class="w-100 btn btn-lg btn-outline-dark">Add to cart</button></div></div></div></div></div>'         
  var concatThis = container + heading + image + price + description;
      postHTML = postHTML + concatThis            
  }
  document.getElementById('market').innerHTML = postHTML          
              