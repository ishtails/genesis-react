import Icon from "@/lib/components/custom/Icon";
import { Button } from "@/lib/components/ui/button";
import { Input } from "@/lib/components/ui/input";
import { cn } from "@/lib/utils/style";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
}

const sampleProducts: Product[] = [
  { id: "1", name: "Apple", price: 100 },
  { id: "2", name: "Banana", price: 200 },
  { id: "3", name: "Cherry", price: 300 },
  { id: "4", name: "Date", price: 400 },
  { id: "5", name: "Elderberry", price: 500 },
  { id: "6", name: "Fig", price: 600 },
  { id: "7", name: "Grape", price: 700 },
  { id: "8", name: "Honeydew", price: 800 },
  { id: "9", name: "Kiwi", price: 900 },
  { id: "10", name: "Lemon", price: 1000 },
];

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<Product[]>(sampleProducts);

  return <div className="flex flex-col gap-2 max-w-sm mx-auto mt-10 p-4 border rounded-sm">
    <h1 className="text-2xl font-bold">Shop</h1>
    <p className="text-sm text-muted-foreground">Welcome to the shop! Here you can find all the products we have to offer.</p>
    <form className="relative mt-2" onSubmit={(e) => {
      e.preventDefault();
      setProducts(sampleProducts.filter((product) => product.name.toLowerCase().includes(search.toLowerCase())));
    }}>
      <Icon name="Search" className={cn(
        "absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground size-4",
      )} />
      <Input placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} className={cn(
        "pl-8"
      )} />
      <button className={cn(
        "absolute right-2 top-1/2 -translate-y-1/2",
        search.length > 0 && "text-primary"
      )}
        disabled={search.length === 0}
        type="submit"
      >
        <Icon name="SendHorizontal" className={cn(
          "text-muted-foreground size-4",
          search.length > 0 && "text-primary"
        )} />
      </button>
    </form>

    <div className="mt-2">
      {products.length > 0 ? (
        <div className="flex flex-col gap-2 border bg-secondary p-4 rounded-sm mt-2">
          {products.map((product) => (
            <div key={product.id} className="flex justify-between items-center gap-2">
              <div className="flex flex-col gap-1">
                <h2 className="text-sm font-medium">{product.name}</h2>
                <p className="text-xs text-muted-foreground">{product.price}</p>
              </div>
              <Button variant="outline" size="icon">
                <Icon name="ShoppingBag" className="size-4" />
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">No products found. Try searching for something else.</p>
      )}
    </div>
  </div>;
}