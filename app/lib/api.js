export async function getProducts() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/products`;

  console.log("URL:", url);

  const res = await fetch(url, {
    cache: "no-store",
  });

  console.log("Status:", res.status);

  const text = await res.text();
  console.log("Response:", text);

  if (!res.ok) {
    throw new Error(`Failed to fetch products (${res.status})`);
  }

  return JSON.parse(text);
}

export async function getProduct(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return await res.json();
}

export async function getCategories() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/categories`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();

  console.log("Categories API:", data);

  return data;
}