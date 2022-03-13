import path from "path";
import fs from "fs/promises";

export default function Home(props) {
  const { products } = props;
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const filePathName = path.join(process.cwd(), "data", "dummy-data.json");
  const jsonfile = await fs.readFile(filePathName);
  const jsonobject = JSON.parse(jsonfile);

  return {
    props: {
      products: jsonobject.products,
    },
  };
}
