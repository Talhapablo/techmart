

export async function getProducts() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products`
  );

  const products = await res.json();

  return products;
}

export async function getProduct(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`
  );

  const product = await res.json();

  return product;
}

export async function getCategories() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/categories`
  );

  const categories = await res.json();

  return categories;
}