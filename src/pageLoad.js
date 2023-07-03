export function loadHomePage() {
  const contentDiv = document.getElementById('content');

  const restaurantImage = document.createElement('img');
  restaurantImage.src = '../src/brooke-lark.jpg';
  restaurantImage.alt = 'Restaurant Image';
  restaurantImage.classList.add('restaurant-image');
  contentDiv.appendChild(restaurantImage);

  const headline = document.createElement('h1');
  headline.classList.add('headline');
  headline.textContent = 'Welcome to Our Wonderful Restaurant!';
  contentDiv.appendChild(headline);

  const copy = document.createElement('p');
  copy.classList.add('copy');
  copy.textContent =
    "Discover a culinary journey like no other. Our restaurant offers a delightful blend of flavors, textures, and aromas, carefully crafted by our talented chefs. With a focus on fresh, locally-sourced ingredients, we take pride in serving you exceptional dishes that will tantalize your taste buds. Whether you're looking for a romantic dinner, a family gathering, or a casual dining experience, we have something for everyone. Come and join us for an unforgettable dining experience!";
  contentDiv.appendChild(copy);
}
